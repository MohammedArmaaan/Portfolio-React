const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div>
          <h3>Frontend</h3>
          <ul>
            <li>React.js</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>Bootstrap / Tailwind</li>
          </ul>
        </div>

        <div>
          <h3>Backend</h3>
          <ul>
            <li>Laravel</li>
            <li>PHP</li>
            <li>REST APIs</li>
            <li>Authentication & Authorization</li>
          </ul>
        </div>

        <div>
          <h3>Database</h3>
          <ul>
            <li>MySQL</li>
            <li>PostgreSQL</li>
          </ul>
        </div>

        <div>
          <h3>Tools</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>Vite</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
