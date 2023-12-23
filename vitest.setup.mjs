// vitest.setup.mjs
import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// REF https://github.com/mantinedev/vite-template/blob/master/vitest.setup.mjs

const { getComputedStyle } = window;
window.getComputedStyle = (element) => getComputedStyle(element);

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

