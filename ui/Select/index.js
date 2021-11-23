import React from "react";

const styles = {
  disabled: "disabled:bg-gray-200 text-gray-500",
};

const Select = React.forwardRef(
  (
    {
      className = "",
      options,
      label,
      value,
      name,
      errors,
      variant,
      disabled,
      onChange,
      onBlur,
    },
    ref
  ) => {
    return (
      <>
        <label
          className="font-medium text-gray-500 pb-2"
          variant={variant}
          htmlFor={label}
        >
          {label}
        </label>
        <select
          className={`w-full px-2 py-1 text-gray-700 border-2 bg-white shadow-sm border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 ${
            disabled && styles.disabled
          } ${
            errors &&
            errors?.message &&
            "border-red-300 focus:ring-red-400 focus:border-transparent"
          } ${className}`}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          name={name}
          value={value || undefined}
        >
          <option hidden value="">
            Seleccione una opción
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* <p className="text-sm font-semibold text-red-500">
          {errors && errors?.message}
        </p> */}
      </>
    );
  }
);

Select.displayName = "Select";

export default Select;
