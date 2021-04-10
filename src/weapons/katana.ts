// Interface
import { Weapon } from "../interface/weapon";

// Inversify
import { injectable } from "inversify";

@injectable()
export class Katana implements Weapon {

    constructor() {}

    public hit() {
        return "cut!";
    }
}

