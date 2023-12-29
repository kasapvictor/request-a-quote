import { log } from '@shared/lib';

export const initPrevNext = () => {
  const elements = {
    prevSlide: document.getElementById('request-a-quote-arrow-left'),
    nextSlide: document.getElementById('request-a-quote-arrow-right'),
    next1: document.getElementById('slide-1-next'),
    prev2: document.getElementById('slide-2-prev'),
    next2: document.getElementById('slide-2-next'),
    prev3: document.getElementById('slide-3-prev'),
  };
  log(elements);
};
