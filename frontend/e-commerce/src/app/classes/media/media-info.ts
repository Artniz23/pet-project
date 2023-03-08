export class MediaInfo {
  constructor(private _code: string, private _className: string) {}

  get code(): string {
    return this._code;
  }

  get className(): string {
    return this._className;
  }
}
