const ProjectHeader = ({ title, onBack, t }) => (
  <div className="flex items-center justify-between mb-10">
    <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
      {title}
    </h1>
    <button
      onClick={onBack}
      className="px-6 py-2 rounded-full bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200 border-2 border-white/10"
    >
      ← {t("back")}
    </button>
  </div>
);

export default ProjectHeader;