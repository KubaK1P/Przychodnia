import PrzychodniaDesc from "./components/przychodniaDesc";

export default function Home() {
  return (
    <main className="w-2/3 flex flex-wrap m-4 min-h-[90vh]">
      <h1 className="basis-[100%] text-4xl font-bold tracking-wide h-[8rem] mt-[5rem]">
        <span className="bg-sky-200 p-4 rounded-md shadow-md">
          Przychodnia
        </span>
      </h1>
      <PrzychodniaDesc
        imageSrc="/przychodnia.jpg"
        content="<b>Przychodnia Zdrowie+ </b>to nowoczesna placówka medyczna oferująca
          kompleksową opiekę zdrowotną. Nasz zespół doświadczonych lekarzy
          specjalistów zapewnia konsultacje w takich dziedzinach jak pediatria,
          kardiologia, dermatologia, czy medycyna rodzinna. Dzięki intuicyjnej
          platformie online możesz szybko i wygodnie: Umówić się na wizytę w
          dogodnym terminie, Sprawdzić grafik lekarzy, Przejrzeć historię swoich
          wizyt. Dbamy o Twój komfort i zdrowie, dlatego łączymy nowoczesne
          technologie z indywidualnym podejściem do każdego pacjenta. Zapraszamy
          do Przychodni Zdrowie+ – Twojego miejsca na zdrowie!"
      />
      <PrzychodniaDesc
      imageSrc="/dziewczynka.jpg"
      content="<b>Przychodnia Zdrowie+ </b>to nowoczesna placówka medyczna oferująca
        kompleksową opiekę zdrowotną. Nasz zespół doświadczonych lekarzy
        specjalistów zapewnia konsultacje w takich dziedzinach jak pediatria,
        kardiologia, dermatologia, czy medycyna rodzinna. Dzięki intuicyjnej
        platformie online możesz szybko i wygodnie: Umówić się na wizytę w
        dogodnym terminie, Sprawdzić grafik lekarzy, Przejrzeć historię swoich
        wizyt. Dbamy o Twój komfort i zdrowie, dlatego łączymy nowoczesne
        technologie z indywidualnym podejściem do każdego pacjenta. Zapraszamy
        do Przychodni Zdrowie+ – Twojego miejsca na zdrowie!"
    />
    </main>
  );
}
