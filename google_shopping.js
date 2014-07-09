// google_shopping.js
// Michael McClure


var data = require("./products.json")
var items = data["items"];


// Write your solutions below
// Question #1
console.log("\nQUESTION #1 - Find Shopping Products:");
var itemCount = data["currentItemCount"];
var count = 0
for (i = 0; i < items.length; i += 1) {
	if (items[i]["kind"] === "shopping#product") {
		count += 1;
	}
}
console.log("Item Count is: " + count);
console.log("Current Item Count says: " + itemCount);


// Question #2
console.log("\nQUESTION #2 - Backorder:");
for (i = 0; i < items.length; i += 1) {
	var availability = items[i]["product"]["inventories"][0]["availability"];
	var title = items[i]["product"]["title"];
	if (availability === "backorder") {
		console.log("ITEM: " + [title] + "\n-Availability: BACKORDERED\n");
	}
}


// Question #3
console.log("\nQUESTION #3 - Items with Multiple Image Links:");
for (i = 0; i < items.length; i += 1) {
	var links = items[i]["product"]["images"].length;
	if (items[i]["product"]["images"].length > 1) {
		console.log("ITEM: " + items[i]["product"]["title"] + "\nHas " + links + " Image links!");
	}
}

// Question #4
console.log("\nQUESTION #4 - Canon Products:");
for (i = 0; i < items.length; i += 1) {
	if (items[i]["product"]["brand"] === "Canon") {
		console.log("ITEM: " + items[i]["product"]["title"]);
	}
}


// Question #5
console.log("\nQUESTION #5 - Canon Products Sold on eBay:");

for (i = 0; i < items.length; i += 1) {
	if (items[i]["product"]["author"]["name"].indexOf("eBay")>-1 && items[i]["product"]["brand"] === "Canon"){
		console.log("ITEM: " + items[i]["product"]["title"]);
		console.log("SELLER: " + items[i]["product"]["author"]["name"]);
	}
}


// Question #6
console.log("\nQUESTION #6 - All Products:");

for (i = 0; i < items.length; i += 1) {
	console.log("ITEM: " + items[i]["product"]["title"]);
	console.log("BRAND: " + items[i]["product"]["brand"]);
	console.log("IMAGES:");
	for (n = 0; n < items[i]["product"]["images"].length; n += 1) {
		console.log(items[i]["product"]["images"][n]["link"]);
	}
	console.log(" ");
}
