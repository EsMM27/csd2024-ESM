$("document").ready(function(){
    $.getJSON(`netflix.json`, function(data) {
        console.log(Object.keys(data[0]));

        $.each(data, function(index, value) {
            $("#tbody").append(`<tr>
                                <td>${value.title}</td>
                                <td>${value.type}</td>
                                <td>${value.release_year}</td>
                                <td>${value.runtime}</td>
                                <td><button value="View" class="Edit">View</button></td>
                                </tr>`);
        });


// Event delegation for the "Edit" buttons
$("#tbody").on("click", ".Edit", function() {
    if (typeof(Storage) !== "undefined") {
        // Get the index of the clicked row
        var rowIndex = $(this).closest("tr").index();
        
        // Retrieve data from the corresponding JSON object
        var title = data[rowIndex].title;
        var type = data[rowIndex].type;
        var release_year = data[rowIndex].release_year;
        var runtime = data[rowIndex].runtime;
        var imdb_score = data[rowIndex].imdb_score;
        
        // Assign genres directly if it's already a string
        var genres = data[rowIndex].genres;
        
        // Store data in sessionStorage
        sessionStorage.setItem("title", title);
        sessionStorage.setItem("type", type);
        sessionStorage.setItem("release_year", release_year);
        sessionStorage.setItem("runtime", runtime);
        sessionStorage.setItem("imdb_score", imdb_score);
        sessionStorage.setItem("genre", genres);
    
        // Redirect to another page
        window.location.href = "viewTitleV2.html";
    } else {
        console.log("Sorry! No Web Storage support. Do this another way.");
    }
});
    });  
});