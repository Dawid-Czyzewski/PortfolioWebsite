'use client';

import '@/i18n';

type Props = {
  children: React.ReactNode;
};

const I18nProvider = ({ children }: Props) => children;

export default I18nProvider;
