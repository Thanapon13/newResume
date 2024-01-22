import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { FaHtml5, FaGithub } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { DiMysql, DiPhotoshop, DiIllustrator } from "react-icons/di";
import { SiPostman, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaNode, FaFigma, FaBootstrap, FaReact } from "react-icons/fa";
import { useState } from "react";

export const Skills = () => {
  const [viewAll, setViewAll] = useState("");
  console.log("viewAll:", viewAll);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skillIcons = [
    {
      name: "HTML5",
      icon: <FaHtml5 />
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />
    },
    {
      name: "Javascript",
      icon: <IoLogoJavascript />
    },
    {
      name: "React",
      icon: <FaReact />
    },
    {
      name: "MySQL",
      icon: <DiMysql />
    },
    {
      name: "Postman",
      icon: <SiPostman />
    },
    {
      name: "Github",
      icon: <FaGithub />
    },

    {
      name: "NodeJs",
      icon: <FaNode />
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />
    },
    {
      name: "Figma",
      icon: <FaFigma />
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />
    },
    {
      name: "Photoshop",
      icon: <DiPhotoshop />
    },
    {
      name: "Illustrator",
      icon: <DiIllustrator />
    }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>

              <div className="flex justify-end items-center ">
                <button
                  // onClick={() => setViewAll("viewAll")}
                  onClick={() =>
                    setViewAll(prev => (prev === "viewAll" ? "" : "viewAll"))
                  }
                  className={`hover:underline ${
                    viewAll === "viewAll" ? "text-red-600" : "text-white"
                  }`}
                >
                  View all
                </button>
              </div>

              {viewAll === "viewAll" ? (
                <div className="h-full text-white flex items-center justify-start gap-10 flex-wrap p-2">
                  {skillIcons?.map((el, idx) => (
                    <div
                      key={idx}
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                      className=" flex flex-col items-center h-[100px]"
                    >
                      <i className="text-6xl">{el.icon}</i>
                      <p className="text-2xl">{el?.name}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  {skillIcons?.map((el, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center"
                    >
                      <i className="text-6xl">{el.icon}</i>
                      <p className="text-2xl">{el?.name}</p>
                    </div>
                  ))}
                </Carousel>
              )}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
