class DynamicArray {
  capacity: number
  length: 0
  array: number[]

  constructor(capacity: number) {
    this.capacity = capacity
    this.length = 0
    this.array = Array(capacity).fill(0)
  }

  // Return element at index i
  public get(i: number): number {
    return this.array[i]
  }

  // Set the element at index i to n
  public set(i: number, n: number): void {
    this.array[i] = n
    this.length++
  }

  // Push the element n to the end of the array
  public pushback(n: number): void {
    if (this.length === this.capacity) this.resize()

    this.array[this.length] = n
    this.length++
  }

  // Pop and return element at the end of the array
  public popback(): number | undefined {
    if (this.length > 0) this.length--

    return this.array[this.length]
  }

  // Double the capacity of the array
  public resize(): void {
    const currentArray = [...this.array]
    const extension = Array(this.capacity).fill(0)
    this.array = [...currentArray, ...extension]
    this.capacity *= 2
  }

  // Return the number of elements in the array
  public getSize(): number {
    return this.length
  }

  // Return the capacity of the array
  public getCapacity(): number {
    return this.capacity
  }
}
