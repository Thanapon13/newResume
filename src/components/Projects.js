import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import imageProjectCalendar from "../assets/img/imageProjectCalendar.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project Booking and Seller Hotel (Booking)",
      description:
        "WORK AS FULL-STACK DEVELOPER USING FIGMA HTML CSS JAVASCRIPT REACT.JS TAILWIN EXPRESS.JS SEQUELIZE.JS MYSQL POSTMAN LINENOTIFY 2023",
      link1: "https://github.com/Thanapon13/ProjectBooking-frontEnd",
      link2: "https://github.com/Thanapon13/ProjectBooking-Api-backEnd"
    },
    {
      id: 2,
      title: "BID BUY BYE GROUP (Clone Sasom) PROJECT FOR CODECAMP#13",
      description:
        "WORK AS FULL-STACK DEVELOPER USING FIGMA HTML CSS JAVASCRIPT REACT.JS TAILWIN EXPRESS.JS SEQUELIZE.JS MYSQL POSTMAN  OMISE-API LINENOTIFY 2023",
      link1: "https://github.com/markeykung009/bidbuybye-web",
      link2: "https://github.com/markeykung009/bidbuybye-api"
    },
    {
      id: 3,
      title: "Project G-Art",
      description:
        "WORK AS FULL-STACK DEVELOPER USING FIGMA HTML CSS JAVASCRIPT REACT.JS EXPRESS.JS SEQUELIZE.JS MYSQL POSTMAN TAILWEINDFLOWBITE 2023",
      link1: "https://github.com/Thanapon13/ProjectGart-frontend.git",
      link2: "https://github.com/Thanapon13/ProjectGart-backend"
    },
    {
      id: 4,
      title: "Project Frontend Calendar Add CRUD",
      description: null,
      link1: "https://github.com/Thanapon13/testFrontendForviz.git",
      link2: null,
      imgUrl: imageProjectCalendar
    },
    {
      id: 5,
      title: "Project AssetManagement",
      description: "This project was done during a 3 month trial period.",
      link1: "https://github.com/Thanapon13/assetManagement-Frontend",
      link2: "https://github.com/Thanapon13/assetManagement-Backend",
      imgUrl: null
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects : {projects.length}</h2>

                  <div className="w-full">
                    <div className="w-full flex flex-col gap-5 justify-center ml-4">
                      {projects?.map((el, idx) => (
                        <div
                          key={idx}
                          data-aos="fade-right"
                          data-aos-offset="300"
                          data-aos-easing="ease-in-sine"
                        >
                          <div>
                            <h1 className="text-lg font-bold">
                              {el?.id}.{el?.title}
                            </h1>
                          </div>

                          <div>
                            <ul
                              className={` ${
                                el?.description ? "list-disc" : "list-none"
                              }`}
                            >
                              <li>{el?.description}</li>
                            </ul>
                          </div>

                          <div>
                            <ul className="list-disc">
                              <li className="hover:underline">
                                <a className="text-white" href={el?.link1}>
                                  {el?.link1}
                                </a>
                              </li>

                              {el?.link2 && (
                                <li className="hover:underline">
                                  <a className="text-white" href={el?.link2}>
                                    {el?.link2}
                                  </a>
                                </li>
                              )}
                            </ul>
                          </div>

                          {el?.title ===
                            "Project Frontend Calendar Add CRUD" && (
                            <Tab.Container
                              id="projects-tabs"
                              defaultActiveKey="first"
                            >
                              <Tab.Content
                                id="slideInUp"
                                className={
                                  isVisible
                                    ? "animate__animated animate__slideInUp"
                                    : ""
                                }
                              >
                                <Tab.Pane eventKey="first">
                                  <Row>
                                    {projects.map((project, index) => {
                                      return (
                                        <ProjectCard key={index} {...project} />
                                      );
                                    })}
                                  </Row>
                                </Tab.Pane>
                              </Tab.Content>
                            </Tab.Container>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
