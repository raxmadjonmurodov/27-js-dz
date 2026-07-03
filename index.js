console.log(Math.round(4.5));
console.log(Math.round(4.4));

console.log(Math.max(5, 12, 3));
console.log(Math.min(5, 12, 3));

console.log(Math.floor(4.9));

console.log(Math.ceil(4.1));

const date = new Date();



document.getElementById("time").textContent = date.toLocaleTimeString("uz-UZ");
document.getElementById("year").textContent = date.getFullYear();