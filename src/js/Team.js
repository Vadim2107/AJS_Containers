export default class Team {
  constructor() {
    this.members = new Set();
  }

  // add(character) {
  //   const { size } = this.members;
  //   this.members.add(character);
  //   if (size === this.members.size) throw new Error('This character already exists in the team!');
  // }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('This character already exists in the team!');
    } else {
      this.members.add(character);
    }
  }

  addAll(characterList) {
    this.members = new Set([...this.members, ...characterList]);
  }

  toArray() {
    const arrSet = Array.from(this.members);
    return arrSet;
  }
}
