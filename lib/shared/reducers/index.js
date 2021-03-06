import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';
import {relateReducer} from 'relate-js';

import adminMenu from './admin-menu';
import display from './display';
import dnd from './dnd';
import fonts from './fonts';
import media from './media';
import menu from './menu';
import page from './page';
import pageBuilder from './page-builder';
import revisions from './revisions';
import schema from './schema';
import schemaEntry from './schema-entry';
import settings from './settings';
import styles from './styles';
import symbols from './symbols';

const rootReducer = combineReducers({
  relateReducer,
  adminMenu,
  display,
  dnd,
  fonts,
  media,
  menu,
  page,
  pageBuilder,
  revisions,
  schema,
  schemaEntry,
  settings,
  styles,
  symbols,
  router
});

export default rootReducer;
