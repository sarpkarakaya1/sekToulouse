import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-16 pb-12 sm:pb-16">
      <Helmet>
        <title>Hakkımda | SEKToulouse Danışmanlık - Sarp Eren Karakaya</title>
        <meta name="description" content="Sarp Eren Karakaya'nın Toulouse'da Türk öğrencilere yönelik danışmanlık hizmetleri hakkında bilgi edinin. Deneyimler, yetenekler ve eğitim geçmişi." />
        <meta name="keywords" content="Sarp Eren Karakaya, Toulouse danışmanlık, Türk öğrenci rehberliği, Fransa yaşam rehberi, öğrenci destek hizmetleri" />
        <link rel="canonical" href="https://sektoulouse.com/hakkimda" />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-2 sm:px-6">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 p-3 sm:p-6 transform-gpu contain-layout">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6">
            <div className="order-2 md:order-1 flex-shrink-0">
              <img 
                src="/profile.jpg" 
                alt="Sarp Eren Karakaya"
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-base sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">Sarp Eren KARAKAYA</h3>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Toulouse'da yaşayan Türk öğrenciler için kapsamlı danışmanlık hizmetleri sunuyorum. Banka hesabı açma, telefon hattı alma, konaklama bulma, CAF ve AMELI prosedürleri ile ev bulma konularında profesyonel rehberlik sağlıyorum. Amacım, yeni gelen öğrencilerin Fransa'daki yaşam süreçlerini kolaylaştırmak ve stressiz bir geçiş yapmalarını sağlamaktır.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6">
                <div className="space-y-2 sm:space-y-4">
                  <div className="flex items-center text-gray-600 text-xs sm:text-base">
                    <TrendingUp className="mr-2 sm:mr-3 text-gray-500 flex-shrink-0" size={14} />
                    <span className="truncate">Bürokratik İşlemler</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-xs sm:text-base">
                    <Users className="mr-2 sm:mr-3 text-gray-500 flex-shrink-0" size={14} />
                    <span className="truncate">Öğrenci Rehberliği</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-xs sm:text-base">
                    <Target className="mr-2 sm:mr-3 text-gray-500 flex-shrink-0" size={14} />
                    <span className="truncate">Yaşam Danışmanlığı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 p-3 sm:p-6 transform-gpu contain-layout mt-6 sm:mt-8">
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

        <div className="grid md:grid-cols-2 gap-2 sm:gap-4 mt-6 sm:mt-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 p-3 sm:p-6 transform-gpu contain-layout">
            <h4 className="text-sm sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">Diller</h4>
            <div className="space-y-2 sm:space-y-3.5">
              <div className="border-l-2 border-blue-300 pl-2 sm:pl-4 py-1">
                <h5 className="font-semibold text-gray-800 text-sm sm:text-base">İngilizce</h5>
                <p className="text-gray-600 text-xs sm:text-sm">İleri Seviye</p>
              </div>
              
              <div className="border-l-2 border-green-300 pl-2 sm:pl-4 py-1">
                <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Fransızca</h5>
                <p className="text-gray-600 text-xs sm:text-sm">İleri Seviye</p>
              </div>
              
              <div className="border-l-2 border-red-300 pl-2 sm:pl-4 py-1">
                <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Türkçe</h5>
                <p className="text-gray-600 text-xs sm:text-sm">Ana Dil</p>
              </div>
            </div>
          </div>

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
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 p-3 sm:p-6 transform-gpu contain-layout mt-6 sm:mt-8">
          <h4 className="text-sm sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">Yetenekler</h4>
          <div className="space-y-1.5 sm:space-y-2">
            {[ 
              { name: 'Öğrenci Danışmanlığı', icon: '🎓' },
              { name: 'Bürokratik İşlemler', icon: '📋' },
              { name: 'Yaşam Rehberliği', icon: '🏠' },
              { name: 'İletişim ve Koordinasyon', icon: '📞' }
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
  );
};

export default About;