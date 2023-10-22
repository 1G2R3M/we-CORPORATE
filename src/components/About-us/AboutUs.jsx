import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/images/about-us.png";
// import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p className="para">
                Welcome to We Corporate, where learning knows
                no bounds. We are dedicated to revolutionizing
                education by providing a dynamic platform that
                empowers learners of all ages and backgrounds
                to unlock their full potential. <br />
                Behind We Corporate stands a dedicated team of educators,
                technologists, and creatives who are passionate about making a 
                difference in education. Together,
                we are committed to shaping the future of learning.

              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
