let catalog = [

    {
        "title":"Orange",
        "category":"fruit",
        "price": 15.99,
        "image": "oranges.png",
        "_id": "1",
    },
    {
        "title":"Banana",
        "category":"fruit",
        "price": 15.99,
        "image": "banana.png",
        "_id": "2",
    },
    {
        "title":"Chesse",
        "category":"farm",
        "price": 25.99,
        "image": "chesse.png",
        "_id": "3",
    },
    {
        "title":"Coffee",
        "category":"farm",
        "price": 25.99,
        "image": "coffee.png",
        "_id": "4",
    },
    {
        "title":"Hoodie",
        "category":"Merchandise",
        "price": 25.99,
        "image": "hoodie.png",
        "_id": "5",
    },
    {
        "title":"Milk",
        "category":"Farm",
        "price": 25.99,
        "image": "milk.png",
        "_id": "6",
    },
    {
        "title":"Vitamins",
        "category":"Merchandise",
        "price": 25.99,
        "image": "vitamins.png",
        "_id": "7",
    },

];

class DataService {

    getProducts(){
        return catalog;
    }

}

export default DataService;