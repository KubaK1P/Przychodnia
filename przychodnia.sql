-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 15 Lis 2024, 20:52
-- Wersja serwera: 10.4.24-MariaDB
-- Wersja PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `przychodnia`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `grafik`
--

CREATE TABLE `grafik` (
  `id_grafiku` int(11) NOT NULL,
  `id_lekarza` int(11) NOT NULL,
  `dzien_tygodnia` varchar(20) DEFAULT NULL,
  `godzina_od` time DEFAULT NULL,
  `godzina_do` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `lekarz`
--

CREATE TABLE `lekarz` (
  `id_lekarza` int(11) NOT NULL,
  `imie` varchar(50) NOT NULL,
  `nazwisko` varchar(50) NOT NULL,
  `id_specjalizacji` int(11) NOT NULL,
  `telefon` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `pacjent`
--

CREATE TABLE `pacjent` (
  `id_pacjenta` int(11) NOT NULL,
  `imie` varchar(50) NOT NULL,
  `nazwisko` varchar(50) NOT NULL,
  `data_urodzenia` date DEFAULT NULL,
  `pesel` varchar(11) NOT NULL,
  `adres` varchar(255) NOT NULL,
  `telefon` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `haslo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `rozliczenie`
--

CREATE TABLE `rozliczenie` (
  `id_rozliczenia` int(11) NOT NULL,
  `id_wizyty` int(11) NOT NULL,
  `id_uslugi` int(11) NOT NULL,
  `kwota_rozliczenia` decimal(12,2) NOT NULL,
  `status_rozliczenia` enum('zaplacona','oczekujaca') DEFAULT NULL,
  `data_platnosci` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `specjalizacja`
--

CREATE TABLE `specjalizacja` (
  `id_specjalizacji` int(11) NOT NULL,
  `nazwa_specjalizacji` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `usluga`
--

CREATE TABLE `usluga` (
  `id_uslugi` int(11) NOT NULL,
  `nazwa_uslugi` varchar(100) NOT NULL,
  `opis_uslugi` text NOT NULL,
  `cena_uslugi` decimal(12,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `usluga_wizyta`
--

CREATE TABLE `usluga_wizyta` (
  `id_uslugi_wizyty` int(11) NOT NULL,
  `id_wizyty` int(11) NOT NULL,
  `id_uslugi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `wizyta`
--

CREATE TABLE `wizyta` (
  `id_wizyty` int(11) NOT NULL,
  `data_wizyty` datetime NOT NULL,
  `id_pacjenta` int(11) NOT NULL,
  `id_lekarza` int(11) NOT NULL,
  `powod_wizyty` text NOT NULL,
  `status_wizyty` enum('zaplanowana','odwolana','zakonczona') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `grafik`
--
ALTER TABLE `grafik`
  ADD PRIMARY KEY (`id_grafiku`),
  ADD KEY `id_lekarza` (`id_lekarza`);

--
-- Indeksy dla tabeli `lekarz`
--
ALTER TABLE `lekarz`
  ADD PRIMARY KEY (`id_lekarza`),
  ADD KEY `id_specjalizacji` (`id_specjalizacji`);

--
-- Indeksy dla tabeli `pacjent`
--
ALTER TABLE `pacjent`
  ADD PRIMARY KEY (`id_pacjenta`);

--
-- Indeksy dla tabeli `rozliczenie`
--
ALTER TABLE `rozliczenie`
  ADD PRIMARY KEY (`id_rozliczenia`),
  ADD KEY `id_wizyty` (`id_wizyty`),
  ADD KEY `id_uslugi` (`id_uslugi`);

--
-- Indeksy dla tabeli `specjalizacja`
--
ALTER TABLE `specjalizacja`
  ADD PRIMARY KEY (`id_specjalizacji`);

--
-- Indeksy dla tabeli `usluga`
--
ALTER TABLE `usluga`
  ADD PRIMARY KEY (`id_uslugi`);

--
-- Indeksy dla tabeli `usluga_wizyta`
--
ALTER TABLE `usluga_wizyta`
  ADD PRIMARY KEY (`id_uslugi_wizyty`),
  ADD KEY `id_wizyty` (`id_wizyty`),
  ADD KEY `id_uslugi` (`id_uslugi`);

--
-- Indeksy dla tabeli `wizyta`
--
ALTER TABLE `wizyta`
  ADD PRIMARY KEY (`id_wizyty`),
  ADD KEY `id_pacjenta` (`id_pacjenta`),
  ADD KEY `id_lekarza` (`id_lekarza`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `grafik`
--
ALTER TABLE `grafik`
  MODIFY `id_grafiku` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `lekarz`
--
ALTER TABLE `lekarz`
  MODIFY `id_lekarza` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `pacjent`
--
ALTER TABLE `pacjent`
  MODIFY `id_pacjenta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `rozliczenie`
--
ALTER TABLE `rozliczenie`
  MODIFY `id_rozliczenia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `specjalizacja`
--
ALTER TABLE `specjalizacja`
  MODIFY `id_specjalizacji` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `usluga`
--
ALTER TABLE `usluga`
  MODIFY `id_uslugi` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `usluga_wizyta`
--
ALTER TABLE `usluga_wizyta`
  MODIFY `id_uslugi_wizyty` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `wizyta`
--
ALTER TABLE `wizyta`
  MODIFY `id_wizyty` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `grafik`
--
ALTER TABLE `grafik`
  ADD CONSTRAINT `grafik_ibfk_1` FOREIGN KEY (`id_lekarza`) REFERENCES `lekarz` (`id_lekarza`);

--
-- Ograniczenia dla tabeli `lekarz`
--
ALTER TABLE `lekarz`
  ADD CONSTRAINT `lekarz_ibfk_1` FOREIGN KEY (`id_specjalizacji`) REFERENCES `specjalizacja` (`id_specjalizacji`);

--
-- Ograniczenia dla tabeli `rozliczenie`
--
ALTER TABLE `rozliczenie`
  ADD CONSTRAINT `rozliczenie_ibfk_1` FOREIGN KEY (`id_wizyty`) REFERENCES `wizyta` (`id_wizyty`),
  ADD CONSTRAINT `rozliczenie_ibfk_2` FOREIGN KEY (`id_uslugi`) REFERENCES `usluga` (`id_uslugi`);

--
-- Ograniczenia dla tabeli `usluga_wizyta`
--
ALTER TABLE `usluga_wizyta`
  ADD CONSTRAINT `usluga_wizyta_ibfk_1` FOREIGN KEY (`id_wizyty`) REFERENCES `wizyta` (`id_wizyty`),
  ADD CONSTRAINT `usluga_wizyta_ibfk_2` FOREIGN KEY (`id_uslugi`) REFERENCES `usluga` (`id_uslugi`);

--
-- Ograniczenia dla tabeli `wizyta`
--
ALTER TABLE `wizyta`
  ADD CONSTRAINT `wizyta_ibfk_1` FOREIGN KEY (`id_pacjenta`) REFERENCES `pacjent` (`id_pacjenta`),
  ADD CONSTRAINT `wizyta_ibfk_2` FOREIGN KEY (`id_lekarza`) REFERENCES `lekarz` (`id_lekarza`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
