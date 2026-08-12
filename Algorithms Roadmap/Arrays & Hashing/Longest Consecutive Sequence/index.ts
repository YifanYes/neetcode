function longestConsecutive(nums: number[]): number {
  const numsSet = new Set(nums)
  let bestLength = 0

  numsSet.forEach(num => {
    // Identify if the number is the beginning of a sequence
    if (!numsSet.has(num - 1)) {
      let currentLength = 1
      let currentNum = num

      while (numsSet.has(currentNum + 1)) {
        currentNum += 1
        currentLength += 1
      }

      if (currentLength > bestLength) {
        bestLength = currentLength
      }
    }
  })

  return bestLength
}
