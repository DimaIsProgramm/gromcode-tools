//algo
//1. отфильтровать массив оставив числа
//2. изменить имеющийся массив добавив знак "$"
//3. округлить до 2х знаков после запятой

const cleanTransactionsList = arr =>
  arr.filter(items => isFinite(items)).map(item => '$' + parseFloat(item).toFixed(2));
