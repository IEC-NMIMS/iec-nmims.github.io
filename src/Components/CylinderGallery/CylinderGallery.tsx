import { memo, useState, useEffect, useRef, useMemo, useCallback } from "react";

interface Photo {
  url: string;
  title?: string;
  link?: string;
}

interface Camera {
  x?: number;
  y?: number;
  z?: number;
  pitch?: number;
  yaw?: number;
  roll?: number;
}

interface Rotation {
  x: number;
  y: number;
  z: number;
}

interface CardProps {
  photo: Photo;
  index: number;
  totalItems: number;
  radius: number;
  width: number;
  cardRotation?: Rotation;
  cardTransformOrigin?: string;
}

const Card = memo(({
  photo,
  index,
  totalItems,
  radius,
  width,
  cardRotation = { x: 0, y: 0, z: 0 },
  cardTransformOrigin = "center center",
}: CardProps) => {
  const theta = (360 / totalItems) * index;
  const height = width * 1.5;

  return (
    <div
      className="absolute top-1/2 left-1/2 select-none"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        marginTop: `-${height / 2}px`,
        marginLeft: `-${width / 2}px`,
        transformOrigin: cardTransformOrigin,
        transform: `
          rotateY(${theta}deg) 
          translateZ(${radius}px) 
          rotateY(180deg)
          rotateX(${cardRotation.x}deg)
          rotateY(${cardRotation.y}deg)
          rotateZ(${cardRotation.z}deg)
        `,
        transformStyle: "preserve-3d" as const,
        backfaceVisibility: "hidden",
      }}
    >
      <div className="w-full h-full rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-neutral-900 group cursor-grab active:cursor-grabbing transition-all duration-300">
        <img
          src={photo.url}
          alt={photo.title || "Gallery Image"}
          draggable="false"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-700 pointer-events-none"
        />

        {(photo.title || photo.link) && (
          <>
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 p-8 w-full">
              {photo.title && (
                <h3 className="text-white font-black text-2xl leading-tight mb-2 group-hover:text-blue-400 transition-colors uppercase italic tracking-tighter">
                  {photo.title}
                </h3>
              )}
              {photo.link && (
                <div className="flex items-center gap-2 text-neutral-400 text-[10px] font-bold uppercase tracking-[0.3em]">
                  <div className="w-10 h-px bg-blue-500" />
                  View Detail
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
});

Card.displayName = "Card";

/** Memoized indicator dots — only re-renders when activeIndex changes */
const Indicator = memo(({ count, activeIndex }: { count: number; activeIndex: number }) => (
  <div className="absolute bottom-24 left-0 w-full flex flex-col items-center gap-6 z-50 pointer-events-none transition-opacity duration-500">
    <div className="flex gap-1.5 px-6 max-w-md overflow-hidden opacity-50">
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className={`h-1 transition-all duration-300 rounded-full ${
            i === activeIndex ? "w-6 bg-blue-500" : "w-1 bg-neutral-800"
          }`}
        />
      ))}
    </div>
  </div>
));

Indicator.displayName = "Indicator";

interface CylinderGalleryProps {
  camera?: Camera;
  images: Photo[];
  rotationSpeed?: number;
  imageWidth?: number;
  imageSpacing?: number;
  showIndicator?: boolean;
  cardRotation?: Rotation;
  cardTransformOrigin?: string;
}

const CylinderGallery = ({
  camera,
  images,
  rotationSpeed = 0.15,
  imageWidth = 300,
  imageSpacing = 0,
  showIndicator = true,
  cardRotation = { x: 0, y: 0, z: 0 },
  cardTransformOrigin = "center center",
}: CylinderGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Refs for animation state (mutable, no re-renders)
  const rotationRef = useRef(0);
  const velocityRef = useRef(0);
  const requestRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  // Use refs for values read inside the animation loop to avoid recreating it
  const isDraggingRef = useRef(false);
  const rotationSpeedRef = useRef(rotationSpeed);
  const cameraRef = useRef(camera);

  // Refs for drag interaction
  const startX = useRef<number>(0);
  const startRotation = useRef<number>(0);
  const lastX = useRef<number>(0);

  // Track active index to avoid redundant state updates
  const activeIndexRef = useRef(0);

  const FRICTION = 0.97;
  const totalItems = images.length;

  // Sync prop values to refs (no animation loop recreation)
  useEffect(() => { rotationSpeedRef.current = rotationSpeed; }, [rotationSpeed]);
  useEffect(() => { cameraRef.current = camera; }, [camera]);

  const radius = useMemo(() => {
    const chord = imageWidth + imageSpacing;
    return Math.max(400, chord / 2 / Math.sin(Math.PI / totalItems));
  }, [imageWidth, imageSpacing, totalItems]);

  // Stable animation loop — no state in deps, only refs
  const animate = useCallback(() => {
    const speed = rotationSpeedRef.current;
    const cam = cameraRef.current;

    if (!isDraggingRef.current) {
      if (Math.abs(velocityRef.current) > Math.abs(speed) + 0.05) {
        rotationRef.current += velocityRef.current;
        velocityRef.current *= FRICTION;
      } else {
        velocityRef.current = velocityRef.current * 0.9 + speed * 0.1;
        rotationRef.current += velocityRef.current;
      }
    }

    // Direct DOM manipulation for performance
    if (containerRef.current) {
      containerRef.current.style.transform = `
        translate3d(${cam?.x || 0}px, ${cam?.y || 0}px, ${cam?.z || 0}px) 
        rotateZ(${cam?.roll || 0}deg)
        rotateX(${cam?.pitch || 0}deg) 
        rotateY(${rotationRef.current + (cam?.yaw || 0)}deg)
      `;
    }

    // Calculate active index efficiently
    const anglePerItem = 360 / totalItems;
    const combinedRotation = rotationRef.current + (cam?.yaw || 0);
    const currentActiveIndex =
      Math.round(
        ((combinedRotation / anglePerItem) % totalItems) + totalItems
      ) % totalItems;

    if (currentActiveIndex !== activeIndexRef.current) {
      activeIndexRef.current = currentActiveIndex;
      setActiveIndex(currentActiveIndex);
    }

    requestRef.current = requestAnimationFrame(animate);
  }, [totalItems]); // only depends on totalItems (structural), not on props read via refs

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest(".controls-panel")) return;
    isDraggingRef.current = true;
    const x = e.clientX || 0;
    startX.current = x;
    lastX.current = x;
    startRotation.current = rotationRef.current;
    velocityRef.current = 0;
  }, []);

  // Stable handlers attached once — check ref inside
  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const currentX = e.clientX || 0;
      const deltaX = currentX - startX.current;

      velocityRef.current = -(currentX - lastX.current) * 0.2;
      lastX.current = currentX;

      const rotationOffset = deltaX * 0.15;
      rotationRef.current = startRotation.current - rotationOffset;
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="relative w-full h-full flex items-center justify-center overflow-visible cursor-grab active:cursor-grabbing"
        style={{ perspective: "1000px", perspectiveOrigin: "center center" }}
        onPointerDown={handlePointerDown}
      >
        <div
          ref={containerRef}
          className="relative w-full h-full flex items-center justify-center will-change-transform"
          style={{
            transformStyle: "preserve-3d" as const,
          }}
        >
          {images.map((photo, index) => (
            <Card
              key={index}
              photo={photo}
              index={index}
              totalItems={totalItems}
              radius={radius}
              width={imageWidth}
              cardRotation={cardRotation}
              cardTransformOrigin={cardTransformOrigin}
            />
          ))}
        </div>
      </div>

      {showIndicator && <Indicator count={totalItems} activeIndex={activeIndex} />}
    </div>
  );
};

export default CylinderGallery;
