// собственный метод массива pop
const selfPop = (arr) => {
  const lastIndex = arr.length - 1;
  const lastElem = arr[lastIndex];
  arr.splice(lastIndex, 1);

  return lastElem;
}

export default selfPop;
