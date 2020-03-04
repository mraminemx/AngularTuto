import { States } from '../enums/states.enum';

export interface Prestations {

  id: number;
  typePresta: string;
  client: string;
  tjmHt: number;
  nbJours: number;
  tva: number;
  state: States;
  comment: string;
  totalHt(): number;
  totalTtc(): number;
}
