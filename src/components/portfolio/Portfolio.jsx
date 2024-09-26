import Portfolio1 from "../../assets/works/portfolio-1.png";
import Portfolio2 from "../../assets/works/portfolio-2.png";
import Portfolio3 from "../../assets/works/portfolio-3.png";
import Portfolio4 from "../../assets/works/portfolio-4.png";
import Portfolio5 from "../../assets/works/portfolio-5.png";
import Portfolio6 from "../../assets/works/portfolio-6.png";
const Portfolio = () => {
  const datas = [
    {
      img: Portfolio1,
    },
    {
      img: Portfolio2,
    },
    {
      img: Portfolio3,
    },
    {
      img: Portfolio4,
    },
    {
      img: Portfolio5,
    },
    {
      img: Portfolio6,
    },
  ];
  return (
    <section
      id="portfolio"
      className=" m-5 px-2 flex flex-col justify-center items-center min-h-screen mb-5 pt-28"
    >
      <div className="text-white text-center lg:w-3/4 w-full">
        <h1 className="text-5xl text-yellow-500">My Portfolio</h1>
        <p className="lg:text-xl text-base my-10">
          I take pride in paying attention to the smallest details and making
          sure that my work is pixel perfect . I am excited to bring my skills
          and experiance to help businesses achieve their goals and create a
          strong online presence.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-10">
        {datas.map((data, idx) => (
          <div key={idx}>
            <img
              src={data.img}
              alt="pic"
              className="lg:h-[45vh] md:h-[40vh] h-[25vh]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
