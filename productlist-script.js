// Globally scoped object
var myApp = {};

$(document).ready(function () {
  createProductList();
});

function createProductList() {
  // To see new product list after deleting one or more products
  $("#productListDiv").empty();

  // Create an array to store objects
  myApp.arr = [];

  myApp.API = "https://" + window.location.host + "/server/index.php";

  // Create axios get request
  axios
    .get(myApp.API)
    .then(function (response) {
      // Insert all data to array
      myApp.arr.push(response.data);
      receiveDataFromBoxes(myApp.arr);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Take data for processing
function receiveDataFromBoxes() {
  // Iterating over entries in data
  myApp.arr[0].forEach((value, i) => {
    //All objects put into Boxes
    createBoxTemplates(value, i);

    //Execute when the specific checkbox selected
    $("#isSelected" + i).click(function () {
      var $myDiv = $(this);

      //To access the location of both checkbox and texts
      var obj = {
        sku: $myDiv.siblings("#sku").text(),
        name: $myDiv.siblings("#nameValue").text(),
        price: $myDiv.siblings("#priceValue").find("text").text(),
        uniqueValue: $myDiv.siblings("#uniqueValue").find("text").text(),
        type: $myDiv.siblings("#uniqueValue").attr("class"),
      };

      // Delete selected products
      $("#delete-product-bin").click(function () {
        // DELETE request using fetch with error handling

        // Make delete request implement deleting product
        axios
          .delete(myApp.API, { data: obj })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
            console.log(
              "Sorry, but 000webhost doesn't support delete request using either axios or fetch!"
            );
          })
          .then((obj = ""));
      });
    });
  });
}

// Box creator for products
function createBoxTemplates(Product, i) {
  //Use p and div tags for storing elements
  var newP = $("<p></p>");
  var skuDiv = $("<div>" + Object.values(Product)[0] + "</div>");
  var nameDiv = $("<div>" + Object.values(Product)[1] + "</div>");
  var priceDiv = $(
    "<div><text>" + Object.values(Product)[2] + "</text> $</div>"
  );

  //Add all general div's into the p tag
  skuDiv.appendTo(newP);
  nameDiv.appendTo(newP);
  priceDiv.appendTo(newP);

  //Assign id attribute of all general type values
  skuDiv.prop("id", "sku");
  nameDiv.prop("id", "nameValue");
  priceDiv.prop("id", "priceValue");

  //this is for printing type data succesful, for example KG for weight
  if (Object.keys(Product)[3] == "weight") {
    var uniqueDiv = $(
      "<div><span class = 'Book'>Weight: </span><text>" +
        Object.values(Product)[3] +
        "</text></div>"
    );
    //Add unique div into the p tag
    uniqueDiv.appendTo(newP);
    //Assign id and class attribute for unique type values
    uniqueDiv.prop("id", "uniqueValue");
    uniqueDiv.prop("class", "Book");
  } else if (Object.keys(Product)[3] == "size") {
    var uniqueDiv = $(
      "<div><span>Size: </span><text>" +
        Object.values(Product)[3] +
        "</text></div>"
    );
    //Add unique div into the p tag
    uniqueDiv.appendTo(newP);
    //Assign id and class attribute for unique type values
    uniqueDiv.prop("id", "uniqueValue");
    uniqueDiv.prop("class", "Dvd");
  } else if (Object.keys(Product)[3] == "dimensions") {
    var uniqueDiv = $(
      "<div><span>Dimensions: </span><text>" +
        Object.values(Product)[3] +
        "</text></div>"
    );
    //Add unique div into the p tag
    uniqueDiv.appendTo(newP);
    //Assign id and class attribute for unique type values
    uniqueDiv.prop("id", "uniqueValue");
    uniqueDiv.prop("class", "Furniture");
  } else console.log("Product type to be deleted not recognized!");

  //Create checkboxes and insert into the p tag
  $("<input />", {
    type: "checkbox",
    class: "delete-checkbox",
    id: "isSelected" + i,
    name: "productCheck",
  }).appendTo(newP);

  // Add the p tag into the productListDiv created before
  $("#productListDiv").append(newP);
}

// Refresh product list after products deleted
$("#delete-product-bin").click(function () {
  setTimeout(createProductList, 300);
});
