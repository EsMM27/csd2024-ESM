$("document").ready(function(){

    var numbers = [1, 2, 3, 4, 5];
    var HTMLoutput = "";

    for (var i = 0; i < numbers.length; i++) {
        ///  add your code here
        HTMLoutput += `[${numbers[i]}] `;
        for (var j = 0; j < numbers[i]; j++) {
            HTMLoutput += `${String.fromCodePoint(128512)}`;
        }
        HTMLoutput += `${""}<br>`;
    }

    $("#myDiv").html(HTMLoutput);
});
