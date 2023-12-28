import './index.css';

import { apiRequest } from '@shared/api';
import { METHOD } from '@shared/api/types';
import { log } from '@shared/lib';

// const urlZip = 'https://cdn.abplogistics.site/api/?zip=97080';
// const urlMakes = 'https://cdn.abplogistics.site/api/?makes';
// const urlModel = 'https://cdn.abplogistics.site/api/?model=ford&year=2020';
const url = 'https://cdn.abplogistics.site/api/?model=ford&year=2020';

// API REQUEST EXAMPLE
const foo = async () => {
  try {
    const request = await apiRequest({ url, method: METHOD.GET });
    log('REQUEST', request);
  } catch (error) {
    log('Error', error);
  }
};
foo();
