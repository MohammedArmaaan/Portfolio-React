import React from 'react';

const Projects = () => {
  // Modal state aur scroll logic ki ab zaroorat nahi hai

  const projects = [
    {
      id: 1,
      title: "Panji Tea - Savera",
      description: "A high-end, responsive static website designed for a specialty tea brand. The project focuses on a clean, aesthetic to showcase premium products and Attract users, List Products/Services, Inquiry Form Direct To mail, Contact Information, Brand Storytelling.",
      tech: ["Laravel", "React", "MySQL"],
      role: "Full Stack",
      liveUrl: "https://panji-savera.vercel.app/",
      livecode: "https://github.com/MohammedArmaaan/Panji-Tea",
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Collaborative tool for teams to track progress. Implements Kanban-style boards, role-based access control (RBAC), and real-time notifications.",
      tech: ["Laravel", "Bootstrap", "MySQL"],
      role: "Backend Lead",
      liveUrl: "https://mohammedarmaaan.github.io/Portfolio/",
      livecode: "https://github.com/MohammedArmaaan/Portfolio-React",
    },
    {
      id: 3,
      title: "Subscription Management System",
      description: "Lightweight CRUD application for educational institutes. Handles student records, attendance tracking, and grade management efficiently.",
      tech: ["PHP", "MySQL", "HTML/CSS"],
      role: "Solo Dev",
      liveUrl: "https://snmtc.in/majlis",
      livecode: "https://github.com/MohammedArmaaan/Subscription-Based-Pannel",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#0f0f0f] text-gray-300 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(to right, #4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Repositories</span>
          </h2>
          <p className="text-gray-400">Selected projects demonstrating full-stack capabilities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              
              {/* Card Header (Mac OS Style) */}
              <div className="px-6 py-3 border-b border-gray-800 bg-[#202020] flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50 group-hover:bg-red-500 transition-colors"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50 group-hover:bg-yellow-500 transition-colors"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50 group-hover:bg-green-500 transition-colors"></div>
                </div>
                <div className="text-xs font-mono text-gray-500 group-hover:text-indigo-400">id: {project.id}</div>
              </div>

              <div className="p-6 flex flex-col h-[320px]">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-0 leading-relaxed line-clamp-3 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/20 border border-cyan-500/20 rounded">{t}</span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                  {/* LIVE DEMO BUTTON - New Tab Logic */}
                  <button
                    onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded transition-colors shadow-lg shadow-indigo-500/20"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </button>

                  {/* CODE BUTTON */}
                  <button
                    onClick={() => window.open(project.livecode, "_blank", "noopener,noreferrer")}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-[#252526] hover:bg-[#333] border border-gray-700 text-gray-300 text-sm font-medium rounded transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;