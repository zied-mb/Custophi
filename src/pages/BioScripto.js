import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SparklesIcon,
  UserIcon,
  GlobeAltIcon,
  HashtagIcon,
  DocumentTextIcon,
  ChatBubbleLeftEllipsisIcon,
  ClipboardDocumentIcon,
  MagnifyingGlassIcon,
  ArrowPathIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ArrowsPointingOutIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  AdjustmentsHorizontalIcon,
  LanguageIcon,
  DevicePhoneMobileIcon,
  AtSymbolIcon,
  LinkIcon,
  CommandLineIcon,
  Squares2X2Icon,
  EllipsisHorizontalIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline';

const BioScripto = ({
  selectedStyle,
  setSelectedStyle,
  selectedRegion,
  setSelectedRegion,
  selectedNiche,
  setSelectedNiche,
  selectedTheme,
  setSelectedTheme,
  selectedPlatform,
  setSelectedPlatform,
  profileName,
  setProfileName,
  additionalText,
  setAdditionalText,
  generatedBio,
  loading,
  error,
  generateBio,
  copyToClipboard,
  regions,
  personalityStyles,
  nicheCategories,
  contentThemes,
  contentPlatform
}) => {
  const [expandedView, setExpandedView] = useState(false);
  const [activeTab, setActiveTab] = useState('generator');
  const [showTutorial, setShowTutorial] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);

  const handleAdditionalTextChange = (e) => {
    setAdditionalText(e.target.value);
    setCharacterCount(e.target.value.length);
  };

  const platformIntegrations1 = [
    { name: 'Instagram', icon: DevicePhoneMobileIcon, color: 'text-pink-400' },
    { name: 'TikTok', icon: VideoCameraIcon, color: 'text-black-400' },
    { name: 'Twitter', icon: AtSymbolIcon, color: 'text-blue-400' },
    { name: 'LinkedIn', icon: LinkIcon, color: 'text-blue-500' },
    { name: 'GitHub', icon: CommandLineIcon, color: 'text-gray-400' },
    { name: 'Other', icon: EllipsisHorizontalIcon, color: 'text-gray-500' }

  ];
  const platformIntegrations2 = [
    { name: 'Instagram', icon: DevicePhoneMobileIcon, color: 'text-pink-400' },
    { name: 'TikTok', icon: VideoCameraIcon, color: 'text-black-400' },
    { name: 'Twitter', icon: AtSymbolIcon, color: 'text-blue-400' },
    { name: 'LinkedIn', icon: LinkIcon, color: 'text-blue-500' },
    { name: 'GitHub', icon: CommandLineIcon, color: 'text-gray-400' },

  ];


  const bioExamples = [
    {
      title: "Professional Developer",
      content: "Senior Full-Stack Developer | JavaScript/TypeScript Specialist | React & Node.js Expert | Building scalable web applications | Open source contributor"
    },
    {
      title: "Creative Content Creator",
      content: "Digital Storyteller 🎥 | Video Producer & Editor | Helping brands tell compelling stories | Adobe Creative Suite Pro | Based in NYC 🌆"
    },
    {
      title: "Fitness Influencer",
      content: "Certified Personal Trainer 💪 | Nutrition Coach | Helping you build sustainable fitness habits | 100K+ transformed lives | DM for coaching inquiries"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#312e81] py-12 px-4"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <header className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-4 md:mb-0"
            >
              <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
                Bio Scripto
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
                How to Create the Perfect Bio
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-indigo-300 font-medium mb-2">1. Choose Your Style</h4>
                  <p className="text-gray-300 text-sm">
                    Select a personality style that matches how you want to present yourself. This affects the tone and language of your bio.
                  </p>
                </div>
                <div>
                  <h4 className="text-indigo-300 font-medium mb-2">2. Specify Your Niche</h4>
                  <p className="text-gray-300 text-sm">
                    Pick your primary area of focus. Our AI will tailor industry-specific terminology and relevant keywords.
                  </p>
                </div>
                <div>
                  <h4 className="text-indigo-300 font-medium mb-2">3. Add Personal Touches</h4>
                  <p className="text-gray-300 text-sm">
                    Include any specific achievements, skills, or unique qualities you want highlighted in your bio.
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
                  <SparklesIcon className="h-6 w-6 text-indigo-400" />
                  Why Choose Bio Scripto?
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-indigo-500/20">
                      <LightBulbIcon className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">AI-Powered Creativity</h3>
                      <p className="text-gray-400 text-sm">
                        Our GPT-4 based algorithms generate unique, engaging bios tailored to your personality
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-indigo-500/20">
                      <AdjustmentsHorizontalIcon className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Advanced Customization</h3>
                      <p className="text-gray-400 text-sm">
                        50+ style combinations and niche-specific optimizations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-indigo-500/20">
                      <LanguageIcon className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Multi-Region Support</h3>
                      <p className="text-gray-400 text-sm">
                        Culturally adapted bios for 25+ countries and regions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Platform Integrations */}
              <div className="bg-white/5 rounded-2xl border border-white/10 p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">Platform Optimized</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Our bios are automatically optimized for character limits and formatting requirements of:
                </p>
                <div className="flex flex-wrap gap-3">
                  {platformIntegrations1.map((platform, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">
                      <platform.icon className={`h-4 w-4 ${platform.color}`} />
                      <span className="text-xs text-gray-300">{platform.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-white/5 rounded-2xl border border-white/10 p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">Performance Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-indigo-900/20 p-3 rounded-lg border border-indigo-800">
                    <div className="text-2xl font-bold text-indigo-400">1.8M+</div>
                    <div className="text-xs text-indigo-300">Bios Generated</div>
                  </div>
                  <div className="bg-indigo-900/20 p-3 rounded-lg border border-indigo-800">
                    <div className="text-2xl font-bold text-indigo-400">4.9/5</div>
                    <div className="text-xs text-indigo-300">User Rating</div>
                  </div>
                  <div className="bg-indigo-900/20 p-3 rounded-lg border border-indigo-800">
                    <div className="text-2xl font-bold text-indigo-400">50ms</div>
                    <div className="text-xs text-indigo-300">Avg. Generation</div>
                  </div>
                  <div className="bg-indigo-900/20 p-3 rounded-lg border border-indigo-800">
                    <div className="text-2xl font-bold text-indigo-400">25+</div>
                    <div className="text-xs text-indigo-300">Languages</div>
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
                    <MagnifyingGlassIcon className="h-7 w-7 text-indigo-400" />
                    AI Bio Generator
                  </h1>
                  <h2 className="text-gray-300 text-sm">
                    Fill in the details and click generate
                  </h2>
                </div>

                {/* Form Fields */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white text-sm">

                  {/* Platform */}
                  <div>
                    <label className="block mb-2 font-semibold text-gray-200 flex items-center gap-2">
                      <Squares2X2Icon className="h-5 w-5 text-indigo-400" />
                      Platform *
                    </label>
                    <select
                      value={selectedPlatform}
                      onChange={(e) => setSelectedPlatform(e.target.value)}
                      className="w-full bg-gray-800 rounded-lg px-4 py-3 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select Platform</option>
                      {contentPlatform.map((platform) => (
                        <option key={platform} value={platform}>
                          {platform}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Profile Name */}
                  <div>
                    <label className="block mb-2 font-semibold text-gray-200 flex items-center gap-2">
                      <UserIcon className="h-5 w-5 text-indigo-400" />
                      Profile Name
                    </label>
                    <input
                      type="text"
                      value={profileName}
                      onChange={(e) => setProfileName(e.target.value)}
                      placeholder="Your name"
                      className="w-full bg-gray-800 rounded-lg px-4 py-3 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>

                  {/* Region */}

                  <div>
                    <label className="block mb-2 font-semibold text-gray-200 flex items-center gap-2">
                      <GlobeAltIcon className="h-5 w-5 text-indigo-400" />
                      Region
                    </label>
                    <select
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className="w-full bg-gray-800 rounded-lg px-4 py-3 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select region</option>
                      {regions.map((region) => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>
                  </div>

                  {/* Niche */}
                  <div>
                    <label className="block mb-2 font-semibold text-gray-200 flex items-center gap-2">
                      <HashtagIcon className="h-5 w-5 text-indigo-400" />
                      Niche
                    </label>
                    <select
                      value={selectedNiche}
                      onChange={(e) => setSelectedNiche(e.target.value)}
                      className="w-full bg-gray-800 rounded-lg px-4 py-3 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select niche</option>
                      {nicheCategories.map((niche) => (
                        <option key={niche} value={niche}>{niche}</option>
                      ))}
                    </select>
                  </div>


                  {/* Style */}
                  <div>
                    <label className="block mb-2 font-semibold text-gray-200 flex items-center gap-2">
                      <SparklesIcon className="h-5 w-5 text-indigo-400" />
                      Style
                    </label>
                    <select
                      value={selectedStyle}
                      onChange={(e) => setSelectedStyle(e.target.value)}
                      className="w-full bg-gray-800 rounded-lg px-4 py-3 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select style</option>
                      {personalityStyles.map((style) => (
                        <option key={style} value={style}>{style}</option>
                      ))}
                    </select>
                  </div>


                  {/* Theme */}
                  <div >
                    <label className="block mb-2 font-semibold text-gray-200 flex items-center gap-2">
                      <DocumentTextIcon className="h-5 w-5 text-indigo-400" />
                      Theme
                    </label>
                    <select
                      value={selectedTheme}
                      onChange={(e) => setSelectedTheme(e.target.value)}
                      className="w-full bg-gray-800 rounded-lg px-4 py-3 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select theme</option>
                      {contentThemes.map((theme) => (
                        <option key={theme} value={theme}>{theme}</option>
                      ))}
                    </select>
                  </div>

                  {/* Additional Info */}
                  <div className="sm:col-span-2">
                    <div className="flex justify-between items-center mb-2">
                      <label className="font-semibold text-gray-200 flex items-center gap-2">
                        <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-indigo-400" />
                        Additional Info
                      </label>
                      <span className="text-xs text-gray-500">{characterCount}/500 characters</span>
                    </div>
                    <textarea
                      value={additionalText}
                      onChange={handleAdditionalTextChange}
                      placeholder="Any special requests, achievements, or details to include?"
                      rows={4}
                      maxLength={500}
                      className="w-full bg-gray-800 rounded-lg px-4 py-3 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    />
                  </div>
                </div>

                {/* Generate Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={generateBio}
                  disabled={loading}
                  className="mt-8 w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold shadow-lg transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {!loading ? (
                      <>
                        <SparklesIcon className="h-5 w-5" />
                        Generate Bio
                      </>
                    ) : (
                      <>
                        <ArrowPathIcon className="h-5 w-5 animate-spin" />
                        Generating...
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-red-900/30 border border-red-700 rounded-lg flex items-start gap-3"
                  >
                    <svg
                      className="w-5 h-5 mt-0.5 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-sm font-medium text-red-200">{error}</p>
                  </motion.div>
                )}

                {/* Generated Bio Output */}
                {generatedBio && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-8 bg-white/10 border border-white/20 rounded-xl p-6 text-white relative ${expandedView ? 'col-span-2' : ''}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-semibold text-indigo-300 flex items-center gap-2">
                        <SparklesIcon className="h-5 w-5" />
                        Your Generated Bio
                      </h3>
                      <div className="flex gap-2">
                        <button
                          onClick={copyToClipboard}
                          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                          title="Copy to clipboard"
                        >
                          <ClipboardDocumentIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={generateBio}
                          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                          title="Regenerate"
                        >
                          <ArrowPathIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => setExpandedView(!expandedView)}
                          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                          title={expandedView ? "Collapse" : "Expand"}
                        >
                          <ArrowsPointingOutIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    <div className={`whitespace-pre-wrap bg-black/20 p-4 rounded-lg ${expandedView ? 'text-lg' : ''}`}>
                      {generatedBio}
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-xs text-gray-500">
                        {generatedBio.length} characters
                      </div>
                      <button
                        onClick={() => setExpandedView(!expandedView)}
                        className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                      >
                        {expandedView ? (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Collapse view
                          </>
                        ) : (
                          <>
                            <ArrowsPointingOutIcon className="h-4 w-4" />
                            Expand view
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-lg">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
              <DocumentTextIcon className="h-6 w-6 text-indigo-400" />
              Bio Examples & Inspiration
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bioExamples.map((example, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 rounded-xl border border-white/10 p-6 hover:border-indigo-500/50 transition-colors cursor-pointer"
                  onClick={() => {
                    setProfileName("");
                    setSelectedStyle("Professional");
                    setSelectedNiche(example.title.includes("Developer") ? "Developer" :
                      example.title.includes("Creator") ? "Content Creator" : "Fitness Coach");
                    setSelectedTheme("Professional");
                    setAdditionalText("");
                    setActiveTab('generator');
                  }}
                >
                  <h3 className="text-lg font-semibold text-indigo-400 mb-3">{example.title}</h3>
                  <p className="text-gray-300 text-sm whitespace-pre-wrap">{example.content}</p>
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
                Bio Writing Tips
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-800">
                  <h4 className="text-indigo-300 font-medium mb-2">1. Keep It Concise</h4>
                  <p className="text-gray-300 text-sm">
                    Most platforms have character limits. Aim for 2-3 sentences that capture your essence.
                  </p>
                </div>
                <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-800">
                  <h4 className="text-indigo-300 font-medium mb-2">2. Highlight Value</h4>
                  <p className="text-gray-300 text-sm">
                    Focus on what you offer, not just who you are. What problems do you solve?
                  </p>
                </div>
                <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-800">
                  <h4 className="text-indigo-300 font-medium mb-2">3. Use Keywords</h4>
                  <p className="text-gray-300 text-sm">
                    Include terms people might search for in your niche to improve discoverability.
                  </p>
                </div>
                <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-800">
                  <h4 className="text-indigo-300 font-medium mb-2">4. Add Personality</h4>
                  <p className="text-gray-300 text-sm">
                    Let your unique voice shine through while staying professional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Advanced Features Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
              Advanced Features
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-colors group">
              <div className="p-4 bg-indigo-500/10 rounded-xl w-max mb-6 group-hover:bg-indigo-500/20 transition-colors">
                <AdjustmentsHorizontalIcon className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Tone Adaptation Engine</h3>
              <p className="text-gray-400 mb-4">
                Our AI automatically adjusts the tone to match your selected personality style, from professional to whimsical.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  Context-aware language processing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  Emotionally intelligent phrasing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  Cultural adaptation algorithms
                </li>
              </ul>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-colors group">
              <div className="p-4 bg-indigo-500/10 rounded-xl w-max mb-6 group-hover:bg-indigo-500/20 transition-colors">
                <LanguageIcon className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cultural Localization</h3>
              <p className="text-gray-400 mb-4">
                Region-specific phrasing and references to make your bio resonate with local audiences.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  25+ regional variations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  Local idiom integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  Cultural reference database
                </li>
              </ul>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-colors group">
              <div className="p-4 bg-indigo-500/10 rounded-xl w-max mb-6 group-hover:bg-indigo-500/20 transition-colors">
                <ShieldCheckIcon className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Privacy & Security</h3>
              <p className="text-gray-400 mb-4">
                Your generated bios are never stored on our servers, ensuring complete privacy.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  End-to-end encrypted generation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  Zero data retention policy
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  GDPR compliant processes
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Platform Integration Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-900/40 to-blue-900/40 rounded-2xl border border-white/10 p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Seamless Platform Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Optimized formatting for all major social networks and professional platforms
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {platformIntegrations2.map((platform, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center"
              >
                <div className={`p-3 rounded-lg mb-3 ${platform.color.replace('text', 'bg')}/20`}>
                  <platform.icon className={`h-8 w-8 ${platform.color}`} />
                </div>
                <h3 className="text-lg font-medium text-white">{platform.name}</h3>
                <div className="text-xs text-gray-400 mt-1">
                  {platform.name === 'Twitter' && '280 character limit'}
                  {platform.name === 'Instagram' && '150 character limit'}
                  {platform.name === 'LinkedIn' && '300 character limit'}
                  {platform.name === 'TikTok' && '80 character limit'}
                  {platform.name === 'GitHub' && '256 character limit'}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

BioScripto.defaultProps = {
  personalityStyles: [
    'Funny', 'Sad', 'Gamer', 'Cool', 'Creative', 'Motivational', 'Romantic', 'Professional',
    'Witty', 'Sarcastic', "Mysterious", "Calm", "Inspirational", "Ambition", "Compassionate",
    "Obsessive", "Easy", "Confident", "Stylish", "Mysterious", "Spiritual", "Realistic", "Bold",
    "Kind", "Adventurous", "Empowering", "Weird", "Modern", "Technophile", "Rebellious", "Other ..",
  ],
  nicheCategories: [
    'Developer', 'TikToker', 'Instagrammer', 'Artist', 'Photographer', 'Gamer',
    'Designer', 'Musician', 'Dancer', 'Entrepreneur', 'Influencer', 'Student',
    'Streamer', 'Traveler', 'Fitness Coach', 'Makeup Artist', 'Fashion Blogger',
    'Foodie', 'Pet Lover', 'Bookworm', 'Teacher', 'Parenting Blogger', 'Spiritual Guide',
    'Digital Marketer', 'Content Creator', 'YouTuber', 'Freelancer', 'Product Seller', 'Forex Trader',
    'Real Estate Agent', 'Social Media Manager', 'Life Coach', 'Motivational Speaker', 'Podcaster', 'Interior Designer', 'Other ..'

  ],
  contentThemes: [
    'Lifestyle', 'Vlogging', 'Motivation', 'Comedy', 'Education', 'Tech Reviews',
    'Beauty & Skincare', 'Fitness & Health', 'Travel', 'Streetwear', 'Art & Illustration',
    'Gaming Highlights', 'Behind the Scenes', 'Daily Routines', 'Pet Content', 'ASMR',
    'DIY & Crafts', 'Unboxing', 'Productivity', 'Fashion Tips', 'Spiritual & Mindfulness',
    'Food Recipes', 'Relationship Advice', 'Book Reviews', 'Personal Growth', 'Other ..'
  ],

  contentPlatform: [
    'Instagram', 'TikTok', 'Twitter', 'LinkedIn', 'GitHub', 'Facebook', 'YouTube', 'Snapchat', 'Threads',
    'Behance', 'Dribbble', 'Reddit', 'Medium', 'Pinterest', 'Twitch', 'Dev.to', 'Product Hunt', 'Fiverr', 'Upwork', 'Other ..',
  ],

  regions: [
    'Tunisia', 'Morocco', 'Algeria', 'Egypt', 'Saudi Arabia', 'Lebanon', 'France',
    'USA', 'Canada', 'UK', 'Germany', 'Italy', 'Spain', 'Senegal', 'Ivory Coast',
    'South Africa', 'India', 'Pakistan', 'Indonesia', 'Philippines', 'Brazil',
    'Mexico', 'Turkey', 'Japan', 'South Korea', 'Other ..'
  ]
  
};

export default BioScripto;
