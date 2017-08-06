export class Unicorn {
  id: number;
  name: string;
  src: string;
  color: string;
  gender: string;
  age: number;
  mate: number;

  constructor(id: number, name: string, src: string, color: string, gender: string, age: number, mate?: number) {
    this.id = id;
    this.name = name;
    this.src = src;
    this.color = color;
    this.gender = gender;
    this.age = age;
    this.mate = mate;
  }
}
