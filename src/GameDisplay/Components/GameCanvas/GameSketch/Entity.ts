export interface Entity {
  show(): void;
  animate(): void;
  update(): void;
  collides(entity: Entity): boolean;
  getPosX(): number;
}
