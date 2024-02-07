describe("Checking the week day", () => {
  it("day of the week 1: Понедельник", () => {
    expect(weekFn(1)).toBe("Понедельник");
  });

  it("day of the week 2: Вторник", () => {
    expect(weekFn(2)).toBe("Вторник");
  });

  it("day of the week 3: Среда", () => {
    expect(weekFn(3)).toBe("Среда");
  });

  it("day of the week 4: Четверг", () => {
    expect(weekFn(4)).toBe("Четверг");
  });

  it("day of the week 5: Пятница", () => {
    expect(weekFn(5)).toBe("Пятница");
  });

  it("day of the week 6: Суббота", () => {
    expect(weekFn(6)).toBe("Суббота");
  });

  it("day of the week 7: Воскресенье", () => {
    expect(weekFn(7)).toBe("Воскресенье");
  });

  it("any other number of the day: null", () => {
    expect(weekFn(66)).toBe(null);
  });
});
