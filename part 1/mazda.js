var theContainer = 1;
for (let i = 0; i < cars.length; i++) {
  if (cars[i].manufacture == "mazda") {
    divContainer.innerHTML += `<p>cars.manufacture: (${theContainer++}) ${
      cars[i].manufacture
    }.</p>`;
  }
}
