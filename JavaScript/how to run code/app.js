// let heroes=[
//     ["Ironman","Spiderman","Thor"],
//     ["Batman","Flash","Wonderman"]
// ];

// for(let i = 0 ; i<heroes.length ; i++){
//     console.log(i,heroes[i],heroes[i].length);

//     for(let j =0;j<heroes[i].length;j++){
//         console.log(`j=${j},${heroes[i][j]}`);
//     }

// }

// let student = [["umar",94],["habiba",90],["fahad",89]];

// for (let i =0 ; i<student.length ; i++){
//     console.log(`info of student #${i}`);
//     for(let j=0; j<student[i].length ; j++){
//         console.log(`${student[i][j]}`);
//     }
// }

// let fruits = ["Mango","Banana","litchi","Guawa"];

// for(fruit of fruits){
//     console.log(fruit);

// }

// for(char of "Umarr"){
//     console.log(char);
// }

// let heroes = [["Superman","Flash","bettle"],["Spiderman","kuttaman","lopez"]];

// for(list of heroes){
//     for(hero of list){
//         console.log(hero);
//     }
// }

let todo=[];
let req = prompt("Please,  enter your request");

while(true){

    if(req=="quit"){
        console.log("you are quitting the app");
        break;
    }
    if(req=="list"){
        console.log("-------------");

        for(let i= 0; i<todo.length ; i++){

            console.log(i,todo[i]);

        }
        console.log("-------------");
    }else if(req=="add"){
        let task =prompt("Please, enter the task you want to add");
        todo.push(task);
        console.log("Task added");
    }else if (req=="delete"){
        let req = prompt("please, enter the index where you want to delete a task");
        todo.splice(idx,1);
        console.log("task deleted");
    }
}