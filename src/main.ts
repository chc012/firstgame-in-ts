import * as Phaser from 'phaser';
import Scenes from './scenes';

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Firstgame in TS',
  type: Phaser.AUTO,

  scale: {
    width: 800,
    height: 600,
  },

  scene: Scenes,

  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y:300},
      debug: false
    },
  },

  parent: 'game',
  backgroundColor: '#000000',
};

export const game = new Phaser.Game(gameConfig);
