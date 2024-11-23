
-- Insert data into table 'specjalizacje'
INSERT INTO specjalizacja (id_specjalizacji, nazwa_specjalizacji) VALUES
(1, 'Kardiologia'),
(2, 'Neurologia'),
(3, 'Ortopedia'),
(4, 'Dermatologia'),
(5, 'Pediatria');

-- Insert data into table 'lekarze'
INSERT INTO lekarz (id_lekarza, imie, nazwisko, id_specjalizacji, telefon, email) VALUES
(1, 'Jan', 'Kowalski', 1, '123456789', 'jan.kowalski@example.com'),
(2, 'Anna', 'Nowak', 2, '987654321', 'anna.nowak@example.com'),
(3, 'Piotr', 'Zieliński', 3, '555123456', 'piotr.zielinski@example.com'),
(4, 'Maria', 'Wiśniewska', 4, '666234567', 'maria.wisniewska@example.com'),
(5, 'Tomasz', 'Mazur', 5, '777345678', 'tomasz.mazur@example.com');

-- Insert data into table 'uslugi_medyczne'
INSERT INTO usluga (id_uslugi, nazwa_uslugi, cena_uslugi) VALUES
(1, 'Konsultacja kardiologiczna', 200),
(2, 'Badanie neurologiczne', 180),
(3, 'Wizyta ortopedyczna', 220),
(4, 'Porada dermatologiczna', 150),
(5, 'Konsultacja pediatryczna', 170);

-- Insert data into table 'grafiki'
INSERT INTO grafik (id_grafiku, id_lekarza, dzien_tygodnia, godzina_od, godzina_do) VALUES
(1, 1, 'Poniedziałek', '08:00', '12:00'),
(2, 2, 'Wtorek', '09:00', '13:00'),
(3, 3, 'Środa', '10:00', '14:00'),
(4, 4, 'Czwartek', '11:00', '15:00'),
(5, 5, 'Piątek', '12:00', '16:00');
