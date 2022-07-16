Susikurti html ir js failus

Pasileisti html faila per live server (paspaudus right click ant jo matysit pasirinkima)

html faile nusirodyti :
 * elementa kuriame atvaizduosit kiek kartu paspaudet mygtuka
 * mygtuka ant kurio paspaudus pridesite 1 prie savo cookieCount kintamojo

javascript faile susikurti:
 * kintamaji kuriame turesime paspaudimu kieki
 * setCookie funkcija kuri tures du parametrus (name, value), kad uzsetintume cookie narsyklei
 * Funkcija prideti sausaini - prides viena prie kintamojo, nustatys atvaizdavimo
 elemente kiek turim sausainiu teksta ir uzsetins narsyklej cookie su 'cookieCount' kaip name ir value
 ateis is kintamojo

______________________________________________________________________________________

Susikurti funkcija issitraukti cookie
______________________________________________________________________________________

Html prisisdeti mygtuka "Pirkti mociute"

javascript:

 * Reikes naujo kintamojo mociuciu kiekiui
 * Mociutes kaina 50 sausainiu
 * Pasirasyti funkcija pirkti mociute
 	- Salyga ar uztenka sausainiu
	- atimti is visu turimu sausainiu mociutes kaina
	- nustatyti document.cookie ir cookieCount nauja reiksme (po mociutes pirkimo)
	- prideti viena mociute prie savo kintamojo
	- prideti nauja document.cookie "grandmaCount" su mociuciu kiekiu kaip reiksme


_______________________________________________________________________________________

Naujas kintmasis prie kurio veliau prilyginsim mociuciu sausainiu gaminimo intervala

Susikurti funkcija kuri:

 * Patikrins ar turit mociuciu
 * priskirs mociuciu intervalui setInterval() metoda
 * setInterval pirmasis parametras yra funkcija kuri prides nuo mociuciu kiekio 0.5 * mociutesCount
 sausainius, nepamirsti uzsetint document.cookie ir atnaujint html
 * kad kiekviena karta iskvietus funkcija nekurti naujo intervalo,
 naudojam metoda clearInterval(mociuciu intervalas) pries inicijuojant nauja
 * funkcija turetu but iskviesta kai puslapis kraunasi ir kai nusiperkam mociute


________________________________________________________________________________________


NAMU DARBAS

Sukurti upgrade sistema

Jei turit daugiau nei 5 mociutes, atsiranda pirmas upgrade, kuri galite nusipirkti viena karta
jo kaina 200 sausainiu,
ji nusipirkus mociutes tampa efektyvesnes 25%

_________________________________________________________________________________________

Optional uzduotis

Mociutes kas 10 sekundziu pavargsta ir nustoja dirbti 5iom sekundem

__________________________________________________________________________________________

Advanced optional uzduotis

Prideti mociuciu fabrika kuris gamins 10 sausaisniu per sekunde

pasidaryti bendra funkcija tiek mociutem tiek fabrikui ir ju intervalam 
(praplesti mociuciu ir intervalo funkcija parametrais, greiciausiai reikes ir nauju kintamuju)