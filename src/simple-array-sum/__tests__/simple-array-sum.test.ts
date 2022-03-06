import sum from '../simple-array-sum-ts'

describe('simple-array-sum', () => {
  it.each([
    [[10, 10, 10], 30],
    [[100, 70, 5], 175],
    [[0, 8], 8],
    [[2, 2, 2, 2, 2, 2, 2, 2], 16]
  ])('should sum numbers', (numbers: number[], expectedSum: number) => {
    expect(sum(numbers)).toBe(expectedSum)
  })

  it.each([
    [[-2, -2], -4],
    [[-100, -70, -5], -175],
    [[-1, 0], -1],
    [[2, -2, 2, 2, 2, -2, 2, 2], 8],
    [[-2, 4], 2]
  ])('should sum negative numbers', (numbers: number[], expectedSum: number) => {
    expect(sum(numbers)).toBe(expectedSum)
  })

  it.each([
    [['10', '10', '10'], 30],
    [['100', '70', '5'], 175],
    [['0', '8'], 8],
  ])('should sum numbers with string args', (numbers: string[], expectedSum: number) => {
    expect(sum(numbers)).toBe(expectedSum)
  })

  // no need on ts
  // it('should return 0 when no argument is passed', () => {
  //   expect(sum()).toBe(0)
  // })

  it('should return 0 when argument is empty array', () => {
    expect(sum([])).toBe(0)
  })
})
