import { Person } from "../personTypes";

export function createStarkTree(): Person {
    const eddardsKids: Person[] = [
    {name: 'Rickon', children: []},
    {name: 'Bran', children: []},
    {name: 'Arya', children: []},
    {name: 'Sansa', children: []},
    {name: 'Robb', children: []},
    {name: 'Jon', children: []}]

    // const eddard: Person = {name: 'Eddard', children: eddardsKids}

    const rickardsKids: Person[] = [
        {name: 'Benjen', children: []},
        {name: 'Lyanna', children: []},
        {name: 'Eddard', children: eddardsKids},
        {name: 'Brandon', children: []}]

    const rickard: Person = {name: 'Rickard', children:rickardsKids }

    return rickard;
}
