import { combineReducers } from 'redux';

import auth from './auth';
import profileReducers from './profile';
import productsReducers from './products';
import inquiresReducers from './inquires';
import invoiceReducers from './invoices';
import offersReducers from './offers';
import quotationsReducers from './quotations';
import marketPlaceReducers from './marketplace';
import countriesReducers from './countries';
import currenciesReducers from './currencies';
import taricsReducers from './tarics';
import barcodesReducers from './barcodes';
import productCategoriesReducers from './productCategories';
import regNumbersReducers from './regnums';
import modalReducers from './modal';
import drawerReducers from './drawer';
import tableReducers from './table';
import groupReducers from './groups';
import measurementReducers from './measurement';


const rootReducer = combineReducers({
  auth: auth,
  modal: modalReducers,
  drawer: drawerReducers,
  table: tableReducers,
  profile: profileReducers,
  products: productsReducers,
  tarics: taricsReducers,
  barcodes: barcodesReducers,
  productCategories: productCategoriesReducers,
  inquires: inquiresReducers,
  offers: offersReducers,
  invoices: invoiceReducers,
  quotations: quotationsReducers,
  groups: groupReducers,
  sysm: measurementReducers,
  marketplace: marketPlaceReducers,
  countries: countriesReducers,
  currencies: currenciesReducers,
  regnums: regNumbersReducers
});

export default rootReducer;
