export default class ErrorRepository {
  constructor(code, text) {
    this.code = code;
    this.text = text;
    this.errors = new Map();

    this.errors.set(this.code, this.text);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    } else {
      return 'Unknown error';
    }    
  }
}
