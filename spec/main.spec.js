describe("Checking the age", () => {
  it("age -1 : null", () => {
    expect(ageClassification(-1)).toBe(null);
  });

  it("age 1 : детский возраст", () => {
    expect(ageClassification(1)).toBe("детский возраст");
  });

  it("age  24 : детский возраст", () => {
    expect(ageClassification(24)).toBe("детский возраст");
  });
  it("age  24.01 : молодой возраст", () => {
    expect(ageClassification(24.01)).toBe("молодой возраст");
  });

  it("age  44 : молодой возраст", () => {
    expect(ageClassification(44)).toBe("молодой возраст");
  });

  it("age  44.01 : средний возраст", () => {
    expect(ageClassification(44.01)).toBe("средний возраст");
  });

  it("age  65 : средний возраст", () => {
    expect(ageClassification(65)).toBe("средний возраст");
  });

  it("age  65.1 : пожилой возраст", () => {
    expect(ageClassification(65.1)).toBe("пожилой возраст");
  });

  it("age  75 : пожилой возраст", () => {
    expect(ageClassification(75)).toBe("пожилой возраст");
  });

  it("age  75.01 : старческий возраст", () => {
    expect(ageClassification(75.01)).toBe("старческий возраст");
  });

  it("age  90 : старческий возраст", () => {
    expect(ageClassification(90)).toBe("старческий возраст");
  });

  it("age  90.01 : долгожители", () => {
    expect(ageClassification(90.01)).toBe("долгожители");
  });

  it("age  122 : долгожители", () => {
    expect(ageClassification(122)).toBe("долгожители");
  });

  it("age  122.01 : null", () => {
    expect(ageClassification(122.01)).toBe(null);
  });

  it("age  150 : null", () => {
    expect(ageClassification(150)).toBe(null);
  });
});
