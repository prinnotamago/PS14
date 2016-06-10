$(document).ready(function(){

  //ボタンをクリックするとフォームの内容を取得する
  $('#message_button').click(function(){
    var message = $('#message').val();
    if(message){
      //サーバに送信する
      $.ajax({
        url: '/messages',
        method: 'POST',
        data: "message=" + message,
        success: function(){
          $('#message').val("");
        }
      });
    }
  });

  function getMessages(){
    $.ajax({
      url: '/messages',
      method: 'GET',
      success: listMessages
    });
  }

  function listMessages(messages){
    //メッセージを表示
    var list = "<ul>";
    for(var i = 0, l = messages.length; i < l; i++){
      list += "<li>" + messages[i] + "</li>";
    }
    list += "</ul>";
    $('#messages').html(list);
  }
  setInterval(getMessages, 1000);

  function getWeatherReport(){
    $.ajax({
      method: 'GET',
      url: '/weather.json',
      success: displayWeatherReport
    });    
  }

  function displayWeatherReport(e){
    $('#weather_info').html(e.temprature + "℃です");
  }
  
  //setInterval(getWeatherReport, 1000);

});
