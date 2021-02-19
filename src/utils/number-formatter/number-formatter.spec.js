import formatNumber from './number-formatter';

it("expect thousands dollar amount to be formatted to 2 signficant digits", () => {
  expect(formatNumber("dollars suffix", 12345.9)).toBe("$12k")
})

it("expect hundred thousands dollar amount to be formatted to 2 signficant digits", () => {
  expect(formatNumber("dollars suffix", 123450.9)).toBe("$120k")
})

it("expect hundred thousands dollar amount to be formatted to 3 signficant digits", () => {
  expect(formatNumber("dollars suffix", 123450.9, 3)).toBe("$123k")
})

it("expect million dollar amount to be formatted to 2 signficant digits", () => {
  expect(formatNumber("dollars suffix", 56220000.999)).toBe("$56M")
})

it("expect billion dollar amount to be formatted to 2 signficant digits", () => {
  expect(formatNumber("dollars suffix", 56220000000.999)).toBe("$56B")
})

it("expect hundred billion dollar amount to be formatted to 2 signficant digits", () => {
  expect(formatNumber("dollars suffix", 567220000000.999)).toBe("$570B")
})

it("expect hundred billion dollar amount to be formatted to 3 signficant digits", () => {
  expect(formatNumber("dollars suffix", 567220000000.999, 3)).toBe("$567B")
})

it("expect hundred trillion dollar amount to be formatted to 2 signficant digits", () => {
  expect(formatNumber("dollars suffix", 567220000000000.989)).toBe("$570T")
})

it("expect trillion dollar amount to be formatted to 3 signficant digits with decimal point", () => {
  expect(formatNumber("dollars suffix", 5672200000000.889, 3)).toBe("$5.67T")
})

it("expect ten trillion dollar amount to be formatted to 3 signficant digits with decimal point", () => {
  expect(formatNumber("dollars suffix", 56722000000000.889, 3)).toBe("$56.7T")
})

it("expect hundred trillion dollar amount to be formatted to 3 signficant digits - case #1", () => {
  expect(formatNumber("dollars suffix", 567220000000000.889, 3)).toBe("$567T")
})

it("expect hundred trillion dollar amount to be formatted to 3 signficant digits - case #2", () => {
  expect(formatNumber("dollars suffix", 567220000000000.889, 3)).toBe("$567T")
})

it("expect tens million dollar amount to be formatted to 2 signficant digits - case #1", () => {
  expect(formatNumber("dollars suffix", 24467711, 3)).toBe("$24M")
})

it("expect tens million dollar amount to be formatted to 2 signficant digits - case #2", () => {
  expect(formatNumber("dollars suffix", 24567711, 3)).toBe("$25M")
})
