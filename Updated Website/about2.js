$(document).ready(function() {
    
    /*Code for extended json file*/
$.getJSON("historyList.json", function(data){
    $.each(data, function(i, value){
        $.each(this, function(key, value){
            $("#history").append(
              "<img src=" + "'" + value.image + "'><br>" + 
              "<h2>" + value.title + "</h2>" + 
              "<p>" + value.history + "</p><br>");
                
        });
    });
  }); 
/*End of code for extended json */
});