
//Kellaaeg
let tunnid = 2;
let minutid = 28;
let sekundid = 59;

let Lause1 = +tunnid+":"+minutid+":"+sekundid+"PM";
console.log(Lause1);

//tsitaat lause sees ja Mallide kasutamine
let tsitaat = "nimetÃ¤hed on";
let eesnimi = "Alan Markus";
let perekonnanimi = "Unt";
let Lause2 = `${eesnimi} ${perekonnanimi} ${tsitaat} ${eesnimi % 2 === 0 ? 'Mihkel' : 'M'}.${perekonnanimi % 2 === 0 ? 'Ploompuu' : 'P'}`;
console.log(Lause2);

//Perenimi pikkus 
let Perenimi = "eee";
let Eesnimi = "mmmm";
let fullname= Eesnimi+Perenimi;
let Perekonnanimepikkus = Perenimi.length;
let Lause4 = "Perenimi on "+Perenimi+" ja selle pikkus on "+Perekonnanimepikkus;
console.log(Lause4);

//E-posti aadressi muutmine
let epost = "elukas@asd.com";
let newepost = epost.replaceAll("netlog","gmail");
console.log(newepost);

//Andmerida analÃ¼Ã¼s
let Lause3 = "1,asd,fgh,koerlane1@gbbddd.com,Male,13.12.444.576";
let s = Lause3.slice(51,64);
let m = Lause3.slice(21,33);
let uuslause =" \""+ s + "\"" + "ja" + "\"" + m + "\"";
console.log(uuslause);