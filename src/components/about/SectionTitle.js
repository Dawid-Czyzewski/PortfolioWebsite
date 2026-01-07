const SectionTitle = ({ icon: Icon, title, iconColor = "text-purple-400" }) => {
  return (
    <h2 className="text-4xl font-bold text-white text-center mb-12">
      <span className="flex items-center justify-center gap-3">
        <Icon className={`w-10 h-10 ${iconColor}`} />
        {title}
      </span>
    </h2>
  );
};

export default SectionTitle;
