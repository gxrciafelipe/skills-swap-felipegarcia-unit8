import { filterSkillsByCategory } from "../skillswap-functions.js";

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
