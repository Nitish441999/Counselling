import React from "react";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100 py-5">
      <div
        className="container flex flex-col md:flex-row lg:max-w-7xl w-full px-10 bg-white py-5 md:py-24 mx-auto section shadow-md rounded-xl p-5"
        id="contact-form"
      >
        <div className="md:w-1/3 w-full">
          <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">
            Contact Us
          </h1>
          <p className="leading-relaxed text-xl text-gray-900">
            We're here to assist you! If you have any questions or need
            assistance, please feel free to reach out to us.
            <br />
            <br />
            Email us at:{" "}
            <a
              href="mailto:admission022020@gmail.com"
              className="font-medium text-blue-600 hover:underline"
            >
              admission022020@gmail.com
            </a>
            <br />
          </p>
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-gray-800">Our Branches</h2>
            <p className="mt-4 text-md text-gray-900">
              <strong>Kolkata:</strong> Elgin Road, Bhawanipur, Kolkata, 700020
              <br />
              Contact:{" "}
              <a
                href="tel:+917908508730"
                className="text-blue-600 hover:underline"
              >
                +91 7908508730
              </a>
            </p>
            <p className="mt-4 text-lg text-gray-900">
              <strong>Durgapur:</strong> Manat Building, Rajbandh, Durgapur,
              West Bengal, 713212
              <br />
              Contact:{" "}
              <a
                href="tel:+917001407115"
                className="text-blue-600 hover:underline"
              >
                +91 7001407115
              </a>
            </p>
            <p className="mt-4 text-lg text-gray-900">
              <strong>Chitranjan:</strong> MIHIJAM, Ghosh Building, Mihijam,
              Jamtara, Jharkhand, 815354
              <br />
              Contact:{" "}
              <a
                href="tel:+919083706845"
                className="text-blue-600 hover:underline"
              >
                +91 9083706845
              </a>
            </p>
          </div>
        </div>

        <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
          <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">
            Contact Form
          </h1>
          <form action="https://fabform.io/f/{form-id}" method="post">
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 py-4 text-lg text-gray-900"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 py-4 text-lg text-gray-900"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 py-4 text-lg text-gray-900"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>

            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex text-white bg-gray-900 border-0 py-4 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center"
              >
                Send Message ✉
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
