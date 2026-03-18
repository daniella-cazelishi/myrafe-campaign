import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const TrackRecord = () => {
  const accomplishments = [
    {
      year: '2023',
      title: 'Health Initiatives',
      description: 'Strengthened the Barangay Health Center by securing additional medical supplies and organizing monthly free check-ups.',
      category: 'Health'
    },
    {
      year: '2022',
      title: 'Infrastructure Development',
      description: 'Spearheaded the street lighting project for the inner sitios, ensuring safer roads for residents at night.',
      category: 'Security'
    },
    {
      year: '2021',
      title: 'COVID-19 Response',
      description: 'Managed the efficient distribution of relief goods and organized community vaccination drives.',
      category: 'Welfare'
    },
    {
      year: '2020',
      title: 'Transparency Portal',
      description: 'Initiated the digital posting of barangay resolutions and financial reports for community access.',
      category: 'Governance'
    }
  ];

  return (
    <section id="record" className="py-24 relative bg-white/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-blue mb-4"
          >
            Track Record of <span className="text-gradient">Service</span>
          </motion.h2>
          <p className="text-brand-blue/60 text-lg max-w-2xl mx-auto">
            A history of dedicated service as Barangay Kagawad, delivering tangible results for the people of Ingas.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-brand-blue/10 md:block hidden" />

          <div className="space-y-12">
            {accomplishments.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className={`p-8 rounded-3xl glass-dark shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 ${
                    index % 2 === 0 ? 'border-brand-gold pb-8' : 'border-brand-blue pb-8'
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider">
                        {item.year}
                      </span>
                      <span className="text-brand-gold font-bold text-sm uppercase tracking-widest">{item.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-blue mb-3">{item.title}</h3>
                    <p className="text-brand-blue/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10 md:flex hidden items-center justify-center w-12 h-12 rounded-full bg-white shadow-xl border border-brand-blue/5">
                  <CheckCircle2 className="text-brand-gold" size={24} />
                </div>

                {/* Empty Space for alignment */}
                <div className="flex-1 md:block hidden" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
