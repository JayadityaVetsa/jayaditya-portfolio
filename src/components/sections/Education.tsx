import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Star } from 'lucide-react';
import { educationInfo } from '../../data/education';
import { TiltCard } from '../ui/TiltCard';
import { staggerContainer, staggerItem } from '../../utils/animations';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-20 bg-gradient-to-br from-cosmic-dark via-cosmic-primary to-cosmic-secondary/10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="space-y-12"
        >
          <motion.div variants={staggerItem} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text mb-4">
              Education
            </h2>
            <p className="text-lg text-cosmic-muted max-w-3xl mx-auto">
              Academic foundation at {educationInfo.school} — rigorous coursework, top-tier test scores, and national recognition.
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="text-center">
            <div className="inline-flex items-center gap-3 bg-cosmic-dark/40 backdrop-blur-sm rounded-2xl px-8 py-4 border border-cosmic-secondary/20">
              <GraduationCap className="w-8 h-8 text-cosmic-accent" />
              <div className="text-left">
                <h3 className="text-xl font-bold text-cosmic-text">{educationInfo.school}</h3>
                <p className="text-cosmic-muted">{educationInfo.location} · {educationInfo.graduationYear}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={staggerItem} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {educationInfo.stats.map((stat) => (
              <TiltCard
                key={stat.label}
                className="relative bg-cosmic-dark/40 backdrop-blur-sm rounded-xl p-6 border border-cosmic-secondary/20 hover:border-cosmic-accent/30 transition-colors text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-cosmic-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-cosmic-text mb-1">{stat.label}</div>
                <div className="text-xs text-cosmic-muted">{stat.description}</div>
              </TiltCard>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div variants={staggerItem} className="space-y-6">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-cosmic-accent" />
                <h3 className="text-2xl font-bold text-cosmic-text">Relevant Coursework</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {educationInfo.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 bg-cosmic-secondary/20 text-cosmic-text/80 rounded-lg text-sm border border-cosmic-secondary/30"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="space-y-6">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-cosmic-accent" />
                <h3 className="text-2xl font-bold text-cosmic-text">AP Scores</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {educationInfo.apScores.map((ap) => (
                  <div
                    key={ap.subject}
                    className="flex items-center justify-between bg-cosmic-dark/30 rounded-lg px-4 py-3 border border-cosmic-secondary/20"
                  >
                    <span className="text-sm text-cosmic-text">{ap.subject}</span>
                    <span className="text-lg font-bold text-cosmic-accent">{ap.score}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={staggerItem} className="space-y-6">
            <div className="flex items-center gap-3 justify-center">
              <Award className="w-6 h-6 text-cosmic-accent" />
              <h3 className="text-2xl font-bold text-cosmic-text">Honors &amp; Recognition</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {educationInfo.honors.map((honor) => (
                <TiltCard
                  key={honor.title}
                  className="bg-cosmic-dark/40 backdrop-blur-sm rounded-xl p-5 border border-cosmic-secondary/20 hover:border-cosmic-accent/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      honor.type === 'academic' ? 'bg-cosmic-accent' : 'bg-cosmic-purple'
                    }`} />
                    <div>
                      <h4 className="text-sm font-semibold text-cosmic-text">{honor.title}</h4>
                      {honor.year && (
                        <p className="text-xs text-cosmic-muted mt-1">{honor.year}</p>
                      )}
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
