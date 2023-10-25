const movie1 = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  genre: "Science Fiction",
  rating: 8.8,
  duration: 148,
  additionalInfo: {
    language: "English",
    subtitles: "Multiple languages",
    actors: ["Leonardo DiCaprio", "Elliot Page", "Tom Hardy"],
  },
  displayInfo: function() {
    console.log(`Title: ${this.title}, Year: ${this.year}`);
  },
};

const movie2 = {
  title: "The Shawshank Redemption",
  director: "Frank Darabont",
  year: 1994,
  genre: "Drama",
  rating: 9.3,
  duration: 142,
  additionalInfo: {
    language: "English",
    subtitles: "Multiple languages",
    actors: ["Tim Robbins", "Morgan Freeman"],
  },
  displayInfo: function() {
    console.log(`Title: ${this.title}, Year: ${this.year}`);
  },
};

const movie3 = {
  title: "The Matrix",
  director: "The Wachowskis",
  year: 1999,
  genre: "Science Fiction",
  rating: 8.7,
  duration: 136,
  additionalInfo: {
    language: "English",
    subtitles: "Multiple languages",
    actors: ["Keanu Reeves", "Carrie-Anne Moss", "Hugo Weaving"],
  },
  displayInfo: function() {
    console.log(`Title: ${this.title}, Year: ${this.year}`);
  },
};

// Example usage:
movie1.displayInfo(); // Output: Title: Inception, Year: 2010
movie2.displayInfo(); // Output: Title: The Shawshank Redemption, Year: 1994
movie3.displayInfo(); // Output: Title: The Matrix, Year: 1999
