/*Running this application will first display all of the items available for sale. 
Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

*/
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'codingIsfun',
  database : 'bamazon_db'
});
 
connection.connect();
connection.query('SELECT * FROM products', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
// connection.end();

var inquirer = require('inquirer');
inquirer
  .prompt([
  {
    type: "input",
    message: "What would you like to buy?",
    name: "product_id"
    
  },
  {
    type: "input",
    message: "How many would you like to buy?",
    name: "product_quantity"
  }
  ])
 
  .then(answers => {
    console.log(answers)
    connection.query('SELECT * FROM products WHERE ?', [{id: parseInt(answers.product_id)}], function(error, results, fields) {
      // console.log(results[0].stock_quantity)
      var stockQty=results[0].stock_quantity;
      // console.log(stockQty)
      connection.query('UPDATE products SET ? WHERE ?', [{stock_quantity:Math.abs(parseInt(answers.product_quantity)-stockQty)}, {id: parseInt(answers.product_id)}], function(error, results, fields){
        console.log(results)
      })
    })
  });