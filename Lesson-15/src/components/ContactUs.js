const ContactUs = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4"> Contact Us Folks </h1>
      <form className="border border-black rounded-xl m-4 p-4 flex flex-col items-center">
        <input type="text" placeholder="name" className="border border-black rounded-xl p-2 m-1"/>
        <input type="text" placeholder="message" className="border border-black rounded-xl p-2 m-1"/>
        <button className="bg-gray-400 rounded-xl broder border-gray-500 w-20">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
