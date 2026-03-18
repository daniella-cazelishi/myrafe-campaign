import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background blobs for depth */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/5 text-brand-blue text-sm font-bold tracking-widest uppercase mb-6"
          >
            Candidate for Barangay Captain
          </motion.span>
          <h1 className="text-6xl md:text-7xl font-bold text-brand-blue leading-tight mb-6">
            Sustained <br />
            <span className="text-gradient">Progress</span> for <br />
            Brgy Ingas
          </h1>
          <p className="text-xl text-brand-blue/70 max-w-lg mb-10 leading-relaxed">
            Leading with experience, transparency, and a vision for a safer, healthier, and more progressive community for every family in Infanta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            {/* Anti-gravity Floating CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="px-8 py-4 rounded-full bg-brand-blue text-brand-gold text-lg font-bold shadow-2xl shadow-brand-blue/20 hover:shadow-brand-blue/40 transition-shadow"
            >
              Support the Vision
            </motion.button>
            <button className="px-8 py-4 rounded-full border border-brand-blue/20 text-brand-blue font-semibold hover:bg-brand-blue/5 transition-colors">
              Read the Platform
            </button>
          </div>
        </motion.div>

        {/* Hero Image with Anti-gravity Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Main Floating Container */}
          <motion.div 
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 1, 0, -1, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,35,102,0.3)] border-[8px] border-white/40"
          >
            {/* Placeholder Gradient representing Myrafe */}
            <div className="w-full h-full bg-gradient-to-br from-brand-blue to-brand-gold flex items-center justify-center p-12">
               <div className="text-center">
                  <span className="text-6xl text-white opacity-20 block mb-4">Portrait</span>
                  <span className="text-2xl text-white font-bold">MYRAFE</span>
               </div>
            </div>
          </motion.div>

          {/* Floating Element 1: Experience Tag */}
          <motion.div
            animate={{ 
              y: [0, 15, 0],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute -top-6 -left-6 glass px-6 py-4 rounded-2xl shadow-xl z-10"
          >
            <span className="block text-xs font-bold text-brand-blue/50 uppercase tracking-tighter">Current Role</span>
            <span className="block text-brand-blue font-bold">Barangay Kagawad</span>
          </motion.div>

          {/* Floating Element 2: Location Tag */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-10 -right-6 glass px-6 py-4 rounded-2xl shadow-xl z-10"
          >
            <span className="block text-brand-blue font-bold">Brgy Ingas, Infanta</span>
            <span className="block text-xs font-bold text-brand-gold uppercase">Quezon Province</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
