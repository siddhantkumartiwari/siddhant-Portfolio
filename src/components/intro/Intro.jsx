import Hireme from "../../assets/hireme.png";
import ProfileImg from "../../assets/miniImage.jpeg";

const Intro = () => {
  return (
    <section
      id="intro"
      className=" m-5 px-10 flex justify-between items-center min-h-screen mb-5 relative overflow-hidden"
    >
      <div className="lg:w-1/2 md:w-3/4 w-full">
        <p className="text-white lg:text-4xl md:text-2xl text-xl">Hello,</p>
        <h1 className="lg:text-7xl md:text-5xl text-3xl text-white">
          I'm <span className="text-yellow-500">Siddhant</span>
        </h1>
        <h2 className="lg:text-7xl md:text-5xl text-3xl text-white">
          Software Developer
        </h2>
        <p className="text-white lg:text-lg text-base my-5 mb-20">
          I am a skilled web designer with some experiance in creating visually
          appearing and user friendly websites.
        </p>
        <a
          href="https://drive.google.com/file/d/1lNFM3NPhg4tAo4O9iTs6XNaYuLsL2jtf/view?usp=sharing"
          className=""
        >
          <button className="px-6 py-3 bg-white text-black rounded-3xl transform transition-transform duration-300 hover:scale-90 flex justify-center items-center gap-2 my-10 text-xl ">
            <img src={Hireme} alt="" className="w-6" />
            <span>My Resume</span>
          </button>
        </a>
      </div>

      <div className="w-1/4 lg:z-10 md:-z-20 -z-20">
        <img
          src={ProfileImg}
          alt="img"
          className="absolute top-[7.5rem] right-[3.7rem] lg:h-[60vh] h-[65vh] rounded-full border border-lightblue object-cover cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-90"
        />
      </div>
    </section>
  );
};

export default Intro;
