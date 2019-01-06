var topics = ["sports", "movies", "programming", "cars"];

for (i = 0; i < topics.length; i++) {

  // var btn = "<button>" + topics[i] + "</button>";
  var btn = $("<button>").text(topics[i]).css("margin-right", "10px").css("margin-bottom", "20px").attr("class", "btn btn-primary").attr("data-number", i);
  $("#btnDiv").append(btn);

  btn.on("click", function () {

    console.log($(this).attr("data-number"));

    var btnValue = $(this).attr("data-number");

    if (btnValue == 0) {
      var btnGif = topics[0];
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        btnGif + "&api_key=dc6zaTOxFJmzC&limit=10";

      // Performing an AJAX request with the queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After data comes back from the request
        .then(function (response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var div = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var image = $("<img>");
            image.css("display", "flex");
            image.css("justify-content", "space-around");

            // Setting the src attribute of the image to a property pulled off the result item
            image.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the div
            div.append(image);
            div.append(p);


            // Prependng the div to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(div);
          }
        });

    } else if (btnValue == 1) {
      var btnGif = topics[1];
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        btnGif + "&api_key=dc6zaTOxFJmzC&limit=10";

      // Performing an AJAX request with the queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After data comes back from the request
        .then(function (response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var div = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var image = $("<img>");
            image.css("display", "flex");
            image.css("justify-content", "space-around");

            // Setting the src attribute of the image to a property pulled off the result item
            image.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the div
            div.append(image);
            div.append(p);


            // Prependng the div to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(div);
          }
        });

    } else if (btnValue == 2) {
      var btnGif = topics[2];
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        btnGif + "&api_key=dc6zaTOxFJmzC&limit=10";

      // Performing an AJAX request with the queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After data comes back from the request
        .then(function (response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var div = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var image = $("<img>");
            image.css("display", "flex");
            image.css("justify-content", "space-around");

            // Setting the src attribute of the image to a property pulled off the result item
            image.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the div
            div.append(image);
            div.append(p);


            // Prependng the div to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(div);
          }
        });

    } else {
      var btnGif = topics[3];
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        btnGif + "&api_key=dc6zaTOxFJmzC&limit=10";

      // Performing an AJAX request with the queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After data comes back from the request
        .then(function (response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var div = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var image = $("<img>");
            image.css("display", "flex");
            image.css("justify-content", "space-around");

            // Setting the src attribute of the image to a property pulled off the result item
            image.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the div
            div.append(image);
            div.append(p);


            // Prependng the div to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(div);
          }
        });

    }

  })

}


// CUSTOM GIF SEARCH //

// Adding click event listen listener to all buttons
$("#search-button").on("click", function () {

  var gif = $("#search").val().trim();
  topics.push(gif);

  var btn = $("<button>").text(gif).css("margin-right", "10px").css("margin-bottom", "20px").attr("class", "btn btn-primary").attr("data-number", topics.length);
  $("#btnDiv").append(btn);


  // Constructing a queryURL using the animal name
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    gif + "&api_key=dc6zaTOxFJmzC&limit=10";

  // Performing an AJAX request with the queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function (response) {
      console.log(queryURL);

      console.log(response);
      // storing the data from the AJAX request in the results variable
      var results = response.data;

      // Looping through each result item
      for (var i = 0; i < results.length; i++) {

        // Creating and storing a div tag
        var div = $("<div>");

        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + results[i].rating);

        // Creating and storing an image tag
        var image = $("<img>");
        image.css("display", "flex");
        image.css("justify-content", "space-around");

        // Setting the src attribute of the image to a property pulled off the result item
        image.attr("src", results[i].images.fixed_height.url);

        // Appending the paragraph and image tag to the div
        div.append(image);
        div.append(p);


        // Prependng the div to the HTML page in the "#gifs-appear-here" div
        $("#gifs-appear-here").prepend(div);
      }
    });
});