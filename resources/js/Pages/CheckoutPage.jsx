import BillingDetailsForm from "@/Components/BillingDetailsForm";
import Cart from "@/Components/Cart";
import AppLayout from "@/Layouts/AppLayout";
import { router, useForm } from "@inertiajs/react";
import axios from "axios";
import React, { useCallback, useEffect, useRef } from "react";
import { FaPaypal, FaStripe } from "react-icons/fa";
import { useCart } from "react-use-cart";

const CheckoutPage = ({ orderItems }) => {
  const { data, setData, errors, clearErrors, processing } = useForm({
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    address: "",
    country: "Indonesia",
    province: "",
    city: "",
    zip_code: "",
    remark: "",
    orderItems: orderItems || [],
    payment_method: "",
    totalAmount: 0,
  });
  const { emptyCart, cartTotal } = useCart();
  const countryOptions = useRef([]);
  const cityOptions = useRef([]);
  const provinceOptions = useRef([]);
  const countryDialCode = useRef("");

  // Fetch country list from API
  useEffect(() => {
    const fetchCountryList = async () => {
      try {
        const response = await axios.get(
          "https://countriesnow.space/api/v0.1/countries/iso"
        );
        const data = response.data.data;
        const options = data.map((country) => ({
          value: country.name,
          label: country.name,
        }));
        countryOptions.current = options;
      } catch (error) {
        console.error(
          "There was an error when fetching countries data: ",
          error
        );
      }
    };

    fetchCountryList();
  }, []);

  // Fetch cities, province, and dial_code based on country value
  useEffect(() => {
    if (!data.country) return;

    const fetchLocationData = async () => {
      try {
        const [cityResponse, provinceResponse, dialCodeResponse] =
          await Promise.all([
            axios.post("https://countriesnow.space/api/v0.1/countries/cities", {
              country: data.country,
            }),
            axios.post("https://countriesnow.space/api/v0.1/countries/states", {
              country: data.country,
            }),
            axios.post("https://countriesnow.space/api/v0.1/countries/codes", {
              country: data.country,
            }),
          ]);

        cityOptions.current = cityResponse.data.data.map((city) => ({
          value: city,
          label: city,
        }));

        provinceOptions.current = provinceResponse.data.data.states.map(
          (province) => ({
            value: province.name,
            label: province.name,
          })
        );

        countryDialCode.current = dialCodeResponse.data.data.dial_code;
      } catch (error) {
        console.error(
          "There was an error when fetching location data: ",
          error
        );
      }
    };

    fetchLocationData();
  }, [data.country]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      ...data,
      phone_number: countryDialCode.current + data.phone_number,
      orderItems: orderItems,
      totalAmount: cartTotal,
    };

    const response = router.post(route("checkout.order"), formData, {
      forceFormData: true,
      onError: (errors) => {
        console.log(errors);
      },
    });

    // console.log("response: ", response);
    // if (data.payment_method === "paypal") {
    //   router.post(route("paypal.payment"), { total: cartTotal });
    // } else if (data.payment_method === "stripe") {
    //   router.post(route("stripe.payment"), { total: cartTotal });
    // }

    // empty the cart
    emptyCart();
  };

  const handleChange = useCallback(
    (e) => {
      const { id, value } = e.target;
      clearErrors();
      setData(id, value);
    },
    [clearErrors, setData]
  );

  const handleSelectChange = useCallback(
    (field, selected) => {
      clearErrors();
      setData(field, selected ? selected.value : "");
    },
    [clearErrors, setData]
  );

  return (
    <AppLayout>
      <div className="flex flex-col w-[90%] mx-auto my-16">
        <div className="flex items-center justify-center mb-10">
          <h3 className="text-slate-200 text-3xl font-quicksand tracking-widest">
            Checkout
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Billing Details Form */}
            <BillingDetailsForm
              data={data}
              errors={errors}
              handleChange={handleChange}
              handleSelectChange={handleSelectChange}
              countryOptions={countryOptions.current}
              cityOptions={cityOptions.current}
              provinceOptions={provinceOptions.current}
              countryDialCode={countryDialCode.current}
            />
            {/* Cart Summary */}
            <div className="w-full border border-red-500 my-4 md:my-0 mx-auto flex flex-col justify-start items-center">
              <div className="mt-2 p-4 w-full flex flex-col justify-center items-center">
                <h3 className="text-white font-quicksand text-xl">
                  Your Orders
                </h3>
                <div className="border border-blue-500 w-full">
                  <Cart proceedToCheckout={true} />
                </div>
                <div className="w-full p-4">
                  <ul>
                    <li className="flex gap-2 items-center">
                      <input
                        type="radio"
                        id="payment_method"
                        name="payment_method"
                        onChange={handleChange}
                        value={"paypal"}
                      />
                      <label
                        htmlFor="payment_method"
                        className="flex gap-1 items-center justify-start text-slate-200"
                      >
                        <FaPaypal color="blue" />
                        Paypal
                      </label>
                    </li>
                    <li className="flex gap-2 items-center">
                      <input
                        type="radio"
                        id="payment_method"
                        name="payment_method"
                        onChange={handleChange}
                        value={"stripe"}
                      />
                      <label
                        htmlFor="payment_method"
                        className="flex gap-1 items-center justify-start text-slate-200"
                      >
                        <FaStripe color="blue" />
                        Stripe
                      </label>
                    </li>
                  </ul>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-orange-400 hover:bg-orange-600 py-2 px-4 my-5 rounded text-white"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </AppLayout>
  );
};

export default React.memo(CheckoutPage);
