const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question('What activity do you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (listen) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (eat) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              console.log(`My name is ${name}, and my favourite activity is ${activity}. I listen ${listen} to do that.
I like eat ${eat} on ${meal}. My favourite sport is ${sport}. My superpower is ${superpower}`);
              rl.close();
  
            });    
  
          });
  
        });
  
      });
  
    });
  
  });
});
