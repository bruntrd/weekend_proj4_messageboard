$(document).ready(function(){
    $('#inputForm').submit(function(event){
        event.preventDefault();
        var formData =$('#inputForm').serialize();
        console.log(formData);
        $.ajax({
            type: "POST",
            url: "/db",
            data: formData,
            success: function(data){
                console.log(data);
                getMessage();
            }
        });
    });
    $('.appendedMessages').on('click','button',function(){
        $.ajax({
            type: "DELETE",
            url: "/db/" + $(this).data("id"),
            success: function(){
                console.log("its been, deleted");
            },
            error: function(xhr, status){
                alert("error: ", status);
            },
            complete: function(){
                console.log("delete complete");
            }
        });
        $(this).parent().remove();
    });
    getMessage();
    $('.reload').on('click', '#reloadMessages', function(){
        location.reload(true);
    })

});

function getMessage() {
    $.ajax ({
        type:"GET",
        url:"/db",
        success: function(data){
            appendMessage(data);
        }
    })
}

function appendMessage(data){
    $('.appendedMessages').empty();
    for (var i=0; i<data.length; i++){
        $('.appendedMessages').append("<div></div>")
        var $el = $('.appendedMessages').children().last();
        $el.append("<p class='jack row well'>Name: " + data[i].name + "<br>Message: "+ data[i].message + "</p>");
        //$el.append("<p class=>Message: "
        //$el.append("<button data-id='"+data[i]._id+"'>delete</button>");


    }
}