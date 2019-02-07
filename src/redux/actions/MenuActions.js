import { ADD_MENU_ITEM } from './types';

const addMenuItem = message => ({
  type: ADD_MENU_ITEM,
  message,
});

export default addMenuItem;
