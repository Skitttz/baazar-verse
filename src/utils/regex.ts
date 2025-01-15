const cnpjRegex = /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/;
const phoneRegex = /^\(?\d{2}\)?\s?\d{5}[-\s]?\d{4}$/;
const passwordRegex = /^(?=.*[a-zà-öø-ÿ])(?=.*[A-ZÀ-ÖØ-öø-ÿ])(?=.*\d)(?=.*[@$!%*?&#^()_+=\[\]{}|\\:;'"<>,./~`-])[A-Za-zÀ-ÖØ-öø-ÿ\d@$!%*?&#^()_+=\[\]{}|\\:;'"<>,./~`-]{8,}$/;
const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const cepRegex = /^\d{5}-?\d{3}$/;
const fixePhoneRegex = /^\(?\d{2}\)?\s?\d{4}[-\s]?\d{4}$/;
const regexNumbers = (value: string = "0") => value.match(/\d+/g) || [];

export {
  cnpjRegex,
  phoneRegex,
  passwordRegex,
  cpfRegex,
  mailRegex,
  cepRegex,
  fixePhoneRegex,
  regexNumbers
};