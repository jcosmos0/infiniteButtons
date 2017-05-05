$ ( document ).ready(function(){
  
  
  
  var link = ['', 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg', 'https://cdn.shopify.com/s/files/1/1017/2183/t/2/assets/live-preview-potato.png?4324246315360566414' ];
  $("#generatePotato").click(function() {
    var rand = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    console.log(rand);
    $("#potatoImg").html('<img src=link[1] alt="potato" />');
    
  });
                       
    

});

