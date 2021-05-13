import Book from "./Book.js";

const sapiens = new Book(
  { title: "Sapiens: A Brief History of Humankind" },
  "Yuval Noah Harari ",
  464
);

console.log(sapiens);
sapiens.addRating(4.5);
sapiens.addRating(4.7);
sapiens.addRating(5);
console.log(sapiens.ratings);
console.log(sapiens.getAverageRating());
