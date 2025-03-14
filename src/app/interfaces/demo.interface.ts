export interface IDemoNgComponentEventType {
  data: {
    id: number;
    name: string;
    type: 'Jedi' | 'Sith' | 'Cazador';
    lightsaberColor?: string;
    weapon?: string;
  };
}
