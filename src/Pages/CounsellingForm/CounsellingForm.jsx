import React, { useState } from "react";

const CounsellingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
    aadhar: "",
    pan: "",
    marks10: "",
    year10: "",
    stream12: "",
    marks12: "",
    courses: "",
    exam: "",
    regNumber: "",
    rank: "",
    fatherName: "",
    fatherNumber: "",
    address: "",
    motherName: "",
    motherNumber: "",
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
    <div className="bg-gray-100 p-6 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Need counseling form
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
            { id: "dob", label: "Date of Birth", type: "date" },
            {
              id: "phone",
              label: "Phone Number",
              type: "tel",
              placeholder: "Enter your phone number",
            },
            {
              id: "email",
              label: "Email ID",
              type: "email",
              placeholder: "Enter your email",
            },
            {
              id: "aadhar",
              label: "Aadhar Card Number",
              type: "text",
              placeholder: "Enter Aadhar card number",
            },
            {
              id: "pan",
              label: "PAN Card Number",
              type: "text",
              placeholder: "Enter PAN card number",
            },
            {
              id: "marks10",
              label: "Class 10th Marks",
              type: "number",
              placeholder: "Enter Class 10th marks",
            },
            {
              id: "year10",
              label: "Class 10th Passing Year",
              type: "number",
              placeholder: "Enter passing year",
            },
            {
              id: "stream12",
              label: "Class 12th Stream",
              type: "text",
              placeholder: "Enter Class 12th stream",
            },
            {
              id: "marks12",
              label: "Class 12th Marks",
              type: "number",
              placeholder: "Enter Class 12th marks",
            },
            {
              id: "courses",
              label: "Required Courses Name",
              type: "text",
              placeholder: "Enter course names",
            },
            {
              id: "exam",
              label: "Entrance Exam Name",
              type: "text",
              placeholder: "Enter exam name",
            },
            {
              id: "regNumber",
              label: "Entrance Exam Registration Number",
              type: "text",
              placeholder: "Enter registration number",
            },
            {
              id: "rank",
              label: "Entrance Exam Ranks",
              type: "number",
              placeholder: "Enter rank",
            },
            {
              id: "fatherName",
              label: "Father's Name",
              type: "text",
              placeholder: "Enter father's name",
            },
            {
              id: "fatherNumber",
              label: "Father's Number",
              type: "tel",
              placeholder: "Enter father's phone number",
            },
            {
              id: "motherName",
              label: "Mother's Name",
              type: "text",
              placeholder: "Enter mother's name",
            },
            {
              id: "motherNumber",
              label: "Mother's Number",
              type: "tel",
              placeholder: "Enter mother's phone number",
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
            <label htmlFor="address" className="block font-medium mb-2">
              Address
            </label>
            <textarea
              id="address"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
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
