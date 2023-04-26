export const yearRegex = /^(?:19|20)\d{2}$/
export const dayRegex = /^(([1-9]|3[0-1])([,-](?=\d)|$))+$/
export const phoneRegex = /(?=(^([^\d]*?\d){11}$))^((8||\+7)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/
export const monthRegex = /^(Январь|Февраль|Март|Апрель|Май|Июнь|Июль|Август|Сентябрь|Октябрь|Ноябрь|Декабрь)(, (?!\1)(Январь|Февраль|Март|Апрель|Май|Июнь|Июль|Август|Сентябрь|Октябрь|Ноябрь|Декабрь))*$/
export const cyrrilicLatterRegex = /^[a-яё]+(?:[ -][a-яё]+)*$/i

