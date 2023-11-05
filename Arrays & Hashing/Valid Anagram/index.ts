function alphabeticallySort(text: string) {
  return text.split('').sort().join('');
}

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  return alphabeticallySort(s) === alphabeticallySort(t);
}

console.log(isAnagram('anagram', 'xasdf'));
