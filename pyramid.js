function pyramid(length) {
    let result = ""
    for (let i = 1; i <= length; i++) {
      if (i < length) {
        let str = ' '.repeat(length - i);
        let str2 = '*'.repeat(i * 2 - 1)
        result += str + str2 + str + '\n';
      } else {
        let str = ' '.repeat(length - i);
        let str2 = '*'.repeat(i * 2 - 1)
        result += str + str2 + str;
      }
    }
    return result;
}