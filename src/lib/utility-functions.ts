import { Category } from "../enums";
import { IBook, ILibAsyncCallback } from "../interfaces";

export function purge<T>(inventory: T[]): Array<T> {
    return inventory.splice(2, inventory.length);
};

export function getAllBooks(): IBook[] {
    let books: Array<IBook> = [
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
            category: Category.JavaScript,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.JavaScript,
        },
        {
            id: 3,
            title: 'CSS Secrets',
            author: 'Lea Verou',
            available: true,
            category: Category.CSS,
        },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.JavaScript,
        }
    ];

    return books;
};

export function logFirstAvailible(books: IBook[] = getAllBooks()): void {
    const numberOfBooks: number = books.length;

    let firstAvailibleTitle: string = '';

    for (const book of books) {
        if (book.available) { // поставили any[], чтобы можно было обращаться к .availible
            firstAvailibleTitle = book.title;
            break;
        }
    }

    console.log(`Total books ${numberOfBooks}`);
    console.log(`First availible book title is ${firstAvailibleTitle}`);
};

export function getBookTitlesByCategory(
    category: Category = Category.TypeScript
): string[] {
    const books = getAllBooks();

    const titles: string[] = [];

    for (const book of books) {
        const _book = <any>book;

        if (_book.category === category) {
            titles.push(_book.title);
        }
    }

    return titles;
};

export function logBookTitles(titles: Array<string>): void {
    titles.forEach(title => console.log(title));
};

export function getBookById(id: number): IBook | undefined {
    const books = getAllBooks();

    return books.find(book => book.id === id);
};

export function createCustomerId(name: string, id: number): string {
    return `${name}${id}`;
};

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer Name: ${name}`);

    age && console.log(`Customer Age: ${age}`);

    city && console.log(`Customer Age: ${city}`);
};

export function checkoutBooks(customer: string, ...booksIds: number[]): string[] {
    console.log(`Customer name: ${customer}`);

    const titles: string[] = [];

    for (const id of booksIds) {
        const book = getBookById(id);

        if (book && book.available) {
            titles.push(book.title);
        }
    }

    return titles;
};

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(bookProperty: any): string[] {
    const books = getAllBooks();

    if (typeof bookProperty === 'string') {
        return books
            .filter(book => book.author === bookProperty)
            .map(book => book.title);
    }
    if (typeof bookProperty === 'boolean') {
        return books
            .filter(book => book.available === bookProperty)
            .map(book => book.title);
    }
};

export function printBook(book: IBook): void {
    console.log(`${book.title} by ${book.author}`);
};

export function getBooksByCategory(category: Category, callback: ILibAsyncCallback): void {
    setTimeout(() => {
        try {
            const titles: string[] = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                callback(null, titles);
            }
            else {
                throw new Error(`No titles found`);
            }
        }
        catch (error) {
            callback(error, null);
        }
    }, 2000);
};

export function logCategorySearch(err: Error, titles: string[]): void {

};

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    const p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {

            const titles: string[] = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                resolve(titles);
            }
            else {
                reject(`No titles found`);
            }

        }, 2000);
    });

    return p;
}

export async function logSearchResults(category: Category) {
    let foundBooks = await getBooksByCategoryPromise(category);
    console.log(foundBooks);
    console.log(foundBooks);
}

export function execute(generator: Generator, yieldValue: any) {
    const next: IteratorResult<Promise<any>> = generator.next(yieldValue);

    if (!next.done) {
        next.value
            .then(result => execute(generator, result))
            .catch(reason => console.log(reason));
    };
}