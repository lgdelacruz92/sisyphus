export interface Entity {
  show(): void;
  animate(): void;
  update(): void;
  collides(entity: Entity): boolean;
  getPosX(): number;
  setPosX(x: number): void;
  addSpeed(x: number): void;
  reset(): void;
}
