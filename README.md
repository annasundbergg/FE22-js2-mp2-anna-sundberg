# Miniprojekt 2 i kursen Javascript 2

## Syfte
Använda moduler, objektorienterad programmering och encapsulation & inheritance.

## Beskrivning
Skapa ett spel baserat på en förenklad version av en tamagotchi. 
En användare ska kunna lägga till flera tamagotchis av minst två olika typer och hålla dem vid liv genom att mata och leka med dem.

## Krav
### Spelet
Användaren ska kunna lägga till en ny tamagotchi där användaren bestämmer:  
- Namnet på tamagotchin
- Typ av tamagotchi - det ska finnas minst två olika förbestämda typer  
- Varje tamagotchis hunger- och happiness level kommer automatiskt sjunka över tid  
- När en tamagotchis hunger eller happiness level har gått ner till noll har tamagotchin dött  
- Användaren ska kunna leka och mata varje tamagotchi för att förhindra dess död, så länge tamagotchin fortfarande lever  

### Koden
Använd minst två moduler. Tamagotchin ska vara en klass:
- Allt som kan vara private ska vara private
- Hålla reda på hunger och happiness level.  De ska kunna ha värden från 0 till och med 10, inget annat.
- Värdet på varje level ska minska med olika tidsintervaller. (t.ex. minska hunger med ett varje sekund, minska happiness med 1 varannan sekund.) 
- Värdet på varje level ska gå att öka med ett i taget. (Alltså öka happiness genom att “leka” och öka hunger genom att “mata”)
- Om värdet på något av levels går ner till noll ska det inte längre gå att leka eller mata. Tamagotchin är då död.

### GUI
- Det ska vara en tydlig skillnad mellan de olika typerna av tamagotchis, genom text, bilder eller färg osv.   
- Det ska vara tydligt när en tamagotchi har dött. Genom text, bild eller färg osv.  
- Det ska vara tydligt hur man “leker” och “matar” tamagotchin. Genom knappar med text eller bilder osv.   

I övrigt väljer du helt och hållet själv hur spelet ska se ut.  
Du väljer även själv om GUI:t är en del av klassen eller om det skapas utanför klassen.   

Det ska gå att lägga till hur många tamagotchis som helst på webbsidan.
För de delar av GUI:t som uppdateras beroende på hunger- och happinessvärdena gäller:
- Antingen behöver de vara tillgängliga i klassen på ett eller annat sätt. 
- Eller så behöver du utanför klassen med jämna mellanrum kolla om värdet har ändrats.
