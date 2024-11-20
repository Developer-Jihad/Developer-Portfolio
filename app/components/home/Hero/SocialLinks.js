"use client";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: FaLinkedinIn,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: FaTwitter,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/yourusername',
    icon: FaInstagram,
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white 
            hover:bg-white/10 transition-all"
        >
          <social.icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  );
}; 