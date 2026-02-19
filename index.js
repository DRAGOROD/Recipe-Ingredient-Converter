
// UNIT CONVERSION TABLE//
const conversionTable = {
  cup: { gram: 240, ounce: 8.0, teaspoon: 48 },
  gram: { cup: 1 / 240, ounce: 0.0353, teaspoon: 0.2 },
  ounce: { cup: 0.125, gram: 28.35, teaspoon: 6 },
  teaspoon: { cup: 1 / 48, gram: 5, ounce: 0.167 },
};


// CURRIED CONVERSION FUNCTION//
const convertQuantity = (fromUnit) => (toUnit) => (quantity) => {
  const conversionRate = conversionTable[fromUnit][toUnit];
  return quantity * conversionRate;
};

// Example//
const gramsResult = convertQuantity("cup")("gram")(2);
console.log(gramsResult);


// SERVINGS ADJUSTMENT FUNCTION//
const adjustForServings = (baseQuantity) => (newServings) =>
  baseQuantity * newServings;

// Example//
const servingsResult = adjustForServings(4)(6);
console.log(servingsResult);


// FULL INGREDIENT PROCESSING//

const processIngredient = (baseQuantity, baseUnit, newUnit, newServings) => {
  const adjustedQuantity = adjustForServings(baseQuantity)(newServings);
  const convertedQuantity =
    convertQuantity(baseUnit)(newUnit)(adjustedQuantity);

  return convertedQuantity.toFixed(2); // limit decimals
};


const ingredientName = document.getElementById("ingredient");
const ingredientQuantity = document.getElementById("quantity");
const unitToConvert = document.getElementById("unit");
const numberOfServings = document.getElementById("servings");
const recipeForm = document.getElementById("recipe-form");
const resultList = document.getElementById("result-list");

// Units available for conversion//
const units = ["cup", "gram", "ounce", "teaspoon"];


// UPDATE RESULTS LIST//
const updateResultsList = () => {
  resultList.innerHTML = "";

  const ingredient = ingredientName.value.trim();
  const quantity = parseFloat(ingredientQuantity.value);
  const baseUnit = unitToConvert.value;
  const servings = parseFloat(numberOfServings.value);

  // Stop if input invalid//
  if (!ingredient || isNaN(quantity) || isNaN(servings)) return;

  // Convert into all other units//
  units.forEach((unit) => {
    if (unit !== baseUnit) {
      const converted = processIngredient(
        quantity,
        baseUnit,
        unit,
        servings
      );

      const li = document.createElement("li");
      li.textContent = `${ingredient}: ${converted} ${unit}`;
      resultList.appendChild(li);
    }
  });
};


// FORM SUBMIT//
recipeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateResultsList();
});
