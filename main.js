$ ( document ).ready(function(){
  buttonClicked = false;
  
   
 
  $("#buttonOne").click(function() {
    buttonClicked = true;
    
    
    
  });
  while(buttonClicked==='click'){
    $("#buttonOne2").append('<center><button type="button" id = "buttonOne">Click Me!</button></center>');
    buttonClicked = false;
    
  }
                       
    

});

