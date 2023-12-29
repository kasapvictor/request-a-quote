import { initInputEmail } from '@features/input-email';
import { initInputPhone } from '@features/input-phone';
import { initInputZipFrom } from '@features/input-zip-from';
import { initInputZipTo } from '@features/input-zip-to';
import { initPrevNext } from '@features/prev-next';
import { initSelectMake } from '@features/select-make';
import { initSelectYear } from '@features/select-year';

export const initRequestQuoteForm = () => {
  initPrevNext();
  initInputZipFrom();
  initInputZipTo();
  initSelectYear();
  initSelectMake();
  initInputPhone();
  initInputEmail();
};
