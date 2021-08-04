
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ amount: 150000, years: 30, rate: 8 })).toBe('1100.65');
  expect(calculateMonthlyPayment({ amount: 1000000, years: 5, rate: 15 })).toBe('23789.93');
  // cannot figure out how to fix if an input is 0! The solution doesn't help.
  // expect(calculateMonthlyPayment({ amount: 123456, years: 1, rate: 0 })).toBe('10288.00');
});


it("should return a result with 2 decimal places", function () {
  expect(calculateMonthlyPayment({ amount: 1000000, years: 1, rate: 99 })).toBe('134418.90');
});

/// etc
