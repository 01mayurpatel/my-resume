import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import { Link, animateScroll } from "react-scroll";
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";
import Resume2 from "../Resume/Resume2";
import Resume3 from "../Resume/Resume3";
import Resume4 from "../Resume/Resume4";
import First from "./first.png"
import Second from "./second.png"
import Fourth from "./foruth.png"
import Third from "./third.png"
import styles from "./Body.module.css";
import NavbarHead from "../Navbar/NavbarHead";
import Footer from "../Footer/Footer"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Col'
function Body() {


  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();
  const [activeTemp, setActiveTemp] = useState("Resume3");

  let SelectedTemplate;
  if (activeTemp === "Resume") {
    SelectedTemplate = Resume; // Replace with the actual component for Resume1
  } else if (activeTemp === "Resume2") {
    SelectedTemplate = Resume2; // Replace with the actual component for Resume2
  } else if (activeTemp === "Resume3") {
    SelectedTemplate = Resume3; // Replace with the actual component for Resume2
  }
  else {
    SelectedTemplate = Resume4;
  }
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  return (
    <>
      <NavbarHead />
      <Container>
        <div className={styles.container} id="">

          <p className={styles.heading}>Just A <span className={styles.headse}>STEP</span> Away...
            <br></br>
            Fill This Form To Get Your <span className={styles.headse}>RESUME</span> Ready
          </p>

          <div className={styles.edit}>

            <div className={styles.main}>
              <Editor
                sections={sections}
                information={resumeInformation}
                setInformation={setResumeInformation}
              />
              <div className={styles.down_div}>
                <div className="editing mt-4">
                  <div className="text-center mb-5">

                    <h2>Select <span className={styles.headse}>Template</span></h2>
                  </div>
                  <div className={styles.temp_main} id="Section1">

                    <Link to="color" smooth={false}
                      duration={100}
                    >
                      <div className={styles.temparea} >
                        <Row className="text-center align-items-center">
                          <Col lg="3" md="6" xs="6" style={{ marginBottom: "18px" }} className="">


                            <div className={styles.temp1}

                              onClick={(e) => {

                                setActiveTemp("Resume3");


                              }}
                            >

                              <img style={{ width: "100%", height: "auto" }} src={First} />
                            </div>
                          </Col>

                          <Col lg="3" md="6" xs="6" style={{ marginBottom: "18px" }}>
                            <div className={styles.temp1}
                              onClick={(e) => {

                                setActiveTemp("Resume2");

                              }}
                            >


                              <img style={{ width: "100%", height: "auto" }} src={Second} />

                            </div>
                          </Col>
                          <Col lg="3" md="6" xs="6" style={{ marginBottom: "18px" }}>
                            <div className={styles.temp1}
                              onClick={(e) => {

                                setActiveTemp("Resume");


                              }}>
                              <img style={{ width: "100%", height: "auto" }} src={Third} />
                            </div>
                          </Col>
                          <Col lg="3" md="6" xs="6" style={{ marginBottom: "18px" }}>
                            <div className={styles.temp1}
                              onClick={(e) => {

                                setActiveTemp("Resume4");


                              }}>

                              <img style={{ width: "100%", height: "auto" }} src={Fourth} />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Link>
                  </div>
                </div>
                <div style={{ margin: "0", width: "100%" }} id="color">
                  <div className={styles.toolbar}>
                  <div className={styles.colors}>
                    {colors.map((item) => (
                      <span
                        key={item}
                        style={{ backgroundColor: item }}
                        className={`${styles.color} ${activeColor === item ? styles.active : ""
                          }`}
                        onClick={() => setActiveColor(item)}
                      />
                    ))}
                  </div>
                  
                  <ReactToPrint
                    trigger={() => {
                      return (
                        
                        <button style={{marginLeft:"auto",marginRight:"auto"}} className='button'>Download</button>
                       
                      );
                    }}
                    content={() => resumeRef.current}
                  />
                  
                </div>
                </div>
                <div style={{ width: "100%", backgroundColor: "rgba(255, 255, 255, 0.833)", marginBottom: "35px" }} className="">
                  <SelectedTemplate
                    className="resume-block"
                  ref={resumeRef}
                  sections={sections}
                  information={resumeInformation}
                  activeColor={activeColor}
                />
                </div>
              </div>
            </div>
          </div>
        </div >
      </Container>
      <Footer />
    </>
  );
}

export default Body;
