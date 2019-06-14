import { timeout } from "../decorators";

export abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //   console.log(`Creating a new ReferenceItem...`);
    //   this.year = newYear;
    //   this.title = newTitle;
    // }

    private _publisher: string;

    static department: string = 'Fiction';

    constructor(public title: string, protected year: number) {
        console.log(`Creating a new ReferenceItem...`);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    @timeout(2000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(ReferenceItem.department);
    }

    abstract printCitation(): void;
}