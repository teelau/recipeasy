import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
  AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements';
import Text from './MyAppText';
import { platformModule } from './platformModule';

export default class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      url: platformModule(),
    };
  }

  async componentDidMount() {
    this.getRecipe();
    const val = await AsyncStorage.getItem('userId');
    this.setState({ id: val });
  }

  async save() {
    if (!this.state.id) {
      alert('no id');
      return;
    }

    const recipe = this.state.recipe;
    const body = {
      name: recipe.id,
      pic: recipe.images[0].hostedLargeUrl || recipe.images[0].hostedMediumUrl || recipe.images[0].hostedSmallUrl,
      url: recipe.source.sourceRecipeUrl
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    };

    try {
      const res = await fetch(`http://${this.state.url}/api/users/${this.state.id}/favourites`, options);
      if (res.status !== 200) {
        alert('Error saving.');
        return;
      }

      alert('Successfully saved.');
    } catch (e) {
      alert(e);
    }
  }

  async getRecipe() {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Yummly-App-ID': '133899ea',
        'X-Yummly-App-Key': '9d45e7e56426c6909e8aa11ea431fcef',
      }
    };

    const recipeId = this.props.recipes.id;
    const response = await fetch(`http://api.yummly.com/v1/api/recipe/${recipeId}`, options);
    const res = await response.json();
    this.setState({ recipe: res });
  }

  getNutrients() {
    const mockRecipe = (this.props.recipes && this.props.recipes.recipe) || mockRecipe2;
    let idx = 0;
    let nutrients = [];
    for (let nutrient in mockRecipe.totalNutrients) {
      let n = mockRecipe.totalNutrients[nutrient];
      nutrients.push(
        <Text key={idx} style={s.item}>{n.label} {Math.floor(n.quantity)} {n.unit}</Text>
      );
      idx++;
    }

    return nutrients;
  }

  render() {
    const mockRecipe = this.state.recipe || mockRecipe2;
    const imgSrc = mockRecipe.images[0].hostedLargeUrl || mockRecipe.images[0].hostedMediumUrl || mockRecipe.images[0].hostedSmallUrl;
    return (
      <ScrollView style={s.container}>
        
        <Image
          style={s.img}
          source={{ uri: mockRecipe.images[0].hostedLargeUrl }}
        />
        <View style= { {margin: 10}}>
        <TouchableOpacity style={{  flexDirection: 'column', margin:5 }} >
          <Text style={s.title}>{mockRecipe.name}</Text>
          <Icon onPress={() => this.save()} name='favorite' color='red' raised='true'/>
        </TouchableOpacity>
        <Text style={s.section}>{mockRecipe.yield || '0 servings'}</Text>

        <View style={s.ingredientHeader}>
          <Text style={s.section}>Ingredients</Text>
        </View>
        {mockRecipe.ingredientLines.map((ingredient, index) => <Text style={s.item} key={index}>{ingredient}</Text>)}
        <Text style={s.section}>Preparation</Text>
        <View>
          <Text style={s.item}>1. Roast dat chicken</Text>
          <Text style={s.item}>1. Roast dat chicken</Text>
          <Text style={s.item}>1. Roast dat chicken</Text>
          <Text style={s.item}>1. Roast dat chicken</Text>
          <Text style={s.item}>1. Roast dat chicken</Text>
          <Text style={s.item}>1. Roast dat chicken</Text>
        </View>
        {/* <Text style={s.section}>Nutritional Facts</Text> */}
        <View>
          {/* { this.getNutrients() } */}
        </View>
        </View>
      </ScrollView>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  titleContainer: {
    margin:'2px',
    flex: 1,
    flexDirection:'column',

  },
  title: {
    fontSize: 24,
  },
  img: {
    height: 220,
    flexDirection: 'row',
  },
  ingredientHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    marginTop: 15,
    marginLeft: 8,
    marginRight: 8,
    fontSize: 14,
  },
  item: {
    marginTop: 4,
    marginLeft: 8,
    marginRight: 8,
    fontSize: 16,
  }
});

const mockRecipe2 = {
  "attribution": {
    "html": "<a href='http://www.yummly.com/recipe/Hot-Turkey-Salad-Sandwiches-Allrecipes'>Hot Turkey Salad Sandwiches recipe</a> information powered by <img src='http://static.yummly.com/api-logo.png'/>",
    "url": "http://www.yummly.com/recipe/Hot-Turkey-Salad-Sandwiches-Allrecipes",
    "text": "Hot Turkey Salad Sandwiches recipes: information powered by Yummly",
    "logo": "http://static.yummly.com/api-logo.png"
  },
  "ingredientLines": [
    "2 cups diced cooked turkey",
    "2 celery ribs, diced",
    "1 small onion, diced",
    "2 hard-cooked eggs, chopped",
    "3/4 cup mayonnaise",
    "1/2 teaspoon salt",
    "1/4 teaspoon pepper",
    "6 hamburger buns, split"
  ],
  "flavors": {
    "Salty": 0.004261637106537819,
    "Meaty": 0.0019220244139432907,
    "Piquant": 0,
    "Bitter": 0.006931612268090248,
    "Sour": 0.009972159750759602,
    "Sweet": 0.0032512755133211613
  },
  "nutritionEstimates": [
    {
      "attribute": "ENERC_KCAL",
      "description": "Energy",
      "value": 317.4,
      "unit": {
        "name": "calorie",
        "abbreviation": "kcal",
        "plural": "calories",
        "pluralAbbreviation": "kcal"
      }
    },
    {
      "attribute": "FAT",
      "description": "Total lipid (fat)",
      "value": 13.97,
      "unit": {
        "name": "gram",
        "abbreviation": "g",
        "plural": "grams",
        "pluralAbbreviation": "grams"
      }
    },
    {
      "attribute": "FASAT",
      "description": "Fatty acids, total saturated",
      "value": 2.7,
      "unit": {
        "name": "gram",
        "abbreviation": "g",
        "plural": "grams",
        "pluralAbbreviation": "grams"
      }
    },
    {
      "attribute": "CHOLE",
      "description": "Cholesterol",
      "value": 0.11,
      "unit": {
        "name": "gram",
        "abbreviation": "g",
        "plural": "grams",
        "pluralAbbreviation": "grams"
      }
    },
    {
      "attribute": "NA",
      "description": "Sodium, Na",
      "value": 0.66,
      "unit": {
        "name": "gram",
        "abbreviation": "g",
        "plural": "grams",
        "pluralAbbreviation": "grams"
      }
    },
    {
      "attribute": "K",
      "description": "Potassium, K",
      "value": 0.2,
      "unit": {
        "name": "gram",
        "abbreviation": "g",
        "plural": "grams",
        "pluralAbbreviation": "grams"
      }
    },
    {
      "attribute": "CHOCDF",
      "description": "Carbohydrate, by difference",
      "value": 29.92,
      "unit": {
        "name": "gram",
        "abbreviation": "g",
        "plural": "grams",
        "pluralAbbreviation": "grams"
      }
    },
    {
      "attribute": "FIBTG",
      "description": "Fiber, total dietary",
      "value": 1.3,
      "unit": {
        "name": "gram",
        "abbreviation": "g",
        "plural": "grams",
        "pluralAbbreviation": "grams"
      }
    },
    {
      "attribute": "SUGAR",
      "description": "Sugars, total",
      "value": 5.25,
      "unit": {
        "name": "gram",
        "abbreviation": "g",
        "plural": "grams",
        "pluralAbbreviation": "grams"
      }
    },
    {
      "attribute": "PROCNT",
      "description": "Protein",
      "value": 17.6,
      "unit": {
        "name": "gram",
        "abbreviation": "g",
        "plural": "grams",
        "pluralAbbreviation": "grams"
      }
    },
    {
      "attribute": "VITA_IU",
      "description": "Vitamin A, IU",
      "value": 159.13,
      "unit": {
        "name": "IU",
        "abbreviation": "IU",
        "plural": "IU",
        "pluralAbbreviation": "IU"
      }
    },
    {
      "attribute": "VITC",
      "description": "Vitamin C, total ascorbic acid",
      "value": 0,
      "unit": {
        "name": "gram",
        "abbreviation": "g",
        "plural": "grams",
        "pluralAbbreviation": "grams"
      }
    },
    {
      "attribute": "CA",
      "description": "Calcium, Ca",
      "value": 0.08,
      "unit": {
        "name": "gram",
        "abbreviation": "g",
        "plural": "grams",
        "pluralAbbreviation": "grams"
      }
    },
    {
      "attribute": "FE",
      "description": "Iron, Fe",
      "value": 0,
      "unit": {
        "name": "gram",
        "abbreviation": "g",
        "plural": "grams",
        "pluralAbbreviation": "grams"
      }
    }
  ],
  "images": [
    {
      "hostedLargeUrl": "http://i2.yummly.com/Hot-Turkey-Salad-Sandwiches-Allrecipes.l.png",
      "hostedSmallUrl": "http://i2.yummly.com/Hot-Turkey-Salad-Sandwiches-Allrecipes.s.png"
    }
  ],
  "name": "Hot Turkey Salad Sandwiches",
  "yield": "6 servings",
  "totalTime": "30 Min",
  "attributes": {
    "holiday": [
      "Christmas",
      "Thanksgiving"
    ],
    "cuisine": [
      "Italian",
      "Soul food",
      "American"
    ]
  },
  "totalTimeInSeconds": 1800,
  "rating": 4.44,
  "numberOfServings": 6,
  "source": {
    "sourceRecipeUrl": "http://allrecipes.com/Recipe/hot-turkey-salad-sandwiches/detail.aspx",
    "sourceSiteUrl": "http://www.allrecipes.com",
    "sourceDisplayName": "AllRecipes"
  },
  "id": "Hot-Turkey-Salad-Sandwiches-Allrecipes"
}