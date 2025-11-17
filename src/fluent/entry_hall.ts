import { Bathroom } from "./bathroom.ts";
import { Bistro } from "./bistro.ts";
import { SecondFloor } from "./second_floor.ts";

export class EntryHall {
  readonly visitorName: string;

  constructor(visitorName: string) {
    this.visitorName = visitorName;
    console.log(`Navstevnik ${visitorName} vstoupil do vstupni haly.`);
  }

  entryBathroom() {
    console.log(`Navstevnik ${this.visitorName} jde na toaletu.`);
    return new Bathroom(this.visitorName);
  }

  askReceptionistQuestion(question: string) {
    console.log(
      `${this.visitorName} se ptá recepční na otázku: "${question}".`
    );
    console.log("Recepční mlčí.");
    return this; // * Nebude se znova provolavat constructor, nevytvari novou instanci objektu
    //return new EntryHall(this.visitorName)   // * Provola opet constructor. Znova se mi zobrazi veta Navstevnik vstoupil do vstupni haly
  }

  visitBistro() {
    console.log(`Navstevnik ${this.visitorName} vstupuje do bistra.`);
    return new Bistro(this.visitorName);
  }

  async takeElevatorToSecondFloor(): Promise<SecondFloor> {
    console.log(`Uživatel ${this.visitorName} si volá výtah do 2. patra.`);
    const waitingForElevatorMs = 2000;
    await new Promise((resolve) => setTimeout(resolve, waitingForElevatorMs));
    console.log(`Výtah přijel do vstupní haly.`);
    console.log(`Výtah dorazil, uživatel ${this.visitorName} nastupuje.`);
    const elevatorRideMs = 2000;
    await new Promise((resolve) => setTimeout(resolve, elevatorRideMs));
    console.log(`Uživatel ${this.visitorName} vystupuje z výtahu v 2. patře.`);
    return new SecondFloor(this.visitorName);
  }
}
