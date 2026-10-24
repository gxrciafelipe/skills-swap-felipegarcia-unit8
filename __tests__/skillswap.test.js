import { filterSkillsByCategory, calculateTotalCost } from "../skillswap-functions.js";

const skills = [
  { title: "Python Tutoring", category: "Programming", price: 20 },
  { title: "Guitar Lessons", category: "Music", price: 15 },
  { title: "Resume Review", category: "Career", price: 0 },
  { title: "Web Development", category: "Programming", price: 25 },
];

describe("filterSkillsByCategory", () => {
  test("returns only the skills in the given category", () => {
    expect(filterSkillsByCategory(skills, "Programming")).toEqual([
      { title: "Python Tutoring", category: "Programming", price: 20 },
      { title: "Web Development", category: "Programming", price: 25 },
    ]);
  });

  test('returns every skill when the category is "All"', () => {
    expect(filterSkillsByCategory(skills, "All")).toEqual(skills);
  });

  test("returns an empty array when no skills match", () => {
    expect(filterSkillsByCategory(skills, "Cooking")).toEqual([]);
  });
});

describe("calculateTotalCost", () => {
  test("returns the correct total for different rates and hours", () => {
    expect(calculateTotalCost(20, 2)).toBe(40);
    expect(calculateTotalCost(15, 3)).toBe(45);
  });

  test("returns 0 for free sessions", () => {
    expect(calculateTotalCost(0, 3)).toBe(0);
  });

  test("returns 0 when hours is 0", () => {
    expect(calculateTotalCost(20, 0)).toBe(0);
  });

  test("handles decimal hours", () => {
    expect(calculateTotalCost(25, 1.5)).toBe(37.5);
  });
});
