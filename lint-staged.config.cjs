module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': [
    'prettier --write src',
    () => 'tsc -p tsconfig.json --noEmit', // показывает ошибки но в терминале нет ссылки на файл с ошибкой
    'eslint --fix src',
  ],
  'src/**/*.{css,scss}': ['yarn pretty'],
  '*.html': ['yarn pretty'],
};
