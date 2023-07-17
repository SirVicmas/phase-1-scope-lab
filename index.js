// // Write your solution in this file!
var customerName = "bob"
var bestCustomer;

function upperCaseCustomerName() {
    if (customerName) {
        customerName = customerName.toUpperCase();
    }
}

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}


function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = "John Doe";
  leastFavoriteCustomer = "Masibo"; // This line will cause an error
  return leastFavoriteCustomer;
}

console.log (changeLeastFavoriteCustomer());


