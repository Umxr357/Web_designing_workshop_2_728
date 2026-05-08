let fav="Avatar";

let guess=prompt("Guess my fav movie?");

while((guess!=fav) && (guess!="quit")){
    console.log("Wrong");
    guess=prompt("Guess again! write quit if you wanna quit");
}
if(guess=="Avatar"){
    console.log("Congrats on guessing it right.");
}else{
    console.log("you quit");
}