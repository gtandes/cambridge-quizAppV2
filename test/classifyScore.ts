function classifyScore(score: number): string {
  if (score < 15) {
    return "Low Score";
  } else if (score >= 15 && score <= 19) {
    return "Average Score";
  } else if (score >= 20 && score <= 25) {
    return "High Score";
  } else {
    return "Invalid Score"; // Handle cases outside the specified range
  }
}

export default classifyScore;
