import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '~/assets/img/logo.svg';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
} from '@mui/material';
import { ChangeLanguage, useLanguage } from '~/intl';
import { SX } from '~/components/navbar/style';
import itemsMenu from '~/components/navbar/items.menu';

interface Props {
  window?: () => Window;
}

export default function Navbar(props: Props) {
  const { window } = props;
  const { translate } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const Logo = () => (
    <Stack flexDirection='row' sx={SX.stack}>
      <img alt='logo' src={logo} {...SX.image} />
    </Stack>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={SX.textCenter}>
      <Logo />
      <ChangeLanguage />
      <Divider />
      <List>
        {itemsMenu.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={SX.textCenter}>
              <ListItemText primary={translate(item.name)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={SX.container}>
      <AppBar {...SX.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={SX.toolbar.iconButton}
          >
            <MenuIcon color='primary' />
          </IconButton>
          <Logo />
          <Box sx={SX.toolbar.box}>
            {itemsMenu.map((item) => (
              <Button key={`desktop-${item.name}`} color='primary'>
                {translate(item.name)}
              </Button>
            ))}
            <ChangeLanguage />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={SX.box}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
}
