export const getCertificates = (t) => [
  {
    id: 1,
    name: t('certificate1.name'),
    issuer: t('certificate1.issuer'),
    date: t('certificate1.date'),
    description: t('certificate1.description'),
    downloadUrl: "/certificates/englishScore.pdf",
    fileName: "englishScore.pdf"
  },
  {
    id: 2,
    name: t('certificate2.name'),
    issuer: t('certificate2.issuer'),
    date: t('certificate2.date'),
    description: t('certificate2.description'),
    downloadUrl: "/certificates/revas.pdf",
    fileName: "revas.pdf"
  },
  {
    id: 3,
    name: t('certificate3.name'),
    issuer: t('certificate3.issuer'),
    date: t('certificate3.date'),
    description: t('certificate3.description'),
    downloadUrl: "/certificates/python.pdf",
    fileName: "python.pdf"
  },
  {
    id: 4,
    name: t('certificate4.name'),
    issuer: t('certificate4.issuer'),
    date: t('certificate4.date'),
    description: t('certificate4.description'),
    downloadUrl: "/certificates/php.pdf",
    fileName: "php.pdf"
  }
];
