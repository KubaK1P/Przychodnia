export interface Wizyta {
  id_wizyty: string;
  data_wizyty: string;
  id_pacjenta: string;
  id_lekarza: string;
  powod_wizyty: string;
  status_wizyty: "odwolana" | "zaplanowana" | "zakonczona"
}
