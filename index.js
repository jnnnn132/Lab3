var a = Math.floor(Math.random()*100)+1; 
       
var number = 1; 

let ansnum;

document.getElementById("submitguess").onclick = function(){ 
       
    var b = document.getElementById("guessField").value; 

    if(number<=10){
            if(b == a){     
                document.querySelector('.result').textContent = "Congratulations!! You got it right in" + " "+ number +" " + "AWESOME!!!!";                   
                number = 12;
            }else if(b > a){     
                    number++;
                    document.querySelector('.result').textContent = "Last guess was too high!!!"; 
                }else{ 
                    number++; 
                    document.querySelector('.result').textContent = "Last guess was too low!!!"; 
                } 
                if(number == 2){
                    ansnum = b;
                }else{
                    ansnum += ", "+b;
                }
                document.querySelector('.Previous').textContent = ansnum; 
        }   
        if(number == 11){
            document.querySelector('.result').textContent = "YOU LOSE! THE NUMBER IS " + a + "."; 
    }
}             


