import { ChangeEventHandler, KeyboardEventHandler } from 'react';
import { useLanguage } from '~/intl';
import { IconButton, InputBase, Paper, Stack, SxProps, Tooltip, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { SX } from './styles';

export type InputProps = {
  handleChange: ChangeEventHandler;
  handleKeyDown?: KeyboardEventHandler;
  help?: string;
  label: string;
  name: string;
  onCancel?: (key: string) => void;
  placeholder: string;
  sx?: SxProps;
  value: string;
};

export default function Input({
  handleChange,
  handleKeyDown,
  help,
  label,
  name,
  onCancel,
  placeholder,
  value,
  sx,
}: InputProps) {
  const { translate } = useLanguage();
  const inputProp = {
    autoComplete: 'off',
    inputProps: { 'aria-label': placeholder },
    name: name,
    onChange: handleChange,
    placeholder: translate(placeholder),
    sx: SX.input,
    value,
    onKeyDown: handleKeyDown,
  };
  return (
    <Stack>
      <Paper sx={{ ...SX.paper, ...sx }}>
        {value && (
          <Stack flexDirection='row' alignItems='center' sx={SX.stackValue}>
            <Typography sx={SX.input}>{translate(label)}</Typography>
          </Stack>
        )}
        <InputBase {...inputProp} />
        {onCancel && value && (
          <Tooltip arrow={true} title={translate('clear')}>
            <IconButton
              onClick={() => onCancel(name)}
              type='button'
              sx={SX.iconButton}
              aria-label='cancel'
            >
              <CancelIcon sx={SX.icon} color='error' />
            </IconButton>
          </Tooltip>
        )}
      </Paper>
      {help && (
        <Typography sx={SX.help} variant='caption'>
          {translate(help)}
        </Typography>
      )}
    </Stack>
  );
}
