// Это фабрика декораторов
export function sealed(param: string): Function {
    return function (target: Function): void {
        console.log(`Sealing the constructor ${param}`);
        Object.seal(target);
        Object.seal(target.prototype);
    }
}

// Это уже просто сразу декоратор
export function logger<TFunction extends Function>(target: TFunction): TFunction {
    const newConstructor: Function = function () {
        console.log(`Creating new instance`);
        console.log(target.name);

        this.age = 30;
    };

    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target; // По хорошему должно быть newConstructor

    newConstructor.prototype.printLibrarian = function () {
        console.log(`Librarian name is ${this.name}, age is ${this.age}`);
    }

    return newConstructor as TFunction;
}

export function writable(isWritable: boolean): Function {
    return function (target: Object, methodName: string, descriptor: PropertyDescriptor): void {
        console.log(target);
        console.log(methodName);
        descriptor.writable = isWritable;
    }
}

export function logParameter(target: Object, methodName: string, paramIndex: number): void {
    console.log(target);
    console.log(methodName);
    console.log(paramIndex);

    const key: string = `${methodName}_decor_params_indexes`;

    if (Array.isArray(target[key])) {
        target[key].push(paramIndex);
    }
    else {
        target[key] = [paramIndex];
    }
}

export const logMethod: MethodDecorator = function(target: Object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const key: string = `${methodName}_decor_params_indexes`;
        const indexes = target[key];

        if (Array.isArray(indexes)) {
            args.forEach((arg, index) => {
                if (indexes.indexOf(index) !== -1) {
                    console.log(`Method ${methodName}, Param index ${index}, Param value ${arg}`);
                }
            });
        };

        const result = originalMethod.apply(this, args);
        return result;
    };

    return descriptor;
}

export function timeout(ms: number = 0): Function {
    return function (target: Object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, ms);
        }

        return descriptor;
    }
}

export function makeProperty<T>(
    prototype: any,
    propertyName: string,
    getTransformer: (value: any) => T,
    setTransformer: (value: any) => T
) {
    const values = new Map<any, T>();

    Object.defineProperty(prototype, propertyName, {
        set(firstValue: any) {
            Object.defineProperty(this, propertyName, {
                get() {
                    if (getTransformer) {
                        return getTransformer(values.get(this));
                    } else {
                        values.get(this);
                    }
                },
                set(value: any) {
                    if (setTransformer) {
                        values.set(this, setTransformer(value));
                    } else {
                        values.set(this, value);
                    }
                },
                enumerable: true
            });
            this[propertyName] = firstValue;
        },
        enumerable: true,
        configurable: true
    });
}

export function format(pref: string = 'Mr/Mrs') {
    return function (target: Object, propertyName: string) {
        makeProperty(
            target,
            propertyName,
            value => `${pref} ${value}`,
            value => value,
        );
    }
};

export function positiveInteger(target: Object, propertyName: string, descriptor: PropertyDescriptor) {
    const originalSet = descriptor.set;

    descriptor.set = function(value: number) {
        console.log(propertyName);
        
        if ((value < 1) || !(Number.isInteger(value))) {
            throw new Error(`Invalid value ${value}`);
        };

        originalSet.call(this, value);
    };
};



// export const logInfoMethod: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) : PropertyDescriptor | void => {
//     console.log(`Method decorator:`)
//     console.log(`Type of the target is ${typeof target}. The property key is ${String(propertyKey)}`);
//     console.log(target);
//     console.log(descriptor);
//     console.log('===========================================');
// }
// export const logMInfoMethod: MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) : PropertyDescriptor | void => {
//     console.log(`Method decorator:`)
//     console.log(`Type of the target is ${typeof target}. The property key is ${String(propertyKey)}`);
//     console.log(target);
//     console.log(descriptor);
//     const originalMethod = descriptor.value;

//     descriptor.value = function(...args) {
//         console.log(args.length);

//         // const result = originalMethod.apply(this, args);
//     }

//     console.log('===========================================');

//     return descriptor;
// }

// export const logInfoParameter: ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number): void => {
//     console.log(`Parameter decorator:`)
//     console.log(`Type of the target is ${typeof target}. The property key is ${String(propertyKey)}`);
//     console.log(target);
//     console.log(`Index of the parameter is ${parameterIndex}`);
//     console.log('===========================================');
// }

// export const logInfoProperty: PropertyDecorator = (target: Object, propertyKey: string | symbol) : void => {
//     console.log(`Property decorator:`)
//     console.log(`Type of the target is ${typeof target}. The property key is ${String(propertyKey)}`);
//     console.log(target);
//     console.log('===========================================');
// }

// export const logInfoClass: ClassDecorator = <TFunction extends Function>(target: TFunction) : TFunction | void => {
//     console.log(`Class decorator:`)
//     console.log(`Type of the target is ${typeof target}.`);
//     console.log(target);
//     console.log('===========================================');
// }

// export const logMInfoClass: ClassDecorator = <TFunction extends Function>(target: TFunction) : TFunction | void => {
//     console.log(`Class Mdecorator:`)
//     console.log(`Type of the target is ${typeof target}.`);
//     console.log(target);

//     const originalConstructor = target;
    
//     const newConstructor: Function = function(param: any) {
//         console.log(`New constructor with param ${param}`);
//     }

//     newConstructor.prototype = Object.create(target.prototype);
//     newConstructor.prototype.constructor = newConstructor;

//     console.log('===========================================');

//     return newConstructor as TFunction;
// }
