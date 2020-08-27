import formatNumber from "./number-formatter"

it("expect thousands dollar amount to be formatted to 2 signficant digits", () => {
  expect(formatNumber("dollars suffix", 12345.9)).toBe("$12 k")
})

it("expect hundred thousands dollar amount to be formatted to 2 signficant digits", () => {
  expect(formatNumber("dollars suffix", 123450.9)).toBe("$120 k")
})

it("expect hundred thousands dollar amount to be formatted to 3 signficant digits", () => {
  expect(formatNumber("dollars suffix", 123450.9, 3)).toBe("$123 k")
})

it("expect million dollar amount to be formatted to 2 signficant digits", () => {
  expect(formatNumber("dollars suffix", 56220000.999)).toBe("$56 M")
})

it("expect billion dollar amount to be formatted to 2 signficant digits", () => {
  expect(formatNumber("dollars suffix", 56220000000.999)).toBe("$56 B")
})

it("expect hundred billion dollar amount to be formatted to 2 signficant digits", () => {
  expect(formatNumber("dollars suffix", 567220000000.999)).toBe("$570 B")
})

it("expect hundred billion dollar amount to be formatted to 3 signficant digits", () => {
  expect(formatNumber("dollars suffix", 567220000000.999, 3)).toBe("$567 B")
})

it("expect hundred trillion dollar amount to be formatted to 2 signficant digits", () => {
  expect(formatNumber("dollars suffix", 567220000000000.989)).toBe("$570 T")
})

it("expect trillion dollar amount to be formatted to 3 signficant digits with decimal point", () => {
  expect(formatNumber("dollars suffix", 5672200000000.889, 3)).toBe("$5.67 T")
})

it("expect ten trillion dollar amount to be formatted to 3 signficant digits with decimal point", () => {
  expect(formatNumber("dollars suffix", 56722000000000.889, 3)).toBe("$56.7 T")
})

it("expect hundred trillion dollar amount to be formatted to 3 signficant digits - case #1", () => {
  expect(formatNumber("dollars suffix", 567220000000000.889, 3)).toBe("$567 T")
})

it("expect hundred trillion dollar amount to be formatted to 3 signficant digits - case #2", () => {
  expect(formatNumber("dollars suffix", 567220000000000.889, 3)).toBe("$567 T")
})

it("expect tens million dollar amount to be formatted to 2 signficant digits - case #1", () => {
  expect(formatNumber("dollars suffix", 24467711, 3)).toBe("$24 M")
})

it("expect tens million dollar amount to be formatted to 2 signficant digits - case #2", () => {
  expect(formatNumber("dollars suffix", 24567711, 3)).toBe("$25 M")
})
