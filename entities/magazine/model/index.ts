export type MagazineProps = {
  uid: string;
  name: string;
  address: string;
};

export interface IMagazine {
  readonly uid: string;
  name: string;
  address: string;
}

export class Magazine implements IMagazine {
  private readonly _uid: string;
  private _name: string;
  private _address: string;

  constructor(props: MagazineProps) {
    this._uid = props.uid;
    this._name = props.name;
    this._address = props.address;
  }

  get uid(): string {
    return this._uid;
  }

  get name(): string {
    return this._name;
  }

  get address(): string {
    return this._address;
  }

  set name(value: string) {
    this._name = value;
  }

  set address(value: string) {
    this._address = value;
  }
}
