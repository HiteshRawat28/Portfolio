// Owner approved an appropriate portfolio workflow; no delivery deadlines or client promises.
export const processSteps = [
  {
    title: "Understand the problem",
    detail:
      "Clarify the users, requirements and constraints. Map the workflow and the boundaries the system needs to enforce.",
  },
  {
    title: "Implement the system",
    detail:
      "Connect focused interfaces, validated APIs and a clear data model. Make technical decisions explicit and keep the code easy to change.",
  },
  {
    title: "Test and refine",
    detail:
      "Check behavior, failure paths and edge cases. Review usability and document limitations and the next improvements.",
  },
] as const;
