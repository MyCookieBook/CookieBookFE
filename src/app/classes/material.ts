export class Material {
  private id: Number;
  private materialName: string;

  constructor( id: Number, materialName: string ){
    if(id === null) {
      this.id = 0;
    } else {
      this.id = id;
    }
    this.materialName = materialName;
  }

  public getId() {
    return this.id;
  }

  public getMaterialName() {
    return this.materialName;
  }

  public setMaterialName(materialName:string) {
    this.materialName = materialName;
  }
}
