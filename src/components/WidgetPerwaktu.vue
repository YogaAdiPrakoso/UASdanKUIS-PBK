<template>
  <br>
  <div class="timer">
    <h3>
      TIMER
    </h3>
      <h2>
      {{ formatTime() }}
      </h2>
    <div class="tombol">    
    <button @click="startTimer">Mulai</button>&nbsp;
    <button @click="resetTimer">Ulang</button>&nbsp;
    <button @click="stopTimer">Berhenti</button>&nbsp;
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: 0,
      interval: null
    };
  },
  methods: {
    startTimer() {
      if (!this.interval) {
        this.interval = setInterval(() => {
          this.timer++;
        }, 1000);
      }
    },
    stopTimer() {
      clearInterval(this.interval);
      this.interval = null;
    },
    resetTimer() {
      this.timer = 0;
      clearInterval(this.interval);
      this.interval = null;
    },
    formatTime() {
      const hours = Math.floor(this.timer / 3600);
      const minutes = Math.floor((this.timer % 3600) / 60);
      const seconds = this.timer % 60;

      return `${this.padNumber(hours)}:${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
    },
    padNumber(number) {
      return String(number).padStart(2, '0');
    }
  }
};
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Raleway';

h3{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: large;
}
h2{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: large;
}
.timer{
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  padding: 20px;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  height: 300px;
  width: 560px;
  display: flex;
  align-items: center;
  color:white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: x-large;
  opacity: 0.5;
  background: #212121;
  box-shadow: 10px 10px 20px rgb(25, 25, 25),-15px -15px 30px rgb(60, 60, 60);
}
 .tombol{
  font-family: fantasy;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  font-family:'Raleway';
 }
 button{
  font-family: 'Raleway';
    font-size: medium;
    margin-top: 20px;
    border-radius: 30px;
    height: 35px;
    width: 150px;
    border-color: black;
    background-attachment: fixed;
 }
</style>