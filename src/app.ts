import { Category } from './enums';
import { IBook, ILogger, ILibrarian, IMagazine, IAuthor } from './interfaces';
import { ReferenceItem, Shelf, UniversityLibrarian } from './classes';
import RefBook from './classes/encyclopedia';
import { purge, getBooksByCategoryPromise, execute } from './lib/utility-functions';
import Encyclopedia from './classes/encyclopedia';
import * as util from './lib/utility-functions';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// =============================================================================

// =============================================================================

// // Task 01
// logFirstAvailible(getAllBooks());

// // Task 02
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

// // Task 03
// const titles = getBookTitlesByCategory(Category.JavaScript);
// titles.forEach(title => console.log(title));

// const book = getBookById(2);
// console.log(book);

// //Task 04
// const myId: string = createCustomerId('Ann', 10);
// console.log(myId);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number): string => `${name}${id}`;
// idGenerator = (name: string, id: number) => `${name}${id}`;

// // Task 05
// createCustomer('Vladimir', undefined, 'Vienna');
// const titles = getBookTitlesByCategory();
// console.log(titles);
// let myBooks = checkoutBooks('Vladimir', 1, 5, 2, 4);
// console.log(myBooks);

// // Task 06
// const titles = getTitles(false);
// console.log(titles);

// // Task 07
// printBook(getBookById(1));
// const myBook : IBook = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   // year: 2015, Тут ошибка, потому что "литералы" должны в точности совпадать с интерфейсом
//   // copies: 3
//   pages: 1000,
//   markDamaged: (reason: string) => console.log(`Damaged because of ${reason}`),
// };

// console.log(typeof myBook);
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// type TBook = {
//   id: number;
// }

// // Task 08
// const logDamage: ILogger = reason => console.log(`Damaged because of ${reason}`);
// logDamage('missing back cover');

// const myLogDamage = (reason: string) : void => console.log('bla bla bla');
// const castMyLogDamage = myLogDamage as IDamageLogger;

// // Task 09
// const favouriteAuthor: IAuthor = {
//   email: 'anna@example.com',
//   name: 'Anna',
//   numBooksPublished: 2,
// };

// const favouriteLibrarian: ILibrarian = {
//   email: 'anna@example.com',
//   name: 'Anna',
//   department: 'Library',
//   assistCustomer: (name: string) => console.log(name),
// };

// // Task 10
// const favouriteLibrarian: ILibrarian = new UniversityLibrarian();
// favouriteLibrarian.name = 'Anna';
// favouriteLibrarian.assistCustomer('Boris');

// // Task 11
// const ref = new ReferenceItem('New Title', 2019);
// ref.printItem();
// ref.publisher = 'Anna';
// console.log(ref.publisher);

// // Task 12
// const refBook: Encyclopedia = new Encyclopedia('My Title', 2018, 10);
// console.log(refBook);
// refBook.printItem();

// // Task 16
// const refBook: RefBook = new RefBook('My Title', 2018, 10);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();

// // Task 18
// const inventory: IBook[] = [
//   { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//   { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//   { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//   { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];
// let result: any[] = purge<IBook>(inventory);
// console.log(result);
// result = purge<number>([1, 2, 3, 45]);
// console.log(result);

// // Task 19
// const inventory: IBook[] = [
//   { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//   { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//   { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//   { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];
// const bookShelf: Shelf<IBook> = new Shelf<IBook>();
// inventory.forEach(book => bookShelf.add(book));
// const firstBook = bookShelf.getFirst();
// console.log(firstBook);

// const magazines: Array<IMagazine> = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazinesShelf: Shelf<IMagazine> = new Shelf();
// magazines.forEach(magazine => magazinesShelf.add(magazine));
// const firstMagazine = magazinesShelf.getFirst();
// console.log(firstMagazine);

// // Task 20
// const magazines: Array<IMagazine> = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazinesShelf: Shelf<IMagazine> = new Shelf();
// magazines.forEach(magazine => magazinesShelf.add(magazine));
// magazinesShelf.printTitles();
// const requiredMagazine = magazinesShelf.find('Five Points');
// console.log(requiredMagazine);

// // Task 22
// const favouriteLibrarian: ILibrarian = new UniversityLibrarian();
// favouriteLibrarian.name = 'Anna';
// favouriteLibrarian.assistCustomer('Boris');
// favouriteLibrarian.printLibrarian();

// // Task 23
// const favouriteLibrarian: ILibrarian = new UniversityLibrarian();
// favouriteLibrarian.name = 'Anna';
// favouriteLibrarian.assistCustomer('Boris');
// favouriteLibrarian.printLibrarian();
// favouriteLibrarian.assistFaculty = () => console.log('Changed 1');
// favouriteLibrarian.assistFaculty();
// // favouriteLibrarian.teachCommunity = () => console.log('Changed 2');

// // Task 24
// const refBook: Encyclopedia = new Encyclopedia('My Title', 2018, 10);
// console.log(refBook);
// refBook.printItem();

// // Task 25
// const favouriteLibrarian: ILibrarian = new UniversityLibrarian();
// favouriteLibrarian.name = 'Anna';
// favouriteLibrarian.assistCustomer('Boris');

// // Task 26
// const favouriteLibrarian: ILibrarian = new UniversityLibrarian();
// (favouriteLibrarian as UniversityLibrarian).info();
// favouriteLibrarian.name = 'Anna';
// favouriteLibrarian.assistCustomer('Boris');
// favouriteLibrarian.printLibrarian();
// favouriteLibrarian.assistFaculty = () => console.log('Changed 1');
// favouriteLibrarian.assistFaculty();
// // favouriteLibrarian.teachCommunity = () => console.log('Changed 2');

// // Task 27
// const refBook: RefBook = new RefBook('My Title', 2019, 20);
// refBook.copies = 5;
// // refBook.copies = -10;
// console.log(refBook);

// // Task 28
// console.log(`Start`);
// util.getBooksByCategory(Category.JavaScript, util.logCategorySearch);
// console.log(`Finish`);

// // Task 29
// console.log(`Start`);
// util.getBooksByCategoryPromise(Category.JavaScript)
//   .then(titles => {
//       console.log(titles);
//       // return titles.length;
//       throw new Error('tet error')
//   })
//   .then(count => console.log(count))
//   .catch(reason => { console.log(reason); })
//   .finally(() => console.log('complete'));
// util.getBooksByCategoryPromise(Category.Software)
//   .then(titles => console.log(titles))
//   .catch(reason => console.log(reason))
//   .finally(() => console.log('complete'));
// console.log(`Finish`);

// // Task 30
// console.log('Beginning search...');
// util.logSearchResults(Category.JavaScript)
//     .catch(reason => console.log(reason));
// console.log('Search submitted...');

// Task 31
console.log(`Starting`);
const logTitlesByCategory = function*(category: Category) {
    const books = yield getBooksByCategoryPromise(category);

    console.log(books);
    
    const booksQuantity = yield new Promise(r => setTimeout(() => r(books.length), 2000));

    console.log(booksQuantity);
}
console.log(`Finish`);

execute(logTitlesByCategory(Category.JavaScript), undefined);