import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Star } from 'lucide-react';
import type { Project } from '../../data/projects';
import { Button } from './Button';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-cosmic-dark/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-cosmic-dark border border-cosmic-secondary/20 rounded-2xl shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-cosmic-secondary/20 hover:bg-cosmic-secondary/40 rounded-full transition-colors"
            >
              <X size={20} className="text-cosmic-text" />
            </button>

            {/* Header Image */}
            <div className={`h-48 bg-gradient-to-br ${getCategoryColor(project.category)} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-cosmic-dark/20" />
              <div className="absolute top-4 left-4 right-16 flex items-center justify-between">
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

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Title and Description */}
              <div>
                <h2 className="text-3xl font-bold text-cosmic-text mb-4 gradient-text">
                  {project.title}
                </h2>
                <p className="text-cosmic-muted text-lg leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Impact */}
              <div className="border-t border-cosmic-secondary/20 pt-6">
                <h3 className="text-xl font-semibold text-cosmic-accent mb-3">Impact & Achievements</h3>
                <div className="bg-cosmic-secondary/10 rounded-lg p-4 border border-cosmic-secondary/20">
                  <p className="text-cosmic-text font-medium">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="border-t border-cosmic-secondary/20 pt-6">
                <h3 className="text-xl font-semibold text-cosmic-accent mb-3">Technologies Used</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {project.technologies.map((tech, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 bg-cosmic-secondary/20 text-cosmic-text rounded-lg text-sm font-medium text-center border border-cosmic-secondary/20 hover:border-cosmic-accent/30 transition-colors"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-cosmic-secondary/20">
                {project.demoUrl && (
                  <Button
                    variant="primary"
                    href={project.demoUrl}
                    target="_blank"
                    icon={<ExternalLink size={18} />}
                    className="flex-1 min-w-[200px]"
                  >
                    {project.demoLabel || 'View Live Demo'}
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    href={project.githubUrl}
                    target="_blank"
                    icon={<Github size={18} />}
                    className="flex-1 min-w-[200px]"
                  >
                    View on GitHub
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}; 