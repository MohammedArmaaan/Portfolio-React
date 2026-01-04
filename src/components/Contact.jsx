import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error'
  const [copied, setCopied] = useState(false);

  // --- CONFIG ---
  const contactInfo = {
    email: "yourname@gmail.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    location: "Ahmedabad, Gujarat"
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    // --- WEB3FORMS SUBMISSION LOGIC ---
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // REPLACE THIS WITH YOUR ACTUAL ACCESS KEY FROM WEB3FORMS
          access_key: "1e6d8509-6b4d-4dc7-bf46-efa9b42714d3", 
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmissionStatus("success");
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setSubmissionStatus("error");
        console.error("Form Error:", result);
      }
    } catch (error) {
      setSubmissionStatus("error");
      console.error("Network Error:", error);
    } finally {
      setIsSubmitting(false);
      // Clear success message after 5 seconds
      setTimeout(() => setSubmissionStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0f0f0f] text-gray-300 relative overflow-hidden">
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(to right, #4f46e5 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>
      
      {/* Glowing Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Connection</span>
          </h2>
          <p className="text-gray-400">
            Have a project in mind? Let's compile some ideas together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* LEFT SIDE: Contact Info (Slide In Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 relative group hover:border-indigo-500/50 transition-colors shadow-2xl">
               <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
               <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                 <span className="text-indigo-400">./</span>contact_info
               </h3>
               
               <div className="space-y-4 font-mono text-sm">
                 
                 {/* Email Item */}
                 <div className="flex flex-col">
                   <span className="text-gray-500 mb-1">// Click to copy</span>
                   <div className="flex items-center gap-3 bg-[#111] p-3 rounded border border-gray-800 hover:border-gray-600 transition-colors">
                     <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                     <span className="flex-1 text-gray-300 truncate">{contactInfo.email}</span>
                     <button 
                       onClick={handleCopyEmail}
                       className="p-2 hover:bg-gray-700 rounded transition-colors relative"
                       title="Copy Email"
                     >
                       {copied ? (
                         <motion.span 
                           initial={{ scale: 0 }} 
                           animate={{ scale: 1 }} 
                           className="text-green-400 font-bold text-xs"
                         >
                           COPIED!
                         </motion.span>
                       ) : (
                         <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                       )}
                     </button>
                   </div>
                 </div>

                 {/* Social Links */}
                 <div className="grid grid-cols-2 gap-4 pt-2">
                   <a href={contactInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#111] p-3 rounded border border-gray-800 hover:border-indigo-500/50 hover:text-white transition-all group/link">
                     <svg className="w-5 h-5 text-gray-400 group-hover/link:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                     <span>GitHub</span>
                   </a>
                   <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#111] p-3 rounded border border-gray-800 hover:border-indigo-500/50 hover:text-white transition-all group/link">
                     <svg className="w-5 h-5 text-gray-400 group-hover/link:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                     <span>LinkedIn</span>
                   </a>
                 </div>

                 {/* Location */}
                 <div className="flex items-center gap-3 text-gray-400 pt-2">
                   <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                   <span>{contactInfo.location}</span>
                 </div>
               </div>
            </div>

            {/* Terminal Footer */}
            <div className="hidden md:block font-mono text-xs text-gray-500">
               <p><span className="text-green-500">user@portfolio</span>:<span className="text-blue-500">~/contact</span>$ echo "Let's work together"</p>
               <p className="text-gray-400 mt-1">Let's work together</p>
               <p className="mt-1"><span className="text-green-500">user@portfolio</span>:<span className="text-blue-500">~/contact</span><span className="animate-pulse">_</span></p>
            </div>

          </motion.div>

          {/* RIGHT SIDE: The Form (Slide In Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800 relative z-10 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            {/* SUCCESS BANNER */}
            {submissionStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-lg flex items-center gap-3 text-green-400"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Message sent successfully! I'll get back to you soon.</span>
              </motion.div>
            )}

            {/* ERROR BANNER */}
            {submissionStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg flex items-center gap-3 text-red-400"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Something went wrong. Please try again later.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  <span className="text-indigo-400">var</span> Name =
                </label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#111] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono"
                  placeholder='"Your Name"'
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  <span className="text-indigo-400">var</span> Email =
                </label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#111] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono"
                  placeholder='"your@email.com"'
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  <span className="text-indigo-400">const</span> Message =
                </label>
                <textarea 
                  id="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#111] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono resize-none"
                  placeholder='`I have a project idea...`'
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Execute Send()</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;