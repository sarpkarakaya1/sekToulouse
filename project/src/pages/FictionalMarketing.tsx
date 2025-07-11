import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const FictionalMarketing = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 saniye

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24 sm:pt-32 pb-12 sm:pb-16 relative overflow-hidden">
      <Helmet>
        <title>İletişim | SEKToulouse Danışmanlık - Toulouse Türk Öğrenci Rehberliği</title>
        <meta name="description" content="SEKToulouse danışmanlık hizmetleri için iletişime geçin. Toulouse'da yaşayan Türk öğrenciler için profesyonel rehberlik ve destek alın." />
        <meta name="keywords" content="SEKToulouse iletişim, Toulouse danışmanlık iletişim, Türk öğrenci destek, Fransa yaşam rehberi iletişim" />
        <link rel="canonical" href="https://sektoulouse.com/iletisim" />
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
      
      <div className="max-w-4xl mx-auto px-2 sm:px-6">
        <div className={`flex justify-center items-center min-h-[calc(100vh-12rem)] transition-opacity duration-700 ease-out ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="w-full max-w-2xl">
            <iframe
              src="https://tally.so/embed/n90pD5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Contact Form"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FictionalMarketing;