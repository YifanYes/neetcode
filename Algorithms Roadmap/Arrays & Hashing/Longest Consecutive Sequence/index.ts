function compareNumbers(a: number, b: number): number {
  return a - b
}

function longestConsecutive(nums: number[]): number {
  const sortedNums = nums.toSorted(compareNumbers)

  const consecutiveNumbersMatrix: number[][] = []
  consecutiveNumbersMatrix.push([sortedNums[0]])

  for (let num of sortedNums) {
    for (let list of consecutiveNumbersMatrix) {
      if (list.includes(num)) break

      const lastNumber = list[list.length - 1]

      if (lastNumber + 1 === num) {
        list.push(num)
      } else {
        consecutiveNumbersMatrix.push([num])
      }
    }
  }

  const consecutiveListLengths = consecutiveNumbersMatrix.map(consecutiveList => consecutiveList.length)

  return Math.max(...consecutiveListLengths)
}

longestConsecutive([2, 20, 4, 10, 3, 4, 5])
