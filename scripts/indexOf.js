const setIndexOf = (arr, elem) => {
  let index = -1;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === elem) {
      index = i;
      return index;
    }
  }
  return index;
}

export default setIndexOf;
