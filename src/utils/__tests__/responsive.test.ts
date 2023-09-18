import responsive from '../responsive';

describe('responsive', () => {
  test('isSm should return true when 640px', () => {
    window.innerWidth = 640;

    expect(responsive.isSm()).toBe(true);
    expect(responsive.isMd()).toBe(true);
    expect(responsive.isLg()).toBe(true);
    expect(responsive.isXl()).toBe(true);
    expect(responsive.is2xl()).toBe(true);
  });

  test('isMd should return true when 768px', () => {
    window.innerWidth = 768;

    expect(responsive.isSm()).toBe(false);
    expect(responsive.isMd()).toBe(true);
    expect(responsive.isLg()).toBe(true);
    expect(responsive.isXl()).toBe(true);
    expect(responsive.is2xl()).toBe(true);
  });

  test('isLg should return true when 1024px', () => {
    window.innerWidth = 1024;

    expect(responsive.isSm()).toBe(false);
    expect(responsive.isMd()).toBe(false);
    expect(responsive.isLg()).toBe(true);
    expect(responsive.isXl()).toBe(true);
    expect(responsive.is2xl()).toBe(true);
  });

  test('isXl should return true when 1280px', () => {
    window.innerWidth = 1280;

    expect(responsive.isSm()).toBe(false);
    expect(responsive.isMd()).toBe(false);
    expect(responsive.isLg()).toBe(false);
    expect(responsive.isXl()).toBe(true);
    expect(responsive.is2xl()).toBe(true);
  });

  test('is2xl should return true when 1536px', () => {
    window.innerWidth = 1536;

    expect(responsive.isSm()).toBe(false);
    expect(responsive.isMd()).toBe(false);
    expect(responsive.isLg()).toBe(false);
    expect(responsive.isXl()).toBe(false);
    expect(responsive.is2xl()).toBe(true);
  });
});
