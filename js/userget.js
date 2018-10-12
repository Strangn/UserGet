$().ready(() => {


    $.getJSON("http://localhost:8080/Users/Get/2")
        .then((resp) => {
            console.log(resp);
            render(resp.Data);
        });

    });
function render(user)  {
    $("#pid").val(user.Id);
    $("#pname").val(user.FirstName + " " +user.LastName);
    $("#pusername").val(user.UserName);
    $("#pphone").val(user.PhoneNumber);
    $("#pemail").val(user.Email);
    $("#previewer").prop("checked", user.Reviewer);
    $("#padmin").prop("checked", user.Admin);
}   