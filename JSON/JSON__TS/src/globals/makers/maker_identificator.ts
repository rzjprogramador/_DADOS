export function makeID(): string {
  return Date.now().toString()
}

export function makeCodigo(): string {
  return Date.now().toString()
}

export function makeDate(): Date {
  return new Date(Date.now())
}

export function makeIncrementNumber(): number {
  return Date.now()
}
