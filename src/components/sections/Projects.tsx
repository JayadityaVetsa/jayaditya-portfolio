import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star, TrendingUp, Users, Brain, Code2, Crown } from 'lucide-react';
import { projects, projectCategories, getFeaturedProjects, getProjectsByCategory } from '../../data/projects';
import type { Project } from '../../data/projects';
import { Button } from '../ui/Button';
import { ProjectModal } from '../ui/ProjectModal';
import { SpotlightEffect } from '../animations/SpotlightEffect';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setFilteredProjects(getProjectsByCategory(category));
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return <Brain className="w-5 h-5" />;
      case 'FinTech':
        return <TrendingUp className="w-5 h-5" />;
      case 'Education':
        return <Users className="w-5 h-5" />;
      case 'Business':
        return <Star className="w-5 h-5" />;
      case 'Leadership':
        return <Crown className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return 'from-blue-500 to-cyan-500';
      case 'FinTech':
        return 'from-green-500 to-emerald-500';
      case 'Education':
        return 'from-purple-500 to-violet-500';
      case 'Business':
        return 'from-orange-500 to-red-500';
      case 'Leadership':
        return 'from-pink-500 to-rose-500';
      default:
        return 'from-cosmic-secondary to-cosmic-accent';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'published':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-cosmic-secondary/20 text-cosmic-text border-cosmic-secondary/30';
    }
  };

  return (
    <section id="projects" className="pt-20 pb-16 bg-gradient-to-br from-cosmic-secondary/10 via-cosmic-primary to-cosmic-dark">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              My Activities
            </h2>
            <p className="text-xl text-cosmic-muted max-w-3xl mx-auto">
              From developing AI solutions for healthcare to building financial platforms that serve thousands, 
              these activities represent my commitment to creating meaningful impact through technology and leadership.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {projectCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'primary' : 'outline'}
                size="sm"
                onClick={() => handleCategoryChange(category)}
                icon={getCategoryIcon(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group relative bg-cosmic-dark/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-cosmic-secondary/20 hover:border-cosmic-accent/30 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Project Image Placeholder */}
                  <div className={`h-48 bg-gradient-to-br ${getCategoryColor(project.category)} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-cosmic-dark/20" />
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </div>
                      {project.featured && (
                        <div className="px-3 py-1 bg-cosmic-accent/20 text-cosmic-accent rounded-full text-xs font-medium border border-cosmic-accent/30">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="text-white/90 text-sm font-medium">
                        {project.category}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-cosmic-text mb-2 group-hover:text-cosmic-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-cosmic-muted text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Impact */}
                    <div className="border-t border-cosmic-secondary/20 pt-4">
                      <div className="text-xs text-cosmic-accent font-medium mb-1">Impact</div>
                      <div className="text-sm text-cosmic-text/80">
                        {project.impact}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <div className="text-xs text-cosmic-accent font-medium">Technologies</div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-cosmic-secondary/20 text-cosmic-text/70 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-cosmic-secondary/20 text-cosmic-muted rounded-full text-xs">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-cosmic-secondary/20">
                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <Button
                            variant="ghost"
                            size="sm"
                            href={project.githubUrl}
                            target="_blank"
                            icon={<Github className="w-4 h-4" />}
                            className="text-cosmic-muted hover:text-cosmic-accent"
                          >
                            GitHub
                          </Button>
                        )}
                        {project.demoUrl && (
                          <Button
                            variant="ghost"
                            size="sm"
                            href={project.demoUrl}
                            target="_blank"
                            icon={<ExternalLink className="w-4 h-4" />}
                            className="text-cosmic-muted hover:text-cosmic-accent"
                          >
                            Demo
                          </Button>
                        )}
                      </div>
                      <div className="text-xs text-cosmic-muted">
                        {project.status === 'completed' ? 'Completed' : 'In Progress'}
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-cosmic-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Spotlight Section */}
          <SpotlightEffect className="mt-12 py-8 rounded-3xl">
            <motion.div variants={itemVariants}>
                              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold gradient-text mb-4">
                  Spotlight: My Signature Projects
                </h3>
                <p className="text-lg text-cosmic-muted max-w-2xl mx-auto">
                  These are the projects I'm most proud of—where I've pushed my limits, learned the most, 
                  and created solutions that truly matter. Each represents a significant milestone in my journey.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {getFeaturedProjects().slice(0, 2).map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="bg-cosmic-dark/30 backdrop-blur-sm rounded-2xl p-8 border border-cosmic-secondary/20 hover:border-cosmic-accent/30 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getCategoryColor(project.category)} p-3 text-white`}>
                          {getCategoryIcon(project.category)}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-cosmic-text">
                            {project.title}
                          </h4>
                          <div className="text-sm text-cosmic-muted">
                            {project.category}
                          </div>
                        </div>
                      </div>

                      <p className="text-cosmic-muted leading-relaxed">
                        {project.longDescription}
                      </p>

                      <div className="space-y-3">
                        <div className="text-sm font-medium text-cosmic-accent">
                          What I Achieved
                        </div>
                        <div className="text-cosmic-text/80">
                          {project.impact}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-cosmic-secondary/20">
                        <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                          {project.githubUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              href={project.githubUrl}
                              target="_blank"
                              icon={<Github className="w-4 h-4" />}
                            >
                              View Code
                            </Button>
                          )}
                          {project.demoUrl && (
                            <Button
                              variant="primary"
                              size="sm"
                              href={project.demoUrl}
                              target="_blank"
                              icon={<ExternalLink className="w-4 h-4" />}
                            >
                              Live Demo
                            </Button>
                          )}
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                          {project.status}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </SpotlightEffect>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-cosmic-accent/10 to-cosmic-secondary/10 backdrop-blur-sm rounded-3xl p-12 border border-cosmic-accent/20 shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-xl text-cosmic-muted mb-8 max-w-3xl mx-auto leading-relaxed">
                Whether you're looking for a passionate developer, researcher, or innovator, I'm always excited to collaborate on projects that push the boundaries of technology and create meaningful impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="primary"
                  size="lg"
                  href="mailto:vetsajayaditya@gmail.com?subject=Collaboration Opportunity"
                  className="hover:scale-105 transition-transform min-w-[200px]"
                >
                  Let's Connect
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="https://linkedin.com/in/jayaditya-vetsa"
                  target="_blank"
                  className="hover:scale-105 transition-transform min-w-[200px]"
                >
                  View LinkedIn
                </Button>
              </div>
              <div className="mt-8 pt-6 border-t border-cosmic-secondary/20">
                <p className="text-sm text-cosmic-muted">
                  Thank you for exploring my journey. Let's create the future together! 🚀
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}; 