# Lucifer, the JavaScript Oraculum

*This app is a personal exercise to practice JavaScript and jQuery.*

Just ask a question and the JS God of Darkness will answer. Anything. Really. But don't forget to indulge Him before asking, otherwise He won't answer properly.

Ok, the trick is that you type the answer while writing the question. Just hit a trigger key like ';' for example and whatever you write will be saved as the answer while the input field will display a default indulgence. Just hit the trigger key again and it will leave the answer mode and the input field will display whatever you type.

I know, it's not like it's a new prank. But I wanted to build this as an exercise. Enjoy!

## Installation

Well...just run:

```bash
git clone https://github.com/grpaiva/lucifer-vanilla.git
```

And then open index.html with ~~Chrome~~ your prefered browser.

## Usage

### Data.js
*The database/configs*

In this file we set up all important variables such as the trigger key, praises array, custom messages etc.

The configs constant holds all configuration:
`lang` is the main language
`triggerKey` you can choose the key that switches on/off the stealth answer typing mode
`textResponse/voiceResponse` either you want the response to be text or voice based (or both)

### Praises
*No praising, no answer*

An array with all default praise expressions. Remember that if you don't hit the trigger key and submit Lucifer will respond with one of the `noPraiseMessages`.

### No Praise Messages
*Don't play with me, kid*

An array of messages that are displayed when a user don't hit the trigger key (usually when your friend tries to type a question).

### Escaping
*Never ask a question if you don't know the answer*

I've created some escaping keywords. Usually a tricked friend will ask questions that don't have answers. So in the file data.js we have an object `escapeMessages` that represents the escaping keyword and a set of messages to be displayed. For instance if you type "future" it will display one of a set of messages such as "Sorry but I can't predict the future".

## Languages
Currently supports `en-US` and `pt-BR`. To add new languages you just need to create translations in data.js file. You'll also need to choose a voice compatible with your language. You can try this to list all available voices:

```JavaScript
window.speechSynthesis.onvoiceschanged = function() {
  
  voices = window.speechSynthesis.getVoices();

  console.log(voices);

};
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)