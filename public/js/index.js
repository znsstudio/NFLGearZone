// subscribe button
var $submitBtn = $("#submit");

// the API object contains methods for each kind of request we'll make
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
  }
  //,
  // deletePerson: function(id) {
  //   return $.ajax({
  //     url: "api/person/" + id,
  //     type: "DELETE"
  //   });
  // }
};

// handleFormSubmit is called whenever we submit the form
// save the new person to the db and refresh the list
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
    TeamId: parseInt(
      $("#exampleFormControlSelect1")
        .val()
        .trim()
    )
  };
  API.savePerson($newPerson).then(function(data) {
    console.log(data);
    window.location = "/hat/" + data.person.id;
  });
};

// add event listeners to the submit button
$submitBtn.on("click", handleFormSubmit);
