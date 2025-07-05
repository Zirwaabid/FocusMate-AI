import React, { useState } from 'react';

function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <section
    id="contact"
    className="min-h-screen contact-bg-color flex justify-center items-center px-4 py-10 ">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-3xl shadow-md overflow-hidden">
        {/* Left image side */}
        <div className="md:w-1/2 bg-[#b388eb] flex items-center justify-center p-8">
          <img
            src="/Mobile-rafiki.svg"
            alt="Phone"
            className="w-60 md:w-80 max-w-full"
          />
        </div>

        {/* Right form side */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800 text-center md:text-left">
            GET IN TOUCH WITH US
          </h2>
          <p className="text-gray-500 mb-6 text-center md:text-left">
            Leave us a message, we will contact you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <textarea
              placeholder="Message"
              required
              className="w-full p-3 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <div className="text-center md:text-left">
              <button
                type="submit"
                className="bg-purple-400 text-white px-9 py-2 rounded-3xl hover:bg-purple-500 transition"
              >
                SEND
              </button>
            </div>
          </form>

          {showPopup && (
            <div className="mt-4 text-green-700 bg-green-100 p-3 rounded text-center md:text-left">
              Thank you! Your message has been sent.
            </div>
          )}
        </div>
      </div>
    </section>
    
  );
}

export default Contact;
