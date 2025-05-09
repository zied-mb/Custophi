import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from "./pages/Home";
import BioScripto from './pages/BioScripto';
import PasswordGenerator from './pages/SecretKey';
import BlogBio from "./pages/BlogBio";
import BlogSecret from "./pages/BlogSecret";
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './pages/ScrollToTop';

const App = () => {
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedNiche, setSelectedNiche] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [additionalText, setAdditionalText] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [profileName, setProfileName] = useState('');
  const [generatedBio, setGeneratedBio] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setError(null);
  }, [selectedStyle, selectedNiche]);

  const OPENROUTER_API_KEY = process.env.REACT_APP_OPENROUTER_API_KEY;
  const YOUR_SITE_URL = 'http://localhost:3000';
  const YOUR_SITE_NAME = 'BioScripto';

  const generateBio = async () => {
    if (!selectedPlatform || !selectedPlatform) {
      setError('Please choose a platform to get started.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'HTTP-Referer': YOUR_SITE_URL,
          'X-Title': YOUR_SITE_NAME,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-prover-v2:free',
          messages: [{
            role: 'user',
content: `You're a professional brand copywriter. Generate 5 unique, high-quality bio options tailored for the platform: ${selectedPlatform}. Focus specifically on crafting impactful and relevant wording that the user can use in ${additionalText}, ensuring each bio matches the tone, audience, and niche of the platform. Prioritize clarity, personality, and engagement.
            
            Required:
            - Platform: ${selectedPlatform}
            
            Optional (use if provided):
            ${additionalText ? `- Additional Info: ${additionalText}` : ''}
            ${selectedNiche? `- content Niche: ${selectedNiche}` : ''}
            ${selectedTheme ? `- Content Theme: ${selectedTheme}` : ''}
            ${selectedStyle ? `- content Style: ${selectedStyle}` : ''}
            ${selectedRegion ? `- Region: ${selectedRegion}` : ''}
            ${profileName ? `- Profile Name: ${profileName}` : ''}



            
            Instructions:
            - Each bio must be under the character limit for ${selectedPlatform}.
              ${selectedPlatform === 'Twitter' ? '- Limit: 280 characters' : ''}
              ${selectedPlatform === 'Instagram' ? '- Limit: 150 characters' : ''}
              ${selectedPlatform === 'LinkedIn' ? '- Limit: 300 characters' : ''}
              ${selectedPlatform === 'TikTok' ? '- Limit: 80 characters' : ''}
              ${selectedPlatform === 'GitHub' ? '- Limit: 256 characters' : ''}
              ${selectedPlatform === 'Facebook' ? '- Limit: 101 characters' : ''}
              ${selectedPlatform === 'YouTube' ? '- Limit: 1000 characters' : ''}
              ${selectedPlatform === 'Snapchat' ? '- Limit: 80 characters' : ''}
              ${selectedPlatform === 'Threads' ? '- Limit: 150 characters' : ''}
              ${selectedPlatform === 'Behance' ? '- Limit: 200 characters' : ''}
              ${selectedPlatform === 'Dribbble' ? '- Limit: 160 characters' : ''}
              ${selectedPlatform === 'Reddit' ? '- Limit: 200 characters' : ''}
              ${selectedPlatform === 'Medium' ? '- Limit: 160 characters' : ''}
              ${selectedPlatform === 'Pinterest' ? '- Limit: 160 characters' : ''}
              ${selectedPlatform === 'Twitch' ? '- Limit: 300 characters' : ''}
              ${selectedPlatform === 'Dev.to' ? '- Limit: 200 characters' : ''}
              ${selectedPlatform === 'Product Hunt' ? '- Limit: 180 characters' : ''}
              ${selectedPlatform === 'Fiverr' ? '- Limit: 250 characters' : ''}
              ${selectedPlatform === 'Upwork' ? '- Limit: 250 characters' : ''}
            
            - Offer 5 diverse bio options:
              - Vary in tone, structure, and style.
              - No two bios should look or sound the same.
              - One could be professional, another fun, one minimalist, one bold, and another witty or edgy.
            
            - If profileName is provided, include it naturally in at least 1 or 2 bios.
            - Reference region or theme subtly.
            - Reflect emojis or quotes from additionalText lightly in tone.
            - Avoid hashtags, @ mentions, or unnecessary clutter.
            - Write bios in a clean, numbered list format.
            - Ensure each bio is engaging, clear, and platform-appropriate.`
          }],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.error?.message || 'Server error. Please try again later.';
        setGeneratedBio(`⚠️ ${errorMessage}`);
      } else {
        const data = await response.json();
        setGeneratedBio(data.choices?.[0]?.message?.content || '⚠️ No bios returned.');
      }
    } catch (err) {
      setError(err.message || 'Error generating bio. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedBio);
    } catch {
      setError('Failed to copy bio to clipboard.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route
              path="/BioScripto"
              element={
                <BioScripto
                  selectedStyle={selectedStyle}
                  setSelectedStyle={setSelectedStyle}
                  selectedNiche={selectedNiche}
                  setSelectedNiche={setSelectedNiche}
                  selectedRegion={selectedRegion}
                  setSelectedRegion={setSelectedRegion}
                  additionalText={additionalText}
                  setAdditionalText={setAdditionalText}
                  selectedTheme={selectedTheme}
                  setSelectedTheme={setSelectedTheme}
                  selectedPlatform={selectedPlatform}
                  setSelectedPlatform={setSelectedPlatform}
                  profileName={profileName}
                  setProfileName={setProfileName}
                  generatedBio={generatedBio}
                  loading={loading}
                  error={error}
                  generateBio={generateBio}
                  copyToClipboard={copyToClipboard}
                />
              }
            />
            <Route path="/PasswordGenerator" element={<PasswordGenerator />} />
            <Route path="/blogbio" element={<BlogBio />} />
            <Route path="/blogsecret" element={<BlogSecret />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
