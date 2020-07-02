import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {

  enterz: any;
  typedVal: string;
  replacedWord: string;
  botValz: string;
  singleBotResponse: string;

  // User holder
  holder = [];

  userArray: any =
    [
      // 1st User input
      ["hi", "hello"],

      // 2nd user input
      ["how is everything?", "how are you?"],

      // 3rd User input
      ["whats happening?", "whats up?"],

      // User input regarding covid 19
    ]

  botArray: any =
    [
      ["Hi! Welcome to Mo Bot!", "Hello there!, Welcome to Mobotz!"],

      ["Good! Yourself?", "Amazing! How are you?"],

      ["Just coding as always...", "bored to death?"]
    ]

  notFoundValue: any =
    ["Can you say something else?", "Can you repeat that clearly?", "Sorry, I could not understand..."]

  robot: any = ["How do you do, fellow human", "I am not a bot"];


  constructor() {

  }
  ngOnInit() {
  }


  compareText(user, bot, typedInput) {
    this.userArray = user;
    this.botArray = bot;
    // this.replacedWord = typedInput;

    let botResponses;
    // let randomBotResponse;

    for (let a = 0; a < this.userArray.length; a++) {
      for (let b = 0; b < this.botArray.length; b++) {
        if (this.userArray[a][b] === typedInput) {

          // seeing what both bot and user r saying
          console.log(this.userArray[a][b]); // user said "hi"
          console.log(this.botArray[a][b]); // bot saaid his stuff
          console.log(this.typedVal); // user types hi


          botResponses = this.botArray[a];
          this.singleBotResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
          console.log(this.singleBotResponse);
          this.holder.push(`Bot: ` + this.singleBotResponse);
        }
      }
    }

    return this.singleBotResponse;

  }


  // Getting input and adding event listener
  keyPressed(e) {
    // console.log(e);
    // console.log(e.key);
    let inputVal = (<HTMLInputElement>document.querySelector('.chat')).value;


    if (e.code === "Enter") {
      console.log("You have clicked enter omg!!!");
      console.log(inputVal);
      this.typedVal = inputVal;

      this.holder.push(`Customer: ` + inputVal);


      // console.log(this.userHolder);
      // console.log(this.botHolder);






      // this.typedVal = inputVal.toLowerCase().replace(/[^\w\s\d]/gi, "");


      // this.typedVal = this.typedVal
      //   .replace(/hows/g, "how is")
      //   .replace(/ im /g, "I am")
      //   .replace(/ a /g, " ")
      //   .replace(/i feel /g, "")
      //   .replace(/whats/g, "what is")
      //   .replace(/please /g, "")
      //   .replace(/ please/g, "")

      // Calling the show function after user clicks enter
      // this.showAllOutput(inputVal);
      if (this.compareText(this.userArray, this.botArray, this.typedVal)) {
        console.log(this.userArray);
        console.log(this.botArray);
        console.log(this.typedVal);
      }
      else {
        this.singleBotResponse = this.notFoundValue[Math.floor(Math.random() * this.notFoundValue.length)];

        console.log(this.singleBotResponse);
        this.holder.push(this.singleBotResponse);
      }



      // Resetting input
      (<HTMLInputElement>document.querySelector('.chat')).value = "";
    }

  }

}
