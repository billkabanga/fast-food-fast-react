import { ADD_MENU_ITEM, GET_MENU } from './types';

const addMenuItem = message => ({
  type: ADD_MENU_ITEM,
  message,
});

const getMenu = menu => ({
  type: GET_MENU,
  menu,
});

export { addMenuItem, getMenu };
