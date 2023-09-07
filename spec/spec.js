describe('ageClassification', function () {
  it('should return null for negative age', function () {
    expect(ageClassification(-1)).toBeNull();
  });

  it('should return "детский возраст" for ages between 1 and 24', function () {
    expect(ageClassification(1)).toBe('детский возраст');
    expect(ageClassification(24)).toBe('детский возраст');
  });

  it('should return "молодой возраст" for ages between 24.01 and 44', function () {
    expect(ageClassification(24.01)).toBe('молодой возраст');
    expect(ageClassification(44)).toBe('молодой возраст');
  });

  it('should return "средний возраст" for ages between 44.01 and 65', function () {
    expect(ageClassification(44.01)).toBe('средний возраст');
    expect(ageClassification(65)).toBe('средний возраст');
  });

  it('should return "пожилой возраст" for ages between 65.01 and 75', function () {
    expect(ageClassification(65.01)).toBe('пожилой возраст');
    expect(ageClassification(75)).toBe('пожилой возраст');
  });

  it('should return "старческий возраст" for ages between 75.01 and 90', function () {
    expect(ageClassification(75.01)).toBe('старческий возраст');
    expect(ageClassification(90)).toBe('старческий возраст');
  });

  it('should return "долгожители" for ages between 90.01 and 122', function () {
    expect(ageClassification(90.01)).toBe('долгожители');
    expect(ageClassification(122)).toBe('долгожители');
  });

  it('should return null for ages above 122', function () {
    expect(ageClassification(122.01)).toBeNull();
    expect(ageClassification(150)).toBeNull();
  });
});
