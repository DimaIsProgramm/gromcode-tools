const reverseString = text => {
  if (typeof text !== 'string') {
    return null;
  }
  return [...text].reverse().join('');
};
