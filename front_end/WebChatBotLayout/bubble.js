$(document).ready(function(){
  $('#btn').click((event)=>{
    event.preventDefault()
      $.post('ask',{
        userQ: $('#fname').val(),
      },(data)=>{
        // $('#bot').html(data);
        var input = $('#fname').val(); //get fname(input)
        var item = '<div class="arrow_box"><h1 class="bubble">' + input + '</div></h1>'; //Chatbot's Bubble(reply); //User's Bubble(input)
        console.log(item);
        $('.Window').append(item); //append user's bubble

        var reply = data   //String for system
        var item2 = data; //Chatbot's Bubble(reply)
        console.log(item2);
        $('.Window').append(item2); //append chatbot's bubble

        var div = document.getElementById('window');
        div.scrollTop = div.scrollHeight; //auto scroll to bottom
      });
  });

  var form = document.forms.namedItem("fileInfo");
  form.addEventListener('submit',(ev)=>{
    var oOutput = $('#ajax-output');
    var oData = new FormData(form);

    var oReq = new XMLHttpRequest();
    oReq.open('POSt','/server',true);
    oReq.onload = (oEvent)=>{
      if(oReq.status == 200){
        oOutput.html('File Uploaded');
      }else{
        oOutput.html = "Errir" + oReq.status;
      }
    }
    oReq.send(oData);
    ev.preventDefault();

  });
});
