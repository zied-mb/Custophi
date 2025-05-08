import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  EnvelopeIcon, 
  UserCircleIcon, 
  ChatBubbleLeftEllipsisIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const elementVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

function ContactUs() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((result) => {
      setSendStatus('success');
      form.current.reset();
    })
    .catch((error) => {
      setSendStatus('error');
    })
    .finally(() => {
      setIsSending(false);
      setTimeout(() => setSendStatus(null), 5000);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#312e81] py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Contact Information Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-white"
        >
          <div>
            <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-300">
              Have questions or want to discuss a project? Reach out to us through the form or directly using our contact details below.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-indigo-600/20 p-3 rounded-lg">
                <MapPinIcon className="h-6 w-6 text-indigo-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Our Location</h3>
                <p className="text-gray-400">Tunisia - Kelibia</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-indigo-600/20 p-3 rounded-lg">
                <PhoneIcon className="h-6 w-6 text-indigo-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Phone Number</h3>
                <p className="text-gray-400">+216 26 990 263</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-indigo-600/20 p-3 rounded-lg">
                <EnvelopeIcon className="h-6 w-6 text-indigo-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Email Address</h3>
                <p className="text-gray-400">contact.custophi@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-indigo-600/20 p-3 rounded-lg">
                <ClockIcon className="h-6 w-6 text-indigo-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Working Hours</h3>
                <p className="text-gray-400">Monday - Friday: 9AM - 5PM</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="bg-[#1e1b4b] rounded-2xl shadow-xl p-8 sm:p-12 border border-gray-700/50"
        >
          <motion.h2
            variants={elementVariants}
            className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8"
          >
            Send Us a Message
          </motion.h2>

          <motion.form 
            ref={form} 
            onSubmit={sendEmail}
            className="space-y-6"
          >
            <motion.div variants={elementVariants}>
              <label htmlFor="name" className="text-lg font-medium text-white mb-2 flex items-center">
                <UserCircleIcon className="h-6 w-6 mr-2 text-indigo-600" />
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder-gray-500 text-white"
                placeholder="John Doe"
              />
            </motion.div>

            <motion.div variants={elementVariants}>
              <label htmlFor="email" className="block text-lg font-medium text-white mb-2 flex items-center">
                <EnvelopeIcon className="h-6 w-6 mr-2 text-indigo-600" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder-gray-500 text-white"
                placeholder="john@example.com"
              />
            </motion.div>

            <motion.div variants={elementVariants}>
              <label htmlFor="message" className="block text-lg font-medium text-white mb-2 flex items-center">
                <ChatBubbleLeftEllipsisIcon className="h-6 w-6 mr-2 text-indigo-600" />
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder-gray-500 text-white"
                placeholder="How can we help you?"
              ></textarea>
            </motion.div>

            <motion.div variants={elementVariants} className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSending}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.div>
          </motion.form>

          {sendStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-green-900/30 text-green-400 rounded-lg border border-green-800"
            >
              Message sent successfully! We'll respond shortly.
            </motion.div>
          )}

          {sendStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-red-900/30 text-red-400 rounded-lg border border-red-800"
            >
              Error sending message. Please try again.
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center text-gray-400"
          >
            We typically respond within 24 hours
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ContactUs;
