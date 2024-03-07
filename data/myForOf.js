$("document").ready(function(){

    var numbers = [1, 2, 3, 4, 5];
    var HTMLoutput = "";

    for(var i=0; i<numbers.length; i++) 
    {
        ///  add your code here
        HTMLoutput+=`${i} <br>`;
    }

    $("#myDiv").html(HTMLoutput);    
})