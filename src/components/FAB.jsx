import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';

const FAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-20 right-0 w-72 p-6 rounded-[2rem] glass-dark shadow-2xl border-2 border-brand-gold/20"
          >
            <h3 className="text-xl font-bold text-brand-blue mb-4">Connect with Myrafe</h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-4 p-2 rounded-xl hover:bg-brand-blue/5 transition-colors text-brand-blue font-semibold">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Phone size={20} />
                </div>
                Volunteer
              </a>
              <a href="#" className="flex items-center gap-4 p-2 rounded-xl hover:bg-brand-blue/5 transition-colors text-brand-blue font-semibold">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Mail size={20} />
                </div>
                Contact
              </a>
              <a href="#" className="flex items-center gap-4 p-2 rounded-xl hover:bg-brand-blue/5 transition-colors text-brand-blue font-semibold">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <MessageCircle size={20} />
                </div>
                Suggestions
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        /* Anti-gravity bobbing */
        animate={{ 
          y: [0, -8, 0],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-brand-gold text-brand-blue shadow-[0_10px_30px_-5px_rgba(212,175,55,0.5)] flex items-center justify-center transition-shadow hover:shadow-brand-gold/60"
      >
        <Send className={`transition-transform duration-500 ${isOpen ? 'rotate-45 scale-75' : ''}`} size={28} />
      </motion.button>
    </div>
  );
};

export default FAB;
