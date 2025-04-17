import React, { useState } from "react";

const CounsellingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    courses: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className=" p-6 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full bg-gray-50 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-700 text-center mb-6 tracking-wider uppercase">
          Counselling Form
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            {
              id: "name",
              label: "Name",
              type: "text",
              placeholder: "Enter your name",
            },
            {
              id: "phone",
              label: "Mobile Number",
              type: "tel",
              placeholder: "Enter your mobile number",
            },
            {
              id: "email",
              label: "Email ID",
              type: "email",
              placeholder: "Enter your email",
            },
            {
              id: "courses",
              label: "Interested Course",
              type: "text",
              placeholder: "Enter course name",
            },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id}>
              <label htmlFor={id} className="block font-medium mb-2">
                {label}
              </label>
              <input
                type={type}
                id={id}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder={placeholder}
                value={formData[id]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <label htmlFor="message" className="block font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Write your message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="w-64 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CounsellingForm;
