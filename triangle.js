function triangle(str,length) {
    var line = "";
    for (var i = 1; i <= length; i++) {
      line+=str.repeat(i)+"\n";
    }
    return line;
  }