// Hardcoded skill listings. Later these will come from GET /api/listings/search.
// price is a number (dollars per hour); 0 means free.
export const CATEGORIES = ["Programming", "Music", "Career"];

export const skills = [
  {
    id: 1,
    category: "Programming",
    title: "Data Structures Tutoring",
    description: "Walk through trees, recursion, and graphs with worked examples.",
    price: 18,
    provider: "Alex Rivera",
    details:
      "Senior CS major and former TA. Available weekday evenings and weekends, in person or on Zoom.",
  },
  {
    id: 2,
    category: "Programming",
    title: "Web Development Basics",
    description: "Build your first website with HTML, CSS, and a little JavaScript.",
    price: 25,
    provider: "Jordan Kim",
    details:
      "Junior developer who loves teaching beginners. Available weekday evenings over video call.",
  },
  {
    id: 3,
    category: "Music",
    title: "Guitar Lessons",
    description: "Learn chords, strumming, and your first songs at your own pace.",
    price: 15,
    provider: "Sam Ortiz",
    details:
      "Eight years of playing experience. Available weekends on campus or over video call.",
  },
  {
    id: 4,
    category: "Music",
    title: "Piano for Beginners",
    description: "Read sheet music and play simple pieces in a few sessions.",
    price: 18,
    provider: "Dana Wright",
    details:
      "Music minor with piano teaching experience. Available Tuesday and Thursday afternoons.",
  },
  {
    id: 5,
    category: "Career",
    title: "Resume Review",
    description: "Get feedback on your resume before you apply for internships.",
    price: 0,
    provider: "Taylor Brooks",
    details:
      "Writing Center tutor and recent recruiting veteran. Free for students. Available most mornings.",
  },
  {
    id: 6,
    category: "Career",
    title: "Interview Prep",
    description: "Practice common interview questions and get honest feedback.",
    price: 20,
    provider: "Marcus Hill",
    details:
      "Senior who just finished a full recruiting season. Available weekday evenings.",
  },
];
