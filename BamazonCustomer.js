var mysql = require("mysql");
var prompt = require("prompt");

var connection = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "1111",
	database: "bamazon"
});

connection.connect(function(err){
	if (err) {
		console.error("error connecting");
		return;
	}
	console.log("connected as Bamazon Customer");
	console.log("");
});

connection.query("SELECT * FROM products;", function (err, res) {
	if (err) throw err;
	console.log(res);
	console.log("Items for Sale:");
	console.log("");
	for (i=0; i<res.length; i++) {
		console.log("Item ID: " + res[i].ItemID);
		console.log("Product Name: " + res[i].ProductName);
		console.log("Price (USD): $" + res[i].Price);
		console.log("");
	}
	var schema = {
	    properties: {
	      itemID: {
	      	description: "Please enter the Item ID of the product you wish to purchase:",
	      	type: "integer",
	        message: "Please enter the Item ID of the product you wish to purchase:",
	        required: true
	      },
	      quantity: {
	        description: "Please enter the quantity you wish to purchase:",
	      	type: "integer",
	        message: "Please enter the quantity you wish to purchase:",
	        required: true
	      }
	    }
  	};
  	prompt.message = "";
  	prompt.delimiter= "";
	prompt.start();
	prompt.get(schema,function (err, result) {
		connection.query("SELECT * FROM Products WHERE ItemID="+result.itemID+";", function (err, res) {
			if (result.quantity <= res[0].StockQuantity) {
				console.log("You have purchased: " + result.quantity + " copy(ies) of " + '"'+res[0].ProductName+'"');
				console.log("Your order total is: $" + (result.quantity*res[0].Price));
			}
			else {
			console.log("Insufficient quantity. You order cannot be placed.");
			}
			connection.query("UPDATE Products SET StockQuantity=(StockQuantity-"+result.quantity+") WHERE ItemID="+result.itemID+";", function (err, res) {
			});
			connection.query("UPDATE Departments SET TotalSales=(TotalSales+"+(result.quantity*res[0].Price)+") WHERE DepartmentName='"+res[0].DepartmentName+"';", function (err, res) {
			});
		});
	});  
});