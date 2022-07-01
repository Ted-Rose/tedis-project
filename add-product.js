//This will result in the handler not being called if
//the DOM is already loaded at the time.
window.addEventListener("DOMContentLoaded", function () {
  // Button to return to Product List page
  document.getElementById("cancel").onclick = function (e) {
    e.preventDefault();
    location.href = "/";
  };
});

//Product form
$(document).ready(function () {
  HideProductTypes();

  let defaultRules = {
    sku: {
      required: true,
    },
    name: {
      required: true,
    },
    price: {
      required: true,
      number: true,
    },
    size: {
      required: true,
      number: true,
    },
    height: {
      required: true,
      number: true,
    },
    width: {
      required: true,
      number: true,
    },
    length: {
      required: true,
      number: true,
    },
    weight: {
      required: true,
      number: true,
    },
  };

  let defaultMessages = {
    sku: {
      required: "Please, submit required data",
    },
    name: {
      required: "Please, submit required data",
    },
    price: {
      required: "Please, submit required data",
      number: "Please, provide the data of indicated type",
    },
    size: {
      required: "Please, submit required data",
      number: "Please, provide the data of indicated type",
    },
    height: {
      required: "Please, submit required data",
      number: "Please, provide the data of indicated type",
    },
    width: {
      required: "Please, submit required data",
      number: "Please, provide the data of indicated type",
    },
    height: {
      required: "Please, submit required data",
      number: "Please, provide the data of indicated type",
    },
    weight: {
      required: "Please, submit required data",
      number: "Please, provide the data of indicated type",
    },
    length: {
      required: "Please, submit required data",
      number: "Please, provide the data of indicated type",
    },
  };

  $("#product_form").validate({
    rules: defaultRules,
    messages: defaultMessages,
    submitHandler: function (event) {
      let data = $(event.target).serializeArray();

      // form data serialized as object
      console.log(data);

      //Post data to server
      PostData();

      return false;
    },
  });

  $("#productType").on("change", function () {
    HideProductTypes();
    let productType = $(this).val();
    let idValue = "#" + productType;

    $(idValue).show();
  });

  function HideProductTypes() {
    let productTypes = ["Dvd", "Furniture", "Book"];
    productTypes.forEach(function (value) {
      $("#" + value).hide();
    });
  }

  function PostData() {
    //Get data from general inputboxes
    var sku = $("#product_form").find('input[name="sku"]').val();

    var name = $("#product_form").find('input[name="name"]').val();

    var price = $("#product_form").find('input[name="price"]').val();

    // For localhost:
    var url = "http://localhost:3000/server/index.php";

    // For 000webhost:
/*     var url = "https://" + window.location.host + "/server/index.php";
 */

    //Get data from product type specific inputboxes
    if (document.getElementById("size").value.length != "") {
      var type = "Dvd";

      var lastVal = $("#product_form").find('input[name="size"]').val();
    }
    if (document.getElementById("height").value.length != "") {
      var type = "Furniture";

      var height = $("#product_form").find('input[name="height"]').val();

      var width = $("#product_form").find('input[name="width"]').val();

      var length = $("#product_form").find('input[name = "length"]').val();

      // To use dimensions in HxWxL format
      var lastVal = height + "x" + width + "x" + length;
    }
    if (document.getElementById("weight").value.length != "") {
      var type = "Book";

      var lastVal = $("#product_form").find('input[name="weight"]').val();
    }

    var obj = {
      sku: sku,
      name: name,
      price: price,
      lastVal: lastVal,
      type: type,
    };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    }).then((responseJson) => {
      ReturnToProductList(responseJson);
    });
  }

  /* function ReturnToProductList() {
    window.location.href = "/";
  } */
});
