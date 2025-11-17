import { EntryHall } from "./entry_hall.ts";

export class Bistro {
  readonly visitorName: string;

  constructor(visitorName: string) {
    this.visitorName = visitorName;
    console.log(`Navstevnik ${visitorName} vstupuje do bistra.`);
  }

  buyDrink() {
    console.log(`Navstevnik ${this.visitorName} si kupuje piti.`);
    return this;
  }

  returnToEntryHall() {
    console.log(`Navstevnik ${this.visitorName} se vraci do vstupni haly.`);
    return new EntryHall(this.visitorName);
  }
}
