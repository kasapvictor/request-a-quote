import { initInputPhone } from '@features/input-phone';
import { initInputZipFrom } from '@features/input-zip-from';
import { initInputZipTo } from '@features/input-zip-to';
import { initPrevNext } from '@features/prev-next';

export const initRequestQuoteForm = () => {
  initPrevNext();
  initInputZipFrom();
  initInputZipTo();
  initInputPhone();
};
