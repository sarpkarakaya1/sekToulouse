import React, { useState, useEffect } from 'react';
import { User, TrendingUp, Users, Target, Linkedin, Mail, Download } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 saniye

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
      <Helmet>
        <title>Sarp Eren Karakaya Hakkında | SEKToulouse Danışmanlık</title>
        <meta name="description" content="Toulouse School of Economics öğrencisi Sarp Eren Karakaya. İşletme pazarlama alanında uzmanlaşan, Türk öğrencilere Fransa'da yaşam rehberliği sunan danışman." />
        <meta name="keywords" content="Sarp Eren Karakaya, Toulouse danışman, işletme pazarlama öğrencisi, Türk öğrenci rehberi Fransa" />
        <link rel="canonical" href="https://sektoulouse.com/hakkimda" />
      </Helmet>
      
      {/* White Loading Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-50 transition-opacity duration-700 ease-out ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-center h-full">
          <img 
            src="/ekrankoruma.png" 
            alt="Loading"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            loading="eager"
          />
        </div>
      </div>
      
      <div className={`transform-gpu transition-opacity duration-700 ease-out ${
        isLoading ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="max-w-4xl mx-auto px-2 sm:px-6">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center justify-center">
              <User className="mr-1 sm:mr-4 text-gray-600 flex-shrink-0" size={20} />
              <span className="truncate text-xl sm:text-2xl">Sarp Eren Karakaya Hakkında</span>
            </h2>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 p-3 sm:p-8 mb-4 sm:mb-8 transform-gpu contain-layout">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-8 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="/profile.jpg"
                  alt="Sarp Eren Karakaya"
                  className="w-full rounded-xl shadow-xl max-w-xs sm:max-w-sm mx-auto md:max-w-none object-cover aspect-square"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <div className="order-1 md:order-2">
                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">Sarp Eren KARAKAYA</h3>
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  Toulouse'da yaşayan Türk öğrenciler için kapsamlı danışmanlık hizmetleri sunuyorum. Banka hesabı açma, telefon hattı alma, konaklama bulma, CAF-AMELI prosedürleri ve ev bulma süreçlerinde profesyonel rehberlik sağlıyorum. Amacım, yeni gelen öğrencilerin Fransa'daki yaşam kurma sürecini kolaylaştırmak ve stressiz bir geçiş yaşamalarını sağlamaktır.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6">
                  <div className="space-y-2 sm:space-y-4">
                    <div className="flex items-center text-gray-600 text-xs sm:text-base">
                      <TrendingUp className="mr-2 sm:mr-3 text-gray-500 flex-shrink-0" size={16} />
                      <span className="truncate">Bürokratik İşlemler</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-xs sm:text-base">
                      <Users className="mr-2 sm:mr-3 text-gray-500 flex-shrink-0" size={16} />
                      <span className="truncate">Öğrenci Rehberliği</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-xs sm:text-base">
                      <Target className="mr-2 sm:mr-3 text-gray-500 flex-shrink-0" size={16} />
                      <span className="truncate">Yaşam Danışmanlığı</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-4">
                    <a 
                      href="https://www.linkedin.com/in/sarp-eren-karakaya-9ab080255/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 smooth-transition text-xs sm:text-base group active:scale-95"
                    >
                      <Linkedin className="mr-2 sm:mr-3 text-blue-500 group-hover:text-blue-700 flex-shrink-0" size={16} />
                      <span className="truncate underline hover:no-underline">LinkedIn Profilim İçin Tıklayın</span>
                    </a>
                    <a 
                      href="mailto:sarpkarakaya@aol.com"
                      className="flex items-center text-green-600 hover:text-green-800 smooth-transition text-xs sm:text-base group active:scale-95"
                    >
                      <Mail className="mr-2 sm:mr-3 text-green-500 group-hover:text-green-700 flex-shrink-0" size={16} />
                      <span className="truncate underline hover:no-underline">Benimle İletişime Geçin</span>
                    </a>
                    <a 
                      href="/cv.pdf"
                      download="Sarp_Eren_Karakaya_CV.pdf"
                      className="flex items-center text-purple-600 hover:text-purple-800 smooth-transition text-xs sm:text-base group active:scale-95"
                    >
                      <Download className="mr-2 sm:mr-3 text-purple-500 group-hover:text-purple-700 flex-shrink-0" size={16} />
                      <span className="truncate underline hover:no-underline">CV'mi İndirin</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-2 sm:gap-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 p-3 sm:p-6 transform-gpu contain-layout">
              <h4 className="text-sm sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">Eğitim</h4>
              <div className="space-y-2 sm:space-y-3.5">
                <div className="border-l-2 border-gray-300 pl-2 sm:pl-4 py-1">
                  <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Toulouse School of Economics</h5>
                  <p className="text-gray-600 text-xs sm:text-sm">Ekonomi ve İşletme Yönetimi</p>
                  <p className="text-gray-500 text-xs">Eylül 2023 - Mayıs 2026 (Devam Ediyor)</p>
                </div>
                
                <div className="border-l-2 border-gray-300 pl-2 sm:pl-4 py-1">
                  <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Aix-Marseille University</h5>
                  <p className="text-gray-500 text-xs">2022 - 2023</p>
                </div>
                
                <div className="border-l-2 border-gray-300 pl-2 sm:pl-4 py-1">
                  <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Izmir Private Tevfik Fikret Schools</h5>
                  <p className="text-gray-600 text-xs sm:text-sm">Lise Diploması</p>
                  <p className="text-gray-500 text-xs">2018 - 2022</p>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 p-3 sm:p-6 transform-gpu contain-layout">
              <h4 className="text-sm sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">Deneyim</h4>
              <div className="space-y-2 sm:space-y-3.5">
                <div className="border-l-2 border-purple-300 pl-2 sm:pl-4 py-1">
                  <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Équiper Polyvalent</h5>
                  <p className="text-gray-600 text-xs sm:text-sm">PITTZ FRANCE - Sürekli</p>
                  <p className="text-gray-500 text-xs">Mayıs 2022 - Ağustos 2022 · 3 ay</p>
                  <p className="text-gray-500 text-xs">Aix-en-Provence, Provence-Alpes-Côte d'Azur, Fransa</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-2 sm:gap-4 mt-2 sm:mt-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 p-3 sm:p-6 transform-gpu contain-layout">
              <h4 className="text-sm sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">Diller</h4>
              <div className="space-y-2 sm:space-y-3.5">
                <div className="border-l-2 border-blue-300 pl-2 sm:pl-4 py-1">
                  <h5 className="font-semibold text-gray-800 text-sm sm:text-base">İngilizce</h5>
                  <p className="text-gray-600 text-xs sm:text-sm">Profesyonel Çalışma Yeterliliği</p>
                </div>
                
                <div className="border-l-2 border-green-300 pl-2 sm:pl-4 py-1">
                  <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Fransızca</h5>
                  <p className="text-gray-600 text-xs sm:text-sm">Profesyonel Çalışma Yeterliliği</p>
                </div>
                
                <div className="border-l-2 border-red-300 pl-2 sm:pl-4 py-1">
                  <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Türkçe</h5>
                  <p className="text-gray-600 text-xs sm:text-sm">Ana Dil</p>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 p-3 sm:p-6 transform-gpu contain-layout">
              <h4 className="text-sm sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">Yetenekler</h4>
              <div className="space-y-1.5 sm:space-y-2">
                {[
                  { name: 'Bürokratik İşlem Rehberliği', icon: '📋' },
                  { name: 'Öğrenci Danışmanlığı', icon: '🎓' },
                  { name: 'Ev Bulma Desteği', icon: '🏠' },
                  { name: 'Yaşam Organizasyonu', icon: '📅' }
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center p-2 sm:p-3 rounded-xl bg-gradient-to-r from-white/40 to-white/20 border border-white/30">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                        <span className="text-xs sm:text-sm">{skill.icon}</span>
                      </div>
                      <span className="text-gray-700 font-medium text-xs sm:text-base">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;