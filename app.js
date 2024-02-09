const array = [];

for (let i = 97; i <= 122; i++) {
  array.push(String.fromCharCode(i));
}
for (let i = 0; i <= 9; i++) {
  array.push(i.toString());
}
document.getElementById("lowCase").value = array[`${Math.floor(Math.random() * 35 )}`]
document.getElementById("upperCase").value = document.getElementById("lowCase").value.toString().toUpperCase()
