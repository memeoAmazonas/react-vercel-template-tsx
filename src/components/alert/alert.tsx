import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { Alert, Snackbar, Typography } from '@mui/material';
import { sx } from '~/components/alert/styles';

export type AlertProps = {
  message: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function CustomAlert({ message, open, setOpen }: AlertProps) {
  const handleClose = (_?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      autoHideDuration={2500}
    >
      <Alert onClose={handleClose} severity='success' sx={sx.alert}>
        <Typography>{message}</Typography>
      </Alert>
    </Snackbar>
  );
}
