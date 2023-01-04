export class Cell {
    id: number | undefined;
    label: string = '';
    xPosition: number | undefined;
    yPosition: number | undefined;
    value: number | undefined;

    constructor(initializer?: any) {
        if (!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.label) this.label = initializer.label;
        if (initializer.xPosition) this.xPosition = initializer.xPosition;
        if (initializer.yPosition) this.yPosition = initializer.yPosition;
        if (initializer.yPosition) this.value = initializer.value;
      }
}