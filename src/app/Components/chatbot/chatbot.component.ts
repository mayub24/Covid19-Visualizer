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


      ["great", "awesome", "good", "not bad", "fantastic"],

      // 3rd User input
      ["whats happening?", "whats up?"],

      // User input regarding covid 19
      ["whats covid-19?", "whats coronavirus?", "information on coronavirus", "information on covid-19", "give me information on covid-19", "give me information on coronavirus", "whats corona virus?"],

      // User input regarding gloves, masks, wipes, hand sanitizer
      ["where can i buy gloves?", "where can i buy masks?", "where can i buy hand sanitizer?", "where can i buy a mask?", "where can i buy disinfecting wipes?"],

      ["do i have covid-19?", "do i have coronavirus?", "do i have the virus?", "do i have corona virus?"]
    ]

  botArray: any =
    [
      ["Hi! Welcome to Mo Bot!", "Hello there!, Welcome to Mobotz!"],

      ["Good! Yourself?", "Amazing! How are you?"],

      ["Good to hear, How can i help you regarding covid-19?", "Nice to hear, How may i assist in in regards to Covid-19?"],

      ["Just coding as always...", "bored to death..."],

      ["Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus."],

      ["Please follow the links above for COVID-19 equipment."],

      ["Most common symptoms: fever, dry cough, tiredness. If you are experiencing any of these severly, please get tested as soon as possible. Visit https://www.who.int for more information."]
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

      // this.typedVal = inputVal.toLowerCase();


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
      if (this.compareText(this.userArray, this.botArray, this.typedVal.toLowerCase())) {
        console.log(this.userArray);
        console.log(this.botArray);
        console.log(this.typedVal);
      }
      else if (!this.compareText(this.userArray, this.botArray, this.typedVal)) {
        this.singleBotResponse = this.notFoundValue[Math.floor(Math.random() * this.notFoundValue.length)];

        console.log(this.singleBotResponse);
        this.holder.push(`Bot: ` + this.singleBotResponse);
      }



      // Resetting input
      (<HTMLInputElement>document.querySelector('.chat')).value = "";
    }

  }

}
