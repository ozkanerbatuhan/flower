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
        
        {/* Yeryüzü */}
        <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-gradient-to-t from-gray-800 to-gray-900">
          <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gray-700 opacity-30"></div>
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
                {/* Yaprak ana şekli */}
                <svg width="80" height="40" viewBox="0 0 80 40">
                  <defs>
                    <linearGradient id="leafGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#15803d" />
                      <stop offset="70%" stopColor="#166534" />
                    </linearGradient>
                    <filter id="leafShadow1" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                      <feOffset dx="2" dy="2" result="offsetblur" />
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.5" />
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <path d="M0,20 C0,5 20,0 40,0 C60,0 80,5 80,20 C80,35 60,40 40,40 C20,40 0,35 0,20 Z" fill="url(#leafGradient1)" filter="url(#leafShadow1)" />
                </svg>
                
                {/* Yaprak damarları */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-green-900 opacity-60 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-0 w-3/4 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 rotate-15 origin-left"></div>
                <div className="absolute top-1/2 left-0 w-3/4 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 -rotate-15 origin-left"></div>
                <div className="absolute top-1/2 left-0 w-1/2 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 rotate-30 origin-left"></div>
                <div className="absolute top-1/2 left-0 w-1/2 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 -rotate-30 origin-left"></div>
                
                {/* Yaprak kavisli kenarı ve parlaklık efekti */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="absolute top-0 left-5 right-5 h-1/3 bg-green-500 opacity-30 rounded-full blur-sm"></div>
                  <div className="absolute bottom-0 left-5 right-5 h-1/6 bg-green-900 opacity-30 rounded-full blur-sm"></div>
                  {/* Yaprak üzerinde parlaklık efekti */}
                  <div className="absolute top-[20%] left-[10%] w-[30%] h-[15%] bg-white opacity-20 rounded-full blur-sm transform rotate-[30deg]"></div>
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
                {/* Yaprak ana şekli */}
                <svg width="80" height="40" viewBox="0 0 80 40">
                  <defs>
                    <linearGradient id="leafGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#15803d" />
                      <stop offset="70%" stopColor="#166534" />
                    </linearGradient>
                    <filter id="leafShadow2" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                      <feOffset dx="-2" dy="2" result="offsetblur" />
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.5" />
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <path d="M0,20 C0,5 20,0 40,0 C60,0 80,5 80,20 C80,35 60,40 40,40 C20,40 0,35 0,20 Z" fill="url(#leafGradient2)" filter="url(#leafShadow2)" />
                </svg>
                
                {/* Yaprak damarları */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-green-900 opacity-60 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-0 w-3/4 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 rotate-15 origin-left"></div>
                <div className="absolute top-1/2 left-0 w-3/4 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 -rotate-15 origin-left"></div>
                <div className="absolute top-1/2 left-0 w-1/2 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 rotate-30 origin-left"></div>
                <div className="absolute top-1/2 left-0 w-1/2 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 -rotate-30 origin-left"></div>
                
                {/* Yaprak kavisli kenarı ve parlaklık efekti */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="absolute top-0 left-5 right-5 h-1/3 bg-green-500 opacity-30 rounded-full blur-sm"></div>
                  <div className="absolute bottom-0 left-5 right-5 h-1/6 bg-green-900 opacity-30 rounded-full blur-sm"></div>
                  {/* Yaprak üzerinde parlaklık efekti */}
                  <div className="absolute top-[20%] right-[10%] w-[30%] h-[15%] bg-white opacity-20 rounded-full blur-sm transform rotate-[-30deg]"></div>
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
                {/* Yaprak ana şekli - daha küçük */}
                <svg width="60" height="30" viewBox="0 0 80 40">
                  <defs>
                    <linearGradient id="leafGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#15803d" />
                      <stop offset="70%" stopColor="#166534" />
                    </linearGradient>
                    <filter id="leafShadow3" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                      <feOffset dx="2" dy="2" result="offsetblur" />
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.5" />
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <path d="M0,20 C0,5 20,0 40,0 C60,0 80,5 80,20 C80,35 60,40 40,40 C20,40 0,35 0,20 Z" fill="url(#leafGradient3)" filter="url(#leafShadow3)" />
                </svg>
                
                {/* Yaprak damarları */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-green-900 opacity-60 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-0 w-2/3 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 rotate-15 origin-left"></div>
                <div className="absolute top-1/2 left-0 w-2/3 h-[1px] bg-green-900 opacity-60 -translate-y-1/2 -rotate-15 origin-left"></div>
                
                {/* Yaprak kavisli kenarı ve parlaklık efekti */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="absolute top-0 left-5 right-5 h-1/3 bg-green-500 opacity-30 rounded-full blur-sm"></div>
                  <div className="absolute bottom-0 left-5 right-5 h-1/6 bg-green-900 opacity-30 rounded-full blur-sm"></div>
                  {/* Yaprak üzerinde parlaklık efekti */}
                  <div className="absolute top-[20%] left-[10%] w-[30%] h-[15%] bg-white opacity-20 rounded-full blur-sm transform rotate-[30deg]"></div>
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
                
                {/* Gül Tasarımı - iyileştirilmiş 3D */}
                <div className="relative mt-[-20px]">
                  {/* Gül tabanı - yeşilden kırmızıya geçiş */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-4 bg-gradient-to-t from-green-700 to-red-700"></div>
                  
                  {/* Gül merkezi - geliştirilmiş gölge ve derinlik */}
                  <div
                    className="relative w-28 h-28 rounded-full overflow-hidden transform perspective-500"
                    style={{
                      background: 'radial-gradient(circle, #7f1d1d 0%, #b91c1c 25%, #dc2626 50%, #ef4444 75%, #f87171 100%)',
                      boxShadow: 'inset 0 0 15px rgba(0,0,0,0.6), 0 0 20px rgba(0,0,0,0.4)'
                    }}
                  >
                    {/* Dış taç yapraklar - kıvrımlı ve gerçekçi gül görünümü için geliştirildi */}
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute"
                        style={{
                          width: '18px',
                          height: '32px',
                          top: '50%',
                          left: '50%',
                          transformOrigin: '0 0',
                          transform: `rotate(${i * 18}deg) translate(-50%, -50%) translateY(-14px)`,
                          zIndex: 20 - i
                        }}
                      >
                        <div 
                          className="w-full h-full"
                          style={{
                            backgroundImage: `radial-gradient(ellipse at center, #ef4444 0%, #dc2626 60%, #b91c1c 100%)`,
                            borderRadius: '50% 50% 50% 50% / 80% 80% 20% 20%',
                            transform: `rotate(${(i % 2 === 0 ? 5 : -5)}deg) skew(${(i % 3 === 0 ? 5 : -5)}deg)`,
                            boxShadow: 'inset 0 0 8px rgba(0,0,0,0.4), 2px 2px 6px rgba(0,0,0,0.3)',
                            border: '1px solid rgba(127, 29, 29, 0.4)',
                            filter: 'brightness(1.03)',
                            // Kenar yapraklar için daha koyu ton
                            opacity: i % 5 === 0 ? 0.9 : 1
                          }}
                        >
                          {/* Yaprak üzerinde parlaklık efekti */}
                          <div className="absolute top-[15%] left-[20%] w-[40%] h-[15%] bg-white opacity-20 rounded-full blur-sm transform rotate-[30deg]"></div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Orta katman taç yapraklar - geliştirilmiş 3D */}
                    {[...Array(16)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute"
                        style={{
                          width: '16px',
                          height: '26px',
                          top: '50%',
                          left: '50%',
                          transformOrigin: '0 0',
                          transform: `rotate(${i * 22.5}deg) translate(-50%, -50%) translateY(-9px)`,
                          zIndex: 30 - i
                        }}
                      >
                        <div 
                          className="w-full h-full"
                          style={{
                            backgroundImage: `radial-gradient(ellipse at center, #dc2626 0%, #b91c1c 50%, #7f1d1d 100%)`,
                            borderRadius: '50% 50% 50% 50% / 80% 80% 20% 20%',
                            transform: `rotate(${(i % 2 === 0 ? 5 : -5)}deg) skew(${(i % 2 === 0 ? 3 : -3)}deg)`,
                            boxShadow: 'inset 0 0 8px rgba(0,0,0,0.4), 1px 1px 4px rgba(0,0,0,0.3)',
                            border: '1px solid rgba(127, 29, 29, 0.4)',
                            filter: 'brightness(0.97)'
                          }}
                        >
                          {/* Yaprak üzerinde parlaklık efekti */}
                          <div className="absolute top-[15%] left-[20%] w-[30%] h-[15%] bg-white opacity-15 rounded-full blur-sm transform rotate-[30deg]"></div>
                        </div>
                      </div>
                    ))}
                    
                    {/* İç katman taç yapraklar - geliştirilmiş 3D */}
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute"
                        style={{
                          width: '12px',
                          height: '20px',
                          top: '50%',
                          left: '50%',
                          transformOrigin: '0 0',
                          transform: `rotate(${i * 30}deg) translate(-50%, -50%) translateY(-5px)`,
                          zIndex: 40 - i
                        }}
                      >
                        <div 
                          className="w-full h-full"
                          style={{
                            backgroundImage: `radial-gradient(ellipse at center, #b91c1c 0%, #7f1d1d 60%, #450a0a 100%)`,
                            borderRadius: '50% 50% 50% 50% / 80% 80% 20% 20%',
                            boxShadow: 'inset 0 0 5px rgba(0,0,0,0.5), 0 0 3px rgba(0,0,0,0.4)',
                            border: '1px solid rgba(127, 29, 29, 0.6)',
                            filter: 'brightness(0.95)'
                          }}
                        >
                          {/* Yaprak üzerinde parlaklık efekti */}
                          <div className="absolute top-[15%] left-[20%] w-[30%] h-[15%] bg-white opacity-10 rounded-full blur-sm transform rotate-[30deg]"></div>
                        </div>
                      </div>
                    ))}
                    
                    {/* En iç merkez - geliştirilmiş derinlik */}
                    <div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full"
                      style={{
                        background: 'radial-gradient(circle, #450a0a 0%, #7f1d1d 100%)',
                        boxShadow: 'inset 0 0 15px rgba(0,0,0,0.8), 0 0 5px rgba(0,0,0,0.4)',
                        zIndex: 50
                      }}
                    >
                      {/* Merkez doku detayı */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full opacity-70"
                        style={{
                          background: 'radial-gradient(circle, #450a0a 0%, transparent 70%)'
                        }}
                      ></div>
                    </div>
                    
                    {/* Gül parlaklık efekti - geliştirilmiş */}
                    <div 
                      className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white to-transparent opacity-15"
                      style={{ 
                        borderRadius: '50% 50% 0 0',
                        zIndex: 60,
                        transform: 'translateY(5px)'
                      }}
                    ></div>
                    <div 
                      className="absolute bottom-0 right-0 w-1/3 h-1/4 bg-gradient-to-t from-black to-transparent opacity-20"
                      style={{ 
                        borderRadius: '0 0 50% 0',
                        zIndex: 60
                      }}
                    ></div>
                  </div>
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