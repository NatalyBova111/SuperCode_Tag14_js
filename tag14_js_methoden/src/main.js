const heute = new Date();

// ⏱️ Werte extrahieren
const tag = heute.getDate().toString().padStart(2, "0");
const monat = (heute.getMonth() + 1).toString().padStart(2, "0"); // Monate ab 0!
const jahr = heute.getFullYear();

// 📅 Datumsausgabe
const format1 = `${tag}-${monat}-${jahr}`;
const format2 = `${tag}/${monat}/${jahr}`;

// 🕒 Uhrzeit lokal (ohne Sekunden)
const lokalStunden = heute.getHours().toString().padStart(2, "0");
const lokalMinuten = heute.getMinutes().toString().padStart(2, "0");
const lokalZeit = `${lokalStunden}:${lokalMinuten} Uhr`;

// 🕒 Uhrzeit UTC (auch ohne Sekunden)
const utcStunden = heute.getUTCHours().toString().padStart(2, "0");
const utcMinuten = heute.getUTCMinutes().toString().padStart(2, "0");
const utcZeit = `${utcStunden}:${utcMinuten} Uhr`;

// 📤 In HTML anzeigen
document.getElementById("date1").textContent = format1;
document.getElementById("date2").textContent = format2;
document.getElementById("timeLocal").textContent = lokalZeit;
document.getElementById("timeUTC").textContent = utcZeit;