// Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");
// var $default = {
//   firstname: "Johnny Cupcakes",
//   lasttname: "OnIce",
//   email: "jmoney@cupcakes.net",
//   address: "2 Main Nowhere, USA 55675",
//   team: "New England Patriots"
// };

// $("#add-btn").on("click", function(event) {
//   event.preventDefault();
//   var newCharacter = {
//     name: $("#name").val().trim(),
//     role: $("#role").val().trim(),
//     age: $("#age").val().trim(),
//     forcePoints: $("#force-points").val().trim()
//   };

//   // Question: What does this code do??
//   $.post("/api/characters", newCharacter)
//     .then(function(data) {
//       console.log("add.html", data);
//       alert("Adding character...");
//     });
// });
/*
1. Get the values from the form and pass them as an argument to the SaveExample function.
2. res.render a page that has all users at least in one view. This will show that you know how handlebars render engine works.
3. Sequelize has its own methods for creation and the like, use them.
4. Create crud routes and test them with Postman. 

*/
// The API object contains methods for each kind of request we'll make
var API = {
  savePerson: function($newPerson) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/person/new",
      data: JSON.stringify($newPerson)
    });
  },
  getPerson: function() {
    return $.ajax({
      url: "api/person",
      type: "GET"
    });
  },
  deletePerson: function(id) {
    return $.ajax({
      url: "api/person/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

// $exampleList.empty();
// $exampleList.append($examples);
//   });
// };

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();
  var $newPerson = {
    firstname: $("#firstname")
      .val()
      .trim(),
    lastname: $("#lastname")
      .val()
      .trim(),
    email: $("#email")
      .val()
      .trim(),
    address: $("#address")
      .val()
      .trim(),
    TeamId: $("#exampleFormControlSelect1")
      .val()
      .trim()
  };
  API.savePerson($newPerson).then(function() {
    refreshPerson();
  });
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

// API.deleteExample(idToDelete).then(function() {
//   refreshExamples();
// });
// };

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
