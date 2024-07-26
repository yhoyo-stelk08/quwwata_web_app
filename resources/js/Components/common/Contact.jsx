export default function Contact() {
  return (
    // Global Container
    <div className="flex items-center justify-center min-h-96  text-slate-900">
      {/* Card Container */}
      <div className="relative flex flex-col lg:flex-row justify-between md:items-center m-6 space-y-10 bg-slate-400  rounded-2xl md:space-y-0 md:m-0">
        {/* Left Side */}
        <form>
          <div className="p-6 md:p-20 text-slate-100">
            <h2 className="text-3xl font-mono font-bold mb-5">Contact Us</h2>
            <p className="font-sans text-left">
              Contact us for any inquiries or feedbacks..
            </p>
            <div className="my-5 rounded-xl text-slate-900">
              <input
                className="rounded-xl p-6 w-full"
                placeholder="Enter your email address"
                type="text"
              />
            </div>
            <div className="my-5 rounded-xl">
              <input
                className="rounded-xl p-6 w-full text-slate-900"
                placeholder="Enter your contact number"
                type="text"
              />
            </div>
            <div className="my-5 rounded-xl">
              <textarea
                className="rounded-xl p-6 w-full resize-none text-slate-900"
                placeholder="Enter your message"
                rows="7"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between">
              <button
                className="w-full md:w-auto flex justify-center items-center my-4 px-9 hover:shadow-lg hover:shadow-orange-400 py-3 bg-yellow-300 shadow-orange-100 text-white rounded-lg font-bold duration-150 hover:-translate-y-0.5 hover:bg-opacity-80"
                type="submit"
              >
                <span className="mr-2">Send</span>
              </button>
            </div>
          </div>
        </form>
        {/* Right Side */}
        <div className="p-6 md:p-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5228394080023!2d119.41768907475546!3d-5.180152994797302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee33cd238a283%3A0x7685892b8445270c!2sQuwwata%20Archery%20(toko%20panah%20Makassar)!5e0!3m2!1sen!2sid!4v1721985348568!5m2!1sen!2sid"
            // width="600"
            // height="450"
            // style="border:0;"
            className="w-[600px] h-[600px]"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
