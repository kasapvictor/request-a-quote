import { initInputZipFrom } from '@features/input-zip-from';
import { initInputZipTo } from '@features/input-zip-to';

export const initRequestQuoteForm = () => {
  initInputZipFrom();
  initInputZipTo();
};
