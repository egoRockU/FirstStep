import React from "react";

// First Name Input Component
const FirstNameInput = ({ value, onChange }) => (
  <div className="flex flex-col w-full">
    <h1 className="text-lg">First Name*</h1>
    <input
      type="text"
      name="fName"
      value={value}
      className="text-base border-2 border-[#444B88] p-2"
      onChange={onChange}
    />
  </div>
);

// Last Name Input Component
const LastNameInput = ({ value, onChange }) => (
  <div className="flex flex-col w-full">
    <h1 className="text-lg">Last Name*</h1>
    <input
      type="text"
      name="lName"
      value={value}
      className="text-base border-2 border-[#444B88] p-2"
      onChange={onChange}
    />
  </div>
);

// Email Input Component
const EmailInput = ({ value, onChange }) => (
  <div className="flex flex-col w-full">
    <h1 className="text-lg">Email Address*</h1>
    <input
      type="text"
      name="email"
      value={value}
      className="text-base border-2 border-[#444B88] p-2"
      onChange={onChange}
    />
  </div>
);

// Contact Number Input Component
const ContactNumberInput = ({ value, onChange }) => (
  <div className="flex flex-col w-full">
    <h1 className="text-lg">Contact Number*</h1>
    <input
      type="text"
      name="contactNum"
      value={value}
      className="text-base border-2 border-[#444B88] p-2"
      onChange={onChange}
    />
  </div>
);

// City Input Component
const CityInput = ({ value, onChange }) => (
  <div className="flex flex-col w-full">
    <h1 className="text-lg">City*</h1>
    <input
      type="text"
      name="city"
      value={value}
      className="text-base border-2 border-[#444B88] p-2"
      onChange={onChange}
    />
  </div>
);

// Country Input Component
const CountryInput = ({ value, onChange }) => (
  <div className="flex flex-col w-full">
    <h1 className="text-lg">Country/Region*</h1>
    <input
      type="text"
      name="country"
      value={value}
      className="text-base border-2 border-[#444B88] p-2"
      onChange={onChange}
    />
  </div>
);

// Bio Textarea Component
const BioTextarea = ({ value, onChange }) => (
  <div className="flex flex-col w-full">
    <h1 className="text-lg">Bio</h1>
    <textarea
      name="bio"
      value={value}
      className="text-base border-2 border-[#444B88] p-2 h-40"
      placeholder="Tell me something about yourself.."
      onChange={onChange}
    />
  </div>
);



export { FirstNameInput, LastNameInput, EmailInput, ContactNumberInput, CityInput, CountryInput, BioTextarea };
