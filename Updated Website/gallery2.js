$(document).ready(function() {

    /*Code for the Image Gallery*/
         // get the image URL and id for each image
      $("li>a").each(function (index) {
        console.log(index + ": " + $(this).attr("href"));
        var url = $(this).attr("href");
        var caption = $(this).attr("id");
      
      //setting the attribute
        $("#image").attr({"href" :url});
      });
      
      
      // set up the event handlers for each link
      //syntax is off so go to w3schools.html to get the JQuery code.
      
      $("li>a").click (function (evt) {
      // cancel the default action of each link
        evt.preventDefault();
        var url = $(this).attr("href");
        var caption = $(this).attr("id");
        $("#title").html(caption);
      console.debug(url+caption);
      //setting the title of the image
      //$("#image").attr({"href": url, "id": caption});
      $("#image").attr({"src": url});
  
      })
  
      /*End of code for Image Gallery*/

    });