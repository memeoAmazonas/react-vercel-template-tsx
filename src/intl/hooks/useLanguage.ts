import { setLanguage, useAppDispatch, useAppSelector } from '~/store';
import { useIntl } from 'react-intl';

const UseLanguage = () => {
  const dispatch = useAppDispatch();
  const t = useIntl();
  const { language } = useAppSelector((s) => s.language);
  const translate = (id: string, values?: Record<string, any>) => {
    return t.formatMessage({ id }, values);
  };
  const set = () => {
    const lang = language === 'es' ? 'en' : 'es';
    dispatch(setLanguage(lang));
  };
  return { translate, set, language };
};
export default UseLanguage;
