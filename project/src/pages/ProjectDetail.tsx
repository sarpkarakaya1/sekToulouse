import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Target } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <div className="min-h-screen bg-white pt-16 pb-16">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Proje Bulunamadı</h1>
            <Link 
              to="/" 
              className="inline-flex items-center px-3 sm:px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="mr-2 flex-shrink-0" size={18} />
              <span className="whitespace-nowrap">Ana Sayfaya Dön</span>
            </Link>
          </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-2 sm:px-6">
          <Link 
            to={project.category === 'portfolio' ? '/danismanlik' : '/iletisim'}
            className="inline-flex items-center px-2 sm:px-4 py-2 bg-white/60 text-gray-600 rounded-lg hover:bg-white/80 hover:text-gray-800 smooth-transition mb-3 sm:mb-8 text-xs sm:text-base active:scale-95"
          >
            <ArrowLeft className="mr-1 sm:mr-2 flex-shrink-0" size={14} />
            <span className="truncate">{project.category === 'portfolio' ? 'Danışmanlığa Dön' : 'İletişime Dön'}</span>
          </Link>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 overflow-hidden contain-layout">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-32 sm:h-64 md:h-80 object-cover rounded-xl"
              loading="lazy"
              decoding="async"
            />
            
            <div className="p-3 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 sm:mb-6 gap-2">
                <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-gray-800 leading-tight">
                  {project.title}
                </h1>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-gray-200 text-gray-600 rounded-lg text-xs sm:text-sm font-medium self-start flex-shrink-0">
                  {project.category === 'portfolio' ? 'Danışmanlık' : 'Kurgusal Pazarlama'}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm sm:text-lg leading-relaxed mb-3 sm:mb-8">
                {project.details}
              </p>
              
              <div className="grid md:grid-cols-2 gap-3 sm:gap-8">
                <div>
                  <h3 className="text-sm sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4 flex items-center">
                    <Calendar className="mr-2 text-gray-500 flex-shrink-0" size={14} />
                    <span className="truncate">Proje Detayları</span>
                  </h3>
                  <div className="space-y-1 sm:space-y-2 text-gray-600 text-xs sm:text-base">
                    <p><span className="font-medium">Tarih:</span> {project.date}</p>
                    {project.client && <p><span className="font-medium">Müşteri:</span> {project.client}</p>}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4 flex items-center">
                    <Target className="mr-2 text-gray-500 flex-shrink-0" size={14} />
                    <span className="truncate">Kullanılan Araçlar</span>
                  </h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tools.map((tool, index) => (
                      <span 
                        key={index}
                        className="px-2 sm:px-3 py-1 bg-gray-200 text-gray-600 rounded-lg text-xs sm:text-sm text-center"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProjectDetail;