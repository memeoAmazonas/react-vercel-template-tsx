import { IntlProvider } from 'react-intl';
import { useAppSelector } from '~/store';
import { en, es } from '~/intl/language';

export type ProviderProps = {
  children: JSX.Element;
};
interface Message {
  en: {
    [key: string]: string;
  };
  es: {
    [key: string]: string;
  };
}
export const messages: Message = {
  en,
  es,
};
export default function INTLProvider({ children }: ProviderProps) {
  const { language } = useAppSelector((s) => s.language);
  return (
    <IntlProvider
      messages={(language === 'en' && messages.en) || messages.es}
      locale={language}
      defaultLocale='en'
    >
      {children}
    </IntlProvider>
  );
}
