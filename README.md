# Memory Lab

Memory Lab to aplikacja webowa do treningu pamięci wzrokowej. Zadaniem użytkownika
jest zapamiętanie podświetlonych pól planszy, a następnie odtworzenie ich po ukryciu.

## Funkcjonalności

- plansza gry o rozmiarze 5 × 5,
- losowanie sześciu unikalnych aktywnych pól dla każdej sesji,
- podświetlenie pól do zapamiętania przez 1500 ms,
- zaznaczanie i odznaczanie pól przez użytkownika,
- sprawdzanie odpowiedzi po zakończeniu wyboru,
- komunikat o poprawnej lub błędnej odpowiedzi,
- statystyki rozegranych i wygranych gier,
- obliczanie procentu wygranych gier,
- zapisywanie statystyk w `localStorage`,
- automatyczne testy logiki aplikacji,
- pipeline GitHub Actions dla `build` i `test`.

## Technologie

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Vitest
- GitHub Actions

## Struktura projektu

Interfejs jest zorganizowany zgodnie z metodologią Atomic Design:

```text
memory-lab/src/
├── components/
│   ├── atoms/       # podstawowe elementy, np. Button, Cell, Heading
│   ├── molecules/   # grupy atomów, np. FeatureCard, StatItem
│   ├── organisms/   # większe sekcje, np. GameBoard, TopBar
│   └── templates/   # układy stron
├── pages/           # widoki aplikacji
├── types/           # współdzielone typy TypeScript
└── utils/           # logika gry i obsługa localStorage
```

## Uruchomienie

Wymagany jest Node.js w wersji 22 lub nowszej.

```bash
cd memory-lab
npm install
npm run dev
```

Po uruchomieniu aplikacja będzie dostępna pod adresem wyświetlonym przez Vite,
zwykle `http://localhost:5173`.

## Dostępne skrypty

```bash
npm run dev      # uruchamia serwer developerski
npm run build    # sprawdza typy i tworzy build produkcyjny
npm run preview  # uruchamia podgląd buildu produkcyjnego
npm run lint     # uruchamia ESLint
npm test         # uruchamia testy Vitest
```

## Testy

Testy obejmują między innymi:

- generowanie unikalnych pól planszy,
- walidację liczby pól,
- sprawdzanie poprawności odpowiedzi,
- aktualizację statystyk po sesji.

Testy można uruchomić poleceniem:

```bash
npm test
```

## CI

GitHub Actions uruchamia workflow dla każdego `push` i `pull_request`.
Najpierw wykonywany jest build aplikacji, a po jego pomyślnym zakończeniu testy.