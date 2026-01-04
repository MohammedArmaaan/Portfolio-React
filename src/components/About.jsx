import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full py-20 bg-[#0f0f0f] overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(to right, #4f46e5 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-800 relative overflow-hidden"
        >
          {/* Top border gradient line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>

          {/* Header */}
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-extrabold text-white mb-8 inline-block"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a <span className="font-bold text-indigo-400">Full Stack Developer</span> with{' '}
                <span className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-2 py-1 rounded-md font-mono text-sm font-semibold">
                  1 year and 5 months
                </span>{' '}
                of hands-on experience in designing, developing, and deploying web applications.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in building scalable applications using modern technologies with a strong focus on:
              </p>

              {/* Feature List with Icons */}
              <ul className="space-y-3 mt-4">
                {['Performance Optimization', 'Clean UI / UX', 'Backend Efficiency'].map((item, index) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="flex items-center text-gray-300 font-medium group"
                  >
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right Column: Visual/Card */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              {/* Glow behind the code card */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transform rotate-3 rounded-2xl opacity-20 blur-xl"></div>
              
              {/* The "Profile Code" Card */}
              <div className="relative bg-[#111] border border-gray-700 p-6 rounded-xl shadow-2xl font-mono text-sm leading-relaxed">
                {/* Window Controls */}
                <div className="flex space-x-2 mb-4 border-b border-gray-800 pb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-auto text-xs text-gray-600">developer.json</div>
                </div>
                
                {/* JSON Content */}
                <div className="text-gray-300">
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">profile</span> <span className="text-white">=</span> <span className="text-yellow-400">{"{"}</span></p>
                  
                  <div className="pl-6 space-y-1">
                     <p>
                        <span className="text-indigo-300">name:</span> <span className="text-green-400">'Mohammed Armaan'</span>,
                     </p>
                     <p>
                        <span className="text-indigo-300">role:</span> <span className="text-green-400">'Full Stack Developer'</span>,
                     </p>
                     <p>
                        <span className="text-indigo-300">status:</span> <span className="text-orange-400">'Open to work'</span>,
                     </p>
                     <p>
                        <span className="text-indigo-300">passions:</span> <span className="text-yellow-400">['Code', 'Coffee', 'Build']</span>
                     </p>
                  </div>
                  
                  <p className="text-yellow-400">{"}"}</p>
                </div>
              </div>

              {/* Decorative Floating Element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#1a1a1a] border border-gray-700 rounded-xl flex items-center justify-center shadow-lg animate-bounce-slow">
                 <span className="text-4xl">🚀</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* CSS Animation for the floating rocket */}
      <style jsx>{`
        .animate-bounce-slow {
          animation: bounce 4s infinite ease-in-out;
        }
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default About;