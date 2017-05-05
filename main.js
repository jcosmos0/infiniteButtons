$ ( document ).ready(function(){
  
  
  
  var link = ['', 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg', 'https://cdn.shopify.com/s/files/1/1017/2183/t/2/assets/live-preview-potato.png?4324246315360566414','http://i2.kym-cdn.com/entries/icons/original/000/011/269/potato.jpg' ];
  $("#potatoGenerate").click(function() {
    var rand = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log(rand);
    $("#potatoImg").append('<center><img src=link[rand] alt="someimage" style="width:604px;height:456px;"/></center>');
    
  });
                       
    

});

