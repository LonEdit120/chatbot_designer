$(document).ready(function(){
  $('#btn_ask').click((event)=>{
    event.preventDefault()
      $.post('ask',{
        userQ: $('#userQuestion').val(),
      },(data)=>{
        // $('#bot').html(data);
        var input = $('#userQuestion').val(); //get fname(input)
        console.log(input)
        var item = '<div class="arrow_box"><h1 class="bubble">' + input + '</div></h1>'; //Chatbot's Bubble(reply); //User's Bubble(input)
        console.log(item);
        $('#window').append(item); //append user's bubble

        var reply = data   //String for system
        var item2 = '<div class="arrow_box1"><h1 class="bubble">' + data+ '</div></h1>'; //Chatbot's Bubble(reply)
        console.log(item2);
        $('#window').append(item2); //append chatbot's bubble

        var div = document.getElementById('window');
        div.scrollTop = div.scrollHeight; //auto scroll to bottom
      });
  });

  var form = document.forms.namedItem("fileInfo");
  $('#submt').click((event)=>{
    event.preventDefault()
    console.log('Submit detected')
    var oData = new FormData(form);
    var oReq = new XMLHttpRequest();
    oReq.open('POSt','/server',true);
    oReq.send(oData);
  });
});
