import AppLayout from "@/Layouts/AppLayout";

export default function CheckoutPage({ orderItems }) {
  console.log("orderItems: ", orderItems);
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
                    className="w-full p-2 border border-gray-300 rounded my-1"
                    placeholder="Email Address"
                    required
                  />
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
                      className="w-full p-2 border border-gray-300 rounded my-1"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="last_name">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      className="w-full p-2 border border-gray-300 rounded my-1"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4 text-slate-200 flex flex-col">
                  <label htmlFor="phone_number">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    className="w-full p-2 border border-gray-300 rounded my-1"
                    placeholder="Phone Number"
                    required
                  />
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
                  />
                </div>
                <div className="mb-4 text-slate-200 flex flex-col">
                  <label htmlFor="zip_code">
                    Zip Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="zip_code"
                    name="zip_code"
                    className="w-full p-2 border border-gray-300 rounded my-1"
                    placeholder="Zip Code"
                    required
                  />
                </div>
                <div className="mb-4 text-slate-200 flex flex-col">
                  <label htmlFor="city">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full p-2 border border-gray-300 rounded my-1"
                    placeholder="City"
                    required
                  />
                </div>
                <div className="mb-4 text-slate-200 flex flex-col">
                  <label htmlFor="country">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className="w-full p-2 border border-gray-300 rounded my-1"
                    placeholder="Country"
                    required
                  />
                </div>
                <div className="mb-4 text-slate-200 flex flex-col">
                  <label htmlFor="province">
                    Province <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="province"
                    name="province"
                    className="w-full p-2 border border-gray-300 rounded my-1"
                    placeholder="Province"
                    required
                  />
                </div>
                <div className="mb-4 text-slate-200 flex flex-col">
                  <label htmlFor="remark">Order Notes </label>
                  <textarea
                    id="remark"
                    name="remark"
                    className="resize-none rounded text-slate-800"
                    rows={6}
                  />
                </div>
              </div>
            </div>
            <div className="w-full border border-red-500 my-4 md:my-0 mx-auto flex flex-col"></div>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}
