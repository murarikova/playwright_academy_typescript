export class User {
  readonly username: string; // ? readonly je modifikator nemenosti (cons), nemuze se menit a zaroven musim einicializovat ihned nebo v constructoru
  password: string;
  age: number;
  isActive = true; // ? Implicitne priradi boolean property isActive
  email: string;
  private role: "user"; // ? Tahle property jde pouzit jenom uvnitr tridy, nejde zavolat "zvenku"

  constructor(username: string, password: string, age: number, email: string) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.email = email;
    console.log(
      `Vytvoren uzivatel: ${this.username}, heslo: ${this.password}, vek: ${this.age}, je aktovni? ${this.isActive}`
    );
  }

  getUsername(): string {
    return this.username;
  }

  logUser(): void {
    console.log(
      `Informace o uzivateli: ${this.username}, vek: ${this.age}, aktivovan: ${this.isActive}`
    );
  }

  setAge(newAge: number) {
    const oldAge = this.age;
    this.age = newAge;
    console.log(
      `Zmena veku uzivatele ${this.username} z ${oldAge} na ${this.age}`
    );
  }

  getEmail(): string {
    return this.email;
  }
}
