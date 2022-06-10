function ionOut(str){
    return str.match(/([a-z]+t)(?=ion)/gi)||[];
  }