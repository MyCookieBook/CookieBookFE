export class Material {
  private _id: Number;
  private _materialName: string;

  constructor( id: Number, materialName: string ){
    if(id === null) {
      this._id = 0;
    } else {
      this._id = id;
    }
    this._materialName = materialName;
  }

  public get id() {
    return this._id;
  }

  public get materialName() {
    return this._materialName;
  }

  public set materialName(materialName:string) {
    this._materialName = materialName;
  }
}
