import React from "react";

const AddRoom = () => {
  return (
    <div>
      <h3>Add room here</h3>
      <form className="form-control">
        <label class="input-group input-group-vertical">
          <span className="text-xl">Hotel name</span>
          <input
            type="text"
            placeholder="hotel name"
            class="input input-bordered"
          />
        </label>
        <div className="grid grid-cols-3 gap-3 mt-3">
          <label class="input-group input-group-vertical">
            <span className="text-xl">Division</span>
            <input
              type="text"
              name="division"
              placeholder="division"
              class="input input-bordered"
            />
          </label>
          <label class="input-group input-group-vertical">
            <span className="text-xl">District</span>
            <input
              type="text"
              name="district"
              placeholder="district"
              class="input input-bordered"
            />
          </label>
          <label class="input-group input-group-vertical">
            <span className="text-xl">Upazila</span>
            <input
              type="text"
              name="upazila"
              placeholder="upazila"
              class="input input-bordered"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default AddRoom;
