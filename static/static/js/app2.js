// IMPORT THE DATA FROM data.js
const tableData = data;

// REFERENCE THE HTML TABLE USING D3
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");

        // MODULE 11.5.2 ADD A forEach LOOP
        data.forEach((dataRow) => {

            // CREATE A VARIABLE TO APPEND A ROW TO THE TABLE BODY
            let row = tbody.append("tr");

            // LOOP THRU EACH FIELD IN THE dataRow ARGUMENT
            Object.values(dataRow).forEach((val) => {
                // APPEND EACH VALUE OF THE OBJECT TO A CELL IN THE TABLE
                let cell = row.append("td");
                cell.text(val);
                }
            );
        });
    }

// MODULE 11.5.3 ADD FILTER FOR DATE
function handleClick() {
    let date = d3.select("#datetime").property("value");

    let filteredData = tableData;

    // MODULE 11.5.4 ADD If STATEMENT
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // APPLY RE-FILTERED DATA TO RE-BUILT TABLE
    buildTable(filteredData);
};

// ATTACH AN EVENT TO LISTEN FOR
d3.selectAll("#filter-btn").on("click", handleClick);

// BUILD THE TABLE
buildTable(tableData);
