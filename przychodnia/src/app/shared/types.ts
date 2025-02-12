export interface Wizyta {
  id_wizyty: string;
  data_wizyty: Date;
  id_pacjenta: string;
  id_lekarza: string;
  powod_wizyty: string;
  status_wizyty: "odwolana" | "zaplanowana" | "zakonczona"
}

export interface WizytaPremium extends Wizyta {
  // po inner joinie
  l_imie: string;
  l_nazwisko: string;
}



export interface Lekarz {
  id_lekarza: number;
  imie: string;
  nazwisko: string
}

export interface Pacjent {
  id_pacjenta: number;
  email: string;
}
