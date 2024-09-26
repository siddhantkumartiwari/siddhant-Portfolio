const datas = [
  {
    year: "2022 - 24(MCA)",
    college: "Institute of Technology and Science",
    location: "Ghaziabad,Uttar Pradesh",
    course: "Master's of Computer Applications",
  },
  {
    year: "2019 - 22(BCA)",
    college: "Institute of Technology and Science",
    location: "Ghaziabad,Uttar Pradesh",
    course: "Bachelor's of Computer Application",
  },
  {
    year: "2018 - 19(XII)",
    college: "Nutan Vidya Mandir",
    location: "Ghaziabad,Uttar Pradesh",
    course: "PCM",
  },
];
const Education = () => {
  return (
    <>
      <section
        id="education"
        className="m-5 px-2 flex flex-col justify-center items-center min-h-screen mb-5 pt-28"
      >
        <div className="text-white text-center lg:w-3/4 w-full">
          <h1 className="text-5xl text-yellow-500">Education</h1>
          <p className="lg:text-xl text-base my-10">My Education Background</p>
        </div>
        {datas.map((data, idx) => (
          <div
            className="flex justify-start flex-col  float-start items-start lg:w-2/3 w-full bg-[#697565] my-5 p-8 rounded-3xl text-white"
            key={idx}
          >
            <p>{data.year}</p>
            <h2 className="lg:text-3xl text-2xl">{data.college}</h2>
            <h3 className="lg:text-2xl text-xl">{data.location}</h3>
            <p className="text-base">{data.course}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Education;
