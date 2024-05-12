import React, { useState } from 'react'

const Form_Input = ({type,placeholder,inputValue,setter}) => {
  return (
    <input
      type={type}
      value={inputValue}
      placeholder={placeholder}
      className="form-Input"
      onChange={(e) => setter(e.target.value)}
    />
  );
}

export default Form_Input