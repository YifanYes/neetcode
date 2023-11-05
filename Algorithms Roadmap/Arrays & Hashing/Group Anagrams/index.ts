function alphabeticallySort(text: string) {
  return text.split('').sort().join('')
}

function groupAnagrams(strs: string[]): string[][] {
  const results = new Map<string, string[]>()

  for (let text of strs) {
    const anagram = alphabeticallySort(text)
    results.has(anagram) ? results.get(anagram)?.push(text) : results.set(anagram, [text])
  }

  return Array.from(results.values())
}
