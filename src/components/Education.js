export default function Education() {
  const educationData = [
    {
      id: 1,
      title: "Kingston Pattaya Vocational College",
      descirption: "Vocational,Computer Graphic Animation Branch",
      date: "2012-2015"
    },
    {
      id: 2,
      title: "Burapha University",
      descirption:
        "Bachelor's degree,Computer Graphic Animation Branch Faculty of Fine and Applied Arts",
      date: "2016-2021"
    },
    {
      id: 3,
      title: "CODECAMP THAILAND#13",
      descirption: "FULL-STACK WEB DEVELOPMENT",
      date: "Nov 2022 - Mar 2023"
    }
  ];

  return (
    <div
      id="education"
      className="w-full h-screen bg-gradient-to-b from-[#aa367c] flex justify-center"
    >
      <div className="w-[90%] h-full flex flex-col justify-start items-center p-2">
        <div>
          <h1 className="text-[48px] font-bold">Education</h1>
        </div>

        <div className="w-full">
          <div className="w-full flex flex-col gap-5 justify-center ml-4 ">
            {educationData?.map((el, idx) => (
              <div
                key={idx}
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="border-b-2"
              >
                <div>
                  <h1 className="text-lg font-bold">{el?.title}</h1>
                </div>

                <div>
                  <h1 className="text-lg font-bold">{el?.descirption}</h1>
                </div>

                <div>
                  <h1 className="text-lg font-bold">{el?.date}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
