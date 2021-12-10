export class ItemDataSource {

  constructor(
    public item: string,
    public name: string,
    public value: string,
    public innerhtml: string,
    ) {

  }

  get getItem(): string {
    return this.item;
  }

  get getName(): string {
    return this. name;
  }

  get getValue(): string {
    return this. value;
  }

  get getInnerHTML(): string {
    return this.innerhtml;
  }

}
