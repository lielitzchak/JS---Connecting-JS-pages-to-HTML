console.log(numOne, numTow);
console.log(numOne * numTow);
console.log(numTow / numOne);
theDiv.innerHTML = `<p> ${text} ${text2}</p>`;

for (let i = 0; i < people.length; i++) {
  theDiv.innerHTML += `<div><p><b>name:</b> ${people[i].name} </p>
  <p><b>age:</b>${people[i].age}</p> 
  <p><b>city: </b>${people[i].city}</p>
  <p><b>picture: </b> </p> <img src="${people[i].picture}"" style= "width: 80px; height: auto;"><hr><br></div> `;
}
