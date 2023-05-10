import { useTranslation } from 'next-i18next';

const { t } = useTranslation('home');
export const history = [
  {
    year: '2020',
    text: t('history.text-1'),
  },
  {
    year: '2021',
    text: t('history.text-2'),
  },
  {
    year: '2022',
    text: t('history.text-3'),
  },
  {
    year: '2022',
    text: t('history.text-4'),
  },
];
