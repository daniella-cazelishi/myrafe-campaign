import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Search, Eye } from 'lucide-react';

const Vision = () => {
  const platforms = [
    {
      title: 'Security & Safety',
      description: 'Enhancing barangay patrols and modernizing community monitoring systems for a safer Ingas.',
      icon: <Shield className="w-8 h-8 text-brand-blue" />,
      color: 'bg-blue-50'
    },
    {
      title: 'Public Health',
      description: 'Expanding doorstep medical assistance and health education programs for every household.',
      icon: <Heart className="w-8 h-8 text-red-500" />,
      color: 'bg-red-50'
    },
    {
      title: 'Transparency',
      description: 'Digital-first governance where every budget allocation and project status is open to the public.',
      icon: <Search className="w-8 h-8 text-brand-gold" />,
      color: 'bg-yellow-50'
    },
    {
      title: 'Youth Empowerment',
      description: 'Livelihood programs and sports facilities to keep our youth engaged and productive.',
      icon: <Eye className="w-8 h-8 text-green-500" />,
      color: 'bg-green-50'
    }
  ];

  return (
    <section id="vision" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-brand-blue mb-4"
        >
          The <span className="text-gradient">Vision</span> for Brgy Ingas
        </motion.h2>
        <p className="text-brand-blue/60 text-lg max-w-2xl mx-auto mb-16">
          A comprehensive roadmap to elevate our community through three core pillars of governance.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {platforms.slice(0, 3).map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              /* Anti-gravity bobbing effect */
              animate={{ 
                y: [0, -12, 0],
              }}
              transition={{ 
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }}
              className="group p-10 rounded-[2.5rem] bg-white border border-brand-blue/5 shadow-2xl shadow-brand-blue/5 hover:shadow-brand-blue/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl ${platform.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 mx-auto md:mx-0`}>
                {platform.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4 text-center md:text-left">{platform.title}</h3>
              <p className="text-brand-blue/70 leading-relaxed text-center md:text-left">
                {platform.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
