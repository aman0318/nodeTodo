$( document ).ready(function() {
    $("#submit").on('click',function(){
        var text = $("#newtodo").val();
        let datwe={"text":text};
        $.ajax({
            type: 'POST',
            url: '/todo' ,
            data:datwe,
            success: function(data){
              //do something with the data via front-end framework
              location.reload();
            }
          });
    })
    $('li').on('click', function(){
        var item = $(this).text().replace(/ /g, "-");
        $.ajax({
          type: 'DELETE',
          url: '/todo/' + item,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
    });
});