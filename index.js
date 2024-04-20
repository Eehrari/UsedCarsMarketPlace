import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

 //Step 1: You can go to the recipe.json file to see the full structure of the recipeJSON below.
const dataJSON = '[{"id":"3001","type":"car","make":"Toyota","model":"Camry","year":2022,"price":25000,"mileage":15000,"engine":{"type":"Gasoline","displacement":"2.5L","horsepower":203},"transmission":"Automatic","color":"White","interior_color":"Black","features":["Backup Camera","Bluetooth Connectivity","Lane Departure Warning","Apple CarPlay","Android Auto"],"owner_history":[{"name":"John Doe","purchase_date":"2022-01-15","price":25000}]},{"id":"3002","type":"car","make":"Honda","model":"CR-V","year":2020,"price":28000,"mileage":20000,"engine":{"type":"Gasoline","displacement":"1.5L","horsepower":190},"transmission":"CVT","color":"Silver","interior_color":"Gray","features":["Adaptive Cruise Control","Blind Spot Monitoring","Heated Seats","Sunroof","Navigation System"],"owner_history":[{"name":"Emily Smith","purchase_date":"2020-05-20","price":28000}]},{"id":"3003","type":"car","make":"BMW","model":"X5","year":2019,"price":45000,"mileage":30000,"engine":{"type":"Hybrid","displacement":"3.0L","horsepower":389},"transmission":"Automatic","color":"Black","interior_color":"Beige","features":["Panoramic Roof","Leather Seats","Adaptive Headlights","Surround View Camera","Wireless Charging"],"owner_history":[{"name":"Michael Johnson","purchase_date":"2019-08-10","price":45000},{"name":"Sophia Garcia","purchase_date":"2021-03-25","price":42000}]}]';


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/car-details", (req, res) => {
   //Step 2: Add code to views/index.ejs to use the recieved data object.
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
