import React from "react";
import Select from "react-select";

const BillingDetailsForm = React.memo(
  ({
    data,
    errors,
    handleChange,
    handleSelectChange,
    countryOptions,
    cityOptions,
    provinceOptions,
    countryDialCode,
  }) => {
    return (
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
                <span className="text-red-500 text-sm">{errors.last_name}</span>
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
              onChange={(selected) => handleSelectChange("country", selected)}
              value={countryOptions.find(
                (option) => option.value === data.country
              )}
            />
            {errors.country && (
              <span className="text-red-500 text-sm">{errors.country}</span>
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
              onChange={(selected) => handleSelectChange("province", selected)}
              value={provinceOptions.find(
                (option) => option.value === data.province
              )}
            />
            {errors.province && (
              <span className="text-red-500 text-sm">{errors.province}</span>
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
              onChange={(selected) => handleSelectChange("city", selected)}
              value={cityOptions.find((option) => option.value === data.city)}
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
              <span className="text-red-500 text-sm">{errors.zip_code}</span>
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
              <span className="text-red-500 text-sm">{errors.address}</span>
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
              <span className="text-red-500 text-sm">{errors.remark}</span>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default BillingDetailsForm;
