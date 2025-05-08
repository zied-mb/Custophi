import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, staggerChildren: 0.3 },
  },
};

const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120 },
  },
};

const featureCardVariants = {
  hover: {
    y: -5,
    transition: { duration: 0.2 }
  }
};

function About() {
  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#312e81] py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-[#1e1b4b] rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Hero Banner */}
          <div className="relative h-64 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
            <div className="absolute inset-0 bg-noise opacity-20"></div>
            <motion.div
              variants={childVariants}
              className="text-center z-10 px-4"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400">CUSTOPHI</span>
              </h1>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                Your complete suite for digital security and personal branding
              </p>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="p-8 sm:p-12 space-y-16">
            <motion.div
              variants={childVariants}
              className="mt-16 p-8 bg-gradient-to-br from-indigo-900/30 to-purple-900/20 rounded-2xl border border-indigo-800/50 shadow-lg">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative flex justify-center">
                  <div className="absolute -inset-4 bg-cyan-400/10 rounded-3xl blur-lg"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-2xl">
                    <img
                      src="/images/Custophi.png"
                      alt="Custophi Logo"
                      className="w-72 h-auto object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-600/20 rounded-full filter blur-xl"></div>
                </div>
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full mb-4">
                      ABOUT OUR BRAND
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                        The Meaning Behind Custophi
                      </span>
                    </h3>
                  </div>

                  <p className="text-lg leading-relaxed text-indigo-100">
                    <span className="font-semibold text-cyan-300">Custophi</span> is a name born from <span className="italic">customer</span>
                     and <span className="italic">sophia</span>—the ancient Greek word for wisdom.
                  </p>

                  <div className="relative pl-6 border-l-2 border-cyan-400/30">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500"></div>
                    <p className="text-indigo-100 italic">
                      "Sophia reflects a philosophy rooted in empathy, intelligence, and strategic insight."
                    </p>
                  </div>

                  <ul className="space-y-3 text-indigo-100">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center w-5 h-5 bg-cyan-400/20 rounded-full">
                          <svg className="w-3 h-3 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <span className="ml-3">Thoughtfully crafted, data-informed solutions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center w-5 h-5 bg-purple-400/20 rounded-full">
                          <svg className="w-3 h-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <span className="ml-3">Empowering meaningful customer relationships</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center w-5 h-5 bg-indigo-400/20 rounded-full">
                          <svg className="w-3 h-3 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <span className="ml-3">Wisdom-led innovation and human-centered strategy</span>
                    </li>
                  </ul>

                  <p className="text-lg leading-relaxed text-indigo-100 mt-4">
                    At its core, Custophi stands for delivering solutions that not only meet evolving customer needs but also drive sustainable growth through <span className="text-cyan-300 font-medium">wisdom-led innovation</span>.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Introduction */}
            <motion.div
              variants={childVariants}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                    Two Powerful Tools, One Platform
                  </span>
                </h2>
                <p className="text-lg text-indigo-100 mb-4">
                  Custophi combines cutting-edge password security with AI-powered
                  personal branding to give you complete control over your digital identity.
                </p>
                <p className="text-lg text-indigo-100">
                  Whether you need uncrackable passwords for your accounts or a
                  captivating bio for your social profiles, we've got you covered.
                </p>
              </div>
              <div className="bg-indigo-900/30 rounded-xl p-2 border border-indigo-800/50">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-indigo-800/50 rounded-lg p-6 h-40 flex flex-col items-center justify-center">
                    <div className="bg-indigo-600 p-3 rounded-full mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-medium">Password Generator</h3>
                  </div>

                  <div className="bg-purple-800/50 rounded-lg p-6 h-40 flex flex-col items-center justify-center">
                    <div className="bg-purple-600 p-3 rounded-full mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-medium">Bio Generator</h3>
                  </div>

                  <div className="bg-cyan-800/50 rounded-lg p-6 h-40 flex flex-col items-center justify-center">
                    <div className="bg-cyan-600 p-3 rounded-full mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-medium">AI-Powered</h3>
                  </div>

                  <div className="bg-pink-800/50 rounded-lg p-6 h-40 flex flex-col items-center justify-center">
                    <div className="bg-pink-600 p-3 rounded-full mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>
                    <h3 className="text-white font-medium">Customizable</h3>
                  </div>
                </div>
              </div>
            </motion.div>



            {/* Password Generator Section */}
            <motion.div variants={childVariants} className="space-y-8">
              <div className="flex items-center mb-2">
                <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent flex-1"></div>
                <h2 className="text-3xl font-bold text-white mx-4 flex items-center">
                  <span className="bg-indigo-600 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  Password Generator
                </h2>
                <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent flex-1"></div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <motion.div
                  variants={featureCardVariants}
                  whileHover="hover"
                  className="bg-indigo-900/40 rounded-xl p-8 border border-indigo-800/50 hover:border-indigo-600 transition-all"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-indigo-600/80 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      1
                    </span>
                    Military-Grade Security
                  </h3>
                  <p className="text-indigo-100">
                    Generate passwords with advanced cryptographic algorithms that meet
                    NIST and OWASP security standards. Our generator creates passwords
                    that are virtually uncrackable.
                  </p>
                </motion.div>

                <motion.div
                  variants={featureCardVariants}
                  whileHover="hover"
                  className="bg-indigo-900/40 rounded-xl p-8 border border-indigo-800/50 hover:border-indigo-600 transition-all"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-indigo-600/80 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      2
                    </span>
                    Complete Customization
                  </h3>
                  <p className="text-indigo-100">
                    Choose length (8-64 chars), character types (uppercase, lowercase,
                    numbers, symbols), and exclude similar characters. Create passwords
                    that meet any website's requirements.
                  </p>
                </motion.div>

                <motion.div
                  variants={featureCardVariants}
                  whileHover="hover"
                  className="bg-indigo-900/40 rounded-xl p-8 border border-indigo-800/50 hover:border-indigo-600 transition-all"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-indigo-600/80 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      3
                    </span>
                    Strength Analysis
                  </h3>
                  <p className="text-indigo-100">
                    Our real-time strength meter evaluates your password against
                    brute-force attacks, dictionary attacks, and common patterns.
                    Get instant feedback on your password's security level.
                  </p>
                </motion.div>
              </div>
            </motion.div>



            {/* Bio Generator Section */}
            <motion.div variants={childVariants} className="space-y-8">
              <div className="flex items-center mb-2">
                <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1"></div>
                <h2 className="text-3xl font-bold text-white mx-4 flex items-center">
                  <span className="bg-purple-600 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  AI Bio Generator
                </h2>
                <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1"></div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <motion.div
                  variants={featureCardVariants}
                  whileHover="hover"
                  className="bg-purple-900/40 rounded-xl p-8 border border-purple-800/50 hover:border-purple-600 transition-all"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-purple-600/80 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      1
                    </span>
                    Personality Analysis
                  </h3>
                  <p className="text-purple-100">
                    Our AI analyzes your input to understand your unique personality,
                    values, and communication style. It crafts bios that authentically
                    represent who you are.
                  </p>
                </motion.div>

                <motion.div
                  variants={featureCardVariants}
                  whileHover="hover"
                  className="bg-purple-900/40 rounded-xl p-8 border border-purple-800/50 hover:border-purple-600 transition-all"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-purple-600/80 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      2
                    </span>
                    Platform Optimization
                  </h3>
                  <p className="text-purple-100">
                    Whether it's Instagram, LinkedIn, Twitter, or TikTok, we tailor
                    your bio to each platform's conventions and audience expectations
                    for maximum impact.
                  </p>
                </motion.div>

                <motion.div
                  variants={featureCardVariants}
                  whileHover="hover"
                  className="bg-purple-900/40 rounded-xl p-8 border border-purple-800/50 hover:border-purple-600 transition-all"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-purple-600/80 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      3
                    </span>
                    Engagement Focused
                  </h3>
                  <p className="text-purple-100">
                    We incorporate proven psychological principles and marketing
                    techniques to create bios that attract attention, build trust,
                    and encourage profile visits.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Unified Benefits */}
            <motion.div variants={childVariants} className="py-12">
              <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 rounded-2xl p-12 border border-indigo-800/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-center text-white mb-12">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400">
                      Complete Digital Identity Solution
                    </span>
                  </h2>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-indigo-600/80 p-2 rounded-lg mr-4 flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">Secure Foundation</h3>
                          <p className="text-indigo-100">
                            Start with rock-solid password security to protect all your accounts,
                            then build your public identity with confidence.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-purple-600/80 p-2 rounded-lg mr-4 flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Efficiency</h3>
                          <p className="text-purple-100">
                            Our machine learning algorithms handle the heavy lifting, saving you
                            hours of brainstorming and trial-and-error.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-cyan-600/80 p-2 rounded-lg mr-4 flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">Unified Dashboard</h3>
                          <p className="text-cyan-100">
                            Manage both your security credentials and personal branding
                            from one convenient interface with cross-platform sync.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-pink-600/80 p-2 rounded-lg mr-4 flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">Privacy First</h3>
                          <p className="text-pink-100">
                            We never store your passwords or personal information.
                            Everything is processed locally in your browser for maximum security.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div variants={childVariants} className="space-y-12">
              <h2 className="text-3xl font-bold text-center text-white">
                Trusted by <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-400">Thousands</span>
              </h2>

              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  {
                    quote: "The password generator saved me after a security breach. Now I use different strong passwords everywhere!",
                    name: "Sarah K.",
                    role: "IT Manager",
                    rating: 5,
                    bg: "bg-indigo-900/40"
                  },
                  {
                    quote: "My Instagram following grew by 30% after using the AI bio generator. The captions are incredibly engaging!",
                    name: "Jamal R.",
                    role: "Influencer",
                    rating: 5,
                    bg: "bg-purple-900/40"
                  },
                  {
                    quote: "As a small business owner, having both security tools and branding tools in one place is a game-changer.",
                    name: "Elena T.",
                    role: "Entrepreneur",
                    rating: 5,
                    bg: "bg-cyan-900/40"
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className={`${testimonial.bg} rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all h-full`}
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-white/90 italic text-lg mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-3">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-white/70">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div >

    </motion.div >
  );
}

export default About;