import React, { useState, useEffect } from 'react';

// --- Sub-Component: The Animated Code Window ---
const CodeWindow = ({ codeSnippet, errorMsg, fixedCode, delay }) => {
  const [displayCode, setDisplayCode] = useState('');
  const [status, setStatus] = useState('typing'); // 'typing', 'error', 'fixing', 'success'
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    let timeout;
    
    // Cycle: Type -> Error -> Fix -> Success -> Reset
    const runAnimation = () => {
      // 1. Start Typing
      setStatus('typing');
      setDisplayCode(codeSnippet);
      setShowError(false);

      // 2. Trigger Error after 2 seconds
      timeout = setTimeout(() => {
        setStatus('error');
        setShowError(true);

        // 3. Start Fixing after 2.5 seconds of error
        setTimeout(() => {
          setStatus('fixing');
          setShowError(false);
          setDisplayCode(fixedCode); // Swap code to fixed version

          // 4. Show Success
          setTimeout(() => {
            setStatus('success');
            
            // 5. Reset loop after 4 seconds of success
            setTimeout(() => {
              runAnimation(); 
            }, 4000);

          }, 1500);
        }, 2500);
      }, 2000 + (Math.random() * 1000)); // Randomize slightly so they don't sync perfectly
    };

    // Initial delay to stagger animations between cards
    const initialTimer = setTimeout(runAnimation, delay);

    return () => clearTimeout(timeout);
  }, [codeSnippet, fixedCode, delay]);

  return (
    <div className={`relative w-full h-64 bg-[#1e1e1e] border rounded-lg shadow-2xl overflow-hidden flex flex-col transition-colors duration-500
      ${status === 'error' ? 'border-red-500/50 shadow-red-500/20' : 'border-gray-800'}
      ${status === 'success' ? 'border-green-500/50 shadow-green-500/20' : ''}
    `}>
      {/* Window Header */}
      <div className={`flex items-center px-4 py-2 border-b bg-[#252526] transition-colors duration-300
         ${status === 'error' ? 'border-red-900 bg-red-900/10' : 'border-gray-800'}
      `}>
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs font-mono text-gray-400">
           {status === 'error' ? 'Console - Error' : 'Visual Studio Code'}
        </div>
      </div>

      {/* Code Area */}
      <div className="p-4 font-mono text-xs md:text-sm leading-relaxed relative flex-1">
        {/* The Typing Code */}
        <pre className="text-gray-300 transition-all duration-300">
          <code dangerouslySetInnerHTML={{ __html: displayCode }} />
          {status === 'typing' || status === 'fixing' ? <span className="animate-pulse">|</span> : ''}
        </pre>

        {/* ERROR OVERLAY */}
        <div className={`absolute inset-0 bg-red-900/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${showError ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="text-red-200 font-bold text-lg mb-2">⚠ RUNTIME ERROR</div>
          <div className="bg-black/50 p-3 rounded text-red-400 font-mono text-xs w-full border-l-4 border-red-500">
             {errorMsg}
             <br/>
             <span className="text-gray-500">at /src/App.js:42:12</span>
          </div>
          <div className="mt-3 text-white text-xs animate-pulse">Debugging...</div>
        </div>

        {/* SUCCESS OVERLAY */}
        <div className={`absolute bottom-4 right-4 bg-green-900/90 text-green-200 px-4 py-2 rounded-full text-xs font-bold shadow-lg border border-green-500 flex items-center gap-2 transition-all duration-500 transform ${status === 'success' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
           <span>✔ BUG FIXED</span>
           <span className="text-[10px] font-normal opacity-75">Deployed</span>
        </div>
      </div>
    </div>
  );
};


const Experience = () => {
  const experiences = [
  {
    id: 1,
    role: "Backend Developer",
    company: "WW Journals",
    date: "Dec 2025 - Present",
    description: "Architecting robust backend systems for Journal Management. Streamlined communication by integrating automated mail marketing services and optimizing high-frequency data entry logic.",
    tech: ["Laravel", "PHP", "SMTP/Mail Services", "MySQL"],
    // Simulation Data: SMTP/Mail Marketing Fix
    code: `<span class="text-pink-400">Mail</span>::<span class="text-yellow-300">to</span>($user)-><span class="text-yellow-300">send</span>(<span class="text-pink-400">new</span> <span class="text-blue-300">Newsletter</span>($data));`,
    error: "ConnectionTimeout: Could not connect to SMTP host 'marketing-api.local'",
    fixed: `<span class="text-gray-500">// Added Queue & Failover</span>\n<span class="text-pink-400">Mail</span>::<span class="text-yellow-300">to</span>($user)-><span class="text-yellow-300">queue</span>(<span class="text-pink-400">new</span> <span class="text-blue-300">Newsletter</span>($data));`
  },
  {
    id: 2,
    role: "Full Stack Laravel Developer",
    company: "SNM TechCraft Innovation",
    date: "April 2024 - Dec 2025",
    description: "Developed scalable web applications focusing on seamless frontend-backend communication. Optimized RESTful APIs and built user-centric interfaces using modern Bootstrap/JS frameworks.",
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    // Simulation Data: REST API/CORS Fix
    code: `<span class="text-pink-400">fetch</span>(<span class="text-green-300">'https://api.techcraft.com/data'</span>)\n .<span class="text-yellow-300">then</span>(res => res.<span class="text-yellow-300">json</span>());`,
    error: "Access-Control-Allow-Origin: CORS header missing.",
    fixed: `<span class="text-gray-500">// Applied Laravel Middleware</span>\n<span class="text-pink-400">protected</span> $middleware = [\n  \\Fruitcake\\Cors\\HandleCors::<span class="text-pink-400">class</span>\n];`
  }
];

  return (
    <section id="experience" className="py-24 bg-[#0f0f0f] text-gray-300 overflow-hidden relative">
       {/* Background Ambience */}
       <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">Debugging</span> Journey
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Experience isn't just about years. It's about the errors faced, the bugs fixed, and the lessons learned.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-0.5 bg-gray-800 hidden md:block"></div>

          <div className="space-y-24 md:space-y-32">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`flex flex-col md:flex-row items-center gap-10 md:gap-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* 1. CONTENT SIDE (Text) */}
                <div className="w-full md:w-1/2 px-0 md:px-12 text-center md:text-left">
                  <div className={`space-y-4 ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                    <div className="inline-block px-3 py-1 bg-gray-800 rounded-full text-xs font-mono text-indigo-400 mb-2">
                      {exp.date}
                    </div>
                    <h3 className="text-3xl font-bold text-white">{exp.role}</h3>
                    <div className={`text-xl font-medium text-gray-400 flex items-center gap-2 ${index % 2 !== 0 ? 'md:justify-end' : ''} justify-center md:justify-start`}>
                      <span className="text-indigo-500">@</span> {exp.company}
                    </div>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {exp.description}
                    </p>
                    {/* Tech Stack Tags */}
                    <div className={`flex flex-wrap gap-2 pt-2 ${index % 2 !== 0 ? 'md:justify-end' : ''} justify-center md:justify-start`}>
                      {exp.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-[#1a1a1a] border border-gray-700 rounded text-sm text-gray-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Connector Dot (Hidden on mobile) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#0f0f0f] border-4 border-gray-700 rounded-full hidden md:flex items-center justify-center z-10">
                   <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                </div>

                {/* 2. VISUAL SIDE (Animated Screen) */}
                <div className="w-full md:w-1/2 px-0 md:px-12">
                   {/* We pass a slight delay so they don't all error at the exact same time */}
                   <CodeWindow 
                      codeSnippet={exp.code} 
                      errorMsg={exp.error} 
                      fixedCode={exp.fixed} 
                      delay={index * 1500} 
                   />
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;