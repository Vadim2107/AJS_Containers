/* eslint-disable no-else-return */
/* eslint-disable class-methods-use-this */
export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    if (/^[-_\d]/.test(this.name) || /\d{4,}/.test(this.name) || /[а-я]+/ig.test(this.name) || /[-_\d]$/.test(this.name)) {
      return 'Invalid name format!!!';
    } else {
      return this.name;
    }
  }
}
