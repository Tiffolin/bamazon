var mysql = require("mysql");
var inquirer = require("inquirer");
var chalk = require('chalk');
var clear = require('clear');
var figlet= require('figlet');
// var {table} = require('table');
var Table = require('cli-table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
        if (err) throw err;
            clear();
                console.log(
                    chalk.yellow(
                    figlet.textSync('Welcome to Bamazon!', { horizontalLayout: 'full' })
                ));
                console.log(
                        chalk.red(
                        figlet.textSync('Check out what we have in store!', 
                        {
                            font: 'Cybersmall',
                            horizontalLayout: 'default',
                            verticalLayout: 'default'
                        }
                )));
        afterConnection();
    });
//////////////////////     
function afterConnection() {
        connection.query("SELECT * FROM products", function(err, res) {
          if (err) throw err;    
                var Table = require('cli-table');
                var table = new Table({
                    head: ['Item ID', 'Product Name ', 'Department Name ', 'Price ($) ', 'Stock Quantity ']
                , colWidths: [10, 20, 20, 20, 20]
                });

                for (var i = 0; i < res.length; i++) {
                     var itemID = res[i].item_id;
                     var productName =  res[i].product_name;
                     var departmentName = res[i].department_name;
                     var price = res[i].price;
                     var stockQuantity = res[i].stock_quantity;

                    table.push( 
                [itemID,productName,departmentName,price, stockQuantity]
                )};
                
                console.log(table.toString());
 
          console.log("PRESS THE SPACE BAR TO START YOUR ORDER")
})};
      
         search ();
//////////////////////
function search() {
    inquirer
    .prompt([
        {
          type: "input", 
          message: "What is the id of the product you would like to purchase?",
          name: "itemID" 
        },
        {
          type: "input", 
          message: "How many items would you like to purchase?",
          name: "amount" 
        },
        {
          type: "confirm",
          message: "Are you sure:",
          name: "confirm",
          default: true
          }
      ])     
      .then(function(inquirerResponse) {
        if (inquirerResponse.confirm) {
            connection.query("SELECT * FROM products", function(err, res) {
                if (err) throw err;
                var item = parseInt(inquirerResponse.itemID) - '1';
                var itemStock = res[item].stock_quantity;
                var itemName = res[item].product_name;
                var customerAmount = parseInt(inquirerResponse.amount);
                var price = parseInt(res[item].price);
                    inventory();
//////////////////////
                    function inventory(){
                        connection.query("SELECT * FROM products", function(err, res) {
                            if (err) throw err;       

                                else if( customerAmount<= itemStock){
                                    console.log ("transaction completed")
                                    // console.log ("You have purchased " + customerAmount+ " " + itemName);
                                    // console.log ("Your total will be $" + (customerAmount * price));
                                    updateInventory();
                                }
                                else if (customerAmount> itemStock){
                                    console.log("Insufficient quantity!")
                                };        
                        })

                    };   
//////////////////////
                    function updateInventory() {
                        var item = parseInt(inquirerResponse.itemID)-"1";
                        var itemStock = parseInt(res[item].stock_quantity);    
                        var customerAmount = parseInt(inquirerResponse.amount);
                        var updateAmount = itemStock - customerAmount;

                            console.log("Updating...\n");
                            var query = connection.query(
                            "UPDATE products SET ? WHERE ?",[
                                {stock_quantity: updateAmount},
                                {item_id: item + 1}
                            ],

                            function(err, res) {
                                console.log(res.affectedRows + " products updated!\n");
                                console.log ("You have purchased " + customerAmount+ " " + itemName);
                                console.log ("Your total will be $" + (customerAmount * price));
                            }
                            );
              
                          // console.log(query.sql);    
                     };
//////////////////////
        })}
        else {
          console.log("\nThat's okay, come again when you are more sure.\n");
        }
      });
    };





    
