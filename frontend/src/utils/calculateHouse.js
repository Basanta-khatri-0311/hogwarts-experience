
export function calculateHouse(answersMap) {
  // answersMap: { [questionId]: "Gryffindor" | "Slytherin" | ... }
  const counts = {};
  Object.values(answersMap).forEach(house => {
    counts[house] = (counts[house] || 0) + 1;
  });

  // find max count
  let max = -1;
  let winners = [];
  for (const [house, c] of Object.entries(counts)) {
    if (c > max) {
      max = c;
      winners = [house];
    } else if (c === max) {
      winners.push(house);
    }
  }

  // tie-breaker: random pick among tied houses (keeps it simple)
  if (winners.length === 0) return "Gryffindor";
  if (winners.length === 1) return winners[0];
  return winners[Math.floor(Math.random() * winners.length)];
}
