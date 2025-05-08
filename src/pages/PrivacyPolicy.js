import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  DocumentTextIcon,
  LockClosedIcon,
  InformationCircleIcon,
  UserIcon,
  ServerIcon,
  CogIcon,
  GlobeAltIcon,
  ClockIcon,
  KeyIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120, damping: 10 }
  }
};

function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] py-12 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto bg-[#1e1b4b]/90 rounded-2xl shadow-2xl overflow-hidden border border-indigo-900/50 backdrop-blur-sm"
      >
        {/* Header Section */}
        <div className="bg-gradient-to-r from-indigo-900/80 to-purple-900/80 p-8 sm:p-10">
          <motion.div variants={itemVariants} className="flex flex-col items-center sm:flex-row gap-6">
            <div className="bg-indigo-600/20 p-4 rounded-xl border border-indigo-500/30">
              <ShieldCheckIcon className="h-12 w-12 text-indigo-400" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Privacy Policy
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-indigo-200">
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>Last Updated: {new Date().toLocaleDateString()}</span>
                </div>
                <span className="hidden sm:block">•</span>
                <span>Effective immediately</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-10">
          <motion.div variants={containerVariants} className="space-y-12">
            {/* Introduction */}
            <motion.section variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3 bg-indigo-900/30 p-4 rounded-lg border border-indigo-800/50">
                <DocumentTextIcon className="h-8 w-8 text-indigo-400 flex-shrink-0" />
                <h2 className="text-2xl font-semibold text-white">Introduction</h2>
              </div>
              <div className="pl-11 space-y-4">
                <p className="text-indigo-100 leading-relaxed">
                  At <span className="font-medium text-cyan-300">Custophi</span>, your privacy is our priority. This Privacy Policy governs the use of our <span className="font-medium text-purple-300">AI Bio Generator</span> and <span className="font-medium text-emerald-300">Password Generator</span> services.
                </p>
                <p className="text-indigo-100 leading-relaxed">
                  Custophi is committed to safeguarding your personal information and ensuring transparency in how your data is collected, used, and protected.
                </p>
              </div>
            </motion.section>

            {/* Service-Specific Data Handling */}
            <motion.section variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3 bg-indigo-900/30 p-4 rounded-lg border border-indigo-800/50">
                <CogIcon className="h-8 w-8 text-indigo-400 flex-shrink-0" />
                <h2 className="text-2xl font-semibold text-white">Service-Specific Data Handling</h2>
              </div>
              <div className="pl-11 space-y-8">

                {/* AI Bio Generator Section */}
                <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-800/30">
                  <div className="flex items-center gap-3 mb-4">
                    <SparklesIcon className="h-6 w-6 text-purple-400" />
                    <h3 className="text-xl font-semibold text-white">AI Bio Generator</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-purple-100">
                      Our AI Bio Generator processes your input to create personalized bios:
                    </p>
                    <ul className="list-disc space-y-2 pl-5 text-purple-100">
                      <li><span className="font-medium">Input Data:</span> We temporarily process your name, profession, interests, and other details you provide to generate bios</li>
                      <li><span className="font-medium">AI Processing:</span> Your inputs are processed by our AI models to create customized content</li>
                      <li><span className="font-medium">Storage:</span> Generated bios are stored for 30 days unless you save them to your account</li>
                      <li><span className="font-medium">No Training Data:</span> We do not use your inputs to train our AI models</li>
                    </ul>
                    <p className="text-purple-100 text-sm italic">
                      Important: The AI Bio Generator may retain temporary copies of your inputs for quality improvement, but these are anonymized and deleted within 14 days.
                    </p>
                  </div>
                </div>

                {/* Password Generator Section */}
                <div className="bg-emerald-900/20 rounded-xl p-6 border border-emerald-800/30">
                  <div className="flex items-center gap-3 mb-4">
                    <KeyIcon className="h-6 w-6 text-emerald-400" />
                    <h3 className="text-xl font-semibold text-white">Password Generator</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-emerald-100">
                      Our Password Generator creates secure passwords while protecting your privacy:
                    </p>
                    <ul className="list-disc space-y-2 pl-5 text-emerald-100">
                      <li><span className="font-medium">Local Generation:</span> Passwords are generated in your browser and never sent to our servers</li>
                      <li><span className="font-medium">No Storage:</span> We do not store or log generated passwords</li>
                      <li><span className="font-medium">Settings:</span> Your password preferences (length, complexity) may be stored for convenience</li>
                      <li><span className="font-medium">Security:</span> All password generation uses cryptographically secure algorithms</li>
                    </ul>
                    <p className="text-emerald-100 text-sm italic">
                      Important: You are solely responsible for securely storing and managing your generated passwords. We cannot recover lost passwords.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>



            {/* Data Protection */}
            <motion.section variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3 bg-indigo-900/30 p-4 rounded-lg border border-indigo-800/50">
                <LockClosedIcon className="h-8 w-8 text-indigo-400 flex-shrink-0" />
                <h2 className="text-2xl font-semibold text-white">Security Measures</h2>
              </div>
              <div className="pl-11 space-y-4">
                <p className="text-indigo-100 leading-relaxed">
                  We implement rigorous security for both services:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-indigo-900/20 rounded-lg p-5 border border-indigo-800/30">
                    <h3 className="font-medium text-white mb-3">General Protections</h3>
                    <ul className="list-disc space-y-2 pl-5 text-indigo-100">
                      <li>End-to-end encryption for all data transmissions</li>
                      <li>Regular security audits and penetration testing</li>
                      <li>Zero-Retention Policy</li>
                      <li>Anonymized Data Processing</li>


                    </ul>
                  </div>
                  <div className="bg-indigo-900/20 rounded-lg p-5 border border-indigo-800/30">
                    <h3 className="font-medium text-white mb-3">Service-Specific Protections</h3>
                    <ul className="list-disc space-y-2 pl-5 text-indigo-100">
                      <li>
                        <span className="text-purple-300">Bio Generator:</span>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                          <li>Input data anonymization</li>
                          <li>AI model isolation</li>
                        </ul>
                      </li>
                      <li>
                        <span className="text-emerald-300">Password Generator:</span>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                          <li>Client-side generation only</li>
                          <li>Zero-knowledge architecture</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>


          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default PrivacyPolicy;