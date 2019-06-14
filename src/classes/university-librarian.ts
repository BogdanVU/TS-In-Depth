import * as Interfaces from '../interfaces';
import { sealed, logger, writable, format, logParameter, logMethod } from './../decorators';

@logger
@sealed('My Parameter')
export class UniversityLibrarian implements Interfaces.ILibrarian {
    department: string;
    @format() name: string;
    email: string;

    @logMethod
    assistCustomer(@logParameter custName: string): void {
        console.log(`${this.name} is assisting by ${custName}`)
    }

    @logMethod
    @writable(true)
    assistFaculty(): void {
        console.log(`Assisting Faculty`);
    }

    @writable(false)
    teachCommunity(): void {
        console.log(`Teaching Community`);
    }
}