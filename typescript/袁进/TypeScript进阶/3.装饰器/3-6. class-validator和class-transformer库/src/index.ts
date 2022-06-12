import "reflect-metadata";
import { plainToClass, Type } from "class-transformer";
import axios from "axios";

export class User {
  id: number;
  firstName: string;
  lastName: string;

  @Type(() => Number)
  age: number;

  getName() {
    return this.firstName + " " + this.lastName;
  }

  isAdult() {
    return this.age > 36 && this.age < 60;
  }
}

axios
  .get("https://api.jsonserve.com/uL2oka")
  .then((resp) => resp.data)
  .then((users: User[]) => {
    const us = plainToClass(User, users);
    for (const u of us) {
      console.log(typeof u.age, u.age);
    }
  });
