import { useState } from "react";

const ProjectSection = ({ image, alt, children, reverse }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-8 mb-16`}>
        <img
          src={image}
          alt={alt}
          className="w-[350px] h-[220px] md:w-[400px] md:h-[260px] rounded-2xl shadow-xl border-4 border-teal-400 bg-white/10 object-cover cursor-pointer"
          onClick={() => setShowModal(true)}
          style={{ objectFit: 'cover' }}
        />
        <div className="flex-1 text-lg md:text-xl text-white/90">{children}</div>
      </div>
 {showModal && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/30"
    onClick={() => setShowModal(false)}
  >
    <div className="relative w-[80vw] h-[80vh]">
      <img
        src={image}
        alt={alt}
        className="w-full h-full rounded-2xl border-4 border-teal-400 shadow-2xl object-contain"
        onClick={e => e.stopPropagation()}
      />
      <button
        className="absolute top-2 right-2 bg-black bg-opacity-70 text-white rounded-full px-4 py-2 text-lg font-bold hover:bg-opacity-90 transition"
        onClick={() => setShowModal(false)}
      >
        ×
      </button>
    </div>
  </div>
)}
    </>
  );
};

export default ProjectSection;