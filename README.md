The Recipe Ingredient Converter helps users convert ingredient quantities between different measurement units and adjust them based on the number of servings. Users enter an ingredient name, quantity, unit, and desired servings, and the app instantly calculates equivalent amounts in other supported units.

**⭐Project Link:-** https://dragorod.github.io/Recipe-Ingredient-Converter/


**🛠 Toolkits Used**

HTML
CSS
JavaScript


**⚙ Development Process**

Designed the form layout and result display structure using semantic HTML.
Styled the interface with CSS variables and a centered card layout.
Built a unit conversion table to define relationships between measurement units.
Implemented curried functions for:
Unit conversion
Serving adjustment
Combined logic into a processing function that:
Adjusts quantity for servings
Converts into all other units
Used DOM manipulation to dynamically display results.
Handled form submission and prevented page reload for smooth interaction.



**🧠 What I Learned**

How to use currying for reusable and composable functions
Structuring conversion logic using a lookup table
Handling form input and validation in JavaScript
Updating UI dynamically with DOM manipulation
Separating concerns between structure, style, and logic
Improving code readability with small focused functions



**🚀 Possible Improvements**

Add more units like milliliters, liters, pounds, tablespoons, etc.
Support ingredient density (e.g., flour vs sugar conversions)
Allow selecting a target unit instead of converting to all
Save previous conversions (local storage)
Add delete or edit result items
Improve mobile UI spacing
Add unit auto-detection or suggestions
Provide rounding control (decimal precision)
Convert into a component-based framework (like React)
Add accessibility enhancements (ARIA labels, screen reader support)
