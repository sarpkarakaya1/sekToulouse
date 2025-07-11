import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 saniye

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-16 pb-12 sm:pb-16 relative overflow-hidden">
      <Helmet>
        <title>Toulouse Danışmanlık Hizmetleri | SEKToulouse - Türk Öğrenciler İçin Rehberlik</title>
        <meta name="description" content="Toulouse'da yaşayan Türk öğrenciler için banka hesabı açma, telefon hattı, konaklama, CAF-AMELI prosedürleri ve ev bulma konularında profesyonel danışmanlık hizmetleri." />
        <meta name="keywords" content="Toulouse danışmanlık, banka hesabı açma Fransa, CAF başvuru, AMELI kayıt, Toulouse ev bulma, Türk öğrenci rehberlik" />
        <link rel="canonical" href="https://sektoulouse.com/danismanlik" />
      </Helmet>
      
      {/* Black Loading Overlay */}
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
      
      {/* Left Banner */}
      <div className="hidden lg:block absolute left-20 xl:left-24 top-0 w-20 xl:w-24 z-10" style={{ height: 'calc(100% - 3rem)' }}>
        <div className="w-full h-full" style={{ 
          backgroundImage: 'url(/solsagbanner.png)', 
          backgroundRepeat: 'repeat-y',
          backgroundSize: 'contain',
          backgroundPosition: 'top'
        }} />
      </div>

      {/* Right Banner */}
      <div className="hidden lg:block absolute right-20 xl:right-24 top-0 w-20 xl:w-24 z-10" style={{ height: 'calc(100% - 3rem)' }}>
        <div className="w-full h-full" style={{ 
          backgroundImage: 'url(/solsagbanner.png)', 
          backgroundRepeat: 'repeat-y',
          backgroundSize: 'contain',
          backgroundPosition: 'top'
        }} />
      </div>
      
      <div className={`max-w-4xl mx-auto px-2 sm:px-6 lg:px-12 xl:px-16 mt-8 sm:mt-12 space-y-6 sm:space-y-8 transition-opacity duration-700 ease-out ${
        isLoading ? 'opacity-0' : 'opacity-100'
      }`}>
          {/* Toulouse'a Hoş Geldin Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 p-3 sm:p-6 transform-gpu contain-layout">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-2 sm:mr-4 flex-shrink-0" />
                <span>Toulouse'a Hoş Geldin!</span>
              </h2>
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-left ml-8 sm:ml-12">
              <p className="text-xs sm:text-sm md:text-base">
                Yeni bir ülkeye adım atmak heyecan verici olduğu kadar yorucu da olabilir.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base">
                Ben de tıpkı senin gibi Türkiye'den geldim ve burada hayat kurmanın ne kadar çok bilinmezle dolu olduğunu çok iyi biliyorum.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base">
                Amacım, senin bu geçiş sürecini daha kolay, daha hızlı ve daha stressiz atlatmanı sağlamak.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base">
                İster kısa bir danışmanlık, ister baştan sona rehberlik – neye ihtiyacın varsa buradayım.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                Hazırsan başlayalım.
              </p>
            </div>
          </div>

          {/* Banka Hesabı Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 p-3 sm:p-6 transform-gpu contain-layout">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-2 sm:mr-4 flex-shrink-0" />
                <span>Banka Hesabı</span>
              </h2>
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-left ml-8 sm:ml-12">
              <p className="text-xs sm:text-sm md:text-base">
                Fransa'da banka hesabı açmak, günlük yaşamın temel gereksinimlerinden biridir.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base">
                Hangi bankanın sizin için en uygun olduğunu, gerekli belgeleri ve süreçleri detaylıca açıklayabilirim.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base">
                Öğrenci hesapları, dijital bankacılık seçenekleri ve günlük işlemleriniz için pratik çözümler sunuyorum.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                Bankacılık işlemlerinizi kolaylaştıralım.
              </p>
            </div>
          </div>

          {/* Telefon Hattı Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 p-3 sm:p-6 transform-gpu contain-layout">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-2 sm:mr-4 flex-shrink-0" />
                <span>Telefon Hattı</span>
              </h2>
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-left ml-8 sm:ml-12">
              <p className="text-xs sm:text-sm md:text-base">
                Fransa'da telefon hattı almak, sosyal ve akademik yaşamınız için kritik öneme sahiptir.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base">
                En uygun operatörleri, öğrenci tarifelerini ve internet paketlerini size özel olarak araştırıp sunuyorum.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base">
                Hem mobil hem de ev interneti seçenekleri, kurulum süreçleri ve fatura yönetimi konularında rehberlik sağlıyorum.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                İletişim ihtiyaçlarınızı karşılayalım.
              </p>
            </div>
          </div>

          {/* Konaklama Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 p-3 sm:p-6 transform-gpu contain-layout">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-2 sm:mr-4 flex-shrink-0" />
                <span>Konaklama</span>
              </h2>
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-left ml-8 sm:ml-12">
              <p className="text-xs sm:text-sm md:text-base">
                Fransa'da uygun ve güvenli bir konaklama bulmak, öğrenci yaşamının en önemli adımlarından biridir.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base">
                Öğrenci yurtları, özel daireler, ev arkadaşlığı seçenekleri ve kira sözleşmesi süreçleri hakkında detaylı bilgi veriyorum.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base">
                Sigorta işlemleri ve taşınma sürecinde size rehberlik ediyorum.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                Evinizi bulmanızda yanınızdayım.
              </p>
            </div>
          </div>

          {/* Prosedürler Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 p-3 sm:p-6 transform-gpu contain-layout">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-2 sm:mr-4 flex-shrink-0" />
                <span>Prosedürler</span>
              </h2>
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-left ml-8 sm:ml-12">
              <p className="text-xs sm:text-sm md:text-base">
                <strong>CAF:</strong> Devletten kira yardımı (100-250€/ay) için başvuru sürecinde rehberlik.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base">
                <strong>AMELI:</strong> Fransız sağlık sistemi kaydı ve Carte Vitale başvuru işlemleri.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base">
                <strong>OFII:</strong> Oturum hakkı resmileştirme ve titre de séjour uzatma prosedürleri.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base">
                Bu kritik işlemlerde doğru adımları atmanız için gerekli belgelerin hazırlanması ve randevu süreçlerinde size eşlik ediyorum.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                Bürokratik işlemlerinizi kolaylaştıralım.
              </p>
            </div>
          </div>

          {/* Yaratıcı Hizmetler Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 p-3 sm:p-6 transform-gpu contain-layout">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-2 sm:mr-4 flex-shrink-0" />
                <span>Yaratıcı Hizmetler</span>
              </h2>
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-left ml-8 sm:ml-12">
              <p className="text-xs sm:text-sm md:text-base">
                <strong>Şehir Rehberi / İlk Hafta Planlaması:</strong> Haritalı şehir tanıtımı, favori ucuz yemek yerleri ve toplu taşıma kartı rehberliği.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base">
                <strong>Üniversite Kayıt Desteği:</strong> Campus France'tan üniversiteye geçiş, CVEC harcı ve öğrenci kartı işlemleri.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base">
                <strong>Online Sistemlere Giriş Yardımı:</strong> EDF, CAF, AMELI, Doctolib gibi sistemlerin tanıtımı ve güvenlik önerileri.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base">
                <strong>Kişisel Dosya Organizasyonu:</strong> Belgelerin dijital klasörlenmesi ve pasaport, konaklama, sigorta belgelerinin saklanması.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                Yaşamınızı organize etmenizde yanınızdayım.
              </p>
            </div>
          </div>

          {/* Ev Bulma Desteği Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 p-3 sm:p-6 transform-gpu contain-layout">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-2 sm:mr-4 flex-shrink-0" />
                <span>Ev Bulma Desteği</span>
              </h2>
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-left ml-8 sm:ml-12">
              <p className="text-xs sm:text-sm md:text-base">
                Fransa'da ev bulmak karmaşık bir süreçtir. Kontrat türleri, kefil zorunlulukları ve dolandırıcılık riskleri bu süreci zorlaştırır.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base">
                Size uygun platform önerileri, ilan değerlendirmesi, başvuru dosyası hazırlama ve ev sahibiyle iletişim konularında rehberlik sağlıyorum.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base">
                Ev sigortası, CAF uyumluluğu ve kontrat inceleme süreçlerinde danışmanlık veriyorum.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base">
                Toulouse'a gelmeden önce ev ayarlamak isteyenler için ön kontrol hizmeti de sunuyorum.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                Bu destek size hem vakit kazandırır hem de hatalı seçim yapmanızı önler.
              </p>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 p-3 sm:p-6 transform-gpu contain-layout">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3">
                Fiyatlandırma
              </h2>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="/Fiyat.png" 
                alt="Pricing Table"
                className="max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[80%] h-auto rounded-lg shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            {/* Button Images */}
            <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
              <a 
                href="/Toulouse'a Hosgeldin.pdf" 
                download="Toulouse'a Hosgeldin.pdf"
                className="transform hover:scale-105 transition-transform duration-200 active:scale-95 inline-block"
              >
                <img 
                  src="/indirme.png" 
                  alt="İndirme"
                  className="h-26 sm:h-30 md:h-34 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              
              <Link 
                to="/iletisim" 
                className="transform hover:scale-105 transition-transform duration-200 active:scale-95 inline-block"
              >
                <img 
                  src="/mesaj.png" 
                  alt="Mesaj"
                  className="h-26 sm:h-30 md:h-34 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Portfolio;