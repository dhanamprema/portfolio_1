import "./App.css";

function App() {
  const skills = [
    "Embedded Systems",
    "Embedded C",
    "Java Programming",
    "Problem Solving",
    "Posters Making",
  ];

  const projects = [
    {
      title: "Embedded Systems Project",
      description:
        "Developed embedded applications using Arduino and PIC microcontrollers for real-time hardware control.",
    },
    {
      title: "Microcontroller Based System",
      description:
        "Worked on hardware and software integration projects involving sensors and automation.",
    },
    {
      title: "Technical Research & Presentation",
      description:
        "Presented technical papers and posters in various college-level competitions.",
    },
  ];

  const achievements = [
    "Best Paper Premiere Award for excellence in technical presentation and research.",
    "Awards in Paper Presentation and Poster Presentation competitions.",
    "Recognition in District-Level Speech and Essay Writing Competitions.",
    "First Prize in Technical Paper Presentation Competition.",
  ];

  const certifications = [
    "Embedded Systems Certification",
    "Embedded Programming & Microcontrollers Certification",
    "NASSCOM Certification",
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h3>Hello, I'm</h3>
          <h1>DHANAM P</h1>
          <h2>Embedded Systems Developer</h2>

          <p>
            Motivated and detail-oriented Electronics and Communication
            Engineering graduate with strong knowledge in Embedded Systems,
            Microcontrollers, Arduino, PIC Microcontrollers, Embedded C and Java
            Programming.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View Projects
            </a>

            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <h2>About Me</h2>

        <p>
          I am an Electronics and Communication Engineering graduate from Kongu
          Engineering College. I am passionate about Embedded Systems,
          Microcontrollers, and developing innovative solutions through
          programming and hardware integration.
        </p>
      </section>

      {/* EDUCATION */}
      <section className="education" id="education">
        <h2>Education</h2>

        <div className="edu-card">
          <h3>Kongu Engineering College</h3>
          <p>B.E. Electronics and Communication Engineering</p>
          <p>CGPA: 8.82 / 10</p>
        </div>

        <div className="edu-card">
          <h3>HSC</h3>
          <p>Government Higher Secondary School, Panayampalli</p>
          <p>516 / 600</p>
        </div>

        <div className="edu-card">
          <h3>SSLC</h3>
          <p>Government Higher Secondary School, Panayampalli</p>
          <p>440 / 500</p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills" id="skills">
        <h2>Skills</h2>

        <div className="skill-container">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <h2>Projects</h2>

        <div className="project-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <button>View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="certifications" id="certifications">
        <h2>Certifications</h2>

        <ul>
          {certifications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="achievements" id="achievements">
        <h2>Achievements</h2>

        <ul>
          {achievements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>

        <div className="contact-info">
          <p>
            <strong>Email:</strong> dhanamp766@gmail.com
          </p>

          <p>
            <strong>Phone:</strong> +91 9514443233
          </p>

          <p>
            <strong>LinkedIn:</strong>
          </p>

          <a
            href="https://www.linkedin.com/in/dhanam-prakasam-4786a9382"
            target="_blank"
            rel="noreferrer"
          >
            View LinkedIn Profile
          </a>
        </div>
      </section>

      {/* HOBBIES */}
      <section className="hobbies">
        <h2>Hobbies & Interests</h2>

        <ul>
          <li>Drawing</li>
          <li>Learning New Technologies</li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 DHANAM P | Embedded Systems Developer</p>
      </footer>
    </>
  );
}

export default App;
