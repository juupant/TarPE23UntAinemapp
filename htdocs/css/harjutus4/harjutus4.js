let nadalapaevad = ["EsmaspÃ¤ev", "TeisipÃ¤ev", "KolmapÃ¤ev", "NeljapÃ¤ev", "Reede"]; //parandasin
console.log(nadalapaevad);
console.log(nadalapaevad.length);//Kuvasin massiivi suuruse
let nadalapaevad1 = ["EsmaspÃ¤ev", "TeisipÃ¤ev", "KolmapÃ¤ev", "NeljapÃ¤ev", "Reede"];
nadalapaevad1.push("LaupÃ¤ev","PÃ¼hapÃ¤ev");//lisasin koodi abiga LaupÃ¤eva ja pÃ¼hapÃ¤eva juurde
console.log(nadalapaevad1);
nadalapaevad.sort();
nadalapaevad.reverse();//Sorteerisin elemendid kahanevalt
console.log(nadalapaevad);
console.log(nadalapaevad1[6]);//Kuvasin viimaseS

let koodid = "444689936146563731 2452966188592191874 52634311978613959924676311 4874232339 491973615889195397613151 64491375479568464397 2799868298847212752434 9464245911 84529438455334236247245 8131257451645317232949247 26471594451453281675411332 6631592725297745964837 616698332453173937881461 3311783543427862468268 385418321228899775431 4659867 73395213225525916984356 833792195426925124155181841 123388893 6941777837193213644325351 11353488912476869536954 61173937137292328237388335 5344692 452956158 31937616696951768494 584842118999165552436 8832121577139589884 15282516522883423742885 14713349724 6919979438697694 2252585676244745856486 5617683424485959291 547443594 2678324174797795449925 43753791352187862731151912 6875665565836721939262 35482977"
let massiiv = koodid.split(" ");
let koodidearv = massiiv.length;
console.log("Koodide arv:", koodidearv);
let KoodiIndex = massiiv.indexOf("35482977");
console.log("kood 35482977 asub indeksisil", KoodiIndex);
let poolMassiv =massiiv.slice(0, Math.ceil(massiiv.length / 2));
console.log("pooled elemendid:", poolMassiv);

let sportlased = [
    ["Alice", 25, [10.2, 9.8, 10.5]],
    ["Bob", 22, [9.5, 9.6, 9.7]],
    ["Charlie", 28, [11.1, 11.2, 11.5]]
    ];
let nimi1 = sportlased[0][0];
let parimTulemus1 = Math.max(...sportlased[0][2]);
console.log(nimi1 + ": " + parimTulemus1);

let nimi2 = sportlased[1][0];
let parimTulemus2 = Math.max(...sportlased[1][2]);
console.log(nimi2 + ": " + parimTulemus2);

let nimi3 = sportlased[2][0];
let parimTulemus3 = Math.max(...sportlased[2][2]);
console.log(nimi3 + ": " + parimTulemus3);