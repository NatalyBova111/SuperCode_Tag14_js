import { format, differenceInYears } from 'date-fns';
import { de } from 'date-fns/locale';

const oldDate = new Date('1970-01-01T00:00:00');
const now = new Date();

console.log('Разница в годах:', differenceInYears(now, oldDate));

const myBirthday = new Date('1979-12-20T12:40:00');

// Текущее время
console.log('Мой возраст сейчас:', differenceInYears(new Date(), myBirthday));

// Формат даты
console.log(format(myBirthday, 'dd.MM.yyyy HH:mm:ss'));                     // "20.12.1979 12:40:00"
console.log(format(myBirthday, 'd. MMMM yyyy', { locale: de }));            // "20. Dezember 1979"
console.log(format(myBirthday, "d 'des' MMMM 'im Jahre des Herrn' yyyy", { locale: de }));
// "20 des Dezember im Jahre des Herrn 1979"