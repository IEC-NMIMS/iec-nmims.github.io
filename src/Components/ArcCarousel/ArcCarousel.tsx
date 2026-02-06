import { useRef, useEffect } from "react";
import { cloudflareImageUrl } from "../../lib/imageOptimization";

interface Photo {
  url: string;
  title?: string;
}

interface ArcCarouselProps {
  images: Photo[];
  scrollSpeed?: number; // pixels per second
  imageWidth?: number;
  gap?: number;
}

const ArcCarousel = ({
  images,
  scrollSpeed = 50,
  imageWidth = 240,
  gap = 16,
}: ArcCarouselProps): JSX.Element => {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const scrollPosRef = useRef(0);

  const imageHeight = imageWidth * 1.4;
  const cdnWidth = Math.round(imageWidth * 2);

  // Duplicate images for seamless infinite scroll
  const displayImages = [...images, ...images, ...images];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const singleSetWidth = images.length * (imageWidth + gap);

    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      scrollPosRef.current += scrollSpeed * deltaTime;

      // Reset scroll position for seamless loop
      if (scrollPosRef.current >= singleSetWidth) {
        scrollPosRef.current -= singleSetWidth;
      }

      track.style.transform = `translateX(-${scrollPosRef.current}px)`;

      // Update scale based on position
      const cards = track.querySelectorAll<HTMLDivElement>(".scroll-card");
      const containerWidth = track.parentElement?.clientWidth || window.innerWidth;
      const centerX = containerWidth / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const distanceFromCenter = Math.abs(cardCenterX - centerX);
        const maxDistance = containerWidth / 2;

        // Scale: smallest (0.6) at center, largest (1.0) at edges
        const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
        const scale = 0.6 + normalizedDistance * 0.4;

        // Slight opacity effect too
        const opacity = 0.7 + normalizedDistance * 0.3;

        card.style.transform = `scale(${scale})`;
        card.style.opacity = `${opacity}`;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [images.length, imageWidth, gap, scrollSpeed]);

  return (
    <div className="arc-carousel-wrapper">
      <div ref={trackRef} className="arc-carousel-track">
        {displayImages.map((photo, index) => (
          <div
            key={index}
            className="scroll-card"
            style={{
              width: `${imageWidth}px`,
              height: `${imageHeight}px`,
              marginRight: `${gap}px`,
            }}
          >
            <img
              src={cloudflareImageUrl(photo.url, {
                width: cdnWidth,
                quality: 80,
                fit: "cover",
              })}
              alt={photo.title || `Gallery image ${(index % images.length) + 1}`}
              draggable="false"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>

      <style>{`
        .arc-carousel-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
          position: relative;
        }

        .arc-carousel-track {
          display: flex;
          flex-shrink: 0;
          will-change: transform;
        }

        .scroll-card {
          flex-shrink: 0;
          will-change: transform, opacity;
          transition: transform 0.1s ease-out, opacity 0.1s ease-out;
        }

        .scroll-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          pointer-events: none;
          user-select: none;
        }
      `}</style>
    </div>
  );
};

export default ArcCarousel;
