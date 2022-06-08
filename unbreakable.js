function split(str, splitter) {
    let tempArray = [];
    let tempStr = "";
    let checkStr = "";
    if (splitter == '') {
      for (let i = 0; i < str.length; i++) {
        tempStr += str[i];
        tempArray.push(str[i]);
        tempStr = "";
      }
      return tempArray;
    }
    if (splitter == undefined) {
      tempArray.push(str);
      return tempArray;
    }
    for (let i = 0; i < str.length; i++) {
      if (str[i] == splitter[0] && i < str.length - 1) {
        for (let j = i; j < i + splitter.length; j++) {
          checkStr += str[j]
        }
        if (checkStr != splitter) {
          tempStr += str[i];
          checkStr = ""
        } else {
          tempArray.push(tempStr);
          tempStr = "";
          checkStr = "";
          i = i + (splitter.length - 1);
          console.log(i)
          if (i >= str.length - 1) {
            tempArray.push(tempStr);
            return tempArray;
          }
        }
      } else if (i == str.length - 1) {
        if (str[i] == splitter) {
          tempArray.push(tempStr);
          tempArray.push('')
          return tempArray;
        } else {
          console.log("check")
          tempStr += str[i];
          console.log(tempStr);
          tempArray.push(tempStr);
          tempStr = "";
        }
      } else {
        tempStr += str[i]
      }
    }
    return tempArray;
}
  