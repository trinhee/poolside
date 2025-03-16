import IconInstagram from "../icons/Instagram";

export default function Contact({ isOpen, setIsOpen }) {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-black/90 flex flex-col z-50">
        {/* Top Section */}
        <div className="font-[Montserrat] w-full text-white text-5xl md:text-7xl font-normal tracking-normal text-center py-10 md:py-20 relative">
          CONTACT
          <button
            onClick={() => setIsOpen(false)}
            className="cursor-pointer absolute top-4 right-6 text-white text-5xl md:text-7xl"
          >
            &times;
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row flex-grow w-full p-6 md:p-8 justify-center items-start">
          {/* Left Side - Form (Takes Full Width on Mobile) */}
          <div className="w-full md:w-5/12 p-4 md:p-6 flex flex-col">
            <h3 className="font-[Montserrat] tracking-wider text-white text-xl md:text-2xl font-normal mb-4">
              ONLINE INQUIRIES
            </h3>
            <form className="space-y-4 flex-grow">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 bg-gray-800 text-white border border-gray-700 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-gray-800 text-white border border-gray-700 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 bg-gray-800 text-white border border-gray-700 focus:outline-none"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 bg-gray-800 text-white border border-gray-700 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="font-[Montserrat] text-sm cursor-pointer px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition ease-in-out w-full md:w-auto"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Right Side - Contact Details (Moves Below on Mobile, Maintains Format) */}
          <div className="w-full md:w-5/12 p-4 md:p-6 text-white flex flex-col">
            <h3 className="font-[Montserrat] text-xl md:text-2xl tracking-wider font-normal mb-4">
              CONTACT DETAILS
            </h3>

            <div className="flex flex-col">
              <p className="font-[Playfair] italic text-lg">anothony@poolsideinc.ca</p>
              <p className="font-[Playfair] italic text-lg mb-4">(416) 399-6769</p>
              <p className="font-[Playfair] italic text-lg mb-4">123 Pool St, Water City, WC 12345</p>
              <p className="font-[Playfair] italic text-lg mb-4 w-full max-w-[410px] md:max-w-[410px] lg:max-w-[410px] mx-auto">
                Please feel free to contact us with any questions you may have. We will be delighted to assist you with your inquiry.
              </p>
            </div>

            {/* Dividing Line + Social Icons (Move Together) */}
            <div className="flex flex-col items-start md:items-center mt-6 w-full">
              <hr className="border-white my-6 md:my-12 w-3/4 md:w-2/3 lg:w-1/2"></hr>
              <div className="flex justify-center gap-4 md:gap-6 w-full">
                <IconInstagram />
                <IconInstagram />
                <IconInstagram />
                <IconInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
