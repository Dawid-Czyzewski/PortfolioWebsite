const VisitButton = ({ url, t, text }) => {
  return (
    <div className="flex justify-center mt-8">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
       className="px-8 py-4 bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 text-white text-lg font-bold shadow-xl hover:scale-110 transition-transform duration-200 border-2 border-white/10 rounded-2xl"
      >
        {t(text)}
      </a>
    </div>
  );
};

export default VisitButton;
