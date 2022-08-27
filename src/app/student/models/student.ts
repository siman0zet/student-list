export class Student {
  constructor(
    public lastName: string,
    public firstName: string,
    public middleName: string,
    public id: number
  ) {}

  get fio(): string {
    return `${this.lastName} ${this.firstName} ${this.middleName}`;
  }
}
