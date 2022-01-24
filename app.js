var damageGiven =0;

function increase (damage){
    damageGiven = damageGiven+damage;
    document.body.querySelector(".damageGiven").innerHTML=damageGiven;
}

function attackThanos (catchphrase,damage){
    var attack = document.createElement("div");
    attack.innerHTML=catchphrase;
    attack.addEventListener("click", function (){
        increase(damage);

    })
    document.body.querySelector(".main").appendChild(attack);
}

document.body.querySelector(".ironMan").addEventListener("click",function () {
    document.body.querySelector(".main").innerHTML="";
    attackThanos("Click me to Attack: I am Iron Man!",8);
});

document.body.querySelector(".thor").addEventListener("click",function () {
    document.body.querySelector(".main").innerHTML="";
    attackThanos("Click me to Attack: For Asgard!",10);
});

document.body.querySelector(".blackWidow").addEventListener("click",function () {
    document.body.querySelector(".main").innerHTML="";
    attackThanos("Click me to Attack: This is just like Budapest all over again",5);
});

document.body.querySelector(".captainAmerica").addEventListener("click",function () {
    document.body.querySelector(".main").innerHTML="";
    attackThanos("Click me to Attack: I can do this all day !",7);
});

document.body.querySelector(".reset").addEventListener("click",function () {
    document.body.querySelector(".damageGiven").innerHTML="0";
    damageGiven = 0;
    document.body.querySelector(".main").innerHTML="";
});




