var theDiv = document.getElementById("theDiv");
var divContainer = document.getElementById("container");
var cars = [
  { manufacture: "mazda", year: 2019, price: 120000 },
  { manufacture: "mazda", year: 2015, price: 40000 },
  { manufacture: "mazda", year: 2010, price: 12000 },
  { manufacture: "mazda", year: 2019, price: 120000 },
  { manufacture: "mazda", year: 2019, price: 120000 },
  { manufacture: "audi", year: 2021, price: 150000 },
  { manufacture: "toyota", year: 2018, price: 100000 },
];

for (let i = 0; i < cars.length; i++) {
  theDiv.innerHTML += `<p>cars.manufacture:  ${cars[i].manufacture}. <br> year: ${cars[i].year}.<br> price: ${cars[i].price}</p>`;
}

//   var theContainer = 1;
//   for (let i = 0; i < cars.length; i++) {
//     if (cars[i].manufacture == "mazda") {
//       divContainer.innerHTML += `<p>cars.manufacture: (${theContainer++}) ${
//         cars[i].manufacture
//       }.</p>`;
//     }
//   }