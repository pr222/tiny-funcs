# Futtiga funktioner

## Uppgift

Komplettera de nio funktionerna i `src/tinyFuncs.js` enligt specifikationerna. Du behöver inte tänka på att implementera någon form av felhantering.

>:warning: Filen innehåller funktioner med kod. Koden i funktionerna får under inga omständigheter ändras. Detta gäller inte i om du behöver byta `const` till `let`. Du kan även ta bort TODO-kommentarer.

### Filer

Modulerna `src/app.js` och `src/tinyFuncs.js` samverkar enligt beroendediagrammet nedan. Du ser även `test/tinyFuncs.test.js` (som du inte ska redigera), vilket är den modul som innehåller enhetstest som körs med `npm test`.

![Beroendediagram](/.readme/dependency-graph.svg)

## Funktioner

### add

Komplettera funktionen så att den returnerar summan av de lokala variablerna `a` och `b`. Tänk på att de lokala variablernas värden måste vara av typen Number för att de ska kunna summeras.

### concat

Komplettera funktionen så att du med hjälp av konkatenering av givna lokala variabler skapar och returnerar strängen `'I'm going to learn how to program in 9 weeks.'`.

### round

Komplettera funktionen så att den avrundade summan av de två lokala variablerna returneras. Summan ska vara avrundad till det närmaste heltalet.

### getOddNumbers

Komplettera funktionen så att den returnerar en sträng med kommaseparerade udda till upp till och med angivet maxvärde.

- Är parameterns värde `3` ska strängen `1, 3` returneras.
- Är parameterns värde `10` ska strängen `1, 3, 5, 7, 9` returneras.

### greetings

Komplettera funktion så att olika hälsningsmeddelanden returneras beroende av hur mycket klockan är.

- Om klockan är från 8 och innan 12 ska meddelandet vara `'Good morning!'`.
- Om klockan är från 12 och innan 18 ska meddelandet vara `'Good afternoon!'`.
- Om klockan är från 18 och innan 24 ska meddelandet vara `'Good evening!'`.
- Om klockan är från 24 och innan 8 ska meddelandet vara `'Good night!'`.

(Funktionen innehåller redan kod ,`new Date().getHours()`, som ger dagens aktuella timme.)

### replaceHyphensFor

Komplettera funktionen den returnerar en sträng där alla bindestreck ersatts med mellanslag. Använd en `for`-sats för att lösa problemet.

### replaceHyphensWhile

Komplettera funktionen den returnerar en sträng där alla bindestreck ersatts med mellanslag. Använd en `while`-sats för att lösa problemet.

### getNumberSequence

Komplettera funktionen så att den genom att använda två nästlade `for`-satser returnerar en sträng med sekvenserna `'11-12-13, 21-22-23, 31-32-33, 41-42-43, 51-52-53'`.

## Tips

Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testerna...).

Funktioner, metoder, etc. som _kan_ komma till användning beroende hur du väljer att lösa uppgiften.

- [Number.parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt), [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [Math.round](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
- [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [%, restoperator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder)
- [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [String.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [String.charAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
- [Number.toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)
