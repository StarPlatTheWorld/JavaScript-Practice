//define text variables

var price=1.25;
var items=3;
var total=0;

//define functions

function calculateTotal(itemPrice, numOfItems) {    
	return itemPrice * numOfItems;               
	}

total = calculateTotal(price, items);
document.write("Total cost of " + items +
" items of price " + price + " = " + total);
