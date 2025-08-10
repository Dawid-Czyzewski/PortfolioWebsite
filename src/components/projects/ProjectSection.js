import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const ProjectSection = ({ image, alt, children, reverse }) => {
  const [showModal, setShowModal] = useState(false);
  const touchStartY = useRef(null);
  const [translateY, setTranslateY] = useState(0);
  const imgWrapperRef = useRef(null);

  useEffect(() => {
    if (showModal) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [showModal]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const handleTouchStart = (e) => {
    if (e.touches?.length !== 1) return;
    touchStartY.current = e.touches[0].clientY;
    setTranslateY(0);
  };

  const handleTouchMove = (e) => {
    if (touchStartY.current == null) return;
    const currentY = e.touches[0].clientY;
    const delta = currentY - touchStartY.current;
    if (delta > 0) {
      setTranslateY(delta);
    }
  };

  const handleTouchEnd = () => {
    if (translateY > 120) {
      setShowModal(false);
    } else {
      setTranslateY(0);
    }
    touchStartY.current = null;
  };

  const modalNode = (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80"
      onClick={() => setShowModal(false)}
    >
      <div
        className="relative w-screen h-screen sm:w-[80vw] sm:h-[80vh] flex items-center justify-center p-0 sm:p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          ref={imgWrapperRef}
          className="w-full h-full flex items-center justify-center overflow-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: "pan-y pinch-zoom" }}
        >
          <img
            src={image}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className={`block w-auto h-auto max-w-[100vw] max-h-[100vh] sm:max-w-[90%] sm:max-h-[90%] sm:rounded-2xl sm:border-4 sm:border-teal-400 shadow-2xl transition-transform duration-200 ease-out`}
            style={{
              objectFit: "contain",
              transform: `translateY(${translateY}px)`,
            }}
          />
        </div>

        <button
          aria-label="Zamknij obraz"
          className="absolute top-4 right-4 z-50 bg-black bg-opacity-60 text-white rounded-full px-3 py-1 text-2xl font-bold hover:bg-opacity-80 transition"
          onClick={() => setShowModal(false)}
        >
          ×
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-8 mb-16`}>
        <img
          src={image}
          alt={alt}
          className="w-[350px] h-[220px] md:w-[400px] md:h-[260px] rounded-2xl shadow-xl border-4 border-teal-400 bg-white/10 object-cover cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <div className="flex-1 text-lg md:text-xl text-white/90">{children}</div>
      </div>

      {showModal && typeof document !== "undefined"
        ? createPortal(modalNode, document.body)
        : null}
    </>
  );
};

export default ProjectSection;