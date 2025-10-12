import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Users, Trophy, BookOpen, MapPin, Clock, TrendingUp, Award } from 'lucide-react';
import { experiences, experienceTypes, getFeaturedExperiences, getExperiencesByType } from '../../data/experience';
import { Button } from '../ui/Button';

export const Experience: React.FC = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [filteredExperiences, setFilteredExperiences] = useState(experiences);

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setFilteredExperiences(getExperiencesByType(type));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'internship':
        return <Briefcase className="w-5 h-5" />;
      case 'volunteer':
        return <Users className="w-5 h-5" />;
      case 'competition':
        return <Trophy className="w-5 h-5" />;
      case 'leadership':
        return <Award className="w-5 h-5" />;
      case 'research':
        return <BookOpen className="w-5 h-5" />;
      case 'entrepreneurship':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'internship':
        return 'from-blue-500 to-cyan-500';
      case 'volunteer':
        return 'from-green-500 to-emerald-500';
      case 'competition':
        return 'from-yellow-500 to-orange-500';
      case 'leadership':
        return 'from-purple-500 to-pink-500';
      case 'research':
        return 'from-red-500 to-rose-500';
      case 'entrepreneurship':
        return 'from-indigo-500 to-purple-500';
      default:
        return 'from-cosmic-secondary to-cosmic-accent';
    }
  };

  return (
    <section id="experience" className="py-8 bg-gradient-to-br from-cosmic-primary via-cosmic-dark to-cosmic-secondary/20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Experience & Activities
            </h2>
            <p className="text-xl text-cosmic-muted max-w-3xl mx-auto">
              From internships at leading EdTech companies to founding organizations and competing globally, 
              here's my journey of growth, leadership, and impact.
            </p>
          </motion.div>

          {/* Type Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {experienceTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? 'primary' : 'outline'}
                size="sm"
                onClick={() => handleTypeChange(type)}
                icon={getTypeIcon(type.toLowerCase())}
                className="transition-all duration-300 capitalize"
              >
                {type}
              </Button>
            ))}
          </motion.div>

          {/* Featured Experiences */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold gradient-text mb-4">
                Featured Highlights
              </h3>
              <p className="text-lg text-cosmic-muted max-w-2xl mx-auto">
                Key experiences that have shaped my journey and demonstrated significant impact.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {getFeaturedExperiences().slice(0, 4).map((experience, index) => (
                <motion.div
                  key={experience.id}
                  className="bg-cosmic-dark/40 backdrop-blur-sm rounded-2xl p-6 border border-cosmic-secondary/20 hover:border-cosmic-accent/30 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getTypeColor(experience.type)} p-3 text-white flex-shrink-0`}>
                        {getTypeIcon(experience.type)}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-cosmic-text mb-1">
                          {experience.title}
                        </h4>
                        <div className="text-cosmic-accent font-medium">
                          {experience.company}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-cosmic-muted mt-2">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {experience.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {experience.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-cosmic-muted leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-cosmic-accent">
                        Key Achievements
                      </div>
                      <div className="space-y-1">
                        {experience.achievements.slice(0, 2).map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-cosmic-accent rounded-full mt-2 flex-shrink-0" />
                            <div className="text-sm text-cosmic-text/80">
                              {achievement}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Time Commitment */}
                    <div className="flex items-center justify-between pt-4 border-t border-cosmic-secondary/20">
                      <div className="text-sm text-cosmic-muted">
                        {experience.hoursPerWeek} hrs/week • {experience.totalWeeks} weeks
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getTypeColor(experience.type)} bg-gradient-to-r text-white`}>
                        {experience.type}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline View */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold gradient-text mb-4">
                Complete Timeline
              </h3>
              <p className="text-lg text-cosmic-muted max-w-2xl mx-auto">
                A chronological view of my journey across internships, competitions, leadership roles, and volunteer work.
              </p>
            </div>

            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cosmic-accent via-cosmic-secondary to-cosmic-accent opacity-30" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedType}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-8"
                >
                  {filteredExperiences.map((experience, index) => (
                    <motion.div
                      key={experience.id}
                      variants={itemVariants}
                      className="relative flex items-start gap-6"
                    >
                      {/* Timeline Dot */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getTypeColor(experience.type)} p-3 text-white shadow-lg`}>
                          {getTypeIcon(experience.type)}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-cosmic-dark/30 backdrop-blur-sm rounded-2xl p-6 border border-cosmic-secondary/20 hover:border-cosmic-accent/30 transition-all duration-300">
                        <div className="space-y-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-xl font-bold text-cosmic-text mb-1">
                                {experience.title}
                              </h4>
                              <div className="text-cosmic-accent font-medium mb-2">
                                {experience.company}
                              </div>
                              <div className="flex items-center gap-4 text-sm text-cosmic-muted">
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {experience.period}
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {experience.location}
                                </div>
                              </div>
                            </div>
                            {experience.featured && (
                              <div className="px-3 py-1 bg-cosmic-accent/20 text-cosmic-accent rounded-full text-xs font-medium border border-cosmic-accent/30">
                                Featured
                              </div>
                            )}
                          </div>

                          <p className="text-cosmic-muted leading-relaxed">
                            {experience.description}
                          </p>

                          {/* Responsibilities */}
                          <div className="space-y-2">
                            <div className="text-sm font-medium text-cosmic-accent">
                              Key Responsibilities
                            </div>
                            <div className="grid md:grid-cols-2 gap-2">
                              {experience.responsibilities.map((responsibility, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-cosmic-secondary rounded-full mt-2 flex-shrink-0" />
                                  <div className="text-sm text-cosmic-text/80">
                                    {responsibility}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies */}
                          <div className="space-y-2">
                            <div className="text-sm font-medium text-cosmic-accent">
                              Technologies & Skills
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-cosmic-secondary/20 text-cosmic-text/70 rounded-full text-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Achievements */}
                          <div className="space-y-2">
                            <div className="text-sm font-medium text-cosmic-accent">
                              Achievements & Impact
                            </div>
                            <div className="space-y-1">
                              {experience.achievements.map((achievement, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-cosmic-accent rounded-full mt-2 flex-shrink-0" />
                                  <div className="text-sm text-cosmic-text/80">
                                    {achievement}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Time Commitment */}
                          <div className="flex items-center justify-between pt-4 border-t border-cosmic-secondary/20">
                            <div className="text-sm text-cosmic-muted">
                              {experience.hoursPerWeek} hours/week • {experience.totalWeeks} weeks total
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getTypeColor(experience.type)} bg-gradient-to-r text-white`}>
                              {experience.type}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Stats Summary */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-cosmic-dark/20 backdrop-blur-sm rounded-2xl p-8 border border-cosmic-secondary/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold gradient-text mb-2">
                  Impact Summary
                </h3>
                <p className="text-cosmic-muted">
                  Quantifying the breadth and depth of my experiences.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'Total Hours', value: '1000+', desc: 'Committed' },
                  { label: 'Students', value: '100+', desc: 'Taught & Mentored' },
                  { label: 'Team Members', value: '50+', desc: 'Led & Supervised' },
                  { label: 'Competitions', value: '5+', desc: 'Top Placements' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 bg-cosmic-dark/40 rounded-xl border border-cosmic-secondary/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-cosmic-accent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-cosmic-text font-medium mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-cosmic-muted">
                      {stat.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 