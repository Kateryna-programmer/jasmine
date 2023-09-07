describe('weekFn', function () {
  it('should return "Понедельник" for input 1', function () {
    expect(weekFn(1)).toBe('Понедельник');
  });

  it('should return "Среда" for input 3', function () {
    expect(weekFn(3)).toBe('Среда');
  });

  it('should return "Воскресенье" for input 7', function () {
    expect(weekFn(7)).toBe('Воскресенье');
  });

  it('should return null for input 9', function () {
    expect(weekFn(9)).toBeNull();
  });

  it('should return null for input 1.5', function () {
    expect(weekFn(1.5)).toBeNull();
  });

  it('should return null for input "2"', function () {
    expect(weekFn('2')).toBeNull();
  });
});
