namespace Utility {
    export namespace Fees {
        export function calculateLateFee(daysLate: number): number {
            return daysLate * .25;
        }
    }
    
    export function maxBookAllowed(age: number) : number {
        return age < 13 ? 3 : 10;
    }

    function privateFunction(): void {
        console.log(`This is private function`);
    }
}