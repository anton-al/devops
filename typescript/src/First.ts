interface Person {
    firstName: string;
    age: number;
    job?: job
    isVisitor?: boolean
}

type job = 'developer' | 'designer' | 'teacher';

function genEmail(input: Person, force?: boolean) :string | undefined {
    if (input.isVisitor && !force){
        return  undefined;
    } else {
        return `${input.firstName}.${input.age}@email.com`;
    }
}

function isPerson(potentialPerson: any): boolean {
return 'firstName' in potentialPerson && 'age' in potentialPerson;
}

function printEmailIfPerson(potentialPerson: any) {
    if (isPerson(potentialPerson)) {
        console.log(genEmail(potentialPerson));
    }
    else {
        console.log('Not a person');
    }
}

printEmailIfPerson({firstName: 'John', age: 30});
printEmailIfPerson({firstName: 'John'});

async function someAs(){
    return 'a';
}
