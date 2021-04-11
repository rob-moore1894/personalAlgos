// In this challenge you're planning the menu for an Italian dinner. Some of your guests are vegetarian and you need to create a list of vegetarian menu items for them. Given an array of Italian dishes, create an unordered list of all vegetarian dinner options. Each menu item is an object containing the dish name and a Boolean variable that indicates whether the dish is vegetarian. You should dynamically generate the list items in the DOM from the array of vegetarian items.


function vegetarianMenu(menu) {

}

class Menu {
    constructor(title, isVegetarian){
        this.title = title; 
        this.isVegetarian = isVegetarian;
    }

    
}

const capreseSaladWithPesto = new Menu("Caprese Salad with Pesto Sauce", true);
const panzenella = new Menu("Panzenella", true);
const focacciaBread = new Menu("Focaccia Bread", true);
const lasagna = new Menu("Lasagna", false);
const chickenParmesan = new Menu("Chicken Parmesan", false);
const chickenEscaroleSoupWithMeatballs = new Menu("Chicken Escarole Soup with Meatballs", false);

