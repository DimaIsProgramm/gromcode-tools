//put your code here
const splitString = (text, len) => {
  const strArr = [];
  let startPosition = 0;
  if (typeof text !== 'string') {
    return null;
  }

  while (true) {
    if (len === undefined) {
      len = 10;
    }
    let chunk = text.substr(startPosition, len);

    if (chunk.length === 0) {
      break;
    }
    if (chunk[chunk.length - 1].length !== len) {
      chunk = chunk.concat('.'.repeat(len - chunk.length));
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }
  return strArr;
};
