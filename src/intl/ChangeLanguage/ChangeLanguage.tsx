import { FormControlLabel, FormGroup, Switch, Tooltip } from '@mui/material';
import { useLanguage } from '~/intl/hooks';
import { sx } from '~/intl/ChangeLanguage/style';

export default function ChangeLanguage() {
  const { language, set, translate } = useLanguage();
  return (
    <FormGroup>
      <Tooltip title={translate('changeLanguage')}>
        <FormControlLabel
          sx={sx.formControl}
          control={<Switch onClick={set} defaultChecked color='default' />}
          label={language}
        />
      </Tooltip>
    </FormGroup>
  );
}
