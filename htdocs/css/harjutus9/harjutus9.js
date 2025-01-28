//Erinevad funktsioonid
//Koosta kaks funktsiooni, mis vÃ¤ljastavad sinu nime (ilma Ã¼hegi argumendita). Kasuta klassikaslist ja noolefunktsioone.
function klassikaline(){
    console.log("A.M.U");
}
klassikaline();

const noolFunktsioon= (nimi) => {
  console.log(nimi);
};
noolFunktsioon("Alan Markus");

// Argumendiga funktsioon
// Kirjuta funktsioon nimega kuupaevEesti, mis kuvab konsoolile praeguse kuupÃ¤eva ja kuu eesti keeles. Argumendiks kuupÃ¤ev kujul 19.07.23

var kuupaevEesti = function(){
    const date = new Date();
    date.getFullYear
    console.log(date);
}
kuupaevEesti();

// Teadmata hulk
// Kirjuta funktsioon, mis vÃµtab siseniks kasutajalt teadmata hulga tÃ¤isarve ning tagastab nende koguarvu ning keskmise.

function teadmatafunc(...arvud){
    let summa = 0;
    for (let i = 0; i < arvud.length; i++) {
      summa += arvud[i];
    }
    keskmine = summa / 4;
    return summa;
}
console.log(`Koguarv: ${teadmatafunc(10,5,12,8)} Keskmine: ${keskmine}`)

// Salajane sÃµnum
// Kirjuta noolefunktsioon nimega salajaneSonum, mis vÃµtab sisendiks sÃµnumi stringi ning tagastab selle sÃµnumi pÃµhjal salajase versiooni. 
// Salajase versiooni loomiseks asendatakse kÃµik tÃ¤ishÃ¤Ã¤likud (vokaalid) tÃ¤rniga (*), jÃ¤ttes konsonandid muutumatuks.

const salaSonum =(sõnum) => {
    return sõnum.replace(/[elukas]/g, '*');
}

console.log(salaSonum("Tere! Sina"));

// Unikaalsed nimed
// Kirjuta noolefunktsioon nimega leiaUnikaalsedNimed, mis võtab sisendiks massiivi erinevatest nimedest ning tagastab uue massiivi, 
// kus on ainult unikaalsed nimed esialgses järjekorras. See tähendab, et kui esineb mitu sama nime, siis tuleb need jätta ainult esinemise esialgsesse 
// kohta ja eemaldada ülejäänud koopiad.
// ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"]
const leiaUnikaalsedNimed = (nimed) => {
    return nimed.filter((nimi, i, self) => self.indexOf(nimi) === i);
}
console.log(leiaUnikaalsedNimed(["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"]));