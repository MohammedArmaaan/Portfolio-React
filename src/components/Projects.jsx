import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [deviceView, setDeviceView] = useState('desktop');

  // --- 1. DISABLE BACKGROUND SCROLL LOGIC ---
  useEffect(() => {
    if (selectedProject) {
      // Jab modal open ho, scroll band kar do
      document.body.style.overflow = 'hidden';
    } else {
      // Jab modal close ho, scroll wapas chalu kar do
      document.body.style.overflow = 'unset';
    }

    // Cleanup: Agar component unmount ho to scroll wapas normal kar do
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);


  // --- DATA ---
  const projects = [
    {
      id: 1,
      title: "Job Portal Application",
      description: "A comprehensive platform connecting employers and job seekers. Features include resume parsing, job posting management, and admin moderation tools.",
      tech: ["Laravel", "React", "MySQL"],
      role: "Full Stack",
      liveUrl: "https://panji-savera.vercel.app/", 
      livecode: "https://github.com/MohammedArmaaan/Panji-Tea",
      stars: 12,
      forks: 4
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Collaborative tool for teams to track progress. Implements Kanban-style boards, role-based access control (RBAC), and real-time notifications.",
      tech: ["Laravel", "Bootstrap", "MySQL"],
      role: "Backend Lead",
      liveUrl: "https://mohammedarmaaan.github.io/Portfolio/", 
      livecode: "https://github.com/MohammedArmaaan/Portfolio-React",
      stars: 8,
      forks: 2
    },
    {
      id: 3,
      title: "Student Management System",
      description: "Lightweight CRUD application for educational institutes. Handles student records, attendance tracking, and grade management efficiently.",
      tech: ["PHP", "MySQL", "HTML/CSS"],
      role: "Solo Dev",
      liveUrl: "https://snmtc.in/majlis", 
      livecode: "https://github.com/MohammedArmaaan/Subscription-Based-Pannel",
      stars: 5,
      forks: 1
    }
  ];

  const getIframeWidth = () => {
    switch(deviceView) {
      case 'mobile': return 'max-w-[375px]';
      // case 'tablet': return 'max-w-[768px]';
      default: return 'max-w-full';
    }
  };

  // Close Function
  const handleClose = () => setSelectedProject(null);

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

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
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
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/20 border border-cyan-500/20 rounded">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                  <button onClick={() => setSelectedProject(project)} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded transition-colors shadow-lg shadow-indigo-500/20">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    Live Demo
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#252526] hover:bg-[#333] border border-gray-700 text-gray-300 text-sm font-medium rounded transition-colors">
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- LIVE PREVIEW MODAL --- */}
        {selectedProject && (
          // 1. BACKDROP CLICK: Clicking here closes the modal
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={handleClose}
          >
            {/* 2. STOP PROPAGATION: Clicking inside the modal won't close it */}
            <div 
              className="w-full max-w-6xl h-[85vh] bg-[#1a1a1a] rounded-xl border border-gray-700 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-gray-700">
                
                {/* Traffic Lights (Red button also closes) */}
                <div className="flex items-center gap-2 w-20">
                   <button onClick={handleClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-sm"></button>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                {/* Device Switcher */}
                <div className="hidden md:flex bg-[#1a1a1a] rounded-lg p-1 border border-gray-700">
                   <button onClick={() => setDeviceView('desktop')} className={`p-2 rounded ${deviceView === 'desktop' ? 'bg-gray-700 text-white' : 'text-gray-500 hover:text-gray-300'}`}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></button>
                   {/* <button onClick={() => setDeviceView('tablet')} className={`p-2 rounded ${deviceView === 'tablet' ? 'bg-gray-700 text-white' : 'text-gray-500 hover:text-gray-300'}`}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg></button> */}
                   <button onClick={() => setDeviceView('mobile')} className={`p-2 rounded ${deviceView === 'mobile' ? 'bg-gray-700 text-white' : 'text-gray-500 hover:text-gray-300'}`}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg></button>
                </div>

                {/* 3. BIG CLOSE BUTTON (X) */}
                <div className="w-20 flex justify-end">
                   <button 
                     onClick={handleClose}
                     className="p-2 text-gray-400 hover:text-red-500 hover:bg-gray-800 rounded-lg transition-all"
                     title="Close Modal"
                   >
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                     </svg>
                   </button>
                </div>
              </div>

              {/* URL Bar */}
              <div className="bg-[#202020] border-b border-gray-800 py-2 px-4 flex justify-center">
                 <div className="bg-[#151515] text-gray-400 text-xs font-mono px-4 py-1.5 rounded-full border border-gray-700 w-full max-w-2xl text-center flex items-center justify-between">
                    <span className="truncate flex-1">{selectedProject.liveUrl}</span>
                    <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="ml-2 hover:text-white" title="Open in new tab">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                 </div>
              </div>

              {/* Iframe Canvas Area */}
              <div className="flex-1 bg-[#121212] overflow-hidden relative flex justify-center py-8">
                 <div className={`transition-all duration-300 ease-in-out h-full shadow-2xl overflow-hidden bg-white ${getIframeWidth()} ${deviceView !== 'desktop' ? 'border-[8px] border-gray-800 rounded-[2rem]' : 'w-full border-none'}`}>
                   <iframe 
                      src={selectedProject.liveUrl} 
                      title="Project Preview"
                      className="w-full h-full bg-white"
                      frameBorder="0"
                   ></iframe>
                 </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;