import React, { useState } from 'react';

const SkillsTerminal = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [activeSkill, setActiveSkill] = useState("React.js");

  // --- ICONS (Using Official DevIcon URLs for 100% Accuracy) ---
  const Icons = {
    Folder: ({ className }) => <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>
  };

  const skillCategories = {
    Frontend: {
      "React.js": {
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        file: "App.jsx",
        code: `<span class="text-pink-400">import</span> React, { useState } <span class="text-pink-400">from</span> <span class="text-green-300">'react'</span>;

<span class="text-blue-400">const</span> <span class="text-yellow-300">App</span> = () => {
  <span class="text-blue-400">const</span> [count, setCount] = <span class="text-blue-300">useState</span>(<span class="text-orange-300">0</span>);
  <span class="text-pink-400">return</span> (
    <span class="text-gray-400">&lt;</span><span class="text-red-400">button</span> 
      <span class="text-purple-300">onClick</span>={() => <span class="text-blue-300">setCount</span>(c => c+1)}
      <span class="text-purple-300">className</span>=<span class="text-green-300">"btn"</span>
    <span class="text-gray-400">&gt;</span>
      Count is: {count}
    <span class="text-gray-400">&lt;/</span><span class="text-red-400">button</span><span class="text-gray-400">&gt;</span>
  );
};`,
        output: (
          <div className="flex flex-col items-center justify-center h-full space-y-2">
            <span className="text-gray-500 text-xs mb-2">Browser Preview:</span>
            <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors text-xs">
              Count is: 5
            </button>
          </div>
        )
      },
      "JavaScript": {
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        file: "logic.js",
        code: `<span class="text-gray-500">// Processing Data...</span>
<span class="text-blue-400">const</span> users = [<span class="text-green-300">"Armaan"</span>, <span class="text-green-300">"Dev"</span>];
<span class="text-blue-300">console</span>.<span class="text-blue-300">log</span>(<span class="text-green-300">"User Found:"</span>, users[<span class="text-orange-300">0</span>]);`,
        output: (
          <div className="font-mono text-sm space-y-1 p-2">
            <div className="text-gray-400 flex"><span className="text-green-500 mr-2">➜</span> node logic.js</div>
            <div className="text-yellow-300">User Found: Armaan</div>
            <div className="text-gray-500 mt-2">Process finished with exit code 0</div>
          </div>
        )
      },
      "HTML5 & CSS3": {
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        file: "index.html",
        code: `<span class="text-gray-400">&lt;</span><span class="text-red-400">div</span> <span class="text-purple-300">class</span>=<span class="text-green-300">"card"</span><span class="text-gray-400">&gt;</span>
  <span class="text-gray-400">&lt;</span><span class="text-red-400">h3</span><span class="text-gray-400">&gt;</span>Armaan<span class="text-gray-400">&lt;/</span><span class="text-red-400">h3</span><span class="text-gray-400">&gt;</span>
  <span class="text-gray-400">&lt;</span><span class="text-red-400">p</span><span class="text-gray-400">&gt;</span>Full Stack Dev<span class="text-gray-400">&lt;/</span><span class="text-red-400">p</span><span class="text-gray-400">&gt;</span>
<span class="text-gray-400">&lt;/</span><span class="text-red-400">div</span><span class="text-gray-400">&gt;</span>`,
        output: (
          <div className="flex justify-center items-center h-full">
            <div className="bg-white text-gray-800 p-2 rounded shadow border-l-4 border-orange-500 w-32">
              <h3 className="font-bold text-sm">Armaan</h3>
              <p className="text-[10px] text-gray-500">Full Stack</p>
            </div>
          </div>
        )
      },
      "Tailwind CSS": {
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        file: "style.css",
        code: `<span class="text-red-400">.btn</span> {
  <span class="text-purple-300">@apply</span> px-4 py-2 bg-indigo-500 text-white rounded;
}`,
        output: (
          <div className="flex justify-center items-center h-full">
             <button className="px-4 py-2 bg-indigo-500 text-white rounded shadow hover:bg-indigo-600 transition-colors text-xs">
               Tailwind Styled
             </button>
          </div>
        )
      }
    },
    Backend: {
      "Laravel": {
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        file: "api.php",
        code: `Route::<span class="text-blue-300">get</span>(<span class="text-green-300">'/user'</span>, <span class="text-blue-400">function</span> () {
    <span class="text-pink-400">return</span> response()-><span class="text-blue-300">json</span>([
       <span class="text-green-300">'name'</span> => <span class="text-green-300">'Armaan'</span>,
       <span class="text-green-300">'role'</span> => <span class="text-green-300">'Developer'</span>
    ]);
});`,
        output: (
          <div className="font-mono text-sm text-green-400 p-2">
            <div className="text-gray-500 mb-2">// GET /api/user Response:</div>
            <div>{'{'}</div>
            <div className="pl-4">"name": "Armaan",</div>
            <div className="pl-4">"role": "Developer",</div>
            <div className="pl-4">"status": 200</div>
            <div>{'}'}</div>
          </div>
        )
      },
      "PHP": {
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        file: "script.php",
        code: `<span class="text-gray-500">&lt;?php</span>
<span class="text-blue-300">echo</span> <span class="text-green-300">"Server is running on Port 8000..."</span>;`,
        output: (
          <div className="font-mono text-sm space-y-1 p-2">
             <div className="text-white">php artisan serve</div>
             <div className="text-gray-400">Starting Laravel development server...</div>
             <div className="text-green-400">Server is running on Port 8000...</div>
          </div>
        )
      }
    },
    Database: {
      "MySQL": {
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        file: "query.sql",
        code: `<span class="text-pink-400">SELECT</span> id, email <span class="text-pink-400">FROM</span> users 
<span class="text-pink-400">WHERE</span> status = <span class="text-green-300">'active'</span>
<span class="text-pink-400">LIMIT</span> 2;`,
        output: (
          <div className="font-mono text-xs w-full max-w-md p-2">
            <div className="grid grid-cols-2 gap-4 border-b border-gray-600 pb-1 mb-1 text-blue-300">
              <span>id</span>
              <span>email</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              <span>101</span>
              <span>contact@armaan.dev</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              <span>102</span>
              <span>admin@website.com</span>
            </div>
            <div className="mt-2 text-gray-500">2 rows in set (0.00 sec)</div>
          </div>
        )
      }
    },
    Tools: {
      "Git": {
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        file: "terminal",
        code: `$ git commit -m <span class="text-green-300">"Initial commit"</span>
$ git push origin main`,
        output: (
          <div className="font-mono text-sm space-y-1 p-2">
            <div className="text-gray-400">Enumerating objects: 5, done.</div>
            <div className="text-gray-400">Writing objects: 100% (5/5), 420 bytes, done.</div>
            <div className="text-green-400">To github.com:armaan/portfolio.git</div>
            <div className="text-white">   98a2c1..f4b2a1  main - main</div>
          </div>
        )
      }
    }
  };

  const handleTabClick = (category) => {
    setActiveTab(category);
    setActiveSkill(Object.keys(skillCategories[category])[0]);
  };

  const currentSkillData = skillCategories[activeTab][activeSkill];

  return (
    <section id="skills" className="py-20 bg-[#121212] text-gray-300 relative overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 w-full relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-2">Technical Arsenal</h2>
          <p className="text-gray-400">My code stack and live outputs.</p>
        </div>

        {/* --- MAIN INTERFACE --- */}
        {/* CHANGED: Reduced Height to 500px */}
        <div className="bg-[#1e1e1e] border border-[#333] rounded-xl shadow-2xl overflow-hidden flex flex-col h-[500px] md:h-[500px] relative">
          
          {/* 1. TOP BAR: Category Tabs */}
          <div className="flex bg-[#252526] border-b border-[#333] overflow-x-auto no-scrollbar">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => handleTabClick(category)}
                className={`
                  px-6 py-3 text-sm font-medium transition-colors border-r border-[#333] flex items-center whitespace-nowrap
                  ${activeTab === category 
                    ? 'bg-[#1e1e1e] text-white border-t-2 border-t-indigo-500' 
                    : 'bg-[#2d2d2d] text-gray-500 hover:bg-[#333] hover:text-gray-300'}
                `}
              >
               <Icons.Folder className="w-4 h-4 mr-2" /> {category}
              </button>
            ))}
          </div>

          <div className="flex flex-1 overflow-hidden">
            
            {/* 2. SIDEBAR: Skills List */}
            <div className="w-64 bg-[#252526] border-r border-[#333] flex flex-col hidden md:flex">
              <div className="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                EXPLORER
              </div>
              <div className="flex-1 overflow-y-auto">
                {Object.keys(skillCategories[activeTab]).map((skill) => (
                  <button
                    key={skill}
                    onClick={() => setActiveSkill(skill)}
                    className={`
                      w-full text-left px-4 py-2 flex items-center space-x-2 text-sm transition-all border-l-2
                      ${activeSkill === skill 
                        ? 'bg-[#37373d] text-white border-indigo-500' 
                        : 'border-transparent text-gray-400 hover:bg-[#2a2d2e] hover:text-gray-200'}
                    `}
                  >
                    {/* CHANGED: Using Image Tag for Real Logo */}
                    <img 
                      src={skillCategories[activeTab][skill].logo} 
                      alt={skill} 
                      className="w-4 h-4 object-contain opacity-90"
                    />
                    <span>{skill}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. RIGHT PANEL: Code + Output */}
            <div className="flex-1 bg-[#1e1e1e] flex flex-col relative z-0">
              
              {/* --- WATERMARK LOGO (ACTUAL LOGO) --- */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-10 md:left-auto md:right-10 md:translate-x-0 md:translate-y-0 pointer-events-none opacity-[0.07] transition-all duration-500 z-0">
                 {/* CHANGED: Using Image Tag for Watermark */}
                 <img 
                    src={currentSkillData.logo} 
                    alt="watermark" 
                    className="w-48 h-48 md:w-64 md:h-64 object-contain grayscale"
                 />
              </div>

              {/* File Header */}
              <div className="flex items-center px-4 py-2 bg-[#1e1e1e] border-b border-[#333] text-xs text-gray-400 font-mono z-10 relative">
                <span className="mr-2 text-yellow-500">JS</span>
                {currentSkillData.file}
              </div>

              {/* CODE SECTION */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-auto flex-1 z-10 relative">
                 <pre>
                   <code dangerouslySetInnerHTML={{ __html: currentSkillData.code }} />
                 </pre>
              </div>

              {/* OUTPUT SECTION */}
              <div className="h-[35%] border-t-2 border-[#333] bg-[#1a1a1a] flex flex-col z-10 relative">
                 <div className="flex justify-between items-center px-4 py-1 bg-[#252526] border-b border-[#333]">
                    <span className="text-xs font-bold text-gray-400 uppercase">Terminal / Output</span>
                    <div className="flex space-x-2">
                       <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                       <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    </div>
                 </div>
                 
                 <div className="flex-1 overflow-auto font-mono text-sm p-2">
                    {currentSkillData.output}
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTerminal;