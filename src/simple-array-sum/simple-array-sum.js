/* https://www.hackerrank.com/challenges/simple-array-sum/problem */

const args = process.argv.slice(2)
args[0]

const sum = (numbers) => {
  return numbers.reduce((previous, current) => parseInt(previous, 10) + parseInt(current, 10), 0)
}

console.log(sum(args))
