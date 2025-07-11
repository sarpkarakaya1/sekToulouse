@@ .. @@
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
                  
                  <div className="space-y-1.5 sm:space-y-2">
                    {[
                      { name: 'Öğrenci Danışmanlığı', icon: '🎓' },
                      { name: 'Bürokratik İşlemler', icon: '📋' },
                      { name: 'Yaşam Rehberliği', icon: '🏠' },
                      { name: 'İletişim ve Koordinasyon', icon: '📞' }
                    ].map((skill, index) => (
                      <div key={index}>
                        <div className="flex items-center p-2 sm:p-3 rounded-xl bg-gradient-to-r from-white/40 to-white/20 border border-white/30">