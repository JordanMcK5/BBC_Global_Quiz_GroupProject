use world;
db.dropDatabase();
db.countries.insertMany([{
    name:"France",
    capital:"Paris",
    language:"French"
}]);
