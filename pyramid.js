function pyramid(strg, length) {
    let result = ""
    for (let i = 1; i <= length; i++) {
      if (i < length) {
        let str = ' '.repeat(strg.length*(length - i));
        let str2 = strg.repeat(i * 2 - 1)
        result += str + str2+ '\n';
      } else {
        let str = ' '.repeat(strg.length*(length - i));
        let str2 = strg.repeat(i * 2 - 1)
        result += str + str2;
      }
    }
    return result;
}