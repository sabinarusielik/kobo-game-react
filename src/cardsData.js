export const SUITS = ["♥", "♦", "♣", "♠"];

export const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

export const ASSIGN_VALUE = ({ suit, value }) => {
  const outcome = Number(value) ? Number(value) : value;
  if (outcome === "A") return 1;
  if (outcome === "J") return 11;
  if (outcome === "Q") return 12;
  if (outcome === "K" && (suit === "♥" || suit === "♦")) return 0;
  if (outcome === "K") return 13;
  return outcome;
};
