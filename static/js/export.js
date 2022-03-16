$(document).ready(function() {
    $('#exportTable').DataTable({
        dom: 'Bfrtip',
        buttons: [{
                extend: 'excel',
                text: 'Excel',
                className: 'exportExcel',
                filename: 'Test_Excel',
                exportOptions: { modifier: { page: 'all' } }
            },
            {
                extend: 'csv',
                text: 'CSV',
                className: 'exportExcel',
                filename: 'Test_Csv',
                exportOptions: { modifier: { page: 'all' } }
            },
            {
                extend: 'pdf',
                text: 'PDF',
                className: 'exportExcel',
                filename: 'Test_Pdf',
                exportOptions: { modifier: { page: 'all' } }
            }
        ]
    });

})