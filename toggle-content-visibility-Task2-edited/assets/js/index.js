$(document).ready(function () {
    $("#hide").click(function (e) {
        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: 'result.php',
            data: {
                hide_page: true
            },
            success: function (response) {
                
                $(".container").hide();
                
            }
        });
    });

    $("#show").click(function (e) {
        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: 'result.php',
            data: {
                show_page: true
            },
            success: function (response) {
                
                $(".container").show();
                
            }
        });
    });
});
