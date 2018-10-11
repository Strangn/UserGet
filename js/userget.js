$().ready(function() {

    var url = "http://localhost:8080/UserGet/List"

    $.getJSON(url)
        .then(function(jsonResponse)  {
                console.log(jsonResponse);
                render(jsonResponse);
        });

});

function render(jsonResponse)  {
    var tbody = $("#tbody");
    var usergets = jsonResponse.data;
    for(var userget of usergets)  {
        var row = "<tr>";
        row += "<td>" + product.id + "</td>";
        row += "<td>" + product.name + "</td>";
        row += "<td>" + product.price + "</td>";
        row += "<td>" + product.vendor.name + "</td>";
        row += "</tr>";
        tbody.append(row);
    }
}