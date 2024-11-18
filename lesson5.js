//1
db.books.find({ title: { $in: ["Java", "Python", "C#"] } });
//2
db.books.find({ isdn: { $nin: [/!^19/, "1884777384", /0/] } });
//3
db.books.find({
  $nor: [{ isdn: /!^19/ }, { title: /mongo/ }, { numpages: { $gt: 600 } }],
});
//4
db.books.find({ statusbar: { $not: /^PUBLISH$/ } });
//5
db.books.find({ numpages: { $mod: [10, 0] } }).count();
//6
db.books.deleteMany({ category: { $eq: [] } });
//7
db.books.find({ image: { $exists: false } });
