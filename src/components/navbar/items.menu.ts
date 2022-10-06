export interface ItemMenu {
  name: string;
  to: string;
}

const itemsMenu: Array<ItemMenu> = [
  {
    name: 'home',
    to: `/`,
  },
];

export default itemsMenu;
