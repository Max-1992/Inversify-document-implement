// Interface
import { ThrowableWeapon } from "./interface/throwableWeapon";
import { Warrior } from "./interface/warrior";
import { Weapon } from "./interface/weapon";

// Types
import { TYPES } from "./types";

// Inversify
import { injectable, inject } from "inversify";

@injectable()
export class Ninja implements Warrior {

    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;

    constructor(
        @inject(TYPES.Weapon) katana: Weapon, 
        @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
    ) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    public fight() {
        return this._katana.hit()
    }

    public sneak() {
        return this._shuriken.throw();
    }

}

