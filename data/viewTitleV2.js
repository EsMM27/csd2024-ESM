$("document").ready(function(){
    if (typeof(Storage) !== "undefined") {
        // Retrieve data from sessionStorage
        var title = sessionStorage.getItem("title");
        var type = sessionStorage.getItem("type");
        var release_year = sessionStorage.getItem("release_year");
        var runtime = sessionStorage.getItem("runtime");
        var imdb_score = sessionStorage.getItem("imdb_score");
        var genres = sessionStorage.getItem("genre");

        // Update HTML elements with retrieved data
        $("#title").text(title);
        $("#tbody").append(`
            <tr><td>RELEASE YEAR</td><td>${release_year}</td></tr>
            <tr><td>RUNTIME</td><td>${runtime}</td></tr>
            <tr><td>TYPE</td><td>${type}</td></tr>
            <tr><td>IMDB SCORE</td><td>${imdb_score}</td></tr>
            <tr><td>GENRE</td><td>${genres}</td></tr>`);

    } else {
        console.log("Sorry! No Web Storage support. Do this another way.");
    }
});