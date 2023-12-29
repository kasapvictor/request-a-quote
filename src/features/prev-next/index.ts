import { combine } from 'effector';

import { zipFromStore } from '@entities/input-zip-from';
import { zipToStore } from '@entities/input-zip-to';
import { makeStore } from '@entities/select-make';
import { modelStore } from '@entities/select-model';
import { yearStore } from '@entities/select-year';

import { Status } from '@shared/types';

export const initPrevNext = () => {
  const elements = {
    prevSlide: document.getElementById('request-a-quote-arrow-left') as HTMLDivElement,
    nextSlide: document.getElementById('request-a-quote-arrow-right') as HTMLDivElement,
    next1: document.getElementById('slide-1-next') as HTMLDivElement,
    next2: document.getElementById('slide-2-next') as HTMLDivElement,
    prev2: document.getElementById('slide-2-prev') as HTMLDivElement,
    prev3: document.getElementById('slide-3-prev') as HTMLDivElement,
  };

  watcher(elements);
  controllerPrev(elements.prev2, elements.prevSlide);
  controllerPrev(elements.prev3, elements.prevSlide);
};

const watcher = (elements: Record<string, HTMLDivElement>) => {
  const $storeSlide1 = combine(zipFromStore.status.state, zipToStore.status.state);
  const $storeSlide2 = combine(yearStore.status.state, makeStore.status.state, modelStore.status.state);

  $storeSlide1.watch((data) => {
    const isSlide1Valid = data.every((value) => value === Status.Success);
    renderButton(elements.next1, elements.nextSlide, isSlide1Valid);
  });

  $storeSlide2.watch((data) => {
    const isSlide2Valid = data.every((value) => value === Status.Success);
    renderButton(elements.next2, elements.nextSlide, isSlide2Valid);
  });
};

const renderButton = (el: HTMLDivElement, originNext: HTMLDivElement, isValid: boolean) => {
  if (isValid) {
    el.classList.remove('disabled');
    el.onclick = () => originNext.click();
  } else {
    el.classList.add('disabled');
    el.onclick = () => false;
  }
};

const controllerPrev = (el: HTMLDivElement, originPrev: HTMLDivElement) => {
  el.onclick = () => originPrev.click();
};

// const formController = (formEl: HTMLFormElement) => {
//   const allow = false;
//   formEl.addEventListener('submit', (e) => {
//     if (!allow) {
//       e.preventDefault();
//     }
//   });
// };
