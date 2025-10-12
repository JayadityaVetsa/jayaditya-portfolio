import React from 'react';
import { motion } from 'framer-motion';
// import { personalInfo } from '../../data/personal';

import { Brain, Code, TrendingUp, Users, Award, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const skills = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Deep learning, neural networks, computer vision for medical imaging",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Quantitative Finance",
      description: "Financial modeling, DCF analysis, algorithmic trading strategies",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Python, React, Flask, API integration, cloud deployment, AI-powered development tools",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership & Teaching",
      description: "Mentoring 100+ students, leading teams, organizing competitions",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Research & Innovation",
      description: "Scientific research, competition finalist, published work",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "AP Scholar, competitive mathematics, advanced coursework",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Always pushing boundaries and exploring new possibilities in technology and finance.",
      stat: "6+ Projects"
    },
    {
      title: "Impact",
      description: "Creating solutions that make a real difference in people's lives and communities.",
      stat: "20K+ Users"
    },
    {
      title: "Growth",
      description: "Continuous learning and helping others grow through mentorship and teaching.",
      stat: "100+ Students"
    },
    {
      title: "Excellence",
      description: "Striving for the highest standards in everything from code to competition.",
      stat: "Top 24 Global"
    }
  ];

  return (
    <section id="about" className="py-12 bg-gradient-to-br from-cosmic-primary via-cosmic-dark to-cosmic-secondary/10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="space-y-10"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              About Me
            </h2>
            <p className="text-xl text-cosmic-muted max-w-3xl mx-auto">
              My journey spans across artificial intelligence, quantitative finance, and educational innovation.
              Here's how I'm building the future, one project at a time.
            </p>
          </motion.div>

          {/* Personal Story */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-cosmic-text">
                Building at the Intersection of Technology and Impact
              </h3>
              <div className="prose prose-lg text-cosmic-muted space-y-4">
                <p>
                  From building AI models that can detect neurodegenerative diseases to creating financial platforms 
                  that serve thousands of users, I've learned that the most meaningful innovations happen when different 
                  fields collide.
                </p>
                <p>
                  Whether I'm conducting 100+ hours of equity research for global competitions, developing chatbots 
                  with enterprise-grade capabilities, or teaching advanced mathematics to elementary students, I'm 
                  driven by a simple belief: technology should create opportunities for everyone to succeed.
                </p>
                <p>
                  As a high school senior at Rouse High School, I've co-founded organizations, led teams of 150+ members, 
                  and competed on international stages. But what excites me most is the potential to use my skills to 
                  solve complex problems and inspire the next generation of innovators.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <motion.div
                className="bg-gradient-to-br from-cosmic-secondary/20 to-cosmic-accent/20 rounded-2xl p-8 backdrop-blur-sm border border-cosmic-secondary/30"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cosmic-accent/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-cosmic-accent" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cosmic-text">150+</div>
                      <div className="text-sm text-cosmic-muted">Students Led in Science Olympiad</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cosmic-secondary/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-cosmic-secondary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cosmic-text">Top 24</div>
                      <div className="text-sm text-cosmic-muted">Global Finalist</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cosmic-text">$5000</div>
                      <div className="text-sm text-cosmic-muted">Raised for Scholarships</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-cosmic-text mb-4">
                What Drives Me
              </h3>
              <p className="text-lg text-cosmic-muted max-w-2xl mx-auto">
                These core values guide everything I do, from the projects I build to the way I collaborate with others.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  className="bg-cosmic-dark/40 backdrop-blur-sm rounded-xl p-6 border border-cosmic-secondary/20 hover:border-cosmic-accent/30 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center space-y-4">
                    <div className="text-3xl font-bold text-cosmic-accent">
                      {value.stat}
                    </div>
                    <h4 className="text-xl font-semibold text-cosmic-text">
                      {value.title}
                    </h4>
                    <p className="text-sm text-cosmic-muted">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-cosmic-text mb-4">
                Areas of Expertise
              </h3>
              <p className="text-lg text-cosmic-muted max-w-2xl mx-auto">
                From AI research to financial modeling, I'm passionate about mastering diverse fields 
                and finding innovative ways to connect them.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill) => (
                <motion.div
                  key={skill.title}
                  className="group relative bg-cosmic-dark/30 backdrop-blur-sm rounded-xl p-6 border border-cosmic-secondary/20 hover:border-cosmic-accent/30 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} p-3 text-white`}>
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-cosmic-text group-hover:text-cosmic-accent transition-colors">
                      {skill.title}
                    </h4>
                    <p className="text-cosmic-muted">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
}; 