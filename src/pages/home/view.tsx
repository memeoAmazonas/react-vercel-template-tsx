import { Typography } from '@mui/material';
import { useLanguage } from '~/intl';

export default function Home() {
  const { translate } = useLanguage();
  return (
    <>
      <Typography variant='h5' color='secondary'>
        {translate('home')}
      </Typography>
    </>
  );
}
