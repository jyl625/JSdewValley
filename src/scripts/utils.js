const utils = {
  gridVal(n) {
    return n * 16;
  },

  rounded(pixel) {
    return Math.floor(pixel / 16) * 16;
  }
};

export default utils;