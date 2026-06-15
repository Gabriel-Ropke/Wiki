import { Fighting, Fire, Grass, Water } from "../Elements";
import { Hero_Fighting, Hero_Fire, Hero_Grass, Hero_Water } from "../Hero";
import { Cyndaquil, Riolu, Mudkip, Treecko } from "../Poke";
import { Right_Charmander, Right_Goldeen, Right_Pikachu, Right_Snorlax, Right_Squirtle, Left_Growlithe, Left_Mankey, Left_Poliwag, Left_Victrebell } from "../icons";

export const element_assets = {
  fire: {
    type: "fire",
    Poke: Cyndaquil,
    icon: Fire,
    Hero: Hero_Fire,
    right: Right_Charmander,
    left: Left_Growlithe
  },
  water: {
    type: "water",
    Poke: Mudkip,
    icon: Water,
    Hero: Hero_Water,
    right: Right_Goldeen,
    left: Left_Poliwag
  },
  grass: {
    type: "grass",
    Poke: Treecko,
    icon: Grass,
    Hero: Hero_Grass,
    right: Right_Pikachu,
    left: Left_Victrebell
  },
  fighting: {
    type: "fighting",
    Poke: Riolu,
    icon: Fighting,
    Hero: Hero_Fighting,
    right: Right_Snorlax,
    left: Left_Mankey
  },
};
