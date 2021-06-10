export class Step {
  private _id: Number;
  private _stepName: string;

  constructor(id: Number, stepName: string ){
    if(id === null) {
      this._id = 0;
    } else {
      this._id = id;
    }
    this._stepName = stepName;
  }
  public get id() {
    return this._id;
  }

  public get stepName() {
    return this._stepName;
  }

  public set stepName(stepName:string) {
    this._stepName = stepName;
  }
}
