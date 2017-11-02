//Z1

var array = [1, 2, 5];

for(var i =0; i< array.length; i++){
	var t = array[i];
	console.log(t);
}


//Z2

var owoce = ['jablko', 'gruszka', 'ananas', 'banan', 'arbuz'];

var ow = owoce[0];
console.log(ow);



for(var c = 0; c < owoce.length; c++){
	var ost = owoce[c];
	
}
console.log(ost);

for(var c = 0; c < owoce.length; c++){
	var ost = owoce[c];
	console.log(ost);
}


//Z3
var sum = 0;
var suma = [2, 45, 21, 12, 34, 5, 1, 9, 5, 17, sum];

var wynik = 0;

for(var i = 0; i< suma.length; i++){
	wynik += suma[i];
	
}
console.log(wynik);

//Z4

var tum = [2, 45, 21, 12, 34, 5, 1, 9, 5, 17, 34];
var resp=0;
for (var i = 0; i < tum.length; i++){
	var pr = tum[i];
	if(pr%2 == 0){
		resp += pr;
	}
}
console.log(resp);

//Z5
var max =0;
var mm = [2, 45, 21, 12, 34, 5, 1, 9, 5, 67, max];





max = myArrayMax(mm);

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

console.log(max);

//Z6
var firstIndex;
var am = [2, 15, 21, 12, 34, 45, 1, 9, 45, 67, firstIndex];

for (var a = 1; a < am.length; a++) {
        if (am.lastIndexOf(am [a])> a) {
            firstIndex = a;
            break;
        }
}
console.log(firstIndex); 
	
	
//Z7
	
var nam = [2, 15, 21, 12, 34, 45, 1, 9, 45, 67];	
for(var i= nam.length; i >= 0;  i--){
var tt = nam[i];	
console.log(tt);

}
