//const invertOrder = obj=> Object.keys(obj).reverse() //this reverses the order

function invert(obj) {
    const ret = {};
    Object.keys(obj).forEach(key => {
      ret[obj[key]] = key;
    });
    return ret;
  }