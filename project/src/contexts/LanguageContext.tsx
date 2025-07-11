import React, { createContext, useContext, ReactNode } from 'react';

export type Language = 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Ana Sayfa',
    
    // Homepage
    portfolio: 'Danışmanlık',
    fictionalMarketing: 'Kurgusal Pazarlama',
    about: 'Hakkımda',
    
    // About Page
    aboutTitle: 'Sarp Eren Karakaya Hakkında',
    businessStudent: 'İşletme Pazarlama Öğrencisi',
    aboutDescription: 'Ekonomi ve işletme yönetimi okuyan ikinci sınıf öğrencisiyim ve pazarlama alanında kariyer yapmak istiyorum. Güçlü analitik becerilerim var ve takım oyuncusuyum. Stajyer olarak, edindiğim teorik bilgileri pratiğe dökerek değer katmayı hedefliyorum.',
    digitalMarketing: 'Dijital Pazarlama',
    socialMedia: 'Sosyal Medya Stratejileri',
    brandIdentity: 'Marka Kimliği',
    linkedinText: 'LinkedIn Profilim İçin Tıklayın',
    contactText: 'Benimle İletişime Geçin',
    downloadCV: 'CV\'mi İndirin',
    skills: 'Yetenekler',
    interests: 'İlgi Alanları',
    digitalMarketingSkill: 'Dijital Pazarlama',
    socialMediaManagement: 'Sosyal Medya Yönetimi',
    brandStrategy: 'Marka Stratejisi',
    analyticsData: 'Analitik ve Veri',
    consumerPsychology: 'Tüketici Psikolojisi',
    brandInnovation: 'Marka İnovasyonu',
    digitalTrends: 'Dijital Trendler',
    marketResearch: 'Pazar Araştırması',
    creativeStrategy: 'Yaratıcı Strateji',
    ecommerce: 'E-ticaret',
    
    // Portfolio Page
    myPortfolio: 'Danışmanlık Hizmetlerim',
    
    // Fictional Marketing Page
    fictionalMarketingStrategies: 'Kurgusal Pazarlama Stratejileri',
    
    // Project Detail Page
    backToPortfolio: 'Danışmanlığa Dön',
    backToFictional: 'Kurgusal Pazarlamaya Dön',
    projectDetails: 'Proje Detayları',
    toolsUsed: 'Kullanılan Araçlar',
    date: 'Tarih',
    client: 'Müşteri',
    projectNotFound: 'Proje Bulunamadı',
    backToHomepage: 'Ana Sayfaya Dön',
    
    // Footer
    footerText: '© 2025 SEKToulouse Danışmanlık.',
    
    // Projects
    socialMediaCampaign: 'Sosyal Medya Kampanyası',
    socialMediaDescription: 'Üniversite projesi için Instagram ve LinkedIn kampanya tasarımı',
    socialMediaDetails: 'Bu projede, hedef kitle analizi yaparak 18-25 yaş arası üniversite öğrencilerini hedefleyen bir sosyal medya kampanyası geliştirdim. Kampanya %120 etkileşim artışı sağladı.',
    
    brandIdentityDesign: 'Marka Kimliği Tasarımı',
    brandIdentityDescription: 'Yerel kahve dükkanı için marka kimliği ve pazarlama stratejisi',
    brandIdentityDetails: 'Yerel bir kahve dükkanı için logo tasarımından sosyal medya stratejisine kadar her şeyi yöneterek eksiksiz bir marka kimliği geliştirdim.',
    
    ecommerceAnalysis: 'E-ticaret Analizi',
    ecommerceDescription: 'Online mağaza için müşteri davranış analizi ve optimizasyon önerileri',
    ecommerceDetails: 'E-ticaret sitesi performansını analiz ettim ve dönüşüm oranını %35 artıran öneriler sundum. Detaylı analiz için Google Analytics ve ısı haritası verilerini kullandım.',
    
    sapiens: 'Sapiens',
    sapiensDescription: 'Türk pazarı için elektrikli araç tanıtım stratejisi',
    sapiensDetails: 'Tesla Model Y\'nin Türk pazarına girişi için kapsamlı pazarlama stratejisi. Çevre bilinci, teknoloji meraklıları ve premium segment hedeflemesi ile omnichannel yaklaşım.',
    
    appleVisionPro: 'Apple Vision Pro Kampanyası',
    appleVisionDescription: 'AR/VR teknolojisi için geleceğe odaklı pazarlama yaklaşımı',
    appleVisionDetails: 'Apple Vision Pro için fütüristik ve teknoloji odaklı kampanya stratejisi. Erken benimseyenleri hedefleyen deneyim merkezli aktivasyonlar ve teknoloji influencerları ile işbirlikleri.',
    
    netflixTurkey: 'Netflix Türkiye Orijinal İçerik',
    netflixDescription: 'Yerel içerik üretimi için kültürel pazarlama stratejisi',
    netflixDetails: 'Netflix\'in Türkiye\'de yerel içerik üretimine odaklanması için kültürel değerleri öne çıkaran pazarlama stratejisi. Sosyal medya, PR ve influencer pazarlamasının entegrasyonu.'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const language: Language = 'en';
  const setLanguage = () => {}; // No-op since we only have English

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};