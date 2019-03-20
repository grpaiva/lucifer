var globals = [];

$(document).ready(function(){

  $('#questionInput').focus();
  
  initLucifer();

  $('#questionInput').focus(function(){
    answer('clear');
  });

  $('#questionInput').keydown(function(e){

    if(globals.switcher && globals.indulgenceChars.length > globals.inputValue.length){
  
      e.preventDefault();
  
      switch (e.key) {
        case 'Shift':
        case 'Alt':
        case 'Dead':
          break;

        case 'Enter':
          handleEnterKey(e);
          break;
        
        case 'Backspace':
  
          globals.answer = globals.answer.slice(0, globals.answer.length - 1);
  
          globals.inputValue = globals.inputValue.slice(0, globals.inputValue.length - 1);
  
          globals.counter--;
          
          break;
  
        case ';':
  
          if(globals.switcher){
  
            globals.switcher = 0;
  
          }else{
  
            globals.switcher = 1;
  
          }
  
          break;
      
        default:
  
          globals.hiddenInputValue += e.key;
  
          globals.inputValue += globals.indulgenceChars[globals.counter];
  
          globals.counter++;
  
          globals.answer += e.key;
  
          break;
      }
  
      $(this).val(globals.inputValue);
  
    }else{

      switch(e.key){
        
        case 'Enter':
          
          handleEnterKey(e);
          
          break;

        case ';':

          e.preventDefault();

          globals.switcher = 1;

          break;

        default:
          
          break;

      }

    }
  
  });
  
  $('#submitButton').click(function(){
    
    submit();
  
  });

});

function handleEnterKey(e){
  
  e.preventDefault();
  
  submit();

}

async function submit(){

  $('#loader').removeClass('hidden');

  var ms = randomize(3000);

  await sleep(ms);

  if(!escape(globals.hiddenInputValue)){

    if(globals.hiddenInputValue.length == 0){

      answer(globals.noIndulgenceResponse);
  
    }else{
      
      answer(globals.answer);
    
    }

  }else{

    var messages = escapeMessages[globals.hiddenInputValue];

    answer(messages[randomize(messages.length)]);

  }
  
  initLucifer();

}

function escape(keyword){

  var resp;

  if(keyword in escapeMessages){

    resp = true;

  }else{

    resp = false;

  }

  return resp;

}

function randomize(max){

  return Math.floor(Math.random() * max);

}

function initLucifer(){

  var rand = randomize(indulgences.length);

  var indulgence = indulgences[rand];

  var rand2 = randomize(noIndulgenceResponses.length);

  globals.noIndulgenceResponse = noIndulgenceResponses[rand2];

  globals.indulgenceChars = indulgence.split('');

  globals.answer = [];

  globals.hiddenInputValue = '';

  globals.inputValue = '';

  globals.switcher = 0;

  globals.counter = 0;

  $('#questionInput').val('');

  $('#loader').addClass('hidden');

}

async function answer(content){

  if(content != 'clear'){

    $('#alert').text(content);

    $('#alert').removeClass('hidden');
  
  }else{

    $('#alert').addClass('hidden');

  }

}

function sleep(ms) {

  return new Promise(resolve => setTimeout(resolve, ms));

}