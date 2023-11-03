import { Person } from "./person.js";
export class Student extends Person {
    constructor() {
        super();
        this._name = "";
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
