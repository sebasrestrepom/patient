export class Patient {
  private _id: number;
  private _identification: string;
  private _firtsName: string;
  private _lastName: string;
  private _email: string;
  private _phone: string;

  constructor(
    id: number,
    identification: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
  ) {
    this._id = id;
    this._identification = identification;
    this._firtsName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._phone = phone;
  }

  get id(): number {
    return this._id;
  }

  get identification(): string {
    return this._identification;
  }

  get firstName(): string {
    return this._firtsName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get email(): string {
    return this._email;
  }

  get phone(): string {
    return this._phone;
  }
}
