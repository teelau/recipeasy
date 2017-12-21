import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity } from 'react-native';

export default class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  async save() {
    const body = {
      name: (this.props.recipes && this.props.recipes.recipe && this.props.recipes.recipe.label) || mockRecipe2.label,
      pic: (this.props.recipes && this.props.recipes.recipe && this.props.recipes.recipe.image) || mockRecipe2.image,
      url: (this.props.recipes && this.props.recipes.recipe && this.props.recipes.recipe.url) || mockRecipe2.url,
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    };

    try {
      // need to acquire user id from somewhere...
      // on login, should receive user id and store it
      const id = 3;
      const res = await fetch(`http://10.0.2.2:3000/api/users/${id}/favourites`, options);
    } catch (e) {
      // error handling
      alert(e);
    }
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
    const mockRecipe = this.props.recipes || mockRecipe2;
    return (
      <ScrollView style={s.container}>
        <TouchableOpacity style={{ alignSelf: 'center', flexDirection: 'row' }} onPress={() => this.save()}>
          <Text style={s.title}>{mockRecipe.recipeName}</Text>
          <Text style={{ alignSelf: 'center' }}>{String.fromCharCode(0x2665)}</Text>
        </TouchableOpacity>
        <Image
          style={s.img}
          source={{uri: mockRecipe.smallImageUrls[0]}}
        />
        <View style={s.ingredientHeader}>
          <Text style={s.section}>Ingredients</Text>
          <Text style={s.section}>Servings: {mockRecipe.yield || 0}</Text>
        </View>
        { mockRecipe.ingredients.map((ingredient, index) => <Text style={s.item} key={index}>{ingredient}</Text>) }
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
  title: {
    fontSize: 24,
    alignSelf: 'center',
  },
  img: {
    height: 220,
    flexDirection: 'row',
  },
  ingredientHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  section: {
    margin: 5,
    fontSize: 20,
  },
  item: {
    margin: 8,
    fontSize: 16,
  }
});

const mockRecipe2 = {
  "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_56008870a1e326be7851141fc49bd53e",
  "label" : "Roast Chicken",
  "image" : "https://www.edamam.com/web-img/c24/c24a86f98a8cc1f13f795bdba2dae614.jpg",
  "source" : "Epicurious",
  "url" : "http://www.epicurious.com/recipes/food/views/Roast-Chicken-394676",
  "shareAs" : "http://www.edamam.com/recipe/roast-chicken-56008870a1e326be7851141fc49bd53e/chicken/alcohol-free/591-722-cal",
  "yield" : 4.0,
  "dietLabels" : [ "Low-Carb" ],
  "healthLabels" : [ "Sugar-Conscious", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free" ],
  "cautions" : [ ],
  "ingredientLines" : [ "1 tablespoon kosher salt", "1 whole 4-pound chicken, giblets reserved for another use", "1/4 cup (1/2 stick) unsalted butter, melted" ],
  "ingredients" : [ {
    "text" : "1 tablespoon kosher salt",
    "weight" : 14.772500991821289
  }, {
    "text" : "1 whole 4-pound chicken, giblets reserved for another use",
    "weight" : 920.0
  }, {
    "text" : "1/4 cup (1/2 stick) unsalted butter, melted",
    "weight" : 56.75
  } ],
  "calories" : 2384.8974999999996,
  "totalWeight" : 980.9328012023324,
  "totalNutrients" : {
    "ENERC_KCAL" : {
      "label" : "Energy",
      "quantity" : 2384.8974999999996,
      "unit" : "kcal"
    },
    "FAT" : {
      "label" : "Fat",
      "quantity" : 184.58192499999998,
      "unit" : "g"
    },
    "FASAT" : {
      "label" : "Saturated",
      "quantity" : 68.80333999999999,
      "unit" : "g"
    },
    "FATRN" : {
      "label" : "Trans",
      "quantity" : 2.752665,
      "unit" : "g"
    },
    "FAMS" : {
      "label" : "Monounsaturated",
      "quantity" : 69.3374175,
      "unit" : "g"
    },
    "FAPU" : {
      "label" : "Polyunsaturated",
      "quantity" : 31.4429025,
      "unit" : "g"
    },
    "CHOCDF" : {
      "label" : "Carbs",
      "quantity" : 0.03405,
      "unit" : "g"
    },
    "SUGAR" : {
      "label" : "Sugars",
      "quantity" : 0.03405,
      "unit" : "g"
    },
    "PROCNT" : {
      "label" : "Protein",
      "quantity" : 171.602375,
      "unit" : "g"
    },
    "CHOLE" : {
      "label" : "Cholesterol",
      "quantity" : 812.0125,
      "unit" : "mg"
    },
    "NA" : {
      "label" : "Sodium",
      "quantity" : 6375.768434410095,
      "unit" : "mg"
    },
    "CA" : {
      "label" : "Calcium",
      "quantity" : 118.3654002380371,
      "unit" : "mg"
    },
    "MG" : {
      "label" : "Magnesium",
      "quantity" : 185.2827250099182,
      "unit" : "mg"
    },
    "K" : {
      "label" : "Potassium",
      "quantity" : 1753.6018000793456,
      "unit" : "mg"
    },
    "FE" : {
      "label" : "Iron",
      "quantity" : 8.34009925327301,
      "unit" : "mg"
    },
    "ZN" : {
      "label" : "Zinc",
      "quantity" : 12.117847500991822,
      "unit" : "mg"
    },
    "P" : {
      "label" : "Phosphorus",
      "quantity" : 1366.0199999999998,
      "unit" : "mg"
    },
    "VITA_RAE" : {
      "label" : "Vitamin A",
      "quantity" : 765.37,
      "unit" : "µg"
    },
    "VITC" : {
      "label" : "Vitamin C",
      "quantity" : 14.719999999999999,
      "unit" : "mg"
    },
    "THIA" : {
      "label" : "Thiamin (B1)",
      "quantity" : 0.5548375,
      "unit" : "mg"
    },
    "RIBF" : {
      "label" : "Riboflavin (B2)",
      "quantity" : 1.123295,
      "unit" : "mg"
    },
    "NIA" : {
      "label" : "Niacin (B3)",
      "quantity" : 62.59303499999999,
      "unit" : "mg"
    },
    "VITB6A" : {
      "label" : "Vitamin B6",
      "quantity" : 3.2217024999999997,
      "unit" : "mg"
    },
    "FOLDFE" : {
      "label" : "Folate (Equivalent)",
      "quantity" : 56.902499999999996,
      "unit" : "µg"
    },
    "VITB12" : {
      "label" : "Vitamin B12",
      "quantity" : 2.9484749999999997,
      "unit" : "µg"
    },
    "VITD" : {
      "label" : "Vitamin D",
      "quantity" : 126.05,
      "unit" : "IU"
    },
    "TOCPHA" : {
      "label" : "Vitamin E",
      "quantity" : 4.0766,
      "unit" : "mg"
    },
    "VITK1" : {
      "label" : "Vitamin K",
      "quantity" : 17.7725,
      "unit" : "µg"
    }
  },
  "totalDaily" : {
    "ENERC_KCAL" : {
      "label" : "Energy",
      "quantity" : 119.24487499999998,
      "unit" : "%"
    },
    "FAT" : {
      "label" : "Fat",
      "quantity" : 283.97219230769224,
      "unit" : "%"
    },
    "FASAT" : {
      "label" : "Saturated",
      "quantity" : 344.01669999999996,
      "unit" : "%"
    },
    "CHOCDF" : {
      "label" : "Carbs",
      "quantity" : 0.011349999999999999,
      "unit" : "%"
    },
    "PROCNT" : {
      "label" : "Protein",
      "quantity" : 343.20475,
      "unit" : "%"
    },
    "CHOLE" : {
      "label" : "Cholesterol",
      "quantity" : 270.67083333333335,
      "unit" : "%"
    },
    "NA" : {
      "label" : "Sodium",
      "quantity" : 265.65701810042066,
      "unit" : "%"
    },
    "CA" : {
      "label" : "Calcium",
      "quantity" : 11.836540023803709,
      "unit" : "%"
    },
    "MG" : {
      "label" : "Magnesium",
      "quantity" : 46.32068125247955,
      "unit" : "%"
    },
    "K" : {
      "label" : "Potassium",
      "quantity" : 50.10290857369559,
      "unit" : "%"
    },
    "FE" : {
      "label" : "Iron",
      "quantity" : 46.333884740405615,
      "unit" : "%"
    },
    "ZN" : {
      "label" : "Zinc",
      "quantity" : 80.78565000661214,
      "unit" : "%"
    },
    "P" : {
      "label" : "Phosphorus",
      "quantity" : 195.14571428571423,
      "unit" : "%"
    },
    "VITA_RAE" : {
      "label" : "Vitamin A",
      "quantity" : 85.0411111111111,
      "unit" : "%"
    },
    "VITC" : {
      "label" : "Vitamin C",
      "quantity" : 24.533333333333335,
      "unit" : "%"
    },
    "THIA" : {
      "label" : "Thiamin (B1)",
      "quantity" : 36.98916666666667,
      "unit" : "%"
    },
    "RIBF" : {
      "label" : "Riboflavin (B2)",
      "quantity" : 66.07617647058824,
      "unit" : "%"
    },
    "NIA" : {
      "label" : "Niacin (B3)",
      "quantity" : 312.96517499999993,
      "unit" : "%"
    },
    "VITB6A" : {
      "label" : "Vitamin B6",
      "quantity" : 161.08512499999998,
      "unit" : "%"
    },
    "FOLDFE" : {
      "label" : "Folate (Equivalent)",
      "quantity" : 14.225625,
      "unit" : "%"
    },
    "VITB12" : {
      "label" : "Vitamin B12",
      "quantity" : 49.14124999999999,
      "unit" : "%"
    },
    "VITD" : {
      "label" : "Vitamin D",
      "quantity" : 31.5125,
      "unit" : "%"
    },
    "TOCPHA" : {
      "label" : "Vitamin E",
      "quantity" : 20.383000000000003,
      "unit" : "%"
    },
    "VITK1" : {
      "label" : "Vitamin K",
      "quantity" : 22.215625,
      "unit" : "%"
    }
  },
  "digest" : [ {
    "label" : "Fat",
    "tag" : "FAT",
    "schemaOrgTag" : "fatContent",
    "total" : 184.58192499999998,
    "hasRDI" : true,
    "daily" : 283.97219230769224,
    "unit" : "g",
    "sub" : [ {
      "label" : "Saturated",
      "tag" : "FASAT",
      "schemaOrgTag" : "saturatedFatContent",
      "total" : 68.80333999999999,
      "hasRDI" : true,
      "daily" : 344.01669999999996,
      "unit" : "g"
    }, {
      "label" : "Trans",
      "tag" : "FATRN",
      "schemaOrgTag" : "transFatContent",
      "total" : 2.752665,
      "hasRDI" : false,
      "daily" : 0.0,
      "unit" : "g"
    }, {
      "label" : "Monounsaturated",
      "tag" : "FAMS",
      "schemaOrgTag" : null,
      "total" : 69.3374175,
      "hasRDI" : false,
      "daily" : 0.0,
      "unit" : "g"
    }, {
      "label" : "Polyunsaturated",
      "tag" : "FAPU",
      "schemaOrgTag" : null,
      "total" : 31.4429025,
      "hasRDI" : false,
      "daily" : 0.0,
      "unit" : "g"
    } ]
  }, {
    "label" : "Carbs",
    "tag" : "CHOCDF",
    "schemaOrgTag" : "carbohydrateContent",
    "total" : 0.03405,
    "hasRDI" : true,
    "daily" : 0.011349999999999999,
    "unit" : "g",
    "sub" : [ {
      "label" : "Carbs (net)",
      "tag" : "CHOCDF.net",
      "schemaOrgTag" : null,
      "total" : 0.03405,
      "hasRDI" : false,
      "daily" : 0.0,
      "unit" : "g"
    }, {
      "label" : "Fiber",
      "tag" : "FIBTG",
      "schemaOrgTag" : "fiberContent",
      "total" : 0.0,
      "hasRDI" : false,
      "daily" : 0.0,
      "unit" : "g"
    }, {
      "label" : "Sugars",
      "tag" : "SUGAR",
      "schemaOrgTag" : "sugarContent",
      "total" : 0.03405,
      "hasRDI" : false,
      "daily" : 0.0,
      "unit" : "g"
    }, {
      "label" : "Sugars, added",
      "tag" : "SUGAR.added",
      "schemaOrgTag" : null,
      "total" : 0.0,
      "hasRDI" : false,
      "daily" : 0.0,
      "unit" : "g"
    } ]
  }, {
    "label" : "Protein",
    "tag" : "PROCNT",
    "schemaOrgTag" : "proteinContent",
    "total" : 171.602375,
    "hasRDI" : true,
    "daily" : 343.20475,
    "unit" : "g"
  }, {
    "label" : "Cholesterol",
    "tag" : "CHOLE",
    "schemaOrgTag" : "cholesterolContent",
    "total" : 812.0125,
    "hasRDI" : true,
    "daily" : 270.67083333333335,
    "unit" : "mg"
  }, {
    "label" : "Sodium",
    "tag" : "NA",
    "schemaOrgTag" : "sodiumContent",
    "total" : 6375.768434410095,
    "hasRDI" : true,
    "daily" : 265.65701810042066,
    "unit" : "mg"
  }, {
    "label" : "Calcium",
    "tag" : "CA",
    "schemaOrgTag" : null,
    "total" : 118.3654002380371,
    "hasRDI" : true,
    "daily" : 11.836540023803709,
    "unit" : "mg"
  }, {
    "label" : "Magnesium",
    "tag" : "MG",
    "schemaOrgTag" : null,
    "total" : 185.2827250099182,
    "hasRDI" : true,
    "daily" : 46.32068125247955,
    "unit" : "mg"
  }, {
    "label" : "Potassium",
    "tag" : "K",
    "schemaOrgTag" : null,
    "total" : 1753.6018000793456,
    "hasRDI" : true,
    "daily" : 50.10290857369559,
    "unit" : "mg"
  }, {
    "label" : "Iron",
    "tag" : "FE",
    "schemaOrgTag" : null,
    "total" : 8.34009925327301,
    "hasRDI" : true,
    "daily" : 46.333884740405615,
    "unit" : "mg"
  }, {
    "label" : "Zinc",
    "tag" : "ZN",
    "schemaOrgTag" : null,
    "total" : 12.117847500991822,
    "hasRDI" : true,
    "daily" : 80.78565000661214,
    "unit" : "mg"
  }, {
    "label" : "Phosphorus",
    "tag" : "P",
    "schemaOrgTag" : null,
    "total" : 1366.0199999999998,
    "hasRDI" : true,
    "daily" : 195.14571428571423,
    "unit" : "mg"
  }, {
    "label" : "Vitamin A",
    "tag" : "VITA_RAE",
    "schemaOrgTag" : null,
    "total" : 765.37,
    "hasRDI" : true,
    "daily" : 85.0411111111111,
    "unit" : "µg"
  }, {
    "label" : "Vitamin C",
    "tag" : "VITC",
    "schemaOrgTag" : null,
    "total" : 14.719999999999999,
    "hasRDI" : true,
    "daily" : 24.533333333333335,
    "unit" : "mg"
  }, {
    "label" : "Thiamin (B1)",
    "tag" : "THIA",
    "schemaOrgTag" : null,
    "total" : 0.5548375,
    "hasRDI" : true,
    "daily" : 36.98916666666667,
    "unit" : "mg"
  }, {
    "label" : "Riboflavin (B2)",
    "tag" : "RIBF",
    "schemaOrgTag" : null,
    "total" : 1.123295,
    "hasRDI" : true,
    "daily" : 66.07617647058824,
    "unit" : "mg"
  }, {
    "label" : "Niacin (B3)",
    "tag" : "NIA",
    "schemaOrgTag" : null,
    "total" : 62.59303499999999,
    "hasRDI" : true,
    "daily" : 312.96517499999993,
    "unit" : "mg"
  }, {
    "label" : "Vitamin B6",
    "tag" : "VITB6A",
    "schemaOrgTag" : null,
    "total" : 3.2217024999999997,
    "hasRDI" : true,
    "daily" : 161.08512499999998,
    "unit" : "mg"
  }, {
    "label" : "Folate (Equivalent)",
    "tag" : "FOLDFE",
    "schemaOrgTag" : null,
    "total" : 56.902499999999996,
    "hasRDI" : true,
    "daily" : 14.225625,
    "unit" : "µg"
  }, {
    "label" : "Vitamin B12",
    "tag" : "VITB12",
    "schemaOrgTag" : null,
    "total" : 2.9484749999999997,
    "hasRDI" : true,
    "daily" : 49.14124999999999,
    "unit" : "µg"
  }, {
    "label" : "Vitamin D",
    "tag" : "VITD",
    "schemaOrgTag" : null,
    "total" : 126.05,
    "hasRDI" : true,
    "daily" : 31.5125,
    "unit" : "µg"
  }, {
    "label" : "Vitamin E",
    "tag" : "TOCPHA",
    "schemaOrgTag" : null,
    "total" : 4.0766,
    "hasRDI" : true,
    "daily" : 20.383000000000003,
    "unit" : "mg"
  }, {
    "label" : "Vitamin K",
    "tag" : "VITK1",
    "schemaOrgTag" : null,
    "total" : 17.7725,
    "hasRDI" : true,
    "daily" : 22.215625,
    "unit" : "µg"
  } ]
};
