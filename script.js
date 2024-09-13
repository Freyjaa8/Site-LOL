var user1 = prompt('Le premier joueur est...');
var user2 = prompt( 'Et le deuxième ?' );


async function utilisateurs ()
{
    try
    {
        const fichiers = await fetch( 'champions.json' );
        const data = await fichiers.json();
        const randomIndex = Math.floor( Math.random() * data[ 0 ].length );
        const randomUser = data[ 0 ][ randomIndex ];
        const randomIndex2 = Math.floor( Math.random() * data[ 0 ].length );
        const randomUser2 = data[ 0 ][ randomIndex2 ];
        if(randomUser !== randomUser2){
        document.getElementById( "texte1" ).innerHTML = `Tu joueras : ${ randomUser.name } <div><img src="${ randomUser.icon }"><div>`;
            document.getElementById( "texte4" ).innerHTML = `Tu joueras : ${ randomUser2.name } <div><img src="${ randomUser2.icon }"><div>`;
            document.getElementById( "user1" ).innerHTML = "Joueur : " + user1;
            document.getElementById("user2").innerHTML =  "Joueur : " + user2;
        document.getElementById( "destiny" ).classList.add( "destiny" );
        }
    }
    catch ( error )
    {
    }
} 

const bouton = document.getElementById( "personnage" );
bouton.addEventListener( 'click', utilisateurs );


async function roles ()
{
    try
    {
        const fichiers = await fetch( 'champions.json' );
        const data = await fichiers.json();
        const randomIndex = Math.floor( Math.random() * data[1].length );
        const randomUser = data[ 1 ][ randomIndex ];
        const randomIndex2 = Math.floor( Math.random() * data[1].length );
        const randomUser2 = data[1][ randomIndex2 ];
        if(randomUser !== randomUser2){
        document.getElementById( "texte2" ).innerHTML = `Ton role : ${ randomUser.Role }`;
        document.getElementById( "texte3" ).innerHTML = `Ton role : ${ randomUser2.Role }`;
        document.getElementById( "destiny" ).classList.add( "destiny" );
        }
    }
    catch ( error )
    {
        alert( 'Bébou, ca ne fonctionne pas, oups', error );
    }
}



function wow ()
{
    let phrases = [ "Bonne Chance avec ce pick Bébou <3", "Ptdrrr c'est de la merde", "Bébouuuu Bisouuuus <3", "Vasy on va encore perdre", "Bébou t'es le meilleur <3", "Je sais pas si on va casser des culs avec ça..." ]
    let random = phrases[ Math.floor( Math.random() * phrases.length ) ] ;
    document.querySelector( "h1" ).innerHTML = `<h2>${ random }</h2>`;
}
const boutonR = document.getElementById( "role" );
boutonR.addEventListener( 'click', roles );

async function total ()
{
    let test = document.getElementById( "use1" );
    let test2 = document.getElementById( "use2" );
    test.animate(
        [
            { transform: "scale(0)" },
            { transform: "scale(1)" },
        ],
        {
            duration: 2000
        },
    );

    test2.animate([
        { transform: "scale(0)" },
        { transform: "scale(1)" },
    ],
    {
        duration: 2000
    },
);
    utilisateurs();
    roles();
    wow();
}
const boutonT = document.getElementById( "total" );

boutonT.addEventListener( 'click', total );

// Bouton de reset , texte Jocker


let date = new Date();
let jour = date.getDay();
let incr = 0;

document.getElementById( "jocker" ).innerHTML="Il te reste 3 Jocker";

document.getElementById( "reset" ).addEventListener( 'click', async function (event)
{
    
    event.preventDefault();
    let jourJ = new Date().getDay();
    if ( jour == jourJ ){
    if ( incr > 2)
    {
        alert( "Plus de Jocker pour le moment LOL, joues ta merde, bisous." );
        let btn = document.getElementById( "reset" );
        btn.classList.add( "gone" );
        btn.innerHTML = "Y'a plus de Jockeeeeer BYYYYYYYYYYYYE"
        document.getElementById( "jocker" ).innerHTML = `Bah oui t'as tout bouffé le bouton est parti, raclure.`;
    } else 
    {
        if ( incr == 0 )
        {
            let tentatives = 2
            
            if ( confirm( "il te restera " + tentatives + " Jocker" ) )
            {
                await total();
                incr++;
                document.getElementById( "jocker" ).innerHTML = `Attention plus que ${ tentatives } jocker :3`;
            }
        } else {
            let tentatives = 2 - incr;
            if ( confirm( "il te restera " + tentatives + " Jocker" ) )
            {
                await total();
                incr++;
                document.getElementById( "jocker" ).innerHTML = `Attention plus que ${ tentatives } jocker :3`;
            }
        }
    }
    } else
    {
        incr = 0;
        jour = jourJ;
    } 
});

