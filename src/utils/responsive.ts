function isSm() {
  return window.innerWidth <= 640;
}

function isMd() {
  return window.innerWidth <= 768;
}

function isLg() {
  return window.innerWidth <= 1024;
}

function isXl() {
  return window.innerWidth <= 1280;
}

function is2xl() {
  return window.innerWidth <= 1536;
}

const responsive = {
  isSm,
  isMd,
  isLg,
  isXl,
  is2xl,
};

export default responsive;
