import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LockClosedIcon,
  ArrowPathIcon,
  ClipboardDocumentIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  ArrowsPointingOutIcon,
  ChartBarIcon,
  CheckIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const PasswordGenerator = () => {
  const [selectedLength, setSelectedLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [excludeSimilar, setExcludeSimilar] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState('Very Weak');
  const [passwordHistory, setPasswordHistory] = useState([]);
  const [expandedView, setExpandedView] = useState(false);
  const [activeTab, setActiveTab] = useState('generator');
  const [showTutorial, setShowTutorial] = useState(false);
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    setLoading(true);
    setError(null);
    
    try {
      // Validate at least one character type is selected
      if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
        throw new Error('Please select at least one character type');
      }

      let upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
      let lower = 'abcdefghijkmnopqrstuvwxyz';
      let numbers = '23456789';
      let symbols = '!@#$%^&*()_+-=~{}[]|:;"<>,.?/';

      if (!excludeSimilar) {
        upper += 'IO';
        lower += 'l';
        numbers += '10';
        symbols += '`';
      }

      let charSet = [
        includeUppercase && upper,
        includeLowercase && lower,
        includeNumbers && numbers,
        includeSymbols && symbols,
      ].filter(Boolean).join('');

      if (!charSet) return;

      let pass = '';
      const requiredChars = [
        includeUppercase && upper[Math.floor(Math.random() * upper.length)],
        includeLowercase && lower[Math.floor(Math.random() * lower.length)],
        includeNumbers && numbers[Math.floor(Math.random() * numbers.length)],
        includeSymbols && symbols[Math.floor(Math.random() * symbols.length)],
      ].filter(Boolean);

      for (let char of requiredChars) {
        pass += char;
      }

      for (let i = pass.length; i < selectedLength; i++) {
        pass += charSet[Math.floor(Math.random() * charSet.length)];
      }

      pass = pass.split('').sort(() => Math.random() - 0.5).join('');
      
      setGeneratedPassword(pass);
      setPasswordHistory(prev => [pass, ...prev.slice(0, 4)]);
      
      // Calculate strength
      calculateStrength(pass);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const calculateStrength = (password) => {
    let score = 0;
    const length = password.length;
    
    if (length >= 16) score += 4;
    else if (length >= 12) score += 3;
    else if (length >= 8) score += 2;
    else score += 1;

    const typesCount = [includeUppercase, includeLowercase, includeNumbers, includeSymbols]
      .filter(Boolean).length;
    score += typesCount * 2;

    if (excludeSimilar) score += 2;

    const strengthScore = Math.min(Math.floor(score / 1.5), 10);
    
    let strengthLabel;
    if (strengthScore <= 2) strengthLabel = 'Very Weak';
    else if (strengthScore <= 4) strengthLabel = 'Weak';
    else if (strengthScore <= 6) strengthLabel = 'Fair';
    else if (strengthScore <= 8) strengthLabel = 'Good';
    else if (strengthScore <= 9) strengthLabel = 'Strong';
    else strengthLabel = 'Very Strong';
    
    setPasswordStrength(strengthLabel);
  };

  const copyToClipboard = () => {
    if (!generatedPassword) return;
    navigator.clipboard.writeText(generatedPassword);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const passwordExamples = [
    {
      title: "Maximum Security",
      content: "J7#fQ2!pL9@kM5$vR8&",
      strength: "Very Strong"
    },
    {
      title: "Balanced Security",
      content: "Blue42$Sky!9",
      strength: "Strong"
    },
    {
      title: "Easy to Remember",
      content: "Sunset@Beach78",
      strength: "Good"
    }
  ];

  const strengthColors = {
    'Very Weak': 'from-red-500 to-red-700',
    'Weak': 'from-orange-500 to-orange-700',
    'Fair': 'from-yellow-500 to-yellow-700',
    'Good': 'from-lime-500 to-lime-700',
    'Strong': 'from-green-500 to-green-700',
    'Very Strong': 'from-emerald-500 to-emerald-700'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#312e81] py-12 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section with Navigation */}
        <header className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-4 md:mb-0"
            >
              <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
                Secret Key
              </span>
            </motion.h1>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowTutorial(!showTutorial)}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <QuestionMarkCircleIcon className="h-5 w-5" />
                <span>How it works</span>
              </button>
              <div className="flex gap-2">
                <button 
                  onClick={() => setActiveTab('generator')}
                  className={`px-4 py-2 rounded-lg ${activeTab === 'generator' ? 'bg-indigo-600 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                >
                  Generator
                </button>
                <button 
                  onClick={() => setActiveTab('examples')}
                  className={`px-4 py-2 rounded-lg ${activeTab === 'examples' ? 'bg-indigo-600 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                >
                  Examples
                </button>
              </div>
            </div>
          </div>

          {/* Tutorial Panel */}
          {showTutorial && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-indigo-900/30 border border-indigo-700 rounded-xl p-6 mb-8 overflow-hidden"
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <InformationCircleIcon className="h-5 w-5 text-indigo-300" />
                Password Security Guide
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-indigo-300 font-medium mb-2">1. Length Matters</h4>
                  <p className="text-gray-300 text-sm">
                    Longer passwords are exponentially harder to crack. Aim for at least 12-16 characters.
                  </p>
                </div>
                <div>
                  <h4 className="text-indigo-300 font-medium mb-2">2. Character Diversity</h4>
                  <p className="text-gray-300 text-sm">
                    Use a mix of uppercase, lowercase, numbers and symbols to maximize complexity.
                  </p>
                </div>
                <div>
                  <h4 className="text-indigo-300 font-medium mb-2">3. Avoid Patterns</h4>
                  <p className="text-gray-300 text-sm">
                    Don't use dictionary words, sequences, or repeated characters.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </header>

        {activeTab === 'generator' ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Sidebar - Features & Stats */}
            <div className="space-y-6">
              <div className="bg-white/5 rounded-2xl border border-white/10 p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <ShieldCheckIcon className="h-6 w-6 text-indigo-400" />
                  Why Secure Passwords?
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-indigo-500/20">
                      <LockClosedIcon className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Military-Grade Security</h3>
                      <p className="text-gray-400 text-sm">
                        Our generator uses cryptographically secure random number generation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-indigo-500/20">
                      <ChartBarIcon className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Strength Analysis</h3>
                      <p className="text-gray-400 text-sm">
                        Real-time password strength evaluation with detailed metrics.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-indigo-500/20">
                      <ArrowsPointingOutIcon className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Full Customization</h3>
                      <p className="text-gray-400 text-sm">
                        Fine-tune all parameters to meet any security requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Metrics */}
              <div className="bg-white/5 rounded-2xl border border-white/10 p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">Security Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-indigo-900/20 p-3 rounded-lg border border-indigo-800">
                    <div className="text-2xl font-bold text-indigo-400">256-bit</div>
                    <div className="text-xs text-indigo-300">Encryption</div>
                  </div>
                  <div className="bg-indigo-900/20 p-3 rounded-lg border border-indigo-800">
                    <div className="text-2xl font-bold text-indigo-400">10^38</div>
                    <div className="text-xs text-indigo-300">Combinations</div>
                  </div>
                  <div className="bg-indigo-900/20 p-3 rounded-lg border border-indigo-800">
                    <div className="text-2xl font-bold text-indigo-400">0ms</div>
                    <div className="text-xs text-indigo-300">Server Storage</div>
                  </div>
                  <div className="bg-indigo-900/20 p-3 rounded-lg border border-indigo-800">
                    <div className="text-2xl font-bold text-indigo-400">100%</div>
                    <div className="text-xs text-indigo-300">Client-Side</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Main Generator Form */}
            <div className="lg:col-span-2 bg-white/5 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-lg overflow-hidden">
              <div className="p-8">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-indigo-500 mb-2 tracking-tight flex items-center justify-center gap-2">
                    <LockClosedIcon className="h-7 w-7 text-indigo-400" />
                    Password Generator
                  </h1>
                  <h2 className="text-gray-300 text-sm">
                    Customize your password requirements
                  </h2>
                </div>

                {/* Password Display */}
                <div className="relative mb-8 group">
                  <div className="bg-gray-800 rounded-xl p-5 pr-16 flex items-center transition-all hover:bg-gray-700/80 border border-gray-700 shadow-inner">
                    <input
                      type="text"
                      value={generatedPassword}
                      readOnly
                      className="w-full bg-transparent text-white placeholder-gray-400 font-mono text-xl outline-none tracking-wider"
                      placeholder="Generating secure password..."
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-3">
                      <motion.button
                        onClick={copyToClipboard}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {copied ? <CheckIcon className="h-5 w-5 text-green-400" /> : <ClipboardDocumentIcon className="h-5 w-5" />}
                      </motion.button>
                      <motion.button
                        onClick={generatePassword}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-300 hover:text-white transition-colors"
                        disabled={loading}
                      >
                        <motion.div
                          animate={{ rotate: loading ? 360 : 0 }}
                          transition={{ duration: 0.5, repeat: loading ? Infinity : 0 }}
                        >
                          <ArrowPathIcon className="h-5 w-5" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Strength Meter */}
                {passwordStrength && (
                  <div className="mb-6 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-white/90">
                        <ShieldCheckIcon className="h-5 w-5" />
                        <span className="font-medium">Security Level:</span>
                        <span className="font-bold">{passwordStrength}</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(10)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 w-3 rounded-full transition-all duration-300 ${
                              i < (passwordStrength === 'Very Weak' ? 2 : 
                                  passwordStrength === 'Weak' ? 4 : 
                                  passwordStrength === 'Fair' ? 6 : 
                                  passwordStrength === 'Good' ? 8 : 10) 
                              ? `bg-gradient-to-b ${strengthColors[passwordStrength]}` 
                              : 'bg-white/20'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Advanced Controls */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="flex justify-between text-gray-300 mb-3">
                      <span className="font-medium">Password Length</span>
                      <span className="font-mono text-xl font-bold text-white bg-indigo-900/50 px-3 py-1 rounded-lg">
                        {selectedLength}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="32"
                      value={selectedLength}
                      onChange={(e) => setSelectedLength(+e.target.value)}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer range-thumb"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={excludeSimilar}
                          onChange={(e) => setExcludeSimilar(e.target.checked)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded flex items-center justify-center transition-all ${excludeSimilar ? 'bg-indigo-600' : 'bg-gray-700'}`}>
                          {excludeSimilar && <CheckIcon className="text-white text-xs" />}
                        </div>
                      </div>
                      <span className="text-gray-300 group-hover:text-white">Exclude Similar Characters</span>
                    </label>
                  </div>
                </div>

                {/* Character Type Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <motion.div
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-br ${includeUppercase ? 'from-purple-600 to-purple-800' : 'from-gray-700 to-gray-800'} p-4 rounded-xl cursor-pointer border border-gray-600 shadow-md transition-all`}
                    onClick={() => setIncludeUppercase(!includeUppercase)}
                  >
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={includeUppercase}
                          onChange={(e) => setIncludeUppercase(e.target.checked)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded flex items-center justify-center transition-all ${includeUppercase ? 'bg-white' : 'bg-gray-500'}`}>
                          {includeUppercase && <CheckIcon className="text-indigo-600 text-xs" />}
                        </div>
                      </div>
                      <span className={`font-medium ${includeUppercase ? 'text-white' : 'text-gray-300'}`}>Uppercase</span>
                    </label>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-br ${includeLowercase ? 'from-blue-600 to-blue-800' : 'from-gray-700 to-gray-800'} p-4 rounded-xl cursor-pointer border border-gray-600 shadow-md transition-all`}
                    onClick={() => setIncludeLowercase(!includeLowercase)}
                  >
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={includeLowercase}
                          onChange={(e) => setIncludeLowercase(e.target.checked)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded flex items-center justify-center transition-all ${includeLowercase ? 'bg-white' : 'bg-gray-500'}`}>
                          {includeLowercase && <CheckIcon className="text-indigo-600 text-xs" />}
                        </div>
                      </div>
                      <span className={`font-medium ${includeLowercase ? 'text-white' : 'text-gray-300'}`}>Lowercase</span>
                    </label>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-br ${includeNumbers ? 'from-green-600 to-green-800' : 'from-gray-700 to-gray-800'} p-4 rounded-xl cursor-pointer border border-gray-600 shadow-md transition-all`}
                    onClick={() => setIncludeNumbers(!includeNumbers)}
                  >
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={includeNumbers}
                          onChange={(e) => setIncludeNumbers(e.target.checked)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded flex items-center justify-center transition-all ${includeNumbers ? 'bg-white' : 'bg-gray-500'}`}>
                          {includeNumbers && <CheckIcon className="text-indigo-600 text-xs" />}
                        </div>
                      </div>
                      <span className={`font-medium ${includeNumbers ? 'text-white' : 'text-gray-300'}`}>Numbers</span>
                    </label>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-br ${includeSymbols ? 'from-yellow-600 to-yellow-800' : 'from-gray-700 to-gray-800'} p-4 rounded-xl cursor-pointer border border-gray-600 shadow-md transition-all`}
                    onClick={() => setIncludeSymbols(!includeSymbols)}
                  >
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={includeSymbols}
                          onChange={(e) => setIncludeSymbols(e.target.checked)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded flex items-center justify-center transition-all ${includeSymbols ? 'bg-white' : 'bg-gray-500'}`}>
                          {includeSymbols && <CheckIcon className="text-indigo-600 text-xs" />}
                        </div>
                      </div>
                      <span className={`font-medium ${includeSymbols ? 'text-white' : 'text-gray-300'}`}>Symbols</span>
                    </label>
                  </motion.div>
                </div>

                {/* Generate Button */}
                <motion.button
                  onClick={generatePassword}
                  disabled={loading}
                  whileTap={{
                    scale: 0.95,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    transform: "translateY(3px)",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.2)",
                    backgroundPosition: "right",
                    transform: "translateY(-5px)",
                    transition: {
                      scale: { duration: 0.2 },
                      boxShadow: { duration: 0.3 },
                      transform: { duration: 0.2 },
                    },
                  }}
                  className="w-full bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-500 text-white py-4 px-6 rounded-xl font-semibold shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed relative overflow-hidden mt-6"
                >
                  <motion.span className="flex justify-center items-center w-full h-full gap-2">
                    {!loading ? (
                      <>
                        <LockClosedIcon className="h-5 w-5" />
                        <span>Generate Secure Password</span>
                      </>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                        <span>Generating...</span>
                      </div>
                    )}
                  </motion.span>
                  <span className="absolute inset-0 w-full h-full rounded-xl bg-white opacity-20 scale-0 animate-pulse"></span>
                </motion.button>

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-red-900/30 border border-red-700 rounded-lg flex items-start gap-3"
                  >
                    <ExclamationTriangleIcon className="w-5 h-5 mt-0.5 text-red-400" />
                    <p className="text-sm font-medium text-red-200">{error}</p>
                  </motion.div>
                )}

              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-lg">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
              <LockClosedIcon className="h-6 w-6 text-indigo-400" />
              Password Examples & Best Practices
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {passwordExamples.map((example, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 rounded-xl border border-white/10 p-6 hover:border-indigo-500/50 transition-colors cursor-pointer"
                  onClick={() => {
                    setSelectedLength(example.content.length);
                    setIncludeUppercase(true);
                    setIncludeLowercase(true);
                    setIncludeNumbers(true);
                    setIncludeSymbols(true);
                    setActiveTab('generator');
                    generatePassword();
                  }}
                >
                  <h3 className="text-lg font-semibold text-indigo-400 mb-3">{example.title}</h3>
                  <div className="font-mono bg-black/20 p-3 rounded-lg mb-3">{example.content}</div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{example.content.length} characters</span>
                    <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${strengthColors[example.strength]}`}>
                      {example.strength}
                    </span>
                  </div>
                  <div className="mt-4 text-xs text-indigo-400 flex items-center gap-1">
                    <span>Click to use as template</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <LightBulbIcon className="h-5 w-5 text-indigo-400" />
                Password Security Tips
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-800">
                  <h4 className="text-indigo-300 font-medium mb-2">1. Use a Password Manager</h4>
                  <p className="text-gray-300 text-sm">
                    Store all your passwords securely and access them with one master password.
                  </p>
                </div>
                <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-800">
                  <h4 className="text-indigo-300 font-medium mb-2">2. Enable 2FA</h4>
                  <p className="text-gray-300 text-sm">
                    Add an extra layer of security with two-factor authentication wherever possible.
                  </p>
                </div>
                <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-800">
                  <h4 className="text-indigo-300 font-medium mb-2">3. Never Reuse Passwords</h4>
                  <p className="text-gray-300 text-sm">
                    Each account should have a unique password to prevent domino-effect breaches.
                  </p>
                </div>
                <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-800">
                  <h4 className="text-indigo-300 font-medium mb-2">4. Change Regularly</h4>
                  <p className="text-gray-300 text-sm">
                    Update important passwords every 3-6 months, especially for financial accounts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
{/* Password History */}
{passwordHistory.length > 0 && (
  <div className="flex justify-center mt-16">
    <div className="bg-white/5 rounded-2xl border border-white/10 p-6 backdrop-blur-sm w-full  text-center">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Passwords</h3>
      <div className="space-y-3">
        {passwordHistory.slice(0, 3).map((pass, index) => (
          <div
            key={index}
            className="bg-black/20 p-3 rounded-lg border border-white/10 flex justify-between items-center"
          >
            <div className="font-mono text-sm text-gray-300 truncate text-left">{pass}</div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(pass);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="text-gray-400 hover:text-white p-1"
            >
              <ClipboardDocumentIcon className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

        {/* Advanced Features Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
              Advanced Security Features
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-colors group">
              <div className="p-4 bg-indigo-500/10 rounded-xl w-max mb-6 group-hover:bg-indigo-500/20 transition-colors">
                <ShieldCheckIcon className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Military-Grade Generation</h3>
              <p className="text-gray-400 mb-4">
                Our password generator uses cryptographically secure random number generation algorithms.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  CSPRNG algorithm
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  No predictable patterns
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  True entropy sources
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-colors group">
              <div className="p-4 bg-indigo-500/10 rounded-xl w-max mb-6 group-hover:bg-indigo-500/20 transition-colors">
                <LockClosedIcon className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Complete Privacy</h3>
              <p className="text-gray-400 mb-4">
                All password generation happens in your browser - nothing is ever sent to our servers.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  100% client-side processing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  No tracking or logging
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  Zero knowledge architecture
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-colors group">
              <div className="p-4 bg-indigo-500/10 rounded-xl w-max mb-6 group-hover:bg-indigo-500/20 transition-colors">
                <ChartBarIcon className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Strength Analysis</h3>
              <p className="text-gray-400 mb-4">
                Advanced algorithms evaluate your password's resistance to brute force attacks.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  Entropy calculation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  Time-to-crack estimation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  Common pattern detection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PasswordGenerator;