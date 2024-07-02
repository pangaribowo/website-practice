import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Kaliurang Jeep Rental Counter",
      description: "Development",
      imgUrl: projImg1,
    },
    {
      title: "Student Grade Calculator",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Login Page Design",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Responsive Dashboard Page",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Student Grade Input Page",
      description: "Development",
      imgUrl: projImg5,
    },
    {
      title: "Student Grade Output Page",
      description: "Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>The Projects section showcases a diverse range of Alif's creations, including the Kaliurang Jeep Rental Counter, Student Grade Calculator, Login Page Design, Responsive Dashboard Page, Student Grade Input Page, and Student Grade Output Page, along with his Portfolio Website. Each project highlights Alif's proficiency in both development and design. From dynamic and responsive web development to visually appealing interface designs, each project demonstrates Alif's attention to detail and strong functional expertise. Whether it's crafting intuitive user experiences or creating captivating visual designs, Alif's projects exemplify his creativity and skill in the realms of web development and design.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Snippet</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Versatile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Adaptive</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Explore Alif's expertise in backend development, where he excels in both Node.js and Python. With a keen understanding of server-side programming, Alif leverages the power of these languages to build robust and scalable applications. Moreover, his proficiency extends to database management, with hands-on experience in MongoDB and PostgreSQL. As a DevOps specialist, Alif orchestrates seamless software development processes, automating deployment pipelines and optimizing infrastructure. Additionally, he serves as a Cloud Architect, harnessing the capabilities of AWS EC2 to design and deploy scalable cloud solutions. Witness Alif's mastery in action as he integrates containerization into projects, simplifying deployment and management with Docker in cloud environments. Dive into the world of backend development and cloud architecture with Alif as your guide, and experience innovation and efficiency like never before.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Delve into Alif's passion for continuous learning and technological exploration. With an insatiable curiosity for the latest advancements, Alif thrives on staying abreast of emerging technologies to adapt and evolve continually. His commitment to lifelong learning is evident as he dedicates himself to absorbing new knowledge incrementally, ensuring a deep understanding of cutting-edge concepts and methodologies. By constantly expanding his skill set, Alif prepares himself to seamlessly integrate newfound insights into future projects, enhancing their innovation and effectiveness. Embrace the spirit of innovation alongside Alif as he embarks on a journey of perpetual growth and discovery, shaping the future of technology one step at a time.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Color Sharp 2"></img>
    </section>
  )
}
