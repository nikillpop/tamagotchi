import Character from '../objects/character.js';

export default class One extends Character {
  constructor() {
    super();

    this.stateAnimations = {
      'normal': '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011100111000000001111111100000000100000010000000100100100100000010001100010000001100000010000000101000011000000001101100100000000001101100',
      'hungry': 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
    };
  }
}