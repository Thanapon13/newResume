import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { CgPhone } from "react-icons/cg";
import { TfiEmail } from "react-icons/tfi";
import { FaHome, FaLine } from "react-icons/fa";

export const Contact = () => {
  const contactData = [
    {
      id: 1,
      title: "096-828-0399",
      icons: <CgPhone />
    },
    {
      id: 2,
      title: "harukasenpais@gmail.com",
      icons: <TfiEmail />
    },

    {
      id: 3,
      title: "0968280399",
      icons: <FaLine />
    },
    {
      id: 4,
      title:
        "128/64 Soi Chalerm pharakiat 10/1 Nong Prue Sub-district,Bang Lamung District,Chonburi Thailand 20150",
      icons: <FaHome />
    }
  ];

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={`${
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }`}
                >
                  <h2>Contact</h2>

                  <div>
                    {contactData?.map((el, idx) => (
                      <div
                        key={idx}
                        className="flex justify-start items-center gap-2"
                      >
                        <p className="text-xl bg-black p-2 rounded-full">
                          {el?.icons}
                        </p>
                        <p className="text-xl">{el?.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
