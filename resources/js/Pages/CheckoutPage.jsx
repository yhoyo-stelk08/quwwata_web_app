import Cart from "@/Components/Cart";
import AppLayout from "@/Layouts/AppLayout";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";

export default function CheckoutPage({ orderItems }) {
  console.log("orderItems: ", orderItems);

  const { data, setData, post, errors, clearErrors, processing } = useForm({
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
  });

  const [countryOptions, setCountryOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [provinceOptions, setProvinceOptions] = useState([]);
  const [countryDialCode, setCountryDialCode] = useState([]);

  // fetch country list from API
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
        setCountryOptions(options);
      } catch (error) {
        console.error(
          "There was an error when fetching countries data: ",
          error
        );
      }
    };

    fetchCountryList();
  }, []);

  // fetch cities, province and dial_code based on country value
  useEffect(() => {
    const fetchCityList = async () => {
      try {
        const response = await axios.post(
          `https://countriesnow.space/api/v0.1/countries/cities`,
          {
            country: data.country,
          }
        );
        const cityData = response.data.data;
        const options = cityData.map((city) => ({
          value: city,
          label: city,
        }));
        setCityOptions(options);
      } catch (error) {
        console.error("There was an error when fetching cities data: ", error);
      }
    };

    const fetchProvinceList = async () => {
      try {
        const response = await axios.post(
          `https://countriesnow.space/api/v0.1/countries/states`,
          {
            country: data.country,
          }
        );
        const provinceData = response.data.data;
        const options = provinceData.states.map((province) => ({
          value: province.name,
          label: province.name,
        }));
        setProvinceOptions(options);
      } catch (error) {
        console.error(
          "There was an error when fetching provinces data: ",
          error
        );
      }
    };

    const fetchCountryDialCode = async () => {
      try {
        const response = await axios.post(
          `https://countriesnow.space/api/v0.1/countries/codes`,
          {
            country: data.country,
          }
        );
        const dialCodeData = response.data.data;
        setCountryDialCode(dialCodeData.dial_code);
      } catch (error) {
        console.error(
          "There was an error when fetching dial code data: ",
          error
        );
      }
    };

    if (data.country) {
      fetchCityList();
      fetchProvinceList();
      fetchCountryDialCode();
    }
  }, [data.country]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("phone_number", data.phone_number);
    formData.append("address", data.address);
    formData.append("country", data.country);
    formData.append("province", data.province);
    formData.append("city", data.city);
    formData.append("zip_code", data.zip_code);
    formData.append("remark", data.remark);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    clearErrors();
    setData(id, value);
  };

  return (
    <AppLayout>
      <div className="flex flex-col w-[90%] mx-auto my-16">
        <div className="flex items-center justify-center mb-10">
          <h3 className="text-slate-200 text-3xl font-quicksand tracking-widest">
            Checkout
          </h3>
        </div>
        <form>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Billing Details Form */}
            <div className="w-full mx-auto px-2 flex flex-col items-center bg-gradient-to-b from-slate-600 to-slate-800 rounded">
              {/* Header */}
              <div className="w-full py-2 my-2 flex items-center justify-center">
                <span className="text-slate-200 text-xl font-bold">
                  Billing Details
                </span>
              </div>
              {/* Form */}
              <div className="my-2 py-2 w-full">
                <div className="mb-4 text-slate-200">
                  <label htmlFor="email">
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded my-1 text-slate-900"
                    placeholder="Email Address"
                    required
                    value={data.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email}</span>
                  )}
                </div>
                <div className="mb-4 text-slate-200 grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="first_name">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      className="w-full p-2 border border-gray-300 rounded my-1 text-slate-900"
                      placeholder="First Name"
                      required
                      value={data.first_name}
                      onChange={handleChange}
                    />
                    {errors.first_name && (
                      <span className="text-red-500 text-sm">
                        {errors.first_name}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="last_name">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      className="w-full p-2 border border-gray-300 rounded my-1 text-slate-900"
                      placeholder="Last Name"
                      required
                      value={data.last_name}
                      onChange={handleChange}
                    />
                    {errors.last_name && (
                      <span className="text-red-500 text-sm">
                        {errors.last_name}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mb-4 text-slate-200 flex flex-col">
                  <label htmlFor="country">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <Select
                    options={countryOptions}
                    isClearable
                    isSearchable
                    className="text-slate-900"
                    id="country"
                    onChange={(selected) =>
                      setData("country", selected ? selected.value : "")
                    }
                    value={countryOptions.find(
                      (option) => option.value === data.country
                    )}
                  />
                  {errors.country && (
                    <span className="text-red-500 text-sm">
                      {errors.country}
                    </span>
                  )}
                </div>
                <div className="mb-4 text-slate-200 flex flex-col">
                  <label htmlFor="province">
                    Province <span className="text-red-500">*</span>
                  </label>
                  <Select
                    options={provinceOptions}
                    isClearable
                    isSearchable
                    id="province"
                    className="text-slate-900"
                    onChange={(selected) =>
                      setData("province", selected ? selected.value : "")
                    }
                    value={provinceOptions.find(
                      (option) => option.value === data.province
                    )}
                  />
                  {errors.province && (
                    <span className="text-red-500 text-sm">
                      {errors.province}
                    </span>
                  )}
                </div>
                <div className="mb-4 text-slate-200 flex flex-col">
                  <label htmlFor="city">
                    City <span className="text-red-500">*</span>
                  </label>
                  <Select
                    options={cityOptions}
                    isClearable
                    isSearchable
                    id="city"
                    className="text-slate-900"
                    onChange={(selected) =>
                      setData("city", selected ? selected.value : "")
                    }
                    value={cityOptions.find(
                      (option) => option.value === data.city
                    )}
                  />
                  {errors.city && (
                    <span className="text-red-500 text-sm">{errors.city}</span>
                  )}
                </div>
                <div className="mb-4 text-slate-200 flex flex-col">
                  <label htmlFor="zip_code">
                    Zip Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="zip_code"
                    name="zip_code"
                    className="w-full p-2 border border-gray-300 rounded my-1 text-slate-900"
                    placeholder="Zip Code"
                    required
                    value={data.zip_code}
                    onChange={handleChange}
                  />
                  {errors.zip_code && (
                    <span className="text-red-500 text-sm">
                      {errors.zip_code}
                    </span>
                  )}
                </div>
                <div className="mb-4 text-slate-200 flex flex-col">
                  <label htmlFor="phone_number">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="hidden"
                    name="country_dial_code"
                    id="country_dial_code"
                    value={countryDialCode}
                  />
                  <input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    className="w-full p-2 border border-gray-300 rounded my-1 text-slate-900"
                    placeholder="Phone Number Without Country Dial Code"
                    required
                    value={data.phone_number}
                    onChange={handleChange}
                  />
                  {errors.phone_number && (
                    <span className="text-red-500 text-sm">
                      {errors.phone_number}
                    </span>
                  )}
                </div>
                <div className="mb-4 text-slate-200 flex flex-col">
                  <label htmlFor="address">
                    Street Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    className="resize-none rounded text-slate-800"
                    rows={6}
                    required
                    value={data.address}
                    onChange={handleChange}
                  />
                  {errors.address && (
                    <span className="text-red-500 text-sm">
                      {errors.address}
                    </span>
                  )}
                </div>
                <div className="mb-4 text-slate-200 flex flex-col">
                  <label htmlFor="remark">Order Notes </label>
                  <textarea
                    id="remark"
                    name="remark"
                    className="resize-none rounded text-slate-800"
                    rows={6}
                    value={data.remark}
                    onChange={handleChange}
                  />
                  {errors.remark && (
                    <span className="text-red-500 text-sm">
                      {errors.remark}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full border border-red-500 my-4 md:my-0 mx-auto flex flex-col justify-center items-center">
              <div className="mt-2 p-4 w-full flex flex-col justify-center items-center">
                <h3 className="text-white font-quicksand text-xl">
                  Your Orders
                </h3>
                <div className="border border-blue-500 w-full">
                  <Cart proceedToCheckout={true} />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}
