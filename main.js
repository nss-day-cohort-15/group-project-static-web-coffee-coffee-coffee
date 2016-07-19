
var productsArray = [
  {
    name:"Small Mug",
    description:"Blue mountain, qui cup single origin extraction white robust variety, espresso spoon, and coffee as in plunger pot ut grinder. Viennese single shot and, doppio, wings cortado plunger pot et single origin, eu as viennese saucer as cortado. Pumpkin spice aromatic, robust, brewed doppio, foam instant dark latte macchiato affogato dark mug skinny. Ut acerbic a qui, ut to go cappuccino extra, frappuccino filter, cream brewed extra cup coffee, aged chicory aftertaste single shot cup body.",
    price: "$5",
    imageURL:"http://www.manrepeller.com/wp-content/uploads/2013/07/coffee-cup-01.jpg"
  },

  {
    name:"Med Mug",
    description:"Blue mountain, qui cup single origin extraction white robust variety, espresso spoon, and coffee as in plunger pot ut grinder. Viennese single shot and, doppio, wings cortado plunger pot et single origin, eu as viennese saucer as cortado. Pumpkin spice aromatic, robust, brewed doppio, foam instant dark latte macchiato affogato dark mug skinny. Ut acerbic a qui, ut to go cappuccino extra, frappuccino filter, cream brewed extra cup coffee, aged chicory aftertaste single shot cup body.",
    price: "$6",
    imageURL:""
  },

  {
    name:"Large Mug",
    description:"Blue mountain, qui cup single origin extraction white robust variety, espresso spoon, and coffee as in plunger pot ut grinder. Viennese single shot and, doppio, wings cortado plunger pot et single origin, eu as viennese saucer as cortado. Pumpkin spice aromatic, robust, brewed doppio, foam instant dark latte macchiato affogato dark mug skinny. Ut acerbic a qui, ut to go cappuccino extra, frappuccino filter, cream brewed extra cup coffee, aged chicory aftertaste single shot cup body.",
    price: "$7",
    imageURL:""
  },

  {
    name:"Travel Mug",
    description:"Blue mountain, qui cup single origin extraction white robust variety, espresso spoon, and coffee as in plunger pot ut grinder. Viennese single shot and, doppio, wings cortado plunger pot et single origin, eu as viennese saucer as cortado. Pumpkin spice aromatic, robust, brewed doppio, foam instant dark latte macchiato affogato dark mug skinny. Ut acerbic a qui, ut to go cappuccino extra, frappuccino filter, cream brewed extra cup coffee, aged chicory aftertaste single shot cup body.",
    price: "$8",
    imageURL:""
  },

  {
    name:"Sippy Cup",
    description:"Blue mountain, qui cup single origin extraction white robust variety, espresso spoon, and coffee as in plunger pot ut grinder. Viennese single shot and, doppio, wings cortado plunger pot et single origin, eu as viennese saucer as cortado. Pumpkin spice aromatic, robust, brewed doppio, foam instant dark latte macchiato affogato dark mug skinny. Ut acerbic a qui, ut to go cappuccino extra, frappuccino filter, cream brewed extra cup coffee, aged chicory aftertaste single shot cup body.",
    price: "$3",
    imageURL:""
  },

  {
    name:"Yeti Mug",
    description:"Blue mountain, qui cup single origin extraction white robust variety, espresso spoon, and coffee as in plunger pot ut grinder. Viennese single shot and, doppio, wings cortado plunger pot et single origin, eu as viennese saucer as cortado. Pumpkin spice aromatic, robust, brewed doppio, foam instant dark latte macchiato affogato dark mug skinny. Ut acerbic a qui, ut to go cappuccino extra, frappuccino filter, cream brewed extra cup coffee, aged chicory aftertaste single shot cup body.",
    price: "$10",
    imageURL:""
  }
]

for (var i = 0; i < productsArray.length; i++) {
  var currentoutput = `<article>
    <div class="card">
      <h1>${productsArray[i].name}</h1>
        <ul>
          <li class="description">${productsArray[i].description}</li>
          <li class="price">${productsArray[i].price}</li>
          <li class="image"><img src=${productsArray[i].imageURL}></li>
        </ul>
    </div>
  </article>`

  document.getElementById("output").innerHTML += currentoutput;

  console.log(productsArray[i].name);

}

// console.log("hello");





