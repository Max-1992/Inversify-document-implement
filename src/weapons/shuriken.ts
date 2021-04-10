// Interface
import { ThrowableWeapon } from "../interface/throwableWeapon";

// Inversify
import { injectable } from "inversify";

@injectable()
export class Shuriken implements ThrowableWeapon {
    public throw() {
        return "hit!";
    }
}