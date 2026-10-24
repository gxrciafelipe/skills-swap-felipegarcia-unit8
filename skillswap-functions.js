const ALL_CATEGORIES = "All";

export function filterSkillsByCategory(skills, category) {
  if (category === ALL_CATEGORIES) {
    return [...skills];
  }
  return skills.filter((skill) => skill.category === category);
}

export function calculateTotalCost(hourlyRate, hours) {
  return hourlyRate * hours;
}

export function matchSkillsToUser(userNeeds, skills) {
  return skills.filter(
    (skill) =>
      skill.category === userNeeds.category && skill.price <= userNeeds.maxPrice
  );
}
