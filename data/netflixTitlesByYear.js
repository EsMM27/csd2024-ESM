$(document).ready(function(){

    $.getJSON("netflix.json", function(data) {
        
        function populateTable(filteredData) {
            $("#tbody").empty(); // Clear existing table data
            $.each(filteredData, function(index, value) {
                $("#tbody").append(`<tr><td>${value.title}</td><td>${value.type}</td><td>${value.release_year}</td><td>${value.runtime}</td></tr>`);
            });
        }

        // Function to get min and max year from data
        function getMinMaxYear(data) {
            var minYear = Infinity;
            var maxYear = -Infinity;
            data.forEach(function(item) {
                if (item.release_year < minYear) {
                    minYear = item.release_year;
                }
                if (item.release_year > maxYear) {
                    maxYear = item.release_year;
                }
            });
            return { min: minYear, max: maxYear };
        }

        // Function to populate the year dropdown
        function populateYearDropdown(minYear, maxYear) {
            var $select = $("#yearSelect");
            $select.empty(); // Clear existing options
            $select.append('<option value="all">All Years</option>'); // Add "All Years" option
            for (var year = minYear; year <= maxYear; year++) {
                $select.append(`<option value="${year}">${year}</option>`);
            }
        }

        populateTable(data); // Initial population of the table

        // Get min and max year from data
        var minMaxYear = getMinMaxYear(data);
        var minYear = minMaxYear.min;
        var maxYear = minMaxYear.max;

        // Populate year dropdown
        populateYearDropdown(minYear, maxYear);

        // Event listener for year selection change
        $("#yearSelect").change(function() {
            var selectedYear = $(this).val(); // Get the selected year
            var filteredData;

            if (selectedYear === "all") {
                // If "All Years" is selected, show all data
                filteredData = data;
            } else {
                // Filter data by the selected year
                filteredData = data.filter(function(item) {
                    return item.release_year == selectedYear;
                });
            }

            // Populate table with filtered data
            populateTable(filteredData);
        });
    });  
        
});