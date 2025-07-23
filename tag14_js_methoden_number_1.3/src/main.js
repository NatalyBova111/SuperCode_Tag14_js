let values = [15.16698, 7.78714, "12.3", "3.14random", "32px", true, false, "321", "Supercode"];

for (let value of values) {
  let number = Number(value);

  if (!isNaN(number)) {
    let int = Math.floor(number);
    console.log(`\nWert: ${value}`);
    console.log("Binär:", int.toString(2)); // Двоичная
    console.log("Oktal:", int.toString(8)); // Восьмеричная
    console.log("Hexadezimal:", int.toString(16)); // Шестнадцатеричная
  } else {
    console.log(`"${value}" ist keine Zahl`); // невозможно преобразовать в число
  } 
}