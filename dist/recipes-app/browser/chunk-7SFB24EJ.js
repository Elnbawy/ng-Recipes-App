import{a as f}from"./chunk-FZFX6HZC.js";import{b as m}from"./chunk-PLOAZ5ER.js";import{a as p,b as n,c as o,f as h,ha as d,l as a,o as c,r}from"./chunk-JJWHNU3G.js";var l=(()=>{let i=class i{constructor(e){this.slService=e,this.recipesChanged=new o,this.recipes=[]}setRecipes(e){this.recipes=e,this.recipesChanged.next(this.recipes.slice())}getRecipes(){return this.recipes.slice()}getRecipe(e){return this.recipes[e]}addIngredientsToShoppingList(e){this.slService.addIngredients(e)}addRecipe(e){this.recipes.push(e),this.recipesChanged.next(this.recipes.slice())}updateRecipe(e,t){this.recipes[e]=t,this.recipesChanged.next(this.recipes.slice())}deleteRecipe(e){this.recipes.splice(e,1),this.recipesChanged.next(this.recipes.slice())}};i.\u0275fac=function(t){return new(t||i)(r(m))},i.\u0275prov=c({token:i,factory:i.\u0275fac});let s=i;return s})();var x=(()=>{let i=class i{constructor(e,t,u){this.http=e,this.recipeService=t,this.authService=u}storeRecipes(){let e=this.recipeService.getRecipes();this.http.put("https://recipes-app-e4ac7-default-rtdb.firebaseio.com/recipes.json",e).subscribe(t=>{console.log(t)})}fetchRecipes(){return this.http.get("https://recipes-app-e4ac7-default-rtdb.firebaseio.com/recipes.json").pipe(h(e=>e.map(t=>n(p({},t),{ingredients:t.ingredients?t.ingredients:[]}))),a(e=>{this.recipeService.setRecipes(e)}))}};i.\u0275fac=function(t){return new(t||i)(r(d),r(l),r(f))},i.\u0275prov=c({token:i,factory:i.\u0275fac,providedIn:"root"});let s=i;return s})();export{l as a,x as b};
