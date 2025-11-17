import { EntryHall } from "./entry_hall.ts";

export class Bathroom {
  readonly visitorName: string;

  constructor(visitorName: string) {
    this.visitorName = visitorName;
    console.log(`Navstevnik ${visitorName} vstoupil na toalety.`);
  }

  returnToEntryHall() {
    console.log(`Navstevnik ${this.visitorName} se vraci do vstupni haly.`);
    return new EntryHall(this.visitorName); // * Vytvori se novy objekt a pak muzu pokracovat v tomhle objektu
  }

  washHands() {
    console.log(`Navstevnik ${this.visitorName} si umyl ruce.`);
    return this;
  }
}
