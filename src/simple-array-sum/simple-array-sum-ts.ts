/* https://www.hackerrank.com/challenges/simple-array-sum/problem */

import { pipe } from 'ramda'

const args: string[] = process.argv.slice(2)

const strictParseNumber = (arg: string | number): number => typeof arg === 'string' ? parseInt(arg, 10) : arg

const mapToNumberArray = (numbers: string[] | number[]): number[] => numbers.map(n => strictParseNumber(n))

const sumEachOf = (numbers: number[]): number => numbers.reduce((previous, current) => previous + current, 0)

const sum = (numbers: string[] | number[]): number => {
  const sumPipe = pipe(mapToNumberArray, sumEachOf)
  return numbers ? sumPipe(numbers) : 0
}

console.log(sum(args))

export default sum
