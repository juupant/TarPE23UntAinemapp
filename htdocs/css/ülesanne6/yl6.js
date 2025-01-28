


function teavitus(){
const input = prompt ("Sisesta number");
let number = parseFloat(input);
if (isNaN(number)){
    alert(`sisestatud väärtus(${input})ei ole number`);
    return;
}
switch (true) {
case (number>0):
    alert(`${number} on positiivne`);
    break;
case (number>0):
    alert(`${number} on negatiivne`);
    break;
case(number=0):
    alert(`${number} on null`);
    break;

}
}
function restoran(){
    const input=prompt("sisesta arv");
    const number = parseFloat(input);

    if (isNaN(number)|| number<0){
        alert(`sisestatud väärtus(${input})on liiga väike`);
        return;
    }
    switch (number) {
        case 1:
        case 2:{
            alert(`valige laud kahele`);
            break;
        }
        case 3:
        case 4:{
            alert(`valige laud neljale`);
            break;
        }
        case 5:
        case 6:{
            alert(`valige laud kuuele`);
            break;
        }
        default:
            alert(`valige suur laud`);
            break;
        }
    
}