import { Category } from './enums';

interface IBook {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;

    markDamaged?: IDamageLogger;
};

interface IDamageLogger {
    (reason: string): void;
};

interface IPerson {
    name: string;
    email: string;
};

interface IAuthor extends IPerson {
    numBooksPublished: number;
};

interface ILibrarian extends IPerson {
    department: string;
    assistCustomer: (custName: string) => void;
    printLibrarian?: () => void;
    assistFaculty?: () => void;
    teachCommunity?: () => void;
};

interface IMagazine {
    title: string;
    publisher: string;
}

export interface IShelfItem {
    title: string;
}

interface ILibAsyncCallback {
    (error: Error, titles: string[]): void;
}

export { IBook, IDamageLogger as ILogger, IAuthor, ILibrarian, IMagazine, ILibAsyncCallback };
