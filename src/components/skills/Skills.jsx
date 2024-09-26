// import Web4 from "../../assets/javaimg.png";
import Web4 from "../../assets/Java-Logo.png";
import Web2 from "../../assets/JavaScript-Logo.png";
import Web3 from "../../assets/react-logo.png";
import Web1 from "../../assets/website-design.png";
const Skills = () => {
  const datas = [
    {
      skillsImg: Web1,
      skillsHeading: "Website Development",
      skillsTitle: "Knowledge of web technologies-",
      skillsDiscription: "HTML, CSS, JavaScript, Talwind CSS Framework etc",
    },
    {
      skillsImg: Web2,
      skillsHeading: "JavaScript",
      skillsTitle: "Knowledge of JavaScript-",
      skillsDiscription: "Objects, Arrays, DOM, Events etc",
    },
    {
      skillsImg: Web3,
      skillsHeading: "ReactJS",
      skillsTitle: "Objects, Arrays, DOM, Events, Hooks etc...",
      skillsDiscription:
        "JSX, Components, State and Props, Events, Hooks etc... ",
    },
    {
      skillsImg: Web4,
      skillsHeading: "Java",
      skillsTitle: "Knowledge of Java SE and some concept of Java EE-",
      skillsDiscription:
        "OOPs Concept, Exception Handling, Collections, Multithreading etc ",
    },
  ];
  return (
    <section
      id="skills"
      className=" m-5 lg:px-10 px-2 flex flex-col justify-center items-center min-h-screen mb-5 pt-28"
    >
      <div className="text-white text-center lg:w-3/4 w-full">
        <h1 className="text-5xl text-yellow-500">What I do</h1>
        <p className="lg:text-xl text-base my-10">
          I am a skilled and passionate web cdesigner with some experiance in
          creating visually appealing and user-friendly websites. I have a godd
          understanding of design and a keen eye for detail. I am proficient in
          HTML,CSS,JavaScript and ReacrJS as well as knowledge in a Backend
          technology in JAVA.
        </p>
      </div>

      {datas.map((data, idx) => (
        <div
          className="flex justify-start gap-10 float-start items-center lg:w-2/3 w-full bg-[#697565] my-5 p-8 rounded-3xl"
          key={idx}
        >
          <img
            src={data.skillsImg}
            alt="img"
            className="h-20 w-20 rounded-3xl object-cover"
          />
          <div className=" text-white">
            <h2 className="lg:text-3xl text-2xl">{data.skillsHeading}</h2>
            <p className="lg:text-2xl text-xl">{data.skillsTitle}</p>
            <p className="text-base">{data.skillsDiscription}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
