const wheelOfTime = [
    {book: "Eye of the World", author: "Robert Jordan", year: 1990},
    {book: "The Great Hunt", author: "Robert Jordan", year: 1990},
    {book: "The Dragon Reborn", author: "Robert Jordan", year: 1991},
    {book: "The Shadow Rising", author: "Robert Jordan", year: 1992},
    {book: "Fires of Heaven", author: "Robert Jordan", year: 1993},
    {book: "Lord of Chaos", author: "Robert Jordan", year: 1994},
    {book: "A Crown of Swords", author: "Robert Jordan", year: 1996},
    {book: "Path of Daggers", author: "Robert Jordan", year: 1998},
    {book: "A Winter's Heart", author: "Robert Jordan", year: 2000},
    {book: "Crossroads of Twilight", author: "Robert Jordan", year: 2003},
    {book: "Knife of Dreams", author: "Robert Jordan", year: 2005},
    {book: "The Gathering Storm", author: "Robert Jordan & Brandon Sanderson", year: 2009},
    {book: "Tower of Midnight", author: "Robert Jordan & Brandon Sanderson", year: 2010},
    {book: "A Memory of Light", author: "Robert Jordan & Brandon Sanderson", year: 2013},
]

const newBooks = wheelOfTime.filter(book => book.year >= 2000);
console.table(newBooks);

const bookTitles = wheelOfTime.map(title => title.book);
console.table(bookTitles);

const newBookTitles = wheelOfTime.filter(book => book.year >= 2000).map(title => title.book);
console.table(newBookTitles);

