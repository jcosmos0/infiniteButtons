$ ( document ).ready(function(){
  
  
   
 
  $("#buttonOne").click(function() {
    buttonClicked = 'click';
    
    
    
  });
  while(buttonClicked==='click'){
    $("#buttonOne2").append('<center><button type="button" id = "buttonOne">Click Me!</button></center>');
    buttonClicked = 'no';
    
  }
                       
    

});

