var mysql = require("mysql");
var prompt = require("prompt");
require("console.table");

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
	console.log("connected as Bamazon Executive");
	console.log("");
	console.log("1) View Product Sales by Department");
	console.log("2) Create New Department");
	console.log("");

	var schema = {
	    properties: {
	      option: {
	      	description: "Please select an option:",
	      	type: "integer",
	        message: "Please type the number of the option you wish to select.",
	        required: true
	      }
	    }
	};
	prompt.message = "";
	prompt.delimiter= "";
	prompt.start();
	prompt.get(schema,function (err, result) {
		if (result.option === 1) {
			connection.query("SELECT * FROM Departments;", function (err, res) {
				if (err) throw err;
				console.log(res);
				console.log("Products Sales by Department:");
				console.log("");
				for (i=0; i<res.length; i++) {
					console.table([
						{
							DepartmentID: res[i].DepartmentID,
							DepartmentName: res[i].DepartmentName,
							OverheadCosts: res[i].OverheadCosts,
							ProductSales: res[i].TotalSales,
							TotalProfit: (res[i].TotalSales-res[i].OverheadCosts)
						},
					]);
				}
			});
		}
		else if (result.option === 2) {
			console.log("Create a New Department:")
			var schema2 = {
				properties: {
					departmentNameInput: {
						description: "Please enter the name of the new department:",
						type: "string",
						message: "Please enter the name of the new department:",
						required: true
					},
					overheadCostInput: {
						description: "Please enter the overhead cost of new department:",
						type: "integer",
						message: "Please enter the overhead cost of new department:",
						required: true
					},
				}
			};
			prompt.message = "";
			prompt.delimiter= "";
			prompt.start();
			prompt.get(schema2, function (err, result) {
				connection.query("INSERT INTO Departments (DepartmentName,OverheadCosts) VALUES ('"+result.departmentNameInput+"','"+result.overheadCostInput+"');", function (err, res) {
						console.log("Department Added!");
						console.log("");
				});
				connection.query("SELECT * FROM Departments WHERE DepartmentName='"+result.departmentNameInput+"';",
				function (err, res) {
					console.table([
						{
							DepartmentID: res[0].DepartmentID,
							DepartmentName: res[0].DepartmentName,
							OverheadCosts: res[0].OverheadCosts,
							ProductSales: res[0].TotalSales,
						},
					]);
				});
			});
		}
	});
});