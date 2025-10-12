import React, { useState } from 'react';
import { Briefcase, Users, Trophy, BookOpen, MapPin, Clock, TrendingUp, Award } from 'lucide-react';
import { experiences, experienceTypes, getFeaturedExperiences, getExperiencesByType } from '../../data/experience';
import { Button } from '../ui/Button';

export const Experience: React.FC = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [filteredExperiences, setFilteredExperiences] = useState(experiences);
  const [showTimeline, setShowTimeline] = useState(false);

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setFilteredExperiences(getExperiencesByType(type));
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
    <section id="experience" className="py-6 bg-gradient-to-br from-cosmic-primary via-cosmic-dark to-cosmic-secondary/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-4">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
              Experience & Activities
            </h2>
            <p className="text-base text-cosmic-muted max-w-3xl mx-auto">
              From internships at leading EdTech companies to founding organizations and competing globally.
            </p>
          </div>

          {/* Featured Experiences */}
          <div className="mb-4">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold gradient-text mb-2">
                Featured Highlights
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              {getFeaturedExperiences().slice(0, 4).map((experience, index) => (
                <div
                  key={experience.id}
                  className="bg-cosmic-dark/40 rounded-lg p-3 border border-cosmic-secondary/20 hover:border-cosmic-accent/30 transition-colors duration-200"
                >
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${getTypeColor(experience.type)} p-2 text-white flex-shrink-0`}>
                        {getTypeIcon(experience.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-bold text-cosmic-text mb-0.5 truncate">
                          {experience.title}
                        </h4>
                        <div className="text-sm text-cosmic-accent font-medium truncate">
                          {experience.company}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-cosmic-muted mt-1">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {experience.period}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-cosmic-muted line-clamp-2">
                      {experience.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="space-y-1">
                      {experience.achievements.slice(0, 1).map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-cosmic-accent rounded-full mt-1.5 flex-shrink-0" />
                          <div className="text-xs text-cosmic-text/80 line-clamp-1">
                            {achievement}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline View */}
          <div className="space-y-3">
            <div className="text-center">
              <h3 className="text-2xl font-bold gradient-text mb-2">
                Complete Timeline
              </h3>
              <button
                onClick={() => setShowTimeline(!showTimeline)}
                className="px-4 py-2 bg-cosmic-accent/20 hover:bg-cosmic-accent/30 text-cosmic-accent rounded-lg text-sm font-medium transition-colors duration-200 border border-cosmic-accent/30"
              >
                {showTimeline ? 'Hide Timeline' : 'Show All Experiences'}
              </button>
            </div>

            {showTimeline && (
              <div className="relative">
                {/* Type Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {experienceTypes.map((type) => (
                    <Button
                      key={type}
                      variant={selectedType === type ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => handleTypeChange(type)}
                      icon={getTypeIcon(type.toLowerCase())}
                      className="transition-all duration-200 capitalize text-xs"
                    >
                      {type}
                    </Button>
                  ))}
                </div>

                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cosmic-accent via-cosmic-secondary to-cosmic-accent opacity-30" />

                <div className="space-y-4">
                  {filteredExperiences.map((experience, index) => (
                  <div
                    key={`${experience.id}-${selectedType}`}
                    className="relative flex items-start gap-3"
                  >
                      {/* Timeline Dot */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getTypeColor(experience.type)} p-2 text-white`}>
                          {getTypeIcon(experience.type)}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-cosmic-dark/30 rounded-lg p-3 border border-cosmic-secondary/20 hover:border-cosmic-accent/30 transition-colors duration-200">
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <h4 className="text-base font-bold text-cosmic-text mb-0.5">
                                {experience.title}
                              </h4>
                              <div className="text-sm text-cosmic-accent font-medium mb-1">
                                {experience.company}
                              </div>
                              <div className="flex items-center gap-3 text-xs text-cosmic-muted">
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {experience.period}
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {experience.location}
                                </div>
                              </div>
                            </div>
                            {experience.featured && (
                              <div className="px-2 py-0.5 bg-cosmic-accent/20 text-cosmic-accent rounded text-xs font-medium border border-cosmic-accent/30 flex-shrink-0">
                                Featured
                              </div>
                            )}
                          </div>

                          <p className="text-sm text-cosmic-muted leading-snug line-clamp-2">
                            {experience.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-1">
                            {experience.technologies.slice(0, 5).map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 bg-cosmic-secondary/20 text-cosmic-text/70 rounded text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Top Achievement */}
                          <div className="flex items-start gap-1.5">
                            <div className="w-1 h-1 bg-cosmic-accent rounded-full mt-1.5 flex-shrink-0" />
                            <div className="text-xs text-cosmic-text/80 line-clamp-1">
                              {experience.achievements[0]}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Stats Summary */}
          <div className="mt-4">
            <div className="bg-cosmic-dark/20 rounded-lg p-4 border border-cosmic-secondary/20">
              <div className="text-center mb-3">
                <h3 className="text-xl font-bold gradient-text mb-1">
                  Impact Summary
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: 'Total Hours', value: '1000+', desc: 'Committed' },
                  { label: 'Students', value: '100+', desc: 'Taught & Mentored' },
                  { label: 'Team Members', value: '50+', desc: 'Led & Supervised' },
                  { label: 'Competitions', value: '5+', desc: 'Top Placements' },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center p-3 bg-cosmic-dark/40 rounded-lg border border-cosmic-secondary/20 hover:border-cosmic-accent/20 transition-colors duration-200"
                  >
                    <div className="text-xl md:text-2xl font-bold text-cosmic-accent mb-0.5">
                      {stat.value}
                    </div>
                    <div className="text-xs text-cosmic-text font-medium mb-0.5">
                      {stat.label}
                    </div>
                    <div className="text-xs text-cosmic-muted">
                      {stat.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 