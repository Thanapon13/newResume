import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
        href="https://test-frontend-forviz.vercel.app/?fbclid=IwAR1Ntff9taGvs1OsBoVefAkuAMjBuI4aJ1-nS127ukgAikrr4_Ezp1ri5Ps"
        className="text-white"
      >
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
