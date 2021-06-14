import React from 'react';

// eslint-disable-next-line react/prop-types
function FormInput({ label, name, type, value = {}, setValue }) {
  const handleChange = (event) => {
    setValue({
      ...value,
      [name]: event.target.value,
    });
  };

  return (
    <label htmlFor={name}>
      <span>{label}:</span>
      <input
        type={type}
        name={name}
        id={name}
        value={value[name]} // value.email, value.password...
        onChange={handleChange}
      />
    </label>
  );
}

export default FormInput;
