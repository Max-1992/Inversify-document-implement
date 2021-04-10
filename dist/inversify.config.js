"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appContainer = void 0;
// Global Object
require("reflect-metadata");
// Inversify
const inversify_1 = require("inversify");
// Types
const types_1 = require("./types");
// entities
const katana_1 = require("./weapons/katana");
const shuriken_1 = require("./weapons/shuriken");
const ninja_1 = require("./ninja");
// Create IoC
const appContainer = new inversify_1.Container();
exports.appContainer = appContainer;
// Create ThrowableWeapon
// When a warrior is asked to return an instance of the Ninija class.
appContainer.bind(types_1.TYPES.Warrior).to(ninja_1.Ninja);
// When prompted for a weapon, return an instance of the Katana class.
appContainer.bind(types_1.TYPES.Weapon).to(katana_1.Katana);
// When asked for a throwable weapon, inject a shuriken into it.
appContainer.bind(types_1.TYPES.ThrowableWeapon).to(shuriken_1.Shuriken);
//# sourceMappingURL=inversify.config.js.map