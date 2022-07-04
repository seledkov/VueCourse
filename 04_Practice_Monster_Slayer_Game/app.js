const getMinMaxRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + 1) + min;
};

const actions = {
  ATTACK: ' attack and deal ',
  HEAL: ' heal himself ',
  STRONG_ATTACK: ' strong attack and deal ',
};

const roles = {
  PLAYER: 'Gamer',
  MONSTER: 'Monster',
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      strongAttackCooldown: 0,
      turnCounter: 0,
      winner: null,
      logEntries: [],
    };
  },
  watch: {
    turnCounter() {
      if (this.strongAttackCooldown > 0) {
        this.strongAttackCooldown--;
      }
    },
    playerHealth() {
      if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
      } else if (this.playerHealth > 0 && this.monsterHealth <= 0) {
        this.winner = 'player';
      }
    },
    monsterHealth() {
      if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
      } else if (this.monsterHealth > 0 && this.playerHealth <= 0) {
        this.winner = 'monster';
      }
    },
  },
  computed: {
    monsterHealthWidth() {
      if (this.monsterHealth > 0) {
        return this.monsterHealth + '%';
      } else {
        return '0%';
      }
    },
  },
  methods: {
    addLogEntry(role, action, value) {
      this.logEntries.unshift({ role, action, value });
    },
    resetGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turnCounter = 0;
      this.strongAttackCooldown = 0;
      this.winner = null;
      this.logEntries = [];
    },
    surrenderGame() {
      this.winner = 'monster';
    },
    attackMonster() {
      const dmgValue = getMinMaxRandomNumber(5, 12);
      this.monsterHealth -= dmgValue;
      console.log(this.playerHealth, dmgValue);

      this.addLogEntry('player', 'attack', dmgValue);

      this.attackPlayer();

      this.turnCounter++;
    },
    attackPlayer() {
      const dmgValue = getMinMaxRandomNumber(8, 15);
      this.playerHealth -= dmgValue;

      this.addLogEntry('monster', 'attack', dmgValue);
    },
    strongAttackMonster() {
      // const playerDmg = Math.floor(Math.random() * (12 - 5) + 5);
      this.strongAttackCooldown = 3;
      const dmgValue = getMinMaxRandomNumber(10, 25);
      this.monsterHealth -= dmgValue;

      this.addLogEntry('player', 'attack', dmgValue);

      this.attackPlayer();

      this.turnCounter++;
    },
    healPlayer() {
      let healValue = getMinMaxRandomNumber(9, 16);
      if (this.playerHealth + healValue > 100) {
        healValue = 100 - this.playerHealth;
      }
      this.playerHealth += healValue;

      this.addLogEntry('player', 'heal', healValue);

      this.attackPlayer();

      this.turnCounter++;
    },
  },
});

app.mount('#game');
