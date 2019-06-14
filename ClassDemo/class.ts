export function emptyDecorator(target: Function): void {console.log('');};

@emptyDecorator
export class Simple {
    static staticTestMethod (decoratedParameter: any, nonDecoratedParameter: any): any {
        return 0;
    }

    private _data: any;

    public testMethod(decoratedParameter: any, nonDecoratedParameter: any): any {

    }

    get testData(): any {
        return this._data;
    }

    set testData(value: any) {
        this._data = value;
    }

    testProperty: any;
}