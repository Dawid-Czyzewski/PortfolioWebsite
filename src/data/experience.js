export const getExperience = (t, lang) => [
  {
    title: t('experienceZirto.title'),
    company: t('experienceZirto.company'),
    period: getCurrentExperiencePeriod(lang),
    description: t('experienceZirto.description')
  },
  {
    title: t('experienceIRONteam.title'),
    company: t('experienceIRONteam.company'),
    period: t('experienceIRONteam.period'),
    description: t('experienceIRONteam.description')
  },
  {
    title: t('experienceBluSoft.title'),
    company: t('experienceBluSoft.company'),
    period: t('experienceBluSoft.period'),
    description: t('experienceBluSoft.description')
  },
  {
    title: t('experienceVocale.title'),
    company: t('experienceVocale.company'),
    period: t('experienceVocale.period'),
    description: t('experienceVocale.description')
  }
];

const getCurrentExperiencePeriod = (lang) => {
  const start = new Date(2025, 2);
  const now = new Date();

  let totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  if (totalMonths < 0) totalMonths = 0;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (lang === "en") {
    const yearPart =
      years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
    const monthPart =
      months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";

    const duration = [yearPart, monthPart].filter(Boolean).join(" ");

    return `${duration || "1 month"} (current)`;
  }

  const getPolishYear = (y) => {
    if (y === 1) return "rok";
    if (y >= 2 && y <= 4) return "lata";
    return "lat";
  };

  const getPolishMonth = (m) => {
    if (m === 1) return "miesiąc";
    if (m >= 2 && m <= 4) return "miesiące";
    return "miesięcy";
  };

  const yearPart = years > 0 ? `${years} ${getPolishYear(years)}` : "";
  const monthPart =
    months > 0 ? `${months} ${getPolishMonth(months)}` : "";

  const duration = [yearPart, monthPart].filter(Boolean).join(" ");

  return `${duration || "1 miesiąc"} (obecnie)`;
};
