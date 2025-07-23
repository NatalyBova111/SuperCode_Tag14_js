const values = [
  15.16698,
  7.78714,
  "12.3",
  "3.14random",
  "32px",
  true,
  false,
  "321",
  "SuperCode"
];

// Перебираем каждый элемент массива
values.forEach((val) => {
  // Преобразуем значение в число с помощью Number()
  const converted = Number(val);

  console.log(`Original: ${val}`);                         // выводим оригинальное значение
  console.log("Number():", converted);                     // строгое преобразование
  console.log("parseFloat():", parseFloat(val));           // преобразование с плавающей точкой
  console.log("parseInt():", parseInt(val));               // преобразование в целое число
  console.log("--------");                                 // разделитель
});