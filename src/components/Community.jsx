import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Heart, Shield } from 'lucide-react';

const Community = () => {
  const testimonials = [
    {
      quote: "Sustained progress is what we need. Myrafe has already shown us what she can do as Kagawad.",
      author: "Maria Santos",
      role: "Brgy Ingas Resident"
    },
    {
      quote: "She listens and acts. The streetlights project changed my nightly commute home.",
      author: "Robert Garcia",
      role: "Local Fisherman"
    },
    {
      quote: "Myrafe's focus on youth programs has given our kids better opportunities in Infanta.",
      author: "Elena Perez",
      role: "Parent/Teacher"
    }
  ];

  return (
    <section id="community" className="py-24 bg-brand-blue text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Voice of the <span className="text-brand-gold">Community</span></h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            What your neighbors are saying about the leadership and vision of Myrafe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <MessageSquare className="text-brand-gold mb-6" size={32} />
              <p className="text-xl italic mb-8 leading-relaxed">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center font-bold text-brand-gold">
                  {item.author[0]}
                </div>
                <div>
                  <h4 className="font-bold">{item.author}</h4>
                  <p className="text-sm text-white/50">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Icons background deco */}
        <div className="flex justify-center mt-20 gap-20 opacity-20">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}><Heart size={48}/></motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5 }}><Shield size={48}/></motion.div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }}><MessageSquare size={48}/></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Community;
