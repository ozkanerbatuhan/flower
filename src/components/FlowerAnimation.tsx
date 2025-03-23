'use client';

import React, { useEffect, useState } from 'react';

const FlowerAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; delay: number; color: string }[]>([]);
  
  useEffect(() => {
    // Sayfa yüklendikten sonra animasyonu başlat
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    // Yıldızların tek tek belirmesi için
    if (isVisible) {
      // Toplam 60 yıldız oluştur
      const newStars = [];
      for (let i = 0; i < 60; i++) {
        newStars.push({
          id: i,
          // Yıldızları sadece ekranın üst kısmında göster (0-40% aralığında)
          x: Math.random() * 100, 
          y: Math.random() * 40, 
          size: Math.random() * 2.5 + 1,
          delay: Math.random() * 8000 + 1000, // 1-9 saniye arasında rastgele gecikme
          color: i % 5 === 0 ? '#fffbeb' : i % 4 === 0 ? '#fef3c7' : '#ffffff'
        });
      }
      
      // Yıldızları gecikme sırasına göre sırala (daha düzenli bir görünüm için)
      newStars.sort((a, b) => a.delay - b.delay);
      
      // Yıldızları ayarla
      setStars(newStars);
    }
    
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <div className="flex items-center justify-center w-full h-full">
      {/* Arka plan gökyüzü ve yeryüzü */}
      <div className="fixed inset-0 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-gray-800">
        {/* Horizon efekti - gece gökyüzü ve yeryüzü geçişi */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-gray-900/50 to-transparent"></div>
        
        {/* Yeryüzü - daha dinamik ve doğal görünüm */}
        <div className="absolute bottom-0 left-0 right-0 h-[25%]">
          {/* Daha doğal arkaplan gradyanı */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-900/80 to-gray-900/40"></div>
          
          {/* Ana zemin dalgaları */}
          <div className="absolute bottom-0 w-full h-[35%]">
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1200 120" className="absolute bottom-0">
              <path 
                d="M0,32 C120,48 180,16 240,16 C300,16 360,48 420,64 C480,80 540,64 600,48 C660,32 720,16 780,32 C840,48 900,80 960,80 C1020,80 1080,48 1140,32 C1200,16 1260,32 1320,48 L1320,120 L0,120 Z" 
                fill="#374151" 
                className="opacity-70"
              />
            </svg>
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1200 120" className="absolute bottom-0">
              <path 
                d="M0,64 C60,48 120,32 180,48 C240,64 300,96 360,96 C420,96 480,64 540,48 C600,32 660,16 720,32 C780,48 840,80 900,80 C960,80 1020,48 1080,32 C1140,16 1200,32 1260,48 L1260,120 L0,120 Z" 
                fill="#1F2937" 
                className="opacity-80"
              />
            </svg>
            {/* İlave dalgalı çizgi - daha dinamik zemin için */}
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1200 120" className="absolute bottom-0">
              <path 
                d="M0,100 C50,95 100,90 150,95 C200,100 250,110 300,105 C350,100 400,90 450,92 C500,94 550,105 600,100 C650,95 700,85 750,88 C800,91 850,98 900,95 C950,92 1000,85 1050,88 C1100,91 1150,98 1200,100 L1200,120 L0,120 Z" 
                fill="#111827" 
                className="opacity-60"
              />
            </svg>
          </div>
          
          {/* Yüzey dokusu ve detaylar */}
          <div className="absolute bottom-0 left-0 right-0 h-[12px] bg-gradient-to-t from-gray-700 to-gray-800/40 opacity-60"></div>
          <div className="absolute bottom-[10px] left-0 right-0 h-[4px] bg-gradient-to-t from-gray-600/10 to-transparent"></div>
          
          {/* Çizgiler ve ince detaylar */}
          <div className="absolute bottom-[6px] left-0 right-0 h-[1px] bg-gray-500/5"></div>
          <div className="absolute bottom-[3px] left-0 right-0 h-[1px] bg-gray-400/5"></div>
          
          {/* Rastgele noktalar ve zemin parçacıkları */}
          <div className="absolute bottom-[2px] left-[7%] w-[4px] h-[4px] rounded-full bg-gray-300/10"></div>
          <div className="absolute bottom-[5px] left-[18%] w-[3px] h-[3px] rounded-full bg-gray-300/10"></div>
          <div className="absolute bottom-[4px] left-[31%] w-[5px] h-[2px] rounded-full bg-gray-300/10"></div>
          <div className="absolute bottom-[3px] left-[56%] w-[4px] h-[4px] rounded-full bg-gray-300/10"></div>
          <div className="absolute bottom-[6px] left-[72%] w-[3px] h-[3px] rounded-full bg-gray-300/10"></div>
          <div className="absolute bottom-[4px] left-[89%] w-[5px] h-[2px] rounded-full bg-gray-300/10"></div>
          
          {/* Hafif sis efekti */}
          <div className="absolute bottom-0 left-0 right-0 h-[15px] bg-gradient-to-t from-gray-700/5 to-transparent blur-sm"></div>
          
          {/* Düşük ışık yansıması */}
          <div className="absolute bottom-[20px] left-[15%] w-[80px] h-[5px] bg-white/5 blur-md rounded-full transform"></div>
          <div className="absolute bottom-[15px] right-[25%] w-[60px] h-[3px] bg-white/5 blur-md rounded-full transform"></div>
        </div>
        
        {/* Yıldızlar */}
        {stars.map((star) => (
          <div
            key={`star-${star.id}`}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              top: `${star.y}%`,
              left: `${star.x}%`,
              opacity: 0,
              animation: `starAppear 3s ease forwards ${star.delay}ms, pulse 3s ease-in-out infinite ${star.delay + 1000}ms`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative w-80 h-[500px]">
        {/* Sol çimen grubu - iyileştirilmiş 3D görünüm */}
        <div className="absolute bottom-0 left-24 group">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className={`absolute bottom-0 transition-all duration-[1500ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{
                width: '3px',
                height: `${60 + Math.random() * 30}px`,
                background: 'linear-gradient(to top, #166534, #22c55e)',
                borderRadius: '0 10px 0 0',
                transformOrigin: 'bottom center',
                transform: `rotate(${-10 + i * 10}deg)`,
                left: `${i * 5}px`,
                transitionDelay: `${1000 + 200 * i}ms`,
                boxShadow: '1px 1px 3px rgba(0,0,0,0.4)'
              }}
            ></div>
          ))}
        </div>

        {/* Sağ çimen grubu - iyileştirilmiş 3D görünüm */}
        <div className="absolute bottom-0 right-24 group">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className={`absolute bottom-0 transition-all duration-[1500ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{
                width: '3px',
                height: `${60 + Math.random() * 30}px`,
                background: 'linear-gradient(to top, #166534, #22c55e)',
                borderRadius: '10px 0 0 0',
                transformOrigin: 'bottom center',
                transform: `rotate(${10 - i * 10}deg)`,
                right: `${i * 5}px`,
                transitionDelay: `${1200 + 200 * i}ms`,
                boxShadow: '-1px 1px 3px rgba(0,0,0,0.4)'
              }}
            ></div>
          ))}
        </div>

        {/* Ana gül sap ve yapraklar */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          {/* Ana sap - iyileştirilmiş gölge */}
          <div 
            className={`relative w-1.5 transition-all duration-[3000ms] ease-out ${isVisible ? 'h-[380px]' : 'h-0'}`}
            style={{ 
              background: 'linear-gradient(to top, #15803d, #166534)',
              transitionDelay: '500ms',
              transform: 'rotate(3deg)',
              boxShadow: '1px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            {/* Dikenler - iyileştirilmiş 3D görünüm */}
            {[...Array(7)].map((_, i) => (
              <div 
                key={i}
                className={`absolute transition-all duration-[800ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                style={{
                  left: i % 2 === 0 ? '-3px' : 'auto',
                  right: i % 2 !== 0 ? '-3px' : 'auto',
                  top: `${50 + i * 45}px`,
                  width: '5px',
                  height: '3px',
                  backgroundColor: '#166534',
                  transformOrigin: i % 2 === 0 ? 'right center' : 'left center',
                  transform: `rotate(${i % 2 === 0 ? -45 : 45}deg)`,
                  transitionDelay: `${2000 + i * 150}ms`,
                  boxShadow: i % 2 === 0 ? '-1px 1px 2px rgba(0,0,0,0.3)' : '1px 1px 2px rgba(0,0,0,0.3)'
                }}
              ></div>
            ))}

            {/* Alt yaprak - geliştirilmiş 3D görünüm */}
            <div 
              className={`absolute -left-20 top-[240px] transition-all duration-[1500ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
              style={{ 
                transformOrigin: 'right center',
                transform: 'rotate(-25deg) perspective(500px) rotateX(5deg) rotateY(-15deg)',
                transitionDelay: '1500ms',
                zIndex: 5,
                filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.5))'
              }}
            >
              <div className="relative">
                {/* Yaprak ana şekli - daha gerçekçi ve dokulu */}
                <svg width="80" height="40" viewBox="0 0 80 40">
                  <defs>
                    <linearGradient id="leafGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#15803d" />
                      <stop offset="40%" stopColor="#166534" />
                      <stop offset="70%" stopColor="#14532d" />
                    </linearGradient>
                    <filter id="leafShadow1" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
                      <feOffset dx="2" dy="2" result="offsetblur" />
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.6" />
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="leafTexture1">
                      <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="2" seed="5" />
                      <feDisplacementMap in="SourceGraphic" scale="4" />
                    </filter>
                  </defs>
                  <path d="M0,20 C0,5 20,0 40,0 C60,0 80,5 80,20 C80,35 60,40 40,40 C20,40 0,35 0,20 Z" fill="url(#leafGradient1)" filter="url(#leafShadow1)" />
                  <path d="M0,20 C0,5 20,0 40,0 C60,0 80,5 80,20 C80,35 60,40 40,40 C20,40 0,35 0,20 Z" fill="url(#leafGradient1)" filter="url(#leafTexture1)" opacity="0.1" />
                </svg>
                
                {/* Yaprak damarları - daha ince ve detaylı */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-green-900 opacity-60 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-0 w-3/4 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 rotate-15 origin-left"></div>
                <div className="absolute top-1/2 left-0 w-3/4 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 -rotate-15 origin-left"></div>
                <div className="absolute top-1/2 left-0 w-1/2 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 rotate-30 origin-left"></div>
                <div className="absolute top-1/2 left-0 w-1/2 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 -rotate-30 origin-left"></div>
                <div className="absolute top-[40%] left-0 w-1/3 h-[0.5px] bg-green-900 opacity-50 rotate-20 origin-left"></div>
                <div className="absolute top-[60%] left-0 w-1/3 h-[0.5px] bg-green-900 opacity-50 -rotate-20 origin-left"></div>
                
                {/* Yaprak kavisli kenarı ve parlaklık efekti - geliştirilmiş */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="absolute top-0 left-5 right-5 h-1/3 bg-green-500 opacity-30 rounded-full blur-sm"></div>
                  <div className="absolute bottom-0 left-5 right-5 h-1/6 bg-green-900 opacity-30 rounded-full blur-sm"></div>
                  {/* Yaprak üzerinde daha belirgin parlaklık efekti */}
                  <div className="absolute top-[20%] left-[10%] w-[30%] h-[15%] bg-white opacity-30 rounded-full blur-sm transform rotate-[30deg]"></div>
                  <div className="absolute top-[40%] right-[20%] w-[15%] h-[10%] bg-green-900/30 opacity-30 rounded-full blur-sm"></div>
                  {/* Yaprak damarları için extra gölge */}
                  <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-green-900/20 blur-[2px] -translate-y-1/2"></div>
                  <div className="absolute top-[40%] left-0 right-0 h-[2px] bg-green-900/15 blur-[1px] -translate-y-1/2 transform rotate-15 origin-left"></div>
                  <div className="absolute top-[60%] left-0 right-0 h-[2px] bg-green-900/15 blur-[1px] -translate-y-1/2 transform -rotate-15 origin-left"></div>
                </div>
                
                {/* Yaprağın kenarına ince bir çizgi */}
                <div className="absolute inset-0">
                  <svg width="100%" height="100%" viewBox="0 0 80 40" fill="none">
                    <path d="M0,20 C0,5 20,0 40,0 C60,0 80,5 80,20 C80,35 60,40 40,40 C20,40 0,35 0,20 Z" 
                        stroke="rgba(0,0,0,0.2)" 
                        strokeWidth="0.5" 
                        fill="none" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Orta sağ yaprak - geliştirilmiş 3D görünüm */}
            <div 
              className={`absolute -right-20 top-[160px] transition-all duration-[1500ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
              style={{ 
                transformOrigin: 'left center',
                transform: 'rotate(20deg) perspective(500px) rotateX(10deg) rotateY(15deg)',
                transitionDelay: '1700ms',
                zIndex: 5,
                filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.5))'
              }}
            >
              <div className="relative">
                {/* Yaprak ana şekli - daha gerçekçi ve dokulu */}
                <svg width="80" height="40" viewBox="0 0 80 40">
                  <defs>
                    <linearGradient id="leafGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#15803d" />
                      <stop offset="40%" stopColor="#166534" />
                      <stop offset="70%" stopColor="#14532d" />
                    </linearGradient>
                    <filter id="leafShadow2" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
                      <feOffset dx="-2" dy="2" result="offsetblur" />
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.6" />
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="leafTexture2">
                      <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="2" seed="8" />
                      <feDisplacementMap in="SourceGraphic" scale="4" />
                    </filter>
                  </defs>
                  <path d="M0,20 C0,5 20,0 40,0 C60,0 80,5 80,20 C80,35 60,40 40,40 C20,40 0,35 0,20 Z" fill="url(#leafGradient2)" filter="url(#leafShadow2)" />
                  <path d="M0,20 C0,5 20,0 40,0 C60,0 80,5 80,20 C80,35 60,40 40,40 C20,40 0,35 0,20 Z" fill="url(#leafGradient2)" filter="url(#leafTexture2)" opacity="0.1" />
                </svg>
                
                {/* Yaprak damarları - daha ince ve detaylı */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-green-900 opacity-60 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-0 w-3/4 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 rotate-15 origin-left"></div>
                <div className="absolute top-1/2 left-0 w-3/4 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 -rotate-15 origin-left"></div>
                <div className="absolute top-1/2 left-0 w-1/2 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 rotate-30 origin-left"></div>
                <div className="absolute top-1/2 left-0 w-1/2 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 -rotate-30 origin-left"></div>
                <div className="absolute top-[40%] left-0 w-1/3 h-[0.5px] bg-green-900 opacity-50 rotate-20 origin-left"></div>
                <div className="absolute top-[60%] left-0 w-1/3 h-[0.5px] bg-green-900 opacity-50 -rotate-20 origin-left"></div>
                
                {/* Yaprak kavisli kenarı ve parlaklık efekti - geliştirilmiş */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="absolute top-0 left-5 right-5 h-1/3 bg-green-500 opacity-30 rounded-full blur-sm"></div>
                  <div className="absolute bottom-0 left-5 right-5 h-1/6 bg-green-900 opacity-30 rounded-full blur-sm"></div>
                  {/* Yaprak üzerinde daha belirgin parlaklık efekti */}
                  <div className="absolute top-[20%] right-[10%] w-[30%] h-[15%] bg-white opacity-30 rounded-full blur-sm transform rotate-[-30deg]"></div>
                  <div className="absolute top-[40%] left-[20%] w-[15%] h-[10%] bg-green-900/30 opacity-30 rounded-full blur-sm"></div>
                  {/* Yaprak damarları için extra gölge */}
                  <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-green-900/20 blur-[2px] -translate-y-1/2"></div>
                  <div className="absolute top-[40%] left-0 right-0 h-[2px] bg-green-900/15 blur-[1px] -translate-y-1/2 transform rotate-15 origin-left"></div>
                  <div className="absolute top-[60%] left-0 right-0 h-[2px] bg-green-900/15 blur-[1px] -translate-y-1/2 transform -rotate-15 origin-left"></div>
                </div>
                
                {/* Yaprağın kenarına ince bir çizgi */}
                <div className="absolute inset-0">
                  <svg width="100%" height="100%" viewBox="0 0 80 40" fill="none">
                    <path d="M0,20 C0,5 20,0 40,0 C60,0 80,5 80,20 C80,35 60,40 40,40 C20,40 0,35 0,20 Z" 
                        stroke="rgba(0,0,0,0.2)" 
                        strokeWidth="0.5" 
                        fill="none" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Üst sol yaprak - geliştirilmiş 3D görünüm */}
            <div 
              className={`absolute -left-16 top-[80px] transition-all duration-[1500ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
              style={{ 
                transformOrigin: 'right center',
                transform: 'rotate(-10deg) perspective(500px) rotateX(15deg) rotateY(-10deg)',
                transitionDelay: '1900ms',
                zIndex: 5,
                filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.5))'
              }}
            >
              <div className="relative">
                {/* Yaprak ana şekli - daha küçük ve daha gerçekçi */}
                <svg width="60" height="30" viewBox="0 0 80 40">
                  <defs>
                    <linearGradient id="leafGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#15803d" />
                      <stop offset="40%" stopColor="#166534" />
                      <stop offset="70%" stopColor="#14532d" />
                    </linearGradient>
                    <filter id="leafShadow3" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
                      <feOffset dx="2" dy="2" result="offsetblur" />
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.6" />
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="leafTexture3">
                      <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="2" seed="3" />
                      <feDisplacementMap in="SourceGraphic" scale="3" />
                    </filter>
                  </defs>
                  <path d="M0,20 C0,5 20,0 40,0 C60,0 80,5 80,20 C80,35 60,40 40,40 C20,40 0,35 0,20 Z" fill="url(#leafGradient3)" filter="url(#leafShadow3)" />
                  <path d="M0,20 C0,5 20,0 40,0 C60,0 80,5 80,20 C80,35 60,40 40,40 C20,40 0,35 0,20 Z" fill="url(#leafGradient3)" filter="url(#leafTexture3)" opacity="0.1" />
                </svg>
                
                {/* Yaprak damarları - daha ince ve detaylı */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-green-900 opacity-60 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-0 w-2/3 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 rotate-15 origin-left"></div>
                <div className="absolute top-1/2 left-0 w-2/3 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 -rotate-15 origin-left"></div>
                <div className="absolute top-[40%] left-0 w-1/2 h-[0.5px] bg-green-900 opacity-50 rotate-20 origin-left"></div>
                <div className="absolute top-[60%] left-0 w-1/2 h-[0.5px] bg-green-900 opacity-50 -rotate-20 origin-left"></div>
                
                {/* Yaprak kavisli kenarı ve parlaklık efekti - geliştirilmiş */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="absolute top-0 left-5 right-5 h-1/3 bg-green-500 opacity-30 rounded-full blur-sm"></div>
                  <div className="absolute bottom-0 left-5 right-5 h-1/6 bg-green-900 opacity-30 rounded-full blur-sm"></div>
                  {/* Yaprak üzerinde daha belirgin parlaklık efekti */}
                  <div className="absolute top-[20%] left-[10%] w-[30%] h-[15%] bg-white opacity-30 rounded-full blur-sm transform rotate-[30deg]"></div>
                  <div className="absolute top-[40%] right-[10%] w-[20%] h-[10%] bg-green-900/30 opacity-30 rounded-full blur-sm"></div>
                </div>
                
                {/* Yaprağın kenarına ince bir çizgi */}
                <div className="absolute inset-0">
                  <svg width="100%" height="100%" viewBox="0 0 80 40" fill="none">
                    <path d="M0,20 C0,5 20,0 40,0 C60,0 80,5 80,20 C80,35 60,40 40,40 C20,40 0,35 0,20 Z" 
                        stroke="rgba(0,0,0,0.2)" 
                        strokeWidth="0.5" 
                        fill="none" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Gül tomurcuğunun çanak yaprağı */}
            <div 
              className={`absolute -top-12 left-1/2 -translate-x-1/2 transition-all duration-[1800ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
              style={{ 
                transformOrigin: 'center bottom',
                transitionDelay: '2200ms'
              }}
            >
              {/* Çanak yaprak - iyileştirilmiş 3D */}
              <div className="relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-10" style={{
                  background: 'linear-gradient(to bottom, #15803d, #166534)',
                  borderRadius: '5px 5px 0 0',
                  overflow: 'hidden',
                  boxShadow: '0 -2px 4px rgba(0,0,0,0.2), -2px 0 4px rgba(0,0,0,0.1), 2px 0 4px rgba(0,0,0,0.1)'
                }}>
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute w-full h-1 bg-green-800 top-2 opacity-50"></div>
                    <div className="absolute w-full h-1 bg-green-800 top-5 opacity-50"></div>
                    {/* Çanak yaprağın 3D efektini arttırmak için kenar gölgeleri */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-r from-black/20 to-transparent"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-l from-black/20 to-transparent"></div>
                  </div>
                </div>
                
                {/* Gül Tasarımı - Tamamen yeniden tasarlanmış 3D görünüm */}
                <div className="relative mt-[-20px]">
                  {/* Gül tabanı - yeşilden kırmızıya geçiş */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-5 bg-gradient-to-t from-green-700 to-red-800"></div>
                  
                  {/* Yeni Gül Deseni - Gerçekçi katmanlama ile */}
                  <div
                    className="relative w-28 h-28 rounded-full overflow-hidden transform-gpu perspective-600"
                    style={{
                      boxShadow: 'inset 0 0 20px rgba(0,0,0,0.7), 0 0 25px rgba(0,0,0,0.4)'
                    }}
                  >
                    {/* Gül arka planı */}
                    <div className="absolute inset-0 bg-gradient-radial from-red-900 via-red-800 to-red-900 z-0"></div>
                    
                    {/* Gül dış katmanlar - daha organik ve gerçekçi katmanlarla */}
                    <div className="absolute inset-0">
                      {[...Array(28)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute origin-bottom transform-gpu"
                          style={{
                            left: '50%',
                            bottom: '50%',
                            width: i < 14 ? '20px' : '18px',
                            height: i < 14 ? '38px' : '34px',
                            transform: `rotate(${i * 12.85}deg) translateX(-50%)`,
                            zIndex: 10 + i
                          }}
                        >
                          <div
                            className="absolute inset-0 rounded-[60%_60%_40%_40%/80%_80%_30%_30%]"
                            style={{
                              background: `radial-gradient(ellipse at center, 
                                ${i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#dc2626' : '#b91c1c'} 0%, 
                                ${i % 3 === 0 ? '#dc2626' : i % 3 === 1 ? '#b91c1c' : '#991b1b'} 60%, 
                                ${i % 3 === 0 ? '#b91c1c' : i % 3 === 1 ? '#991b1b' : '#7f1d1d'} 100%)`,
                              boxShadow: `inset 0 0 15px rgba(0,0,0,0.6), 
                                ${i % 2 === 0 ? '2px 3px' : '-2px 3px'} 5px rgba(0,0,0,0.4)`,
                              border: '1px solid rgba(0,0,0,0.15)',
                              transform: `rotate(${i % 2 === 0 ? 8 : -8}deg) 
                                skew(${i % 3 === 0 ? 6 : -6}deg) 
                                scaleY(${0.95 + Math.sin(i) * 0.05})
                                ${i < 7 ? 'translateY(-2px)' : ''}`,
                              transformOrigin: 'center center',
                              filter: i % 5 === 0 ? 'brightness(0.9)' : 'brightness(1.05)'
                            }}
                          >
                            {/* Taç yaprağının üzerindeki doku ve parlaklıklar */}
                            <div className="absolute top-[10%] left-[10%] w-[40%] h-[10%] bg-white opacity-25 rounded-full blur-sm transform rotate-[30deg]"></div>
                            
                            <div className="absolute top-[30%] right-[10%] w-[30%] h-[15%] bg-red-900/30 rounded-full blur-sm"></div>
                            
                            <div className="absolute top-[60%] left-[15%] right-[15%] h-[30%] bg-gradient-to-b from-transparent to-red-900/40 rounded-full blur-sm"></div>
                            
                            {/* İnce kenar detayları */}
                            <div className="absolute inset-0 rounded-[60%_60%_40%_40%/80%_80%_30%_30%] border border-red-800/20 opacity-50"></div>
                            
                            {/* Gül yaprakları karakteristik kıvrımı */}
                            <div className="absolute top-[15%] left-0 right-0 h-[10%] bg-gradient-to-r from-red-900/30 via-transparent to-red-900/30 opacity-70"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Orta katman taç yapraklar - daha gerçekçi ve derin */}
                    <div className="absolute inset-0">
                      {[...Array(18)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute origin-bottom transform-gpu"
                          style={{
                            left: '50%',
                            bottom: '50%',
                            width: '16px',
                            height: '30px',
                            transform: `rotate(${i * 20}deg) translateX(-50%)`,
                            zIndex: 40 + i
                          }}
                        >
                          <div
                            className="absolute inset-0 rounded-[60%_60%_40%_40%/80%_80%_30%_30%]"
                            style={{
                              background: `radial-gradient(ellipse at center, 
                                #b91c1c 0%, 
                                #7f1d1d 60%, 
                                #450a0a 100%)`,
                              boxShadow: 'inset 0 0 10px rgba(0,0,0,0.7), 0 0 5px rgba(0,0,0,0.5)',
                              border: '1px solid rgba(0,0,0,0.2)',
                              transform: `rotate(${i % 2 === 0 ? 10 : -5}deg) skew(${i % 3 === 0 ? 5 : -5}deg)`,
                              filter: 'contrast(1.2) brightness(0.95)'
                            }}
                          >
                            {/* İç taç yaprağı doku */}
                            <div className="absolute top-[15%] left-[10%] w-[30%] h-[10%] bg-red-500 opacity-25 rounded-full blur-sm"></div>
                            <div className="absolute bottom-[20%] right-[15%] w-[25%] h-[15%] bg-red-900/40 rounded-full blur-sm"></div>
                            
                            {/* Yaprak kıvrımları */}
                            <div className="absolute top-1/3 left-0 right-0 h-[2px] bg-red-900/30 opacity-50 blur-[1px]"></div>
                            <div className="absolute top-2/3 left-0 right-0 h-[2px] bg-red-900/30 opacity-50 blur-[1px]"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* İç merkez gül çekirdeği - detaylı ve gerçekçi spiral */}
                    <div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full z-60"
                      style={{
                        background: 'radial-gradient(circle, #450a0a 0%, #7f1d1d 70%, #991b1b 100%)',
                        boxShadow: 'inset 0 0 25px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.5)'
                      }}
                    >
                      {/* İç dokular */}
                      <div 
                        className="absolute inset-0 rounded-full overflow-hidden"
                        style={{
                          background: 'radial-gradient(circle at 40% 40%, rgba(255,255,255,0.1) 0%, transparent 30%)'
                        }}
                      ></div>
                      
                      {/* İç spiral desen - gerçekçi gül merkezi için */}
                      <div className="absolute inset-[15%] rounded-full">
                        {[...Array(10)].map((_, i) => (
                          <div 
                            key={i}
                            className="absolute w-[65%] h-[65%] rounded-full border-t-2 border-l border-r-0 border-b-0 border-red-800/80"
                            style={{
                              top: '18%',
                              left: '18%',
                              transform: `rotate(${i * 36}deg) scale(${0.65 + i * 0.04})`,
                              opacity: 0.7 - i * 0.06,
                              filter: 'blur(0.2px)'
                            }}
                          ></div>
                        ))}
                      </div>
                      
                      {/* İç merkez doku */}
                      <div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gradient-radial from-red-950 to-red-900"
                        style={{
                          boxShadow: 'inset 0 0 8px rgba(0,0,0,0.9)'
                        }}
                      >
                        {/* İç merkez doku detayları */}
                        <div className="absolute inset-[15%] rounded-full opacity-70 bg-red-950/50"></div>
                        <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-red-900/80 to-red-950/80"></div>
                      </div>
                    </div>
                    
                    {/* Gül üzerindeki aydınlatma efektleri */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent z-70"
                      style={{borderRadius: '50% 50% 50% 50%'}}
                    ></div>
                    
                    <div 
                      className="absolute bottom-0 right-0 w-2/5 h-1/3 bg-gradient-to-t from-black/25 to-transparent z-70"
                      style={{borderRadius: '0 0 50% 0'}}
                    ></div>
                    
                    {/* Nazik parlaklık efekti */}
                    <div 
                      className="absolute top-[10%] left-[10%] w-[20%] h-[15%] bg-white/10 rounded-full blur-md z-70"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Yeni perspektifli yaprak - çiçeğe bir yönden bakılıyormuş gibi */}
            <div 
              className={`absolute right-[-5px] top-[120px] transition-all duration-[1500ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
              style={{ 
                transformOrigin: 'left center',
                transform: 'rotate(60deg) perspective(500px) rotateX(45deg) rotateY(-15deg)',
                transitionDelay: '2000ms',
                zIndex: 4,
                filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.5))'
              }}
            >
              <div className="relative">
                {/* Perspektifli yaprak ana şekli */}
                <svg width="50" height="30" viewBox="0 0 80 40">
                  <defs>
                    <linearGradient id="perspectiveLeafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#15803d" />
                      <stop offset="50%" stopColor="#166534" />
                      <stop offset="80%" stopColor="#14532d" />
                    </linearGradient>
                    <filter id="perspectiveLeafShadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
                      <feOffset dx="1" dy="3" result="offsetblur" />
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.7" />
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="perspectiveLeafTexture">
                      <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="2" seed="10" />
                      <feDisplacementMap in="SourceGraphic" scale="3" />
                    </filter>
                  </defs>
                  {/* Perspektifli şekli yansıtmak için yeniden çizilmiş yaprak */}
                  <path d="M0,20 C5,5 20,0 40,0 C60,0 80,5 80,20 C75,35 60,40 40,40 C20,40 5,35 0,20 Z" 
                    fill="url(#perspectiveLeafGradient)" 
                    filter="url(#perspectiveLeafShadow)"
                    transform="skewX(-15) scale(0.8, 1)" />
                  <path d="M0,20 C5,5 20,0 40,0 C60,0 80,5 80,20 C75,35 60,40 40,40 C20,40 5,35 0,20 Z" 
                    fill="url(#perspectiveLeafGradient)" 
                    filter="url(#perspectiveLeafTexture)" 
                    opacity="0.1"
                    transform="skewX(-15) scale(0.8, 1)" />
                </svg>
                
                {/* Perspektifli yaprak damarları */}
                <div 
                  className="absolute top-1/2 left-0 w-full h-[1px] bg-green-900 opacity-60 -translate-y-1/2"
                  style={{ transform: "skewX(-15deg) scaleX(0.85)" }}
                ></div>
                <div 
                  className="absolute top-1/2 left-0 w-3/4 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 rotate-10 origin-left"
                  style={{ transform: "skewX(-15deg) scaleX(0.8) rotate(10deg)", transformOrigin: "left center" }}
                ></div>
                <div 
                  className="absolute top-1/2 left-0 w-3/4 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 -rotate-15 origin-left"
                  style={{ transform: "skewX(-15deg) scaleX(0.8) rotate(-15deg)", transformOrigin: "left center" }}
                ></div>
                
                {/* Perspektif vurgusu için ışık ve gölge efektleri */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  {/* Yaprak üzerindeki ışık efekti - perspektife göre açılı */}
                  <div 
                    className="absolute top-[15%] left-[5%] w-[40%] h-[20%] bg-white opacity-40 rounded-full blur-sm"
                    style={{ transform: "skewX(-20deg) rotate(10deg)" }}
                  ></div>
                  
                  {/* Yaprak üzerindeki gölge efekti - perspektife göre açılı */}
                  <div 
                    className="absolute bottom-[20%] right-[10%] w-[50%] h-[30%] bg-green-950 opacity-30 rounded-full blur-sm"
                    style={{ transform: "skewX(-20deg) rotate(-5deg)" }}
                  ></div>
                </div>
                
                {/* Yaprağın kenarına ince bir çizgi - perspektife uygun */}
                <div className="absolute inset-0">
                  <svg width="100%" height="100%" viewBox="0 0 80 40" fill="none">
                    <path d="M0,20 C5,5 20,0 40,0 C60,0 80,5 80,20 C75,35 60,40 40,40 C20,40 5,35 0,20 Z" 
                        stroke="rgba(0,0,0,0.2)" 
                        strokeWidth="0.5" 
                        fill="none" 
                        transform="skewX(-15) scale(0.8, 1)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Işık efekti */}
        {isVisible && (
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-40 h-40 bg-white rounded-full opacity-[0.04] blur-3xl"></div>
        )}
      </div>
    </div>
  );
};

export default FlowerAnimation; 