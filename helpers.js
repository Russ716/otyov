// Helper function to get the next letter (a, b, c)
export function getNextLetter(currentLetter, currentID) {
  if (currentLetter === "a") return "b";
  if (currentLetter === "b") return "c";
  if (currentLetter === "c") return "a", console.log("currentID: " + currentID);
}
