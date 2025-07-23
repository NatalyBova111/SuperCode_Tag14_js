// Генерация случайного числа от 1 до 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Запрос числа у пользователя
const userGuess = Number(prompt("Rate eine Zahl zwischen 1 und 10:"));

// Проверка и вывод результата
if (userGuess === secretNumber) {
  console.log("Richtig geraten!");
} else {
  console.log(`Falsch geraten. Die richtige Zahl war ${secretNumber}.`);
}