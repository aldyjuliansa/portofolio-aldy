function updateCounter() {
  let counter = parseInt(document.getElementById("counter").innerText);
  counter++;
  document.getElementById("counter").innerText = counter;
}
setInterval(updateCounter, 1000);
