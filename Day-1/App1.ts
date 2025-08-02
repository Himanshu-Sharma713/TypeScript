function getStudentGrade(score: number): string {
  if (score < 0 || score > 100) {
    return "Invalid score. Please enter a value between 0 and 100.";
  }

  if (score >= 90) {
    return "Grade: A+";
  } else if (score >= 80) {
    return "Grade: A";
  } else if (score >= 70) {
    return "Grade: B";
  } else if (score >= 60) {
    return "Grade: C";
  } else if (score >= 50) {
    return "Grade: D";
  } else {
    return "Grade: F (Fail)";
  }
}

// Example usage
const studentScore: number = 85;
console.log(`Student Score: ${studentScore}`);
console.log(getStudentGrade(studentScore));
