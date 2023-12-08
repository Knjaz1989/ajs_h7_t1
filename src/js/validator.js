class Validator {
  validateUsername (str) {
    return str.match(/^(?!.*\d{4,})[a-zA-Z][\w-]*[a-zA-Z]$/);
  }
}

export const validator = new Validator();
