import './index.css';

// import { apiRequest } from '@shared/api';

const h1 = document.querySelector('h1') as HTMLHeadElement;
h1.style.color = 'red';
h1.addEventListener('mouseover', () => {
  h1.style.color = 'blue';
});
h1.addEventListener('mouseleave', () => {
  h1.style.color = 'red';
});
