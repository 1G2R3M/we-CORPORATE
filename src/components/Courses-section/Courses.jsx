import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assets/images/automotive1.png";
import courseImg2 from "../../assets/images/data2.png";
import courseImg3 from "../../assets/images/embedded1.png";
import courseImg4 from "../../assets/images/test1.png";
import courseImg5 from "../../assets/images/full.png";
import courseImg6 from "../../assets/images/python2.png";

import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Automotive Design",
    lesson: 12,
    students: 12.5,
    rating: 4.2,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Data Science & Analytics",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Embedded System",
    lesson: 12,
    students: 12.5,
    rating: 5.1,
    imgUrl: courseImg3,
  },
  {
    id: "04",
    title: "Software Testing (Manual, Automation)",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg4,
  },
  {
    id: "05",
    title: "Full Stack Development",
    lesson: 12,
    students: 12.5,
    rating: 4.9,
    imgUrl: courseImg5,
  },
  {
    id: "06",
    title: "Python",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg6,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-100">
                <h2>Unlock Your Potential with Our Most Popular Courses</h2>
                <p>
                  Our flagship courses represent the pinnacle of educational 
                  excellence, meticulously designed to provide in-depth 
                  knowledge and hands-on skills in. These immersive learning 
                  experiences are led by industry experts and have 
                  consistently garnered rave reviews from
                  our community of learners.
                </p>
              </div>


            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
