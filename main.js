
var productsArray = [
  {
    name:"Meh Mug",
    description:"This mug is perfect for times when you wake up regretting the decisions you made the night before. 'What was I thinking?! Whatver, meh.' ",
    price: "$5",
    imageURL:"http://www.thinkgeek.com/images/products/zoom/1644_meh_mug.jpg"
  },

  {
    name:"Bitch Mug",
    description:"This mug speaks for you when you don't feel like it. Deadlines? Not feeling so well? Got kids? Grab this and go, and no one will **** with you!",
    price: "$6",
    imageURL:"http://www.idfshirts.com/picture/newproducts/tshirt/big/a53348dm01mg.jpg"
  },

  {
    name:"Llama Mug",
    description:"When it's too early for a White Russian, but you still feel like putting on a 'dude vibe,' pour your steamy java into the mug with a chilled out llama on the front.",
    price: "$7",
    imageURL:"http://picture.idfshirts.com/newproducts/tshirt/big/a35059dm00mg.jpg"
  },

  {
    name:"Adulting Mug",
    description:"Taxes. Traffic tickets. Rent. We've all been there. When life hands you lemons, throw lemons back at life, then brew an extra hot pot of coffee and fling it into life's face.",
    price: "$8",
    imageURL:"https://img1.etsystatic.com/140/1/12116913/il_fullxfull.923003999_pfqx.jpg"
  },

  {
    name:"Sippy Cup",
    description:"Tired of your baby spilling coffee all over the carseat? Keep her jacked up, but looking fresh! Pour your favorite java into our state-of-the-art, proprietary plastic baby mugs.",
    price: "$3",
    imageURL:"http://assets.inhabitots.com/wp-content/uploads/2009/08/me-me-sippy-cup-11.jpg"
  },

  {
    name:"Rx Mug",
    description:"It's no secret: coffee is a drug. Let the world know that without your daily dose, you are not to be trifled with. This one looks great sitting on your desk in the morning when your boss walks by.",
    price: "$10",
    imageURL:"http://www.homewetbar.com/images/prod/w-pill-bottle-coffee-mug43152.jpg"
  },

  {
    name:"Anger Mug",
    description:"Intimidate that new intern by slowly walking around the office everywhere he goes, subtly grinning, never blinking. He'll figure it out eventually...",
    price: "$10",
    imageURL:"https://images-na.ssl-images-amazon.com/images/I/7174xUO3vjL._SL1500_.jpg"
  },

  {
    name:"Batman Mug",
    description:"This mug is for dorks.",
    price: "$10",
    imageURL:"http://g01.a.alicdn.com/kf/HTB12yRGLFXXXXawXXXXq6xXFXXXE/ALWAYS-Be-YOURSELF-BATMAN-font-b-funny-b-font-font-b-coffee-b-font-font-b.jpg"
  }
]

for (var i = 0; i < productsArray.length; i++) {
  var currentoutput =
  `<article>
    <div class="product">
      <header>
        <h1>${productsArray[i].name}</h1>
      </header>
      <img class="image" src=${productsArray[i].imageURL}>
        <div class="card">
          <h3>Description</h2>
            <p class="description">${productsArray[i].description}</p>
            <p class="price">Price: ${productsArray[i].price}</p>
        </div>
    </div>
  </article>`

  document.getElementById("output").innerHTML += currentoutput;

  console.log(productsArray[i].name);

}






