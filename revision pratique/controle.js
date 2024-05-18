//un module permettant de vérifier si une chaine passée en paramètre est composée seulement par des lettres et des espaces
function AlphaEspace(ch)
{
    ch=ch.toUpperCase()
    i=0
    ok=true
    while (ok && i<ch.length)
    {
        if(ch.charAt(i)>="A" && ch.charAt(i)<="Z" || ch.charAt(i)==" ")
        {
            i=i+1
        }
        else
        {
            ok=false
        }
    }
    return ok
}
function valid(n){
    for (let index = 0; index < n.length; index++) {
        if (!("0"<= n[index] && n[index]<="9" || n[index] == ",")){
            return false
        }
    return parseFloat(n)>0 && n.indexOf(",") != -1 && n.substr(n.indexOf(",")+1).length == 2       
    }
}
function verif1()
{
    let sta=document.getElementById('cit').selectedIndex
    let nr=document.getElementById('nr').value
    let ds=document.getElementById('ds').value
    let hs=document.getElementById('hs').value
    let mag=document.getElementById('mag').value
    let lat=document.getElementById('lat').value
    let long=document.getElementById('long').value
        //Compléter le reste de la fonction
    let d = new Date()
    let dss = new Date(ds)
    
    if(sta==0)
    {
        alert("La sélection d'une station est obligatoire")
        return false
    }
    if(nr=="" || nr>50 || !AlphaEspace(nr) ){
        alert("nom region")
        return false
    }
    if(!(dss < d)){
        alert("date inf a date")
        return false
    }
    if(hs == ""){
        alert("whatt")
        return false
    }
    if(dss == d){
        let hss = new Date(ds + " " + hs)
        if(!(hss<hs)){
            alert("heure inf a heure ")
            return  false
        }}
        if(!(parseFloat(mag)>=1 && parseFloat(mag)<=10) || !(mag.substr(mag.indexOf(",")+1).length == 1) ){
            alert("nombre doit enter")
            return  false
    }
    if(!valid(lat)){
        alert("lat positif")
        return  false
    }
    if(!valid(long)){
        alert("longitude positif")
        return  false
    }

    

        
    }

function verif2()
{
    let station=document.getElementById('station').selectedIndex
    let ann2 = document.getElementById('2022').checked         
    let ann3 = document.getElementById('2023').checked         
    let ann4 = document.getElementById('2024').checked         
        //Compléter le reste de la fonction

    if(station==0)
    {
        alert("la sélection d'une station est obligatoire")
        return false
    }
    if(!(ann2 || ann3 || ann4)){
        alert("selectioner pls")
        return  false
    }

}