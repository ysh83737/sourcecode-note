import person, { a } from './ex'
console.log('Hello, I am ', person.name)
console.log('I am ', person.age, ' years old')
console.log('a=', a)
export const name = person.name
export default person.age