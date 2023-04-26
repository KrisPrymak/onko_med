const rusAlphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ъ', 'э', 'ю', 'я']
const engAlphabet = ['a', 'b', 'v', 'g', 'd', 'e', 'yo', 'zh', 'z', 'i', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'h', 'ts', 'ch', 'sh', 'sch', '', '', 'e', 'u', 'ya']

const wordArray = (word) => {
  return word.toLowerCase().split('')
}

const findEngLetter = (letter) => {
  if (rusAlphabet.indexOf(letter) === -1) {
    return letter
  }
  return engAlphabet[rusAlphabet.indexOf(letter)]
}

export const generateLogin = (name, surname) => {
  let login = []
  login.push(findEngLetter((wordArray(name)[0])))
  login.push('.')
  wordArray(surname).map(letter => login.push(findEngLetter(letter)))
      return login.join('');
}