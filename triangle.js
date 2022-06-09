function triangle(str,length) {
    var line = "";
    for (var i = 1; i <= length; i++) {
        if (i<length){
            line+=str.repeat(i)+"\n";
        }else{
            line+=str.repeat(i)
        }
    }
    return line;
  }