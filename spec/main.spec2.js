describe("Checking the week", () => {
  it("week 1: Понедельник", () => {
    expect(weekFn(1)).toBe("Понедельник");
  });

  it("week 2: Вторник", () => {
    expect(weekFn(2)).toBe("Вторник");
  });

  it("week 3: Среда", () => {
    expect(weekFn(3)).toBe("Среда");
  });

  it("week 4: Четверг", () => {
    expect(weekFn(4)).toBe("Четверг");
  });

  it("week 5: Пятница", () => {
    expect(weekFn(5)).toBe("Пятница");
  });

  it("week 6: Суббота", () => {
    expect(weekFn(6)).toBe("Суббота");
  });

  it("week 7: Воскресенье", () => {
    expect(weekFn(7)).toBe("Воскресенье");
  });

  it("any other number of the week: null", () => {
    expect(weekFn(66)).toBe(null);
  });
});
