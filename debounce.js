const debounce = (fn, delay) => {
    let timer;
    return () => {
      if(timer) clearTimeout(timer);
      timer = setTimeout(fn, delay)
    }
  }

function opDebounce(func,delay){
   return _.debounce(func, delay, {
    'leading': true,
    'trailing': false
  })
}
    
