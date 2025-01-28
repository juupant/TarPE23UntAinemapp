// Toote objekt
// Loo toote jaoks objekt, mis sisaldab vähemalt 3 omadust (nimetus, hind, kogus)
let toode = {
    nimetus: "maja",
    hind: 100000,
    kogus: 5,
    omadused: ["aknad","uks", "katus"],

    tooteInfo(){
        return this.nimetus + " " + this.hind + "â‚¬";
    },
    tooteKoguHind(){
        return this.hind * this.kogus + "â‚¬";
    },
    tooteKogus(){
        return ++this.kogus;
    }
};
// Kuva objekti omadused konsoolis
console.log(toode.omadused);
// Lisa meetodid ja kuva konsoolis:
console.log(toode.tooteInfo());
// toote koguhind
console.log(toode.tooteKoguHind());
// muudab toote kogust
console.log(toode.tooteKogus());
// kuvab objekti sisu, kasutades sõne malli


// Ostukorv
// Tekita uus objekt ja lisa omadus ja lisa massiivina väärtused nimi, hind ja kogus
const ostukorv = {

tooted: [
    { nimi:'sink', hind:5.00, kogus:1 },
    { nimi:'vorst', hind:4.00, kogus:2 },
    { nimi:'sai', hind:3.00, kogus:3 },
    { nimi:'või', hind:2.00, kogus:4 },
    { nimi:'kurk', hind:1.00, kogus:5 },
],
kuva(){
    this.tooted.forEach((tooted) =>{
    console.log(`${tooted.nimi} - ${tooted.hind} EUR - Kogus: ${tooted.kogus}`)
})},
lisa(nimi,hind,kogus){
    this.tooted.push({nimi,hind,kogus})
},
maksumus(){
    return this.tooted.reduce((sum, num) => sum + num.hind)
},
};

ostukorv.lisa('söögisooda', 6.00, 4);
ostukorv.kuva();
console.log(ostukorv.maksumus());