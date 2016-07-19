
var productsArray = [
  {
    name:"Meh Mug",
    description:"Blue mountain, qui cup single origin extraction white robust variety, espresso spoon, and coffee as in plunger pot ut grinder. Viennese single shot and, doppio, wings cortado plunger pot et single origin, eu as viennese saucer as cortado. Pumpkin spice aromatic, robust, brewed doppio, foam instant dark latte macchiato affogato dark mug skinny. Ut acerbic a qui, ut to go cappuccino extra, frappuccino filter, cream brewed extra cup coffee, aged chicory aftertaste single shot cup body.",
    price: "$5",
    imageURL:"http://www.thinkgeek.com/images/products/zoom/1644_meh_mug.jpg"
  },

  {
    name:"Bitch Mug",
    description:"Blue mountain, qui cup single origin extraction white robust variety, espresso spoon, and coffee as in plunger pot ut grinder. Viennese single shot and, doppio, wings cortado plunger pot et single origin, eu as viennese saucer as cortado. Pumpkin spice aromatic, robust, brewed doppio, foam instant dark latte macchiato affogato dark mug skinny. Ut acerbic a qui, ut to go cappuccino extra, frappuccino filter, cream brewed extra cup coffee, aged chicory aftertaste single shot cup body.",
    price: "$6",
    imageURL:"http://www.idfshirts.com/picture/newproducts/tshirt/big/a53348dm01mg.jpg"
  },

  {
    name:"Llama Mug",
    description:"Blue mountain, qui cup single origin extraction white robust variety, espresso spoon, and coffee as in plunger pot ut grinder. Viennese single shot and, doppio, wings cortado plunger pot et single origin, eu as viennese saucer as cortado. Pumpkin spice aromatic, robust, brewed doppio, foam instant dark latte macchiato affogato dark mug skinny. Ut acerbic a qui, ut to go cappuccino extra, frappuccino filter, cream brewed extra cup coffee, aged chicory aftertaste single shot cup body.",
    price: "$7",
    imageURL:"http://picture.idfshirts.com/newproducts/tshirt/big/a35059dm00mg.jpg"
  },

  {
    name:"Adulting Mug",
    description:"Blue mountain, qui cup single origin extraction white robust variety, espresso spoon, and coffee as in plunger pot ut grinder. Viennese single shot and, doppio, wings cortado plunger pot et single origin, eu as viennese saucer as cortado. Pumpkin spice aromatic, robust, brewed doppio, foam instant dark latte macchiato affogato dark mug skinny. Ut acerbic a qui, ut to go cappuccino extra, frappuccino filter, cream brewed extra cup coffee, aged chicory aftertaste single shot cup body.",
    price: "$8",
    imageURL:"https://img1.etsystatic.com/140/1/12116913/il_fullxfull.923003999_pfqx.jpg"
  },

  {
    name:"Sippy Cup",
    description:"Blue mountain, qui cup single origin extraction white robust variety, espresso spoon, and coffee as in plunger pot ut grinder. Viennese single shot and, doppio, wings cortado plunger pot et single origin, eu as viennese saucer as cortado. Pumpkin spice aromatic, robust, brewed doppio, foam instant dark latte macchiato affogato dark mug skinny. Ut acerbic a qui, ut to go cappuccino extra, frappuccino filter, cream brewed extra cup coffee, aged chicory aftertaste single shot cup body.",
    price: "$3",
    imageURL:"http://assets.inhabitots.com/wp-content/uploads/2009/08/me-me-sippy-cup-11.jpg"
  },

  {
    name:"Rx Mug",
    description:"Blue mountain, qui cup single origin extraction white robust variety, espresso spoon, and coffee as in plunger pot ut grinder. Viennese single shot and, doppio, wings cortado plunger pot et single origin, eu as viennese saucer as cortado. Pumpkin spice aromatic, robust, brewed doppio, foam instant dark latte macchiato affogato dark mug skinny. Ut acerbic a qui, ut to go cappuccino extra, frappuccino filter, cream brewed extra cup coffee, aged chicory aftertaste single shot cup body.",
    price: "$10",
    imageURL:"http://www.homewetbar.com/images/prod/w-pill-bottle-coffee-mug43152.jpg"
  },

  {
    name:"Anger Mug",
    description:"Blue mountain, qui cup single origin extraction white robust variety, espresso spoon, and coffee as in plunger pot ut grinder. Viennese single shot and, doppio, wings cortado plunger pot et single origin, eu as viennese saucer as cortado. Pumpkin spice aromatic, robust, brewed doppio, foam instant dark latte macchiato affogato dark mug skinny. Ut acerbic a qui, ut to go cappuccino extra, frappuccino filter, cream brewed extra cup coffee, aged chicory aftertaste single shot cup body.",
    price: "$10",
    imageURL:"https://images-na.ssl-images-amazon.com/images/I/7174xUO3vjL._SL1500_.jpg"
  },

  {
    name:"Batman Mug",
    description:"Blue mountain, qui cup single origin extraction white robust variety, espresso spoon, and coffee as in plunger pot ut grinder. Viennese single shot and, doppio, wings cortado plunger pot et single origin, eu as viennese saucer as cortado. Pumpkin spice aromatic, robust, brewed doppio, foam instant dark latte macchiato affogato dark mug skinny. Ut acerbic a qui, ut to go cappuccino extra, frappuccino filter, cream brewed extra cup coffee, aged chicory aftertaste single shot cup body.",
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
          <p class="description">Description <br><br> ${productsArray[i].description}</p>
          <p class="price">Price: ${productsArray[i].price}</p>
        </div>
    </div>
  </article>`

  document.getElementById("output").innerHTML += currentoutput;

  console.log(productsArray[i].name);

}






