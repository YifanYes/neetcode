function productExceptSelf(nums: number[]): number[] {
  const length: number = nums.length
  const result: number[] = Array(length).fill(1)
  const accumulators: number[] = Array(2).fill(1)

  for (let i = 1; i < length; i++) {
    accumulators[0] *= nums[i - 1]
    accumulators[1] *= nums[length - i]
    result[i] *= accumulators[0]
    result[length - i - 1] *= accumulators[1]
  }
  return result
}
