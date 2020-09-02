export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('This character already exists in the team!');
    } else {
      this.members.add(character);
    }
  }

  addAll(...character) {
    if (!this.members.has(character)) {
      this.members.add(character);
    }
  }

  toArray() {
    const arrSet = Array.from(this.members);
    return arrSet;
  }
}
