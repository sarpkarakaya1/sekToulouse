import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Mail, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Homepage = () => {
  const menuItems = [
    {
      title: 'Danışmanlık',
      path: '/danismanlik',
      icon: Briefcase
    },
    {
      title: 'Hakkımda',
      path: '/hakkimda',
      icon: User
    },
    {
      title: 'İletişim',
      path: '/iletisim',
      icon: Mail
    }
  ];

  return (
    <div className="h-screen bg-gradient-to-br from-stone-100 via-neutral-100 to-gray-100 flex flex-col overflow-hidden transform-gpu">
      <Helmet>
        <title>SEKToulouse - Toulouse Danışmanlık Hizmetleri | Türk Öğrenciler İçin Rehberlik</title>
        <meta name="description" content="Toulouse'da yaşayan Türk öğrenciler için kapsamlı danışmanlık hizmetleri. Banka hesabı, telefon hattı, konaklama, prosedürler ve ev bulma konularında profesyonel rehberlik." />
        <meta name="keywords" content="Toulouse danışmanlık, Türk öğrenci rehberlik, Fransa yaşam rehberi, SEKToulouse, öğrenci destek hizmetleri" />
        <link rel="canonical" href="https://sektoulouse.com" />
      </Helmet>
      
      <div className="flex-1 flex flex-col">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="group relative overflow-hidden flex-1 bg-white/20 backdrop-blur-sm border-b border-white/30 hover:border-white/50 smooth-transition last:border-b-0 active:scale-95 contain-layout"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-white/30" />
            
            <div className="relative h-full flex items-center justify-center px-2 sm:px-4">
              <div className="text-center">
                <div className="mb-2 sm:mb-4">
                  <item.icon size={28} className="text-gray-700 mx-auto mb-2 sm:mb-4 group-hover:text-gray-900 smooth-transition sm:w-12 sm:h-12" />
                </div>
                
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 group-hover:text-gray-900 group-hover:scale-110 smooth-transition transform-gpu leading-tight px-2">
                  {item.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )
    </div>
  );
};

export default Homepage;