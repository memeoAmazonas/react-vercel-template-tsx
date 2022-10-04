export interface ItemMenu {
  name: string;
  to: string;
}

const itemsMenu: ItemMenu[] = [
  {
    name: 'home',
    to: `/`,
  },
];

export default itemsMenu;
