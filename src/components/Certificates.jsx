import React from 'react';
import { ExternalLink, Award, CheckCircle } from 'lucide-react';

const Certificates = () => {
  const certifications = [
    {
      id: 1,
      title: "Html Certificate",
      provider: "Parul University",
      date: "2026",
      status: "Verified",
      fileUrl: "/assets/Html-Certificate.pdf", 
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 2,
      title: "Web Designing	and	Development",
      provider: "Parul University",
      date: "2026",
      status: "Verified",
      fileUrl: "/assets/Website Designing & Development Certificate.pdf",
      tags: ["HTML", "CSS", "JavaScript",]
    },
    {
      id: 3,
      title: "Data Science Specialization",
      provider: "Code With Harry",
      date: "2025",
      status: "Verified",
      fileUrl: "/assets/Data Science Certificate - Harry.pdf", 
      tags: ["Python", "Statistics", "Machine Learning"]
    }
    
  ];

  return (
    <section id="certificates" className="py-24 bg-[#0f0f0f] text-gray-300 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Certificate</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="group bg-[#161616] border border-gray-800 p-8 rounded-xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(79,70,229,0.3)]">
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:scale-110 transition-transform">
                   <Award size={28} />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-green-900/20 border border-green-500/30 rounded-full">
                  <CheckCircle size={12} className="text-green-500" />
                  <span className="text-[10px] font-mono text-green-400 tracking-widest uppercase">Verified</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-gray-500 font-mono text-sm mb-6">{cert.provider} • {cert.date}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {cert.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-1 bg-[#1e1e1e] border border-gray-800 rounded text-gray-500 group-hover:border-indigo-500/30">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Button: Ab ye direct Link hai */}
              <a 
                href={cert.fileUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#1e1e1e] border border-gray-700 rounded-lg text-sm font-medium hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all shadow-lg"
              >
                View Certificate <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;