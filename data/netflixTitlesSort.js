$("document").ready(function(){

    $.getJSON(`netflix.json`, function(data) {        
        
            // data.sort(function(a,b){
            //     return a.release_year - b.release_year;
            // });

        //sort by name

        data.sort(function(a, b) {
            return a.title.localeCompare(b.title);
        });

        //exmaples of other sorts
        //sort by type
        // data.sort(function(a, b) {
        //     return a.type.localeCompare(b.type);
        // });

        //sort by release year
        // data.sort(function(a, b) {
        //     return a.release_year - b.release_year;
        // });

        //sort by runtime
        // data.sort(function(a, b) {
        //     return a.runtime - b.runtime;
        // });

        
     
        
        $.each(data, function(index, value) {
            $("#tbody").append(`<tr><td style="color: red;">${value.title}</td><td>${value.type}</td><td>${value.release_year}</td><td>${value.runtime}</td></tr>`);
        });
    });  
        
})
