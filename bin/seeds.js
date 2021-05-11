const mongoose = require('mongoose');

const Recipe = require('../models/recipe-model');

mongoose
  .connect('mongodb://localhost:27017/project-CookHelper', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

const recipes = [
    {
        recipeName: 'Tomato and Avocado Salad',
        difficulty: 'easy',
        TimeToCook: 10,
        ingredientsList: ['tomatoes', 'avocado', 'olive oil','salt','pepper'],
        Steps: ['Step 1: On a large plate or platter, arrange tomatoes and avocado. Drizzle with olive oil and season with salt and pepper.'],
        
    },
    {
        recipeName: 'Baked sausages',
        difficulty: 'easy',
        TimeToCook: 10,
        ingredientsList: ['sausages(any Kind)', 'water', 'salt', 'pepper', 'garlic'],
        Steps: ['Step 1: Preheat oven to 350 degrees.', 'Step 2: Place sausages into baking pan (13x9). Add water. Sprinkle with spices.', 'Step 3: Bake uncovered for 20 minutes. Turn sausages over and return to oven for about 40 minutes more or until the sausages are a beautiful color ', 'Step 4: Serve as you desire. '], 
       
    },
    {
        recipeName: 'Bacon chicken',
        difficulty: 'easy',
        TimeToCook: 45,
        ingredientsList: ['chicken breast', 'bottle honey barbecue sauce','sliced bacon'],
        Steps: ['Step 1: Preheat oven to 350 degrees F (175 degrees C)','Step 2: Wash chicken and pat dry, then place in a 9x13 inch baking dish. Smother chicken with 1/2 of the barbecue sauce, then layer bacon slices cross-ways on top. Pour remaining 1/2 of barbecue sauce over all.','Step 3: Bake at 350 degrees F (175 degrees C) for about 45 minutes or until chicken is cooked through and juices run clear. Serve one chicken breast per person with just the crispy, top pieces of bacon.']
    },
    {
        recipeName: 'Easy bake fish',
        difficulty: 'easy',
        TimeToCook: 35,
        ingredientsList: ['honey,','Dijon mustard','lemon juice','salmon steaks','pepper'],
        Steps: ['Step 1: Preheat oven to 325 degrees F (165 degrees C).','Step 2: In a small bowl, mix honey, mustard, and lemon juice. Spread the mixture over the salmon steaks. Season with pepper. Arrange in a medium baking dish.','Step 3: Bake 20 minutes in the preheated oven, or until fish easily flakes with a fork.'],
        
    },
    {
        recipeName: 'Smoked cheese ravioli',
        difficulty: 'easy',
        TimeToCook: 25,
        ingredientsList: ['package frozen ravioli','half-and-half cream','smoked Gouda cheese','parsley','pepper'],
        Steps: ['Step 1: Bring a large pot of lightly salted water to a rolling boil over high heat; stir in the frozen ravioli and return to a boil. Cook uncovered, stirring occasionally, until the ravioli float to the top and the filling is hot, 6 to 8 minutes. Drain.','Meanwhile, bring the half-and-half to a simmer in a saucepan over medium heat. Whisk in the Gouda cheese until melted; season with parsley and white pepper. Pour the sauce over the cooked ravioli to serve.'],
        
    },
    {
        recipeName: 'Smoked cheese ravioli',
        difficulty: 'easy',
        TimeToCook: 25,
        ingredientsList: ['package frozen ravioli','half-and-half cream','smoked Gouda cheese','parsley','pepper'],
        Steps: ['Step 1: Bring a large pot of lightly salted water to a rolling boil over high heat; stir in the frozen ravioli and return to a boil. Cook uncovered, stirring occasionally, until the ravioli float to the top and the filling is hot, 6 to 8 minutes. Drain.','Meanwhile, bring the half-and-half to a simmer in a saucepan over medium heat. Whisk in the Gouda cheese until melted; season with parsley and white pepper. Pour the sauce over the cooked ravioli to serve.'],
        
    }
];

Recipe.create(recipes)
.then((dataFromDB)=> {
console.log( 'recipes created: ', dataFromDB.length)
mongoose.connection.close();
})
.catch((error)=> {
console.log('An error ocurred while connecting',error)
});


module.exports = Recipe;