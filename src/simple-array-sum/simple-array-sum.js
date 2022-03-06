/* https://www.hackerrank.com/challenges/simple-array-sum/problem */

const args = process.argv.slice(2)

const sum = (numbers) => {
  return numbers
    ? numbers.reduce((previous, current) => parseInt(previous, 10) + parseInt(current, 10), 0)
    : 0
}

export default sum

console.log(sum(args))
