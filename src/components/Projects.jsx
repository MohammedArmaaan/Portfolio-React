const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        <div className="card">
          <h3>Job Portal Web Application</h3>
          <p>
            A complete job portal with Admin, Employer, and Job Seeker roles
            built using Laravel and React.
          </p>
          <p><strong>Tech:</strong> Laravel, React, MySQL</p>
        </div>

        <div className="card">
          <h3>Task Management System</h3>
          <p>
            Role-based task management system with authentication and dashboards.
          </p>
          <p><strong>Tech:</strong> Laravel, Bootstrap, MySQL</p>
        </div>

        <div className="card">
          <h3>Student Management System</h3>
          <p>
            CRUD-based student management system with login functionality.
          </p>
          <p><strong>Tech:</strong> PHP, MySQL</p>
        </div>
      </div>
    </section>
  )
}

export default Projects
