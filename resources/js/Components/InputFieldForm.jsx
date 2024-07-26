import { Datepicker, Label, Select, TextInput, Textarea } from "flowbite-react";

const inputType = {
  InputText: "InputText",
  InputTextArea: "InputTextArea",
  InputSelect: "InputSelect",
  InputDatePicker: "InputDate",
  InputNumber: "InputNumber",
};
export default function InputFieldForm({
  id,
  name,
  label,
  errorMsg,
  formInputType,
  value = "",
  onChange,
  ...props
}) {
  return (
    <>
      <Label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </Label>

      {formInputType === inputType.InputText && (
        <TextInput
          name={name}
          id={id}
          placeholder={label}
          type="text"
          onChange={(e) => onChange(e, { id })}
          value={value}
          {...props}
        />
      )}

      {formInputType === inputType.InputNumber && (
        <TextInput
          name={name}
          id={id}
          placeholder={label}
          type="number"
          onChange={(e) => onChange(e, { id })}
          value={value}
          {...props}
        />
      )}

      {formInputType === inputType.InputTextArea && (
        <Textarea
          name={name}
          id={id}
          placeholder={label}
          onChange={(e) => onChange(e, { id })}
          value={value}
          {...props}
        />
      )}

      {formInputType === inputType.InputDatePicker && (
        <Datepicker
          id={id}
          name={name}
          onSelectedDateChanged={onChange}
          {...props}
        />
      )}

      {formInputType === inputType.InputSelect && (
        <Select
          id={id}
          name={name}
          onChange={(e) => onChange(e, { id })}
          value={value}
          {...props}
        >
          <option value="">Pilih Kategori</option>
          {props.options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </Select>
      )}

      {errorMsg && <p className="text-sm text-red-600 ">{errorMsg}</p>}
    </>
  );
}
