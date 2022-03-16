var doc = new jsPDF('l', 'pt', 'a4');

$('#mySubmit').click(function() {
    let a = document.getElementById("mySelect");
    var selectedValue = a.options[a.selectedIndex].value;
    console.log(selectedValue);
    console.log("Hi")
    console.log(selectedValue)
    if (selectedValue == "csv") {
        var html = document.querySelector("table").outerHTML;
        htmlToCSV(html, "students.csv");
    } else if (selectedValue == "excel") {
        TableToExcel.convert(document.getElementById("kt_table_users"), {
            name: "Traceability.xlsx",
            sheet: {
                name: "Sheet1"
            }
        });
    } else if (selectedValue == "pdf") {
        document.getElementById("myProduct").innerHTML = "";
        document.getElementById("myRemark").innerHTML = "";
        document.getElementById("followUp1").innerHTML = "";
        document.getElementById("followUp2").innerHTML = "";
        document.getElementById("followUp3").innerHTML = "";
        document.getElementById("editDelete").innerHTML = "";
        // console.log(myProduct.options[myProduct.selectedIndex].innerHTML);
        // var res = doc.autoTableHtmlToJson(document.getElementById("kt_table_users"));
        doc.autoTable({
            html: '#kt_table_users',
            showHead: "firstPage",
        });
        doc.save('sample-file.pdf');
    }
});



function htmlToCSV(html, filename) {
    var data = [];
    var rows = document.querySelectorAll("table tr");
    for (var i = 0; i < rows.length; i++) {
        var row = [];
        var cols = rows[i].querySelectorAll("td, th");
        for (var j = 0; j < cols.length; j++) {
            row.push(cols[j].innerText);
        }

        data.push(row.join(","));
    }
    downloadCSVFile(data.join("\n"), filename);
}


function downloadCSVFile(csv, filename) {
    var csv_file, download_link;

    csv_file = new Blob([csv], { type: "text/csv" });

    download_link = document.createElement("a");

    download_link.download = filename;

    download_link.href = window.URL.createObjectURL(csv_file);

    download_link.style.display = "none";

    document.body.appendChild(download_link);

    download_link.click();
}