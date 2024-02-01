$(document).ready(function(){
    $("#hide").click(function(e){
        e.preventDefault();
        $(".container").hide();
        
        $.ajax({
            type: 'POST',
            url: 'result.php',
            data: {
                action: 'hide'
            },
            success: function(response){
                alert(response);
            }
        });
    });

    $("#show").click(function(e){
        e.preventDefault();
        $(".container").show();

        $.ajax({
            type: 'POST',
            url: 'result.php',
            data: {
                action: 'show'
            },
            success: function(response){
                alert(response);
            }
        });
    });
});
