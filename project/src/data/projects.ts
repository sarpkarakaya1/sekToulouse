import { Project } from '../types/Project';

export const projects: Project[] = [
  // Portfolio Projects
  {
    id: 1,
    title: "Sosyal Medya Kampanyası",
    category: "portfolio",
    image: "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Üniversite projesi için Instagram ve LinkedIn kampanya tasarımı",
    details: "Bu projede, hedef kitle analizi yaparak 18-25 yaş arası üniversite öğrencilerini hedefleyen bir sosyal medya kampanyası geliştirdim. Kampanya %120 etkileşim artışı sağladı.",
    tools: ["Instagram", "LinkedIn", "Canva", "Analytics"],
    date: "Ocak 2024",
    client: "Üniversite Projesi"
  },
  {
    id: 2,
    title: "Marka Kimliği Tasarımı",
    category: "portfolio",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Yerel kahve dükkanı için marka kimliği ve pazarlama stratejisi",
    details: "Yerel bir kahve dükkanı için logo tasarımından sosyal medya stratejisine kadar her şeyi yöneterek eksiksiz bir marka kimliği geliştirdim.",
    tools: ["Adobe Illustrator", "Photoshop", "Figma", "Pazar Araştırması"],
    date: "Kasım 2023",
    client: "Coffee Corner"
  },
  {
    id: 3,
    title: "E-ticaret Analizi",
    category: "portfolio",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Online mağaza için müşteri davranış analizi ve optimizasyon önerileri",
    details: "E-ticaret sitesi performansını analiz ettim ve dönüşüm oranını %35 artıran öneriler sundum. Detaylı analiz için Google Analytics ve ısı haritası verilerini kullandım.",
    tools: ["Google Analytics", "Hotjar", "Excel", "SWOT Analizi"],
    date: "Eylül 2023",
    client: "TechStore Online"
  },
  // Fictional Marketing
  {
    id: 4,
    title: "Sapiens",
    category: "fictional",
    image: "/saphins.jpg",
    description: "Türk pazarı için elektrikli araç tanıtım stratejisi",
    details: "Tesla Model Y'nin Türk pazarına girişi için kapsamlı pazarlama stratejisi. Çevre bilinci, teknoloji meraklıları ve premium segment hedeflemesi ile omnichannel yaklaşım.",
    tools: ["Pazar Araştırması", "Dijital Strateji", "Etkinlik Planlama", "Influencer Pazarlama"],
    date: "Mart 2024"
  },
  {
    id: 5,
    title: "Apple Vision Pro Kampanyası",
    category: "fictional",
    image: "https://images.pexels.com/photos/3912979/pexels-photo-3912979.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "AR/VR teknolojisi için geleceğe odaklı pazarlama yaklaşımı",
    details: "Apple Vision Pro için fütüristik ve teknoloji odaklı kampanya stratejisi. Erken benimseyenleri hedefleyen deneyim merkezli aktivasyonlar ve teknoloji influencerları ile işbirlikleri.",
    tools: ["AR/VR Pazarlama", "Deneyim Tasarımı", "Teknoloji Influencerları", "Etkinlik Pazarlaması"],
    date: "Şubat 2024"
  },
  {
    id: 6,
    title: "Netflix Türkiye Orijinal İçerik",
    category: "fictional",
    image: "https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Yerel içerik üretimi için kültürel pazarlama stratejisi",
    details: "Netflix'in Türkiye'de yerel içerik üretimine odaklanması için kültürel değerleri öne çıkaran pazarlama stratejisi. Sosyal medya, PR ve influencer pazarlamasının entegrasyonu.",
    tools: ["İçerik Pazarlaması", "Kültürel Analiz", "Sosyal Medya", "PR Stratejisi"],
    date: "Ocak 2024"
  }
];