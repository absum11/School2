const { sum, subtract } = require('./math.utils')

describe('testing sum function', () => {
	it('testing numbers', () => {
		expect(sum(2, 3)).toBe(5)
	})

	it('testing string concatenation', () => {
		expect(sum('h', 'i')).toBe('hi')
	})
})

describe('testing subtract function', () => {
	it('testing whole numbers', () => {
		expect(subtract(2, 1)).toBe(1)
	})

	it.todo('testing decimal numbers')
})
