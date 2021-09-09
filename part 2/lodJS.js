var myDiv = document.getElementById("myDiv");
for (let i = 0; i < people.length; i++) {
  if (people[i].city == "lod") {
    myDiv.innerHTML += `<div><p> <b>name: </b>${people[i].name}, </p>
    <p><b>age: </b>${people[i].age}, </p>
    <p><b>city: </b>${people[i].city}, </p>
     <section>
     <p><b>picture: </b>
     </p>
     <img src ="${people[i].picture}"  style= "width: 80px; height: auto;"">
     </section><hr> </div>`;
  }
}
