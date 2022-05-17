import { Person } from "./personTypes";


export function logAllPeopleInTree(topPerson: Person): void {
    let stackOfPeople = []
    stackOfPeople.push(topPerson)
    
    while (true){
        let currPerson = stackOfPeople[stackOfPeople.length -1];
        console.log(currPerson.name);
        stackOfPeople.pop()

        if (currPerson.children.length >= 1){
            currPerson.children.map(child => stackOfPeople.push(child))
        }
        if (stackOfPeople.length === 0){break}
    }
   
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
    console.log("TODO!  First person is " + topPerson.name);
}

