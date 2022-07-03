import React from "react";

const Input = ({ name, type }) => {
  return (
    <label class="input-group input-group-vertical">
      <span className="text-xl">{name}</span>
      <input
        type={type}
        name={name}
        placeholder={name}
        class="input input-bordered text-lg"
      />
    </label>
  );
};

export default Input;
