const joursSemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche' ];

let ajd = new Date();
let options = {weekday: 'long'};
let jourActuel = ajd.toLocaleDateString ('fr-FR', options);
console.log(jourActuel, ajd);

//1er lettre en majuscule + lettre du mot en minuscules
jourActuel = jourActuel.charAt(0).toUpperCase() + jourActuel.slice(1);

//on découpe un morceau du tableau des jours (début = index du jour actuel mardi, fin = dimanche) puis on concate (assemble) en rajoutant la suite découpée
let tabJoursEnOrdre = joursSemaine.slice(joursSemaine.indexOf(jourActuel)).concat(joursSemaine.slice(0, joursSemaine.indexOf(jourActuel)));
console.log(tabJoursEnOrdre);


export default tabJoursEnOrdre;
