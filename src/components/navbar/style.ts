const drawerWidth = 240;
export const SX = {
  stack: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: '1.5',
  },
  image: {
    height: 50,
    width: 50,
    style: {
      borderRadius: 25,
    },
  },
  container: {
    display: 'flex',
  },
  appBar: {
    component: 'nav',
    sx: {
      bgcolor: 'common.white',
      boxShadow: 12,
    },
  },
  textCenter: {
    textAlign: 'center',
  },
  toolbar: {
    iconButton: {
      display: { sm: 'none' },
      mr: 2,
    },
    box: {
      display: { xs: 'none', sm: 'flex' },
    },
  },
  box: {
    display: { xs: 'block', sm: 'none' },
    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
  },
};
