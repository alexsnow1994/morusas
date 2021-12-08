// let header = document.body.getElementsById("header")
// let Encabezado = document.createElement("h1");

// let text = document.createTextNode("morusas es lo mejor")


// h1.appendChild(text)
let data = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];


// buildTable = (data) => {
//     let table = document.createElement("table");
//     let fields = Object.keys(data[0]);
//     let headRow = document.createElement("tr");
//     fields.forEach((fields) => {
//         let headCell = crateElement("th")
//         headCell.appendChild(document.createTextNode(fields));
//         headRow.appendChild(headCell)
//     });
//     table.appendChild(headRow);

//     data.forEach((object) => {
//         let row = document.createElement("tr");
//         fields.forEach((field) => {
//             let cell = document.crateElement("td");
//             cell.appendChild(document.createTextNode(object[field]))
//             if (typeof object[field] == "number") {
//                 cell.style.textAlagin = "rigth";
//             }
//             row.appendChild(cell);

//         });
//         table.appendChild(row);

//     })
//     return table;


// }

// document.getElementById("montañas")
// montañas.appendchild(buildTable(data));
function buildTable(data) {
    var table = document.createElement("table");

    var fields = Object.keys(data[0]);
    var headRow = document.createElement("tr");
    fields.forEach(function(field) {
        var headCell = document.createElement("th");
        headCell.appendChild(document.createTextNode(field));
        headRow.appendChild(headCell);
    });
    table.appendChild(headRow);

    data.forEach(function(object) {
        var row = document.createElement("tr");
        fields.forEach(function(field) {
            var cell = document.createElement("td");
            cell.appendChild(document.createTextNode(object[field]));
            if (typeof object[field] == "number") {
                cell.style.textAlign = "right";
            }
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    return table;
}

document.getElementById("montañas")
    .appendChild(buildTable(data));