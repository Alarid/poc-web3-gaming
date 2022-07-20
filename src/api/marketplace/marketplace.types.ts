export type Item = {
  id: string;
  imageUrl: string;
  name: string;
  type: 'Weapon' | 'Armor' | 'Accessory' | 'Consumable';
  seller: {
    name: string;
    avatarUrl: string;
  };
  price: number;
};
