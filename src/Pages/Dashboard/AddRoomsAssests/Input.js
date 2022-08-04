import React from "react";

const Input = ({ label, name, type, placeholder }) => {
  return (
    <label class="input-group input-group-vertical">
      <span className="text-xl">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        class="input input-bordered text-lg"
      />
    </label>
  );
};

export default Input;
