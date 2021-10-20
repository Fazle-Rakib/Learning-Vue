// You can write JS function in vue if you don't use it in vue controlled property also in the html
// but can use it as a normal function in js file
function rand(max, min) {
  return Math.random() * (max - min) + min;
}
const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      winner: null,
      currentRound: 0,
      logArr: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  computed: {
    showPlayerHealth() {
      if (this.playerHealth < 0) {
        this.playerHealth = 0;
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    showMonsterHealth() {
      if (this.monsterHealth < 0) {
        this.monsterHealth = 0;
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    mayUseSA() {
      return this.currentRound % 3 !== 2;
    },
  },
  methods: {
    startGame() {
      (this.playerHealth = 100),
        (this.monsterHealth = 100),
        (this.winner = null),
        (this.currentRound = 0),
        (this.logArr = []);
    },
    onAttackMonster() {
      this.currentRound++;
      const attackValue = Math.floor(rand(12, 5));
      this.monsterHealth -= attackValue;
      this.addLogMsg("Player", "Attack", attackValue);
      this.onAttackPlayer();
    },
    onAttackPlayer() {
      const attackValue = Math.floor(rand(15, 8));
      this.playerHealth -= attackValue;
      this.addLogMsg("Monster", "Attack", attackValue);
    },
    onSpecialAttack() {
      this.currentRound++;
      const attackValue = Math.floor(rand(18, 8));
      this.monsterHealth -= attackValue;
      this.addLogMsg("Player", "Attack", attackValue);
      this.onAttackPlayer();
    },
    onHeal() {
      const healvalue = Math.floor(rand(25, 8));
      if (this.playerHealth + healvalue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healvalue;
      }
      this.addLogMsg("Player", "Heal", healvalue);
    },
    onSurrender() {
      this.winner = "monster";
      this.addLogMsg("Player", "Surrender", null);
    },
    addLogMsg(who, what, value) {
      this.logArr.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
