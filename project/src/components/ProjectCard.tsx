import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      to={`/project/${project.id}`}
      className="group block bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/50 hover:border-white/70 smooth-transition hover:transform hover:scale-105 hover:shadow-xl hover:shadow-gray-200/30 transform-gpu will-change-transform active:scale-95 contain-layout"
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-28 sm:h-48 md:h-56 lg:h-64 object-cover group-hover:scale-110 smooth-transition rounded-xl transform-gpu will-change-transform"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-xl" />
      </div>
      
      <div className="p-2 sm:p-6 text-center">
        <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-800 group-hover:text-gray-900 smooth-transition leading-tight">
          {project.title}
        </h3>
      </div>
    </Link>
  );
};

export default ProjectCard;