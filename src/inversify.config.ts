// Global Object
import "reflect-metadata";

// Inversify
import { Container } from "inversify";

// Interface
import { ThrowableWeapon } from "./interface/throwableWeapon";
import { Warrior } from "./interface/warrior";
import { Weapon } from "./interface/weapon";

// Types
import { TYPES } from "./types";

// entities
import { Katana } from './weapons/katana';
import { Shuriken } from './weapons/shuriken';
import { Ninja } from './ninja';

// Create IoC
const appContainer  = new Container();


// Create ThrowableWeapon

// When a warrior is asked to return an instance of the Ninija class.
appContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);

// When prompted for a weapon, return an instance of the Katana class.
appContainer.bind<Weapon>(TYPES.Weapon).to(Katana);

// When asked for a throwable weapon, inject a shuriken into it.
appContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { appContainer };