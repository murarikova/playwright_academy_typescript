import { EntryHall } from "./entry_hall.ts";

new EntryHall("Jan Novak")
  .entryBathroom()
  .returnToEntryHall()
  .entryBathroom()
  .returnToEntryHall()
  .entryBathroom()
  .returnToEntryHall()
  .entryBathroom()
  .returnToEntryHall()
  .askReceptionistQuestion("Jak se mate?")
  .askReceptionistQuestion("Kde je toaleta?")
  .entryBathroom()
  .washHands()
  .returnToEntryHall()
  .askReceptionistQuestion("Jak to jde?")
  .entryBathroom()
  .washHands()
  .returnToEntryHall()
  .visitBistro()
  .buyDrink()
  .returnToEntryHall();

// ? Zabalení awaitu do async funkce, abychom se vyhnuli chybě: ERROR: Top-level await is currently not supported with the "cjs" output format
async function main() {
  const marie = new EntryHall("Marie Veselá");
  await marie
    .takeElevatorToSecondFloor()
    .then((secondFloorFloor) => secondFloorFloor.lookAround(3))
    .then((secondFloor) => secondFloor.returnToEntryHallByElevator())
    .then((entryHall) => entryHall.takeElevatorToSecondFloor());
}

main();
