import image from "../../public/shivamkimadi.jpg";
import image2 from "../../public/instagram.png";
import image3 from "../../public/githublogo.png";
import image4 from "../../public/linkedin.png";


const Header = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-3 md:gap-8" id="home">
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-nowrap tracking-tighter text-gray-400">
            Shivam Juyal
          </h1>
          <a href="https://drive.google.com/file/d/16ZzNf-Xa2GWJBM208lcsa81FkV9iuhnk/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300 ml-10 -mt-1111">
              Resume
            </button>
          </a>
        </div>
        <p className="max-w-[500px] text-lg md:text-xl">
          Full Stack and Machine Learning Engineer focused on learning through experimentation and product development.
        </p>
        <div className="flex space-x-4">
          <a href="https://github.com/ShivamJuyal24" target="_blank" rel="noopener noreferrer">
            <img src={image3} alt="GitHub" className="w-7 h-7 rounded-full" />
          </a>

          <a href="https://www.instagram.com/_.cvamm._/" target="_blank" rel="noopener noreferrer">
            <img src={image2} alt="Instagram" className="w-7 h-7 rounded-full" />
          </a>
          <a href="https://www.linkedin.com/in/shivam-juyal-034273219/" target="_blank" rel="noopener noreferrer">
            <img src={image4} alt="Instagram" className="w-7 h-7 rounded-full" />
          </a>
        </div>
      </div>
      <img src={image} alt="" className="rounded-full w-40 h-40 object-cover ml-4" />
    </div>
  );
};

export default Header;
