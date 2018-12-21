$(document).ready(function () {
    var flag = true;

    $('#maincontainer').load('file1.html');
    $(document).on("click","p", changeCss );


    $('#changeBtn').click(function () {
        $('#maincontainer').empty();
        if (flag) {
            // $('#maincontainer').load('file2.html');
            $('#maincontainer').load('loader.html');
            flag = false;
            return;
        }
        $('#maincontainer').load('file1.html');
        flag = true;
    });

});

function changeCss () {
    $(this).css({
        'backgroundColor': 'pink',
        "color": "white",
        "font-size": '25px'
    });

    console.log($(this).text());
}

