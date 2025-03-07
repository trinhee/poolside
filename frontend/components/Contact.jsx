export default function Contact({ isOpen, setIsOpen }) {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-black/90 flex flex-col z-50">
        {/* top div */}
        <div className="font-[Montserrat] w-full text-white text-7xl font-normal tracking-normal text-center py-20 relative">
          CONTACT
          <button
            onClick={() => setIsOpen(false)}
            className="cursor-pointer absolute top-4 right-6 text-white text-7xl"
          >
            &times;
          </button>
        </div>

        {/* main two divs */}
        <div className="flex flex-grow w-full p-8 justify-center items-start">
          {/* left side */}
          <div className="w-5/12 p-6 flex flex-col">
            <h3 className="font-[Montserrat] tracking-wider text-white text-2xl font-normal mb-4 text-center">
              ONLINE INQUIRES
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
              <select className="w-full p-3 bg-gray-800 text-white border border-gray-700 focus:outline-none">
                <option value="">SELECT AN INTEREST</option>
                <option value="swimming-pools">SWIMMING POOLS</option>
                <option value="patio">PATIO</option>
                <option value="fencing">FENCING</option>
              </select>
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 bg-gray-800 text-white border border-gray-700 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="font-[Montserrat] text-sm cursor-pointer p-6 border-2 border-white text-white  py-3 hover:bg-white hover:text-black transition ease-in-out"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* right div */}
          <div className="w-5/12 p-6 text-white flex flex-col justify-start">
            <h3 className="font-[Montserrat] text-2xl tracking wider font-normal mb-4 text-center">
              CONTACT DETAILS
            </h3>
            <div className="flex flex-col justify-center h-full">
                <p className="font-[Playfair] italic text-lg">anothony@poolsideinc.ca</p>
                <p className="font-[Playfair] italic stext-lg mb-4">(416) 399-6769</p>
                <p className="font-[Playfair] italic text-lg mb-4">123 Pool St, Water City, WC 12345</p>
                <p className="ml-40 font-[Playfair] italic text-lg max-w-sm">Please feel free to contact us with any questions you may have. We will be delighted to assist you with your inquiry.</p>
            </div>
            {/* dividing line... make smaller later */}
            <hr className="border-white my-12"></hr>
            {/* temp social media icons */}
            <div className="flex justify-center space-x-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>

            </div>
          </div>
        </div>
      </div>
    )
  );
}
