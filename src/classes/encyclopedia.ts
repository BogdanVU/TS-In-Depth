import { ReferenceItem } from '.';
import { positiveInteger } from '../decorators';

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;  
  
    constructor(newTitle: string, newYear:number, public edition: number) {
      super(newTitle, newYear);
    }

    get copies(): number {
      return this._copies;
    }

    @positiveInteger set copies(value: number) {
      this._copies = value;
    }
  
    printItem() {
      super.printItem();
      console.log(`Edition is ${this.edition} (${this.year})`);
    }
  
    printCitation(): void {
      console.log(`${this.title} - ${this.year}`);
    }    
  };
  