
const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-16  " id="contact">
      <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-center">
        <span className="text-white">Get in Touch</span>
      </h1>

      <p className="text-gray-500 font-semibold text-lg text-center">
        Want to chat? Send me an E-mail through this button and I'll respond whenever I can.
      </p>

      <button className="bg-black rounded-lg px-5 py-3 text-white font-bold text-lg hover:-translate-y-3 transition-all duration-300 border-2 hover:bg-white hover:border-black hover:text-black"
      onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=juyaljii610@gmail.com', '_blank')}>Contact Me</button>
      
    </div>
  )
}

export default Contact
