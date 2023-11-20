function genEmail(input, force) {
    if (input.isVisitor && !force) {
        return undefined;
    }
    else {
        return `${input.firstName}.${input.age}@email.com`;
    }
}
function isPerson(potentialPerson) {
    return 'firstName' in potentialPerson && 'age' in potentialPerson;
}
function printEmailIfPerson(potentialPerson) {
    if (isPerson(potentialPerson)) {
        console.log(genEmail(potentialPerson));
    }
    else {
        console.log('Not a person');
    }
}
printEmailIfPerson({ firstName: 'John', age: 30 });
printEmailIfPerson({ firstName: 'John' });
async function someAs() {
    return 'a';
}
