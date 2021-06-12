export class Step {
  private id: Number;
  private stepName: string;

  constructor(id: Number, stepName: string ){
    if(id === null) {
      this.id = 0;
    } else {
      this.id = id;
    }
    this.stepName = stepName;
  }
  public getId() {
    return this.id;
  }

  public getStepName() {
    return this.stepName;
  }

  public setStepName(stepName: string) {
    this.stepName = stepName;
  }
}
