import { Item } from '../marketplace.types';

export const items: Array<Item> = [
  {
    id: '1',
    imageUrl:
      'https://media.gettyimages.com/vectors/ninja-weapon-kunai-throwing-knifes-flat-icon-vector-id685882196?b=1&k=6&m=685882196&s=170x170&h=5ZrHn8tL1l4PPtEIsXwHJOIailXF4hNaLih6tPrMD2Y=',
    name: 'Throwing Knifes',
    type: 'Weapon',
    seller: {
      name: 'John Doe',
      avatarUrl:
        'https://gravatar.com/avatar/d4c74594d841139328695756648b6bd6?s=256&d=identicon&r=PG',
    },
    price: 0.47,
  },
  {
    id: '2',
    imageUrl:
      'https://lh3.googleusercontent.com/d8cRlqJCBSAOG4nMIo7UD0TuKW8-LGoMRFjNN9b7-7j556kw3-E5L1d9ydI6VZufB0g=w120',
    name: 'Magic Sword',
    type: 'Weapon',
    seller: {
      name: 'Peter Parker',
      avatarUrl:
        'https://gravatar.com/avatar/d4c74594d841139328695756648b6bd6?s=256&d=identicon&r=PG',
    },
    price: 1.23,
  },
  {
    id: '3',
    imageUrl:
      'https://media.istockphoto.com/vectors/love-potion-in-glass-bottle-cartoon-vector-illustration-isolated-on-vector-id1095990382?b=1&k=6&m=1095990382&s=170x170&h=bPN-j_SHfrZjpa3QZLAJUqx33-y26ZlEZ1r1l-Cky_A=',
    name: 'Health Potion',
    type: 'Consumable',
    seller: {
      name: 'James Bond',
      avatarUrl:
        'https://gravatar.com/avatar/d4c74594d841139328695756648b6bd6?s=256&d=identicon&r=PG',
    },
    price: 0.23,
  },
  {
    id: '4',
    imageUrl:
      'https://i.pinimg.com/564x/e4/32/f8/e432f85c57cd2f3262e37b98bcbb95a8.jpg',
    name: 'Magic Armor',
    type: 'Armor',
    seller: {
      name: 'Lerroy Jenkins',
      avatarUrl:
        'https://gravatar.com/avatar/d4c74594d841139328695756648b6bd6?s=256&d=identicon&r=PG',
    },
    price: 2.36,
  },
];
