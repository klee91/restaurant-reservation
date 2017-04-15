 

 $("#tableButton").on("click", function() {
      // var searchedCharacter = $("#character-search").val().trim();

      // searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

      // QUESTION: What does $.get do? What are the parameters it is expecting?
      $.get("/api/", function(data) {
        console.log(data);
        // if (data) {
        //   $("#stats").show();
        //   $("#name").text(data.customerName);
        //   $("#number").text(data.phoneNumber);
        //   $("#customerEmail").text(data.customerEmail);
        //   $("#customerID").text(data.customerID);
        // }
        // else {
        //   $("#name").text("The force is not strong with this one. Your character was not found.");
        //   $("#stats").hide();
        // }
      });
    });