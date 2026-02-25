import React, { useState } from 'react';

const SkillsTerminal = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [activeSkill, setActiveSkill] = useState("React.js");

  // --- ICONS (Using Official DevIcon URLs for 100% Accuracy) ---
  const Icons = {
    Folder: ({ className }) => <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" /></svg>
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
          <div className="font-mono text-sm space-y-1 p-2">
            <div className="text-white">php artisan serve</div>
            <div className="text-gray-400">Starting Laravel development server...</div>
            <div className="text-green-400">Server is running on [http://127.0.0.1:8000]</div>
            <div className="text-gray-500 mt-2">// GET /api/user Response:</div>
            <div className="text-green-400">
              <div>{'{'}</div>
              <div className="pl-4">"name": "Armaan",</div>
              <div className="pl-4">"role": "Developer",</div>
              <div className="pl-4">"status": 200</div>
              <div>{'}'}</div>
            </div>
          </div>
        )
      },
      "Python": {
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        file: "main.py",
        code: `<span class="text-pink-400">from</span> fastapi <span class="text-pink-400">import</span> FastAPI

app = <span class="text-blue-300">FastAPI</span>()

<span class="text-blue-400">@app.get</span>(<span class="text-green-300">"/"</span>)
<span class="text-blue-400">def</span> <span class="text-blue-300">read_root</span>():
    <span class="text-pink-400">return</span> {<span class="text-green-300">"status"</span>: <span class="text-green-300">"Python API Active"</span>}`,
        output: (
          <div className="font-mono text-sm space-y-1 p-2">
            <div className="text-white">uvicorn main:app --reload</div>
            <div className="text-gray-400">INFO: Will watch for changes...</div>
            <div className="text-green-400">Application startup complete.</div>
          </div>
        )
      },
      "Java": {
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        file: "UserController.java",
        code: `<span class="text-blue-400">@RestController</span>
<span class="text-pink-400">public class</span> <span class="text-blue-300">UserController</span> {'{'}
    <span class="text-blue-400">@GetMapping</span>(<span class="text-green-300">"/status"</span>)
    <span class="text-pink-400">public</span> String <span class="text-blue-300">getStatus</span>() {'{'}
        <span class="text-pink-400">return</span> <span class="text-green-300">"Java Spring Boot is Live"</span>;
    {'}'}
{'}'}`,
        output: (
          <div className="font-mono text-sm space-y-1 p-2">
            <div className="text-white">mvn spring-boot:run</div>
            <div className="text-gray-400">Tomcat started on port(s): 8080</div>
            <div className="text-green-400">Started DemoApplication in 2.5s</div>
          </div>
        )
      },
      "PHP": {
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        file: "index.php",
        code: `<span class="text-gray-500">&lt;?php</span>
<span class="text-blue-300">echo</span> <span class="text-green-300">"Native PHP is running..."</span>;`,
        output: (
          <div className="font-mono text-sm p-2">
            <div className="text-white">php -S localhost:8000</div>
            <div className="text-green-400">Native PHP is running...</div>
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
        code: `<span class="text-blue-400">$</span> git add .
<span class="text-blue-400">$</span> git commit -m <span class="text-green-300">"feat: add dashboard logic"</span>
<span class="text-blue-400">$</span> git push origin main`,
        output: (
          <div className="font-mono text-sm space-y-1 p-2">
            <div className="text-gray-400">Enumerating objects: 12, done.</div>
            <div className="text-gray-400">Delta compression using up to 8 threads.</div>
            <div className="text-green-400">✓ Push successful to origin/main</div>
          </div>
        )
      },
      "GitHub": {
        // GitHub logo visibility fix: humne 'github-original.svg' ki jagah simple SVG path 
        // ya external high-contrast link use kiya hai
        logo: "https://www.vectorlogo.zone/logos/github/github-tile.svg",
        file: "deploy.yml",
        code: `<span class="text-pink-400">name:</span> <span class="text-green-300">CI/CD Pipeline</span>
<span class="text-pink-400">on:</span> [push]
<span class="text-pink-400">jobs:</span>
  <span class="text-pink-400">deploy:</span>
    <span class="text-pink-400">runs-on:</span> ubuntu-latest`,
        output: (
          <div className="font-mono text-sm space-y-1 p-2">
            <div className="text-yellow-400">● Running: Build Job...</div>
            <div className="text-green-400">✓ Deployment to Vercel complete!</div>
            <div className="text-blue-400 underline cursor-pointer text-[10px]">https://armaan-dev.vercel.app</div>
          </div>
        )
      },
      //   "Docker": {
      //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      //     file: "Dockerfile",
      //     code: `<span class="text-pink-400">FROM</span> node:18
      // <span class="text-pink-400">WORKDIR</span> /app
      // <span class="text-pink-400">COPY</span> . .
      // <span class="text-pink-400">RUN</span> npm install
      // <span class="text-pink-400">CMD</span> [<span class="text-green-300">"npm"</span>, <span class="text-green-300">"start"</span>]`,
      //     output: (
      //       <div className="font-mono text-sm space-y-1 p-2">
      //         <div className="text-white">docker-compose up -d</div>
      //         <div className="text-blue-400">Creating network "app_default"</div>
      //         <div className="text-green-400">Container app_web_1 is healthy.</div>
      //       </div>
      //     )
      //   },
      "Postman": {
        // Postman logo kaafi colorful hai aur visible rehta hai
        logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        file: "API Testing",
        code: `<span class="text-blue-300">GET</span> <span class="text-green-300">/api/v1/health</span>
<span class="text-pink-400">Authorization:</span> Bearer <span class="text-gray-400">JWT_TOKEN</span>
<span class="text-pink-400">Content-Type:</span> application/json`,
        output: (
          <div className="font-mono text-sm p-2">
            <div className="flex items-center space-x-2">
              <span className="text-green-400 font-bold">200 OK</span>
              <span className="text-gray-500">124ms</span>
            </div>
            <div className="text-gray-300 mt-1">{'{'} "status": "healthy" {'}'}</div>
          </div>
        )
      }
    },
    Other: {
      "Flask": {
        // Flask ka official logo thoda dark hota hai, display ke waqt 'invert' use kar sakte hain
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        file: "app.py",
        code: `<span class="text-pink-400">from</span> flask <span class="text-pink-400">import</span> Flask

app = <span class="text-blue-300">Flask</span>(__name__)

<span class="text-blue-400">@app.route</span>(<span class="text-green-300">'/'</span>)
<span class="text-blue-400">def</span> <span class="text-blue-300">hello</span>():
    <span class="text-pink-400">return</span> <span class="text-green-300">"Flask Micro-Framework Active"</span>`,
        output: (
          <div className="font-mono text-sm p-2">
            <div className="text-white">python app.py</div>
            <div className="text-green-400">* Running on http://127.0.0.1:5000</div>
          </div>
        )
      },
      "Django": {
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        file: "views.py",
        code: `<span class="text-pink-400">from</span> django.http <span class="text-pink-400">import</span> HttpResponse

<span class="text-blue-400">def</span> <span class="text-blue-300">index</span>(request):
    <span class="text-pink-400">return</span> <span class="text-blue-300">HttpResponse</span>(<span class="text-green-300">"Django Server is Up"</span>)`,
        output: (
          <div className="font-mono text-sm space-y-1 p-2">
            <div className="text-white">python manage.py runserver</div>
            <div className="text-gray-400">Performing system checks...</div>
            <div className="text-green-400">Quit the server with CONTROL-C.</div>
          </div>
        )
      },
      "AI/ML": {
        // Scikit-learn or Python logo is best for AI/ML representation
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        file: "model.py",
        code: `<span class="text-gray-500"># Artificial Intelligence & Machine Learning</span>
<span class="text-blue-300">print</span>(<span class="text-green-300">"Loading Neural Network..."</span>);`,
        output: (
          <div className="flex flex-col items-center justify-center h-full border-2 border-dashed border-gray-700 rounded-lg p-4 bg-gray-900/50">
            <div className="animate-pulse text-pink-500 font-bold tracking-widest text-xs mb-1 text-center">COMING SOON</div>
            <div className="text-[10px] text-gray-400 uppercase text-center">Training Models...</div>
          </div>
        )
      },
      "Data Science": {
        // Pandas is the standard for DS
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        file: "analysis.ipynb",
        code: `<span class="text-pink-400">import</span> pandas <span class="text-pink-400">as</span> pd
<span class="text-pink-400">import</span> numpy <span class="text-pink-400">as</span> np

<span class="text-gray-500"># Data Analysis Pipeline</span>`,
        output: (
          <div className="flex flex-col items-center justify-center h-full border-2 border-dashed border-gray-700 rounded-lg p-4 bg-gray-900/50">
            <div className="animate-pulse text-blue-500 font-bold tracking-widest text-xs mb-1 text-center">COMING SOON</div>
            <div className="text-[10px] text-gray-400 uppercase text-center">Processing Datasets...</div>
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