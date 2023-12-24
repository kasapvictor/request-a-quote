import './index.css';

const h1 = document.querySelector('h1') as HTMLHeadElement;
h1.style.color = 'red';
h1.addEventListener('mouseover', () => {
  h1.style.color = 'blue';
});
h1.addEventListener('mouseleave', () => {
  h1.style.color = 'red';
});

/*
// API REQUEST EXAMPLE
const foo = async () => {
  try {
    const request = await apiRequest({ url: 'https://dummyjson.com/products', method: METHOD.GET });
    log('REQUEST', request);
  } catch (error) {
    log('Error', error);
  }
};
foo();
*/
