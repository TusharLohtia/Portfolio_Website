// src/components/About.js
import React from "react";
import styled from "styled-components";
import mernImage from "../assets/Mern.png";

const AboutContainer = styled.section`
  color: #333;
  padding: 2rem 2rem;
  padding-top: 34px;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 2rem auto;
`;

const List = styled.ul`
  list-style: disc;
  padding-left: 20px;
  margin: 0 auto 2rem auto;
  max-width: 800px;
  text-align: left;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
`;

const ProjectLink = styled.a`
  display: block;
  font-size: 1.2rem;
  color: #007bff;
  margin-top: 0.5rem;
`;
const Technical = styled.section`
  background-color: #e0dede;
  padding-top: 25px;
  padding-bottom: 10px;
  margin-bottom: 35px;
`;

const AboutSection = styled.section`
  background-color: #f9e2db;
`;

const ProjectSection = styled.section`
  background-color: #d1f7d1;
  padding-top: 25px;
  padding-bottom: 20px;
  margin-bottom: 35px;
`;
const Training = styled.section`
  background-color: #d7e7f6;
  padding-top: 25px;
  padding-bottom: 10px;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutSection>
        <AboutTitle>About Me</AboutTitle>
        <AboutText>
          Hello! I'm TUSHAR LOHTIA, a passionate MERN stack developer with a
          strong background in creating dynamic and responsive web applications.
          My expertise lies in developing end-to-end solutions using MongoDB,
          Express.js, React.js, and Node.js. With a keen eye for detail and a
          commitment to delivering high-quality code, I strive to build web
          applications that provide seamless user experiences and efficient
          performance.
        </AboutText>

        <SectionTitle>Education</SectionTitle>
        <AboutText>
          <h4>
            Bachelor's Degree in Computer Science and Engineering - Chandigarh
            Engineering College, Landran-Mohali
          </h4>
          <br />
          <h4>
            Diploma in Electronics and Communication Engineering - Chandigarh
            College of Engineering and Technology (CCET-26)CHD
          </h4>
          <br />
          <h4>
            Matrix - Shishu Niketan Public School Sec-5 Panchkula, Haryana
          </h4>
          <br />
        </AboutText>
      </AboutSection>

      <Technical>
        <SectionTitle>Technical Skills</SectionTitle>
        <img
          src={mernImage}
          alt="MERN Stack"
          style={{ width: "200px", margin: "0 auto" }}
        />

        <AboutText>
          <h3>Frontend Development:</h3>
        </AboutText>
        <List>
          <ListItem>
            Proficient in React.js for building interactive and responsive user
            interfaces.
          </ListItem>
          <ListItem>
            Experience with Redux for state management and optimizing component
            rendering.
          </ListItem>
          <ListItem>
            Strong understanding of HTML, CSS, and JavaScript (ES6+).
          </ListItem>
          <ListItem>
            Familiarity with frontend tools like Webpack, Babel, and npm/yarn.
          </ListItem>
        </List>
        <AboutText>
          <h3>Backend Development:</h3>
        </AboutText>
        <List>
          <ListItem>
            Expertise in Node.js and Express.js for building robust and scalable
            server-side applications.
          </ListItem>
          <ListItem>
            Skilled in designing RESTful APIs and integrating third-party
            services.
          </ListItem>
          <ListItem>
            Proficient in working with MongoDB for database management,
            including data modeling and aggregation.
          </ListItem>
          <ListItem>
            Experience with authentication and authorization mechanisms (JWT,
            OAuth).
          </ListItem>
        </List>
        <AboutText>
          <h3>Full-Stack Integration:</h3>
        </AboutText>
        <List>
          <ListItem>
            Ability to seamlessly integrate frontend and backend components to
            create cohesive web applications.
          </ListItem>
          <ListItem>
            Knowledge of modern development practices including version control
            (Git), CI/CD pipelines, and containerization (Docker).
          </ListItem>
          <ListItem>
            Understanding of deployment and hosting strategies using cloud
            services like AWS, Heroku, and Netlify.
          </ListItem>
        </List>
      </Technical>

      <ProjectSection>
        <SectionTitle>Projects</SectionTitle>
        <AboutText>
          <h3>Job Portal Application</h3>
        </AboutText>
        <AboutText>
          Created a user-friendly interface for employes to post job openings
          with detailed description and implemented features such as user
          authentication. Ensured the platform was responsive across various
          devices to provide a seamless user experience.
        </AboutText>
        <ProjectLink href="https://github.com/TusharLohtia/job-portal">
          View on GitHub
        </ProjectLink>

        <AboutText>
          <strong>Book Store App</strong>
        </AboutText>
        <AboutText>
          Developed a captivating book store web application using MERN stack,
          integrating robust authentication and authorization features for
          secure user access. Crafted an elegant and intuitive frontend
          interface with React.js, ensuring seamless navigation and dynamic user
          experiences.
        </AboutText>
        <ProjectLink href="https://github.com/TusharLohtia/Book_Store_App_MERN">
          View on GitHub
        </ProjectLink>

        <AboutText>
          <strong>EV-Website</strong>
        </AboutText>
        <AboutText>
          Designed and implemented a sleek landing page showcasing electronic
          vehicles using React.js/JavaScript, focusing on modern aesthetics and
          user engagement. This project demonstrates proficiency in frontend
          development, UI design, and promotion of eco-friendly technologies.
        </AboutText>
        <ProjectLink href="https://github.com/TusharLohtia/Landing_Page_Reactjs">
          View on GitHub
        </ProjectLink>

        <AboutText>
          <strong>Blog App</strong>
        </AboutText>
        <AboutText>
          Presenting a dynamic MERN stack blog app showcasing MongoDB,
          Express.js, React.js, and Node.js integration. Features include CRUD
          operation,user authentication, real-time updates, rich text editing,
          and responsive design. Deployed on cloud platforms for seamless
          access. Demonstrates proficiency in full-stack development and modern
          web technologies.
        </AboutText>
        <ProjectLink href="https://github.com/TusharLohtia/Blog_App">
          View on GitHub
        </ProjectLink>

        <AboutText>
          <strong>Weather App</strong>
        </AboutText>
        <AboutText>
          Introducing a sleek weather app developed with React.js, delivering
          real-time weather updates with user-friendly interface. Features
          include location-based forecasts, dynamic weather data display, and
          responsive design for optimal viewing on all devices. Utilizes modern
          React.js components and APIs to provide an intuitive user experience.
        </AboutText>
        <ProjectLink href="https://github.com/TusharLohtia/Weather_App">
          View on GitHub
        </ProjectLink>

        <AboutText>
          <strong>Dice-Roll Game</strong>
        </AboutText>
        <AboutText>
          Introducing an entertaining dice roll game crafted with JavaScript and
          React.js. Players roll virtual dice enhancing the gaming experience.
          Features include customizable game settings, score tracking, and
          responsive design for seamless play across devices. Showcases
          proficiency in JavaScript logic and React.js components
        </AboutText>
        <ProjectLink href="https://github.com/TusharLohtia/dice_game">
          View on GitHub
        </ProjectLink>

        <AboutText>
          <strong>Rock-Paper_Scissor Game</strong>
        </AboutText>
        <AboutText>
          Presenting an interactive rock-paper-scissors game built using
          JavaScript. Players engage in classic battles, selecting from rock,
          paper, or scissors with dynamic outcome animations. Features include
          user-friendly interface, score tracking, and randomized computer moves
          for replayability. Demonstrates JavaScript proficiency in game logic
          and DOM manipulation.
        </AboutText>
        <ProjectLink href="https://github.com/TusharLohtia/rock-paper-scissor">
          View on GitHub
        </ProjectLink>
        <h3>
          For More Project Visit{" "}
          <ProjectLink href="https://github.com/TusharLohtia">
            GitHub Profile
          </ProjectLink>{" "}
        </h3>
      </ProjectSection>

      <Training>
        <SectionTitle>Industrial Training</SectionTitle>
        <AboutText>
          <h4>
            MERN Stack Industrial Training at SkillStone- Grazitti Interactive
          </h4>
          <p>
            Immersive MERN stack training program offering in-depth instruction
            on MongoDB, Express.js, React, and Node.js. I gain proficiency in
            building full-stack web applications, from backend server setup to
            frontend development. Hands-on projects and real-world scenarios
            provide practical experience in developing scalable and dynamic
            applications.
          </p>
        </AboutText>

        <SectionTitle>Internship</SectionTitle>
        <AboutText>
          <h4>React JS Internship at Solitaire Infosys</h4>
          <p>
            Covering React fundamentals, state management, component lifecycle,
            and routing. Hands-on projects and exercises provide practical
            experience in building scalable and interactive user interfaces.
          </p>
        </AboutText>
        <SectionTitle>Certification</SectionTitle>
        <AboutText>
          <h4>Diploma in Web Designing (DWD) at ISO Certified SCI Institute</h4>
          <p>
            During my 6-month diploma program in web designing, I gained
            comprehensive knowledge and hands-on experience in various aspects
            of web design. The curriculum covered essential topics such as HTML,
            CSS, JavaScript, responsive design principles, UI/UX design
            fundamentals, and industry-standard design tools. Throughout the
            program, I honed my skills in creating visually appealing and
            user-friendly websites by applying design principles, understanding
            user behavior, and optimizing for performance and accessibility. I
            developed proficiency in utilizing tools like Adobe Photoshop, Adobe
            Illustrator, Sketch, and Figma for designing mockups, wireframes,
            and prototypes. Furthermore, I had the opportunity to work on
            real-world projects and collaborate with peers to solve design
            challenges, which enhanced my teamwork and problem-solving
            abilities. By the end of the diploma, I emerged with a solid
            foundation in web design and a portfolio showcasing my creative and
            technical capabilities.
          </p>
        </AboutText>
      </Training>
    </AboutContainer>
  );
};

export default About;
