

(function($){
    
    
    $.fn.randomator = function( options ) {
        
        var rand;
        var cositos = $(".opcion");
        $("#randomChampion").on("click",function(){
            
            rand = cositos[Math.floor(Math.random() * cositos.length)];
            
            $("#ganador").text(rand.value);
            
        })
        
        
    console.log(rand.value);    
 
    };
 
    
}(jQuery));


