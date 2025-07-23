let values = [15.16698, 7.78714, "12.3", true, false, "321", "Supercode"];

values.forEach(value => {
  let number = Number(value); // Преобразование в число
  if (!isNaN(number)) {
    console.log(number.toFixed(2));
  } else {
    console.log(`"${value}" ist keine Zahl`);
  }
});