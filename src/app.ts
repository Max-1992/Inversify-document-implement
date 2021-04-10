import { appContainer } from "./inversify.config";

import { TYPES } from "./types";

import { Warrior } from "./interface/warrior";

const ninja = appContainer.get<Warrior>(TYPES.Warrior);

console.log(ninja.fight());
console.log(ninja.sneak());

