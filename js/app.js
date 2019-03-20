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

function submit(){

  await sleep(2000);

  if(globals.hiddenInputValue.length == 0){

    answer(globals.noIndulgenceResponse);

  }else{
    
    answer(globals.answer);
  
  }
  
  initLucifer();

}

function initLucifer(){

  var rand = Math.floor(Math.random() * indulgences.length);

  var indulgence = indulgences[rand];

  var rand2 = Math.floor(Math.random() * noIndulgenceResponses.length);

  globals.noIndulgenceResponse = noIndulgenceResponses[rand2];

  globals.indulgenceChars = indulgence.split('');

  globals.answer = [];

  globals.hiddenInputValue = '';

  globals.inputValue = '';

  globals.switcher = 0;

  globals.counter = 0;

  $('#questionInput').val("");

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