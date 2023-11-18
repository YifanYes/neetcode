function topKFrequent(nums: number[], k: number): number[] {
  if (nums.length === k) {
    return nums
  }

  const frequency: { [key: number]: number } = {}
  for (const num of nums) {
    if (frequency[num] === undefined) frequency[num] = 0
    frequency[num] += 1
  }

  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(v => Number(v[0]))
}
