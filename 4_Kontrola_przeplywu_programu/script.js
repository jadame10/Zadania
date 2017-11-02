
// Zadanie 7

/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;
//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}

//Z1

var x = 9;
var y =7;

if(x>y){
	console.log('x');
}else{
console.log('y');
}

//Z2

var dd = 1;
var ol = 52;
var jl = 24;

if (dd > ol) {
    console.log('dd');
} else if (ol > jl) {
     console.log('ol');
} else {
     console.log('jl');
}

//Z3

var i =0;
var t = "Lubie Javascript";

for( i =0 ; i < 10; i++){
	console.log(t);
	
}

//Z4

var result = 0;

for(i =0; i < 11; i++){
result +=i;	

}
console.log(result);

//Z5

var n = 7;
var i;
for( i =0; i <= n; i++)
{

	
if(i%2 == 0){
	console.log(i + "-liczba parzysta");
}
else{
console.log(i +  "-liczba nieparzysta");	
}
}
//Z6
var i = 0;
var j = 0;
for(i; i< 4; i++){
console.log(i);	
}

for(j; j< 5; j++){
console.log(j);	
}

//Z7


var size = 5;
//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    
    for(var j = 0; j < 1 ; j++ ) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
 

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}


