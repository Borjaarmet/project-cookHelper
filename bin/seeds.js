const { createError } = require('http-errors');
const mongoose = require('mongoose');

const Recipe = require('../models/recipe-model');

mongoose.connect('mongodb://localhost:27017/project-CookHelper', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const recipes = [
  {
    recipeName: 'Tomato and Avocado Salad',
    difficulty: 'easy',
    TimeToCook: 10,
    ingredientsList: ['tomatoes', 'avocados', 'olive oil', 'salt', 'pepper'],
    Steps: [
      'Step 1: On a large plate or platter, arrange tomatoes and avocado. Drizzle with olive oil and season with salt and pepper.',
    ],
    videoLink: 'https://www.youtube.com/embed/SpI3QF_Iauc',
  },
  {
    recipeName: 'Baked sausages',
    difficulty: 'easy',
    TimeToCook: 10,
    ingredientsList: ['sausages', 'water', 'salt', 'pepper', 'garlic'],
    Steps: [
      'Step 1: Preheat oven to 350 degrees.',
      'Step 2: Place sausages into baking pan (13x9). Add water. Sprinkle with spices.',
      'Step 3: Bake uncovered for 20 minutes. Turn sausages over and return to oven for about 40 minutes more or until the sausages are a beautiful color ',
      'Step 4: Serve as you desire. ',
    ],
    videoLink: 'https://www.youtube.com/embed/8qWJNZBozvE',
  },
  {
    recipeName: 'Bacon chicken',
    difficulty: 'easy',
    TimeToCook: 45,
    ingredientsList: ['chicken', 'barbecue sauce', 'bacon'],
    Steps: [
      'Step 1: Preheat oven to 350 degrees F (175 degrees C)',
      'Step 2: Wash chicken and pat dry, then place in a 9x13 inch baking dish. Smother chicken with 1/2 of the barbecue sauce, then layer bacon slices cross-ways on top. Pour remaining 1/2 of barbecue sauce over all.',
      'Step 3: Bake at 350 degrees F (175 degrees C) for about 45 minutes or until chicken is cooked through and juices run clear. Serve one chicken breast per person with just the crispy, top pieces of bacon.',
    ],
    videoLink: 'https://www.youtube.com/embed/LmZNzj6iQCg',
  },
  {
    recipeName: 'Easy bake fish',
    difficulty: 'easy',
    TimeToCook: 35,
    ingredientsList: ['honey,', 'Dijon mustard', 'lemon', 'salmon', 'pepper'],
    Steps: [
      'Step 1: Preheat oven to 325 degrees F (165 degrees C).',
      'Step 2: In a small bowl, mix honey, mustard, and lemon juice. Spread the mixture over the salmon steaks. Season with pepper. Arrange in a medium baking dish.',
      'Step 3: Bake 20 minutes in the preheated oven, or until fish easily flakes with a fork.',
    ],
    videoLink: 'https://www.youtube.com/embed/tvnmY4ijcyI',
  },
  {
    recipeName: 'Smoked cheese ravioli',
    difficulty: 'easy',
    TimeToCook: 25,
    ingredientsList: ['raviolis', 'sour cream', 'Gouda cheese', 'parsley', 'pepper'],
    Steps: [
      'Step 1: Bring a large pot of lightly salted water to a rolling boil over high heat; stir in the frozen ravioli and return to a boil. Cook uncovered, stirring occasionally, until the ravioli float to the top and the filling is hot, 6 to 8 minutes. Drain.',
      'Meanwhile, bring the half-and-half to a simmer in a saucepan over medium heat. Whisk in the Gouda cheese until melted; season with parsley and white pepper. Pour the sauce over the cooked ravioli to serve.',
    ],
    videoLink: 'https://www.youtube.com/embed/0QmD4DOo5ko',
  },
  {
    recipeName: 'cheese omelette',
    difficulty: 'easy',
    TimeToCook: 10,
    ingredientsList: ['eggs', 'milk', 'butter', 'salt and pepper', 'Emmentaler cheese'],
    Steps: [
      'Step 1: Beat eggs in a bowl with a whisk. Add milk and season with salt and white pepper. Whisk for a few minutes until egg mixture is foamy; beating in air makes the omelette fluffy.',
      'Step 2: Melt butter in a small, nonstick skillet over medium-low heat. Pour in egg mixture and twirl skillet so bottom is evenly covered with egg. Cook for 1 minute until egg starts to set. Lift edges with a spatula and tilt the skillet so uncooked egg mixture can run towards the bottom of the skillet to set. Repeat until no visible liquid egg remains.',
      'Step 3: Carefully flip omelette and cook for another 30 seconds to 1 minute. Sprinkle Emmentaler cheese in one line in the middle of the omelette and fold omelette in half. Cook for 20 seconds, then slide omelette onto plate.',
    ],
    videoLink: 'https://www.youtube.com/embed/-ZnK6OgRqqY',
  },
  {
    recipeName: 'Spanish Gazpacho',
    difficulty: 'easy',
    TimeToCook: 20,
    ingredientsList: ['tomatoes', 'cucumber', 'peppers', 'salt and pepper', 'onions', 'garlic', 'olive oil', 'water'],
    Steps: [
      'Step 1: Combine tomatoes, cucumber, bell pepper, onion, vinegar, garlic, and salt in the bowl of a food processor; pulse until blended. Pour olive oil in slowly, with the processor running, until gazpacho is smooth. Add small amounts of cold water as needed to achieve desired consistency.',
      'Step 2: Combine tomatoes, cucumber, bell pepper, onion, vinegar, garlic, and salt in the bowl of a food processor; pulse until blended. Pour olive oil in slowly, with the processor running, until gazpacho is smooth. Add small amounts of cold water as needed to achieve desired consistency.',
    ],
    videoLink: 'https://www.youtube.com/embed/idOKFJN9wtQ',
  },
  {
    recipeName: 'pumpkin soup',
    difficulty: 'easy',
    TimeToCook: 40,
    ingredientsList: ['chicken broth', 'pumpkin', 'onions', 'salt and pepper', 'garlic', 'ginger', 'coconout milk'],
    Steps: [
      'Step 1: Heat chicken broth, pumpkin puree, onion, garlic, and Cajun seasoning to a boil in a saucepan over medium-high heat.',
      'Step 2: Reduce heat to low and simmer for 45 to 60 minutes, stirring every 15 minutes.',
      'Step 3: Reduce heat to low and simmer for 45 to 60 minutes, stirring every 15 minutes.',
    ],
    videoLink: 'https://www.youtube.com/embed/RPGBMkN-_Ys',
  },
  {
    recipeName: 'Sesame Seared Tuna',
    difficulty: 'easy',
    TimeToCook: 15,
    ingredientsList: [
      'soy sauce',
      'mirin',
      'honey',
      'sesame oil',
      'rice wine vinegar',
      'tuna',
      'sesame seeds',
      'olive oil',
    ],
    Steps: [
      'Step 1: In a small bowl, stir together the soy sauce, mirin, honey and sesame oil. Divide into two equal parts. Stir the rice vinegar into one part and set aside as a dipping sauce',
      'Step 2: Spread the sesame seeds out on a plate. Coat the tuna steaks with the remaining soy sauce mixture, then press into the sesame seeds to coat.',
      'Step 3: Heat olive oil in a cast iron skillet over high heat until very hot. Place steaks in the pan, and sear for about 30 seconds on each side. Serve with the dipping sauce and wasabi paste.',
    ],
    videoLink: 'https://www.youtube.com/embed/XTFVc4bESLY',
  },
  {
    recipeName: 'Roast Pork Loin Chop',
    difficulty: 'easy',
    TimeToCook: 120,
    ingredientsList: ['pork', 'onions', 'salt and pepper', 'garlic', 'water'],
    Steps: [
      'Step 1: Preheat oven to 350 degrees F (175 degrees C).',
      'Step 2: Place meat roasting rack in shallow baking dish or roasting pan. Place chops on rack. Salt and pepper to taste. Cover chops with onion slices. Pour water in bottom of pan, be sure it is not high enough to touch the chops. Cover with foil or tight lid and roast for one hour.',
      'Step 3: Cut into one chop to check for doneness. When chops are done all the way through, remove foil or lid and return to oven for 15 to 20 minutes to brown slightly. Watch carefully during browning.',
    ],
    videoLink: 'https://www.youtube.com/embed/6ybbclHqNhI',
  },
  {
    recipeName: 'Bacon, Egg, and Avocado Burgers',
    difficulty: 'easy',
    TimeToCook: 30,
    ingredientsList: [
      'burguer',
      'bacon',
      'onions',
      'salt and pepper',
      'Worcestire sauce',
      'cheddar cheese',
      'eggs',
      'lettuce',
      'avocados',
    ],
    Steps: [
      'Step 1: Preheat an outdoor grill for medium-high heat and lightly oil the grate. Butter each half of hamburger buns.',
      'Step 2: Place bacon in a heavy skillet and cook over medium-high heat, turning occasionally, until crisp, 10 to 12 minutes. Drain bacon slices on paper towels. Set the skillet aside, reserving grease.',
      'Step 3: Mix ground beef, Worcestershire sauce, and steak seasoning together in a large bowl; do not overmix. Form into 4 patties. Make a thumbprint in the middle of each patty to keep it from shrinking as it cooks.',
      'Step 4: Grill patties on the preheated grill until preferred doneness, about 6 minutes per side. An instant-read thermometer inserted into the center should read at least 160 degrees F (71 degrees C). Top each burger with 2 slices bacon and a Cheddar cheese slice; close the grill lid until cheese is melted, about 1 minute. Remove patties from the grill.',
      'Step 5: Place buns on the grill, buttered-side down, and cook until browned, about 1 minute. Remove from the grill. Place 1 patty on the bottom half of each bun.',
      'Step 6: Reheat the bacon grease in the skillet over medium-high heat. Crack eggs into the hot skillet and fry until whites are cooked but yolk is still runny, about 4 minutes. Immediately place 1 egg on top of each patty. Top with lettuce, onion, avocado, and remaining buns.',
    ],
    videoLink: 'https://www.youtube.com/embed/TQ2kdr-5MI0',
  },
];

Recipe.create(recipes)
  .then(() => {
    mongoose.connection.close();
  })
  .catch(error => {
    createError(error);
  });

module.exports = Recipe;
