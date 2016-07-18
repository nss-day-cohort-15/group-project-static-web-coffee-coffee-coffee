var productsArray = [
  {
    name:"smallMug",
    description:"",
    price: 0,
    imageURL:""
  },
  {
    name:"medMug",
    description:"",
    price: 0,
    imageURL:""
  },
  {
    name:"largeMug",
    description:"",
    price: 0,
    imageURL:""
  },
  {
    name:"travelMug",
    description:"",
    price: 0,
    imageURL:""
  },
  {
    name:"sippyCupMug",
    description:"",
    price: 0,
    imageURL:""
  },
  {
    name:"yetiMug",
    description:"",
    price: 0,
    imageURL:""
  }
]

var productsObj = {
  name:"",
  description:"",
  price: 0,
  imageURL:""
}

// for (var - i; i <= productsArray.length; i++) {

// }

console.log("hello");


var currentoutput = `<article>
    <div>
      <h1>Small Mug</h1>
    </div>
  </article>

  <article>
    <div>
      <h1>Medium Mug</h1>
    </div>
  </article>

  <article>
    <div>
      <h1>Large Mug</h1>
    </div>
  </article>

  <article>
    <div>
      <h1>Travel Mug</h1>
    </div>
  </article>

  <article>
    <div>
      <h1>Sippy Mug</h1>
    </div>
  </article>

  <article>
    <div>
      <h1>Yeti Mug</h1>
    </div>
  </article>

  <article>
    <div>
      <h1>Dad Mug</h1>
    </div>
  </article>

  <article>
    <div>
      <h1>Mug Mug</h1>
    </div>
  </article>`

document.getElementById("output").innerHTML = currentoutput;
