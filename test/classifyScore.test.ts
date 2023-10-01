import classifyScore from "./classifyScore";

// Describe the test suite for classifyScore function
describe("classifyScore", () => {
  // Test case 1: Check if a score below 15 is classified as "Low Score"
  it('should classify a score below 15 as "Low Score"', () => {
    const result = classifyScore(10);
    expect(result).toBe("Low Score");
  });

  // Test case 2: Check if a score between 16 and 19 (inclusive) is classified as "Average Score"
  it('should classify a score between 16 and 19 as "Average Score"', () => {
    const result = classifyScore(17);
    expect(result).toBe("Average Score");
  });

  // Test case 3: Check if a score of 20 or higher is classified as "High Score"
  it('should classify a score of 20 or higher as "High Score"', () => {
    const result = classifyScore(22);
    expect(result).toBe("High Score");
  });

  // Test case 4: Check if an invalid score is classified as "Invalid Score"
  it('should classify an invalid score as "Invalid Score"', () => {
    const result = classifyScore(30);
    expect(result).toBe("Invalid Score");
  });
});
