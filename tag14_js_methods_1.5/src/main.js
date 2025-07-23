const whereIsSusi = 'Susi is back from codingschool';

const susi = whereIsSusi.substring(0, 4);               // 'Susi'
const isWord = whereIsSusi.substring(5, 7);             // 'is'
const school = whereIsSusi.substring(26);               // 'school'
const susiIsSchool = susi + " " + isWord + " " + school; // 'Susi is school'

document.write(susi + "<br>");
document.write(isWord + "<br>");
document.write(school + "<br>");
document.write(susiIsSchool);