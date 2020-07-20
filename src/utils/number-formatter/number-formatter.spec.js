import formatNumber from './number-formatter';

it('expect thousands dollar amount to be formatted to 2 signficant digits', () => {
	expect(formatNumber('dollars suffix', 12345.90)).toBe('$12 k');
});

it('expect hundred thousands dollar amount to be formatted to 2 signficant digits', () => {
	expect(formatNumber('dollars suffix', 123450.90)).toBe('$120 k');
});

it('expect hundred thousands dollar amount to be formatted to 3 signficant digits', () => {
	expect(formatNumber('dollars suffix', 123450.90, 3)).toBe('$123 k');
});

it('expect million dollar amount to be formatted to 2 signficant digits', () => {
	expect(formatNumber('dollars suffix', 56220000.999)).toBe('$56 M');
});

it('expect billion dollar amount to be formatted to 2 signficant digits', () => {
	expect(formatNumber('dollars suffix', 56220000000.999)).toBe('$56 B');
});

it('expect hundred billion dollar amount to be formatted to 2 signficant digits', () => {
	expect(formatNumber('dollars suffix', 567220000000.999)).toBe('$570 B');
});

it('expect hundred billion dollar amount to be formatted to 3 signficant digits', () => {
	expect(formatNumber('dollars suffix', 567220000000.999, 3)).toBe('$567 B');
});

it('expect hundred trillion dollar amount to be formatted to 2 signficant digits', () => {
	expect(formatNumber('dollars suffix', 567220000000000.989)).toBe('$570 T');
});

it('expect hundred trillion dollar amount to be formatted to 3 signficant digits', () => {
	expect(formatNumber('dollars suffix', 567220000000000.889, 3)).toBe('$567 T');
});
