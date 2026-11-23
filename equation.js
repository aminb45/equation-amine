let a = Number(prompt("saisir a"));
let b = Number(prompt("saisir b"));
let c = Number(prompt("saisir c"));

    console.log(a);
    console.log(b);
    console.log(c);
if (a === 0) {
    alert("Erreur : a doit être différent de 0");
} else {
        let D = b ** 2 - 4 * a * c;


    
    let r=0
    if (D > 0) {
        let x1 = (-b - Math.sqrt(D)) / (2 * a);
        let x2 = (-b + Math.sqrt(D)) / (2 * a);
        r = alert(" les resultats sont" + x1 + "et" + x2 );
    }
    if (D < 0) {
        r = alert(" x n'est pas un real");
    }

    if (D === 0) {
        let x = -b / (2 * a);
        r = alert("le resulat est " + x )
    }
}