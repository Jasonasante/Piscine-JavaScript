function chunk(arr, chunkSize) {
  if (chunkSize <= 0) throw "Invalid chunk size";
  var result = [];
  for (let i=0,len=arr.length; i<len; i+=chunkSize)
  result.push(arr.slice(i,i+chunkSize));
  return result;
}
  