<template>
    <br>
    <div class="card">
      <h2>Rock Paper Scissors</h2>
      <div class="choices">
        <button @click="play('rock')">Batu</button>
        <button @click="play('paper')">Kertas</button>
        <button @click="play('scissors')">Gunting</button>
      </div>
      <div v-if="result !== null">
        <h2>&nbsp;{{ result }}</h2>
        <div class="tombol">
            <button @click="reset">&nbsp;Play Again</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        choices: ['rock', 'paper', 'scissors'],
        userChoice: null,
        computerChoice: null,
        result: null
      };
    },
    methods: {
      play(userChoice) {
        this.userChoice = userChoice;
        this.computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
        this.calculateResult();
      },
      calculateResult() {
        if (this.userChoice === this.computerChoice) {
          this.result = "Game Seri";
        } else if (
          (this.userChoice === 'rock' && this.computerChoice === 'scissors') ||
          (this.userChoice === 'paper' && this.computerChoice === 'rock') ||
          (this.userChoice === 'scissors' && this.computerChoice === 'paper')
        ) {
          this.result = 'Komputer Menang !';
        } else {
          this.result = 'Anda Menang !';
        }
      },
      reset() {
        this.userChoice = null;
        this.computerChoice = null;
        this.result = null;
      }
    }
  };
  </script>
  
  <style scoped>
  .card{
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    padding: 20px;
    overflow: hidden;
    border-radius: 10px;
    display: flex;
    height: 380px;
    width: 560px;
    display: flex;
    align-items: center;
    color:white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: large;
    opacity: 0.5;
    background: #212121;
    box-shadow: 10px 10px 20px rgb(25, 25, 25),-15px -15px 30px rgb(60, 60, 60);
  }
  .choices {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    background-attachment: fixed;
  }
  
  button {
    font-family: 'Raleway';
    font-size: medium;
    margin-top: 20px;
    border-radius: 30px;
    height: 35px;
    width: 150px;
    border-color: black;
    background-attachment: fixed;
  }

  .tombol{
    display: flex;
    justify-content: center;
    background-attachment: fixed;
  }
  </style>
  