let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;
anyVar.doSomething();
anyVar.toUppercase();

let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = 1;
unknownVar = [];
unknownVar = {};

// unknownVar.doSomething();

if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}
