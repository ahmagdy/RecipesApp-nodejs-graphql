# Recipes App 
### A Simple app that allows you to create: 
* Food Recipes
* Categoeis belongs to this recipes.
* Chefs for the recipes.

### Recipes App using
Node.js, GraphQL(Apollo-Server) and MongoDB.

### You want to try it?
```
npm run serve
```
**GraphQL endpoint** `URL:PORTNumber/graphql`

**GraphQL Interactive docs** `URL:PORTNumber/docs`

### Examples : 
#### Create New Category
and return only the id and title of the newly created element.
```graphql
mutation createNewCategory($input: newCategoryInput!) {
  newCategory(category: $input) {
    id
    title
  }
}

```
and the input will be 
```graphql
{
  "input": {
    "title": "MiddleEast Food"
  }
}
```

#### Create New Chef:
```graphql
mutation createNewChef($input: newChefInput!) {
  newChef(chef: $input) {
    id
    name
  }
}

# the Input
{
  "input": {
    "name": "Ahmad",
    "email": "ama@me.yes",
    "phoneNumber": "123654"
  }
}
```

#### Create New Recipe:
```graphql
mutation createNewRecipe($input:newRecipeInput!){
  newRecipe(recipe:$input){
    id
    title
    description
  }
}

# Input
{
  "input": {
    "title": "Test",
    "description": "ABC",
    "category": "5ab924fbd5109b267428eb0a",
    "chef": "5ab93e5dd232655140412a12"
  }
}
```

#### Querying:
**You can ask for single item and get only the fields that you want**
```graphql
{
  singleRecipe(id: "IDXFD") {
    id
    title
    category {
      id
      title
    }
    chef {
      id
      name
    }
  }
}
```

**List all of the categories, chefs and recipes**

```graphql
{
  categories {
    id
    title
  }
  chefs {
    id
  }
  recipes{
    id
    title
  }
}
```
