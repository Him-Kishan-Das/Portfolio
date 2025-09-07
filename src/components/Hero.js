import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className="title-xl">
          Hi, I’m <span className="title-grad">Him Kishan Das</span>
        </h1>
        <motion.h2
          className="section-subtitle"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          MCA Graduate, Cotton University • Full Stack Web Developer
        </motion.h2>
        <p className="hero-lead">
          Web developer with hands-on experience as a trainee at National Informatics Centre (NIC), Assam State Centre. Skilled in building robust, modern applications using the latest web technologies.
        </p>
        <div className="hero-cta">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn"
            href="#projects"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-outline"
            href="/Him-Kishan-Das-CV.pdf"
            target="_blank"
            rel="noopener"
            download
          >
            Download CV
          </motion.a>
          <motion.a
            className="btn btn-outline"
            whileHover={{ x: 2 }}
            href="https://github.com/Him-Kishan-Das"
            target="_blank"
            rel="noopener"
            title="GitHub"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            className="btn btn-outline"
            whileHover={{ x: 2 }}
            href="https://www.linkedin.com/in/him-kishan-das-8909551a0/"
            target="_blank"
            rel="noopener"
            title="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </motion.div>

      {/* Floating gradient orbs */}
      <motion.div
        aria-hidden
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: -1 }}
      >
        <motion.div
          initial={{ x: -100, y: 0 }}
          animate={{ x: 40, y: -20 }}
          transition={{ repeat: Infinity, repeatType: 'mirror', duration: 10 }}
          style={{
            width: 220, height: 220, borderRadius: '50%',
            background: 'radial-gradient(closest-side, rgba(108,156,255,.35), transparent 70%)',
            position: 'absolute', top: 80, left: -40, filter: 'blur(2px)'
          }}
        />
        <motion.div
          initial={{ x: 80, y: -40 }}
          animate={{ x: -30, y: 10 }}
          transition={{ repeat: Infinity, repeatType: 'mirror', duration: 12 }}
          style={{
            width: 260, height: 260, borderRadius: '50%',
            background: 'radial-gradient(closest-side, rgba(166,108,255,.35), transparent 70%)',
            position: 'absolute', top: 140, right: -60, filter: 'blur(2px)'
          }}
        />
      </motion.div>
    </section>
  );
}