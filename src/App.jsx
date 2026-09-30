import './App.css'
function App() {
  return (
    <div>
      <nav>
        <h2>Rabia</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home">
  <h1>Hey, I am Rabia Saleem</h1>

  <h2>Computer Science Student</h2>

  <p>
    I am a Computer Science student interested in full-stack development
    and cybersecurity.
  </p>

  <div className="hero-buttons">
    <a href="#projects">View My Projects</a>
    <a href="#contact">Contact Me</a>
  </div>
</section>
      <section id="about">
  <h2>About Me</h2>

  <p>
    I am a Computer Science student with an interest in full-stack
    development and cybersecurity. I enjoy learning new technologies,
    building practical projects, and improving my problem-solving skills.
  </p>

  <p>
    My goal is to develop useful software applications while continuously
    strengthening my technical and professional skills.
  </p>
</section>
<section id="skills">
  <h2>My Skills</h2>

  <div className="skills-container">
    <div className="skill-card">
      <h3>Programming</h3>
      <p>C, C++, Python</p>
    </div>

    <div className="skill-card">
      <h3>Web Development</h3>
      <p>HTML, CSS, JavaScript, React</p>
    </div>

    <div className="skill-card">
      <h3>Cybersecurity</h3>
      <p>Kali Linux, Networking, Security Fundamentals</p>
    </div>

    <div className="skill-card">
      <h3>Database</h3>
      <p>SQL, Database Management</p>
    </div>
  </div>
</section>
<section id="projects">
  <h2>My Projects</h2>

  <div className="projects-container">

    <div className="project-card">
      <h3>TCP Port Scanner</h3>
      <p>
        A Python-based network port scanner that checks ports on a target
        host and identifies open ports.
      </p>
      <p><strong>Technologies:</strong> Python, Networking</p>
      <a
        href="https://github.com/rabiabibi34d-arch/port-scanner"
        target="_blank"
        rel="noreferrer"
      >
        View on GitHub
      </a>
    </div>

    

    <div className="project-card">
      <h3>Portfolio Website</h3>
      <p>
        A responsive personal portfolio website built with React to
        showcase my skills, education and projects.
      </p>
      <p><strong>Technologies:</strong> React, JavaScript, CSS</p>
      <a href="#home">
        View Project
      </a>
    </div>

  </div>
</section>
<section id="education">
  <h2>Education</h2>
  <div className="education-container">

  <div className="education-card">
    <h3>Bachelor of Science in Computer Science</h3>
    <p>Government College University, Faisalabad</p>
    <p>Currently studying — 7th Semester</p>
    </div>
    <div className="education-card">
    <h3>Inermediate</h3>
    <p>Ideal college skp</p>
    <p>2021-2023</p>
    </div>
    <div className="education-card">
    <h3>Matric</h3>
    <p>Goverment School Skp</p>
    <p>2018-2020</p>
  </div>
  </div>
  </section>
  <section id="contact">
  <h2>contact me</h2>
  <div className="contact-container">

  <div className="contact-card">
    <h4>Number</h4>
    <p>0327-7231759</p>
    <h4>Gmail</h4>
    <p>rabiabibi34d@gamil.com</p>
    <a href="mailto:your-email@example.com">Email Me</a>
    <a href="https://www.linkedin.com/">LinkedIn</a>
    </div>
    </div>

</section>
    </div>
  )
}

export default App