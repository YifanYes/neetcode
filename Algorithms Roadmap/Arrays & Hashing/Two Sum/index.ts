function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, { index: number }>()

  for (let i = 0; i < nums.length; i++) {
    const num = target - nums[i]
    const result = map.get(num)

    if (result) return [result.index, i]

    map.set(nums[i], { index: i })
  }

  return []
}
