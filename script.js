var user1 = prompt('Le premier joueur est...');
var user2 = prompt( 'Et le deuxième ?' );

// fonctions champions 

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
    let btn = document.getElementById( "reset" );
    let btn2 = document.getElementById( "resete" );
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
    btn.classList.add( "btnvisible" );
    btn2.classList.add( "btnvisible" );
    btn.innerHTML = `Jocker pour ${ user1 }`
    btn2.innerHTML = `Jocker pour ${ user2 }`
    if ( incr > 2 )
    {
    btn.classList.remove( "btnvisible" );
    } else if ( incr2 > 2 )
    {
        btn2.classList.remove( "btnvisible" );
        
    }
}
var nbr = 5;
var temps;
var texte = document.getElementById( "texte" );

function affiche ()
{
    texte.textContent = 4;
    if (nbr > 0){
        nbr--;
        texte.textContent = nbr;
    temps = setTimeout( affiche, 1000, nbr )
    };
    if ( nbr == 0 )
    {
        total();
        document.getElementById( "use1" ).style.display = "block";
        document.getElementById( "use2" ).style.display = "block";
        texte.textContent = "";
        nbr = 4;
        clearTimeout( temps );
    }
}
const boutonT = document.getElementById( "total" );

boutonT.addEventListener( 'click', function ()
{
    document.getElementById( "use1" ).style.display = "none";
    document.getElementById( "use2" ).style.display = "none"
    affiche();
});

// Bouton de reset , texte Jocker


let date = new Date();
let jour = date.getDay();
let incr = 0;

let date2 = new Date();
let jour2 = date.getDay();
let incr2 = 0;

async function byuser ()
{
    const fichiers = await fetch( 'champions.json' );
    const data = await fichiers.json();
    const randomchamp = Math.floor( Math.random() * data[ 0 ].length );
    const randomUser = data[ 0 ][ randomchamp ];

    const randomrole = Math.floor( Math.random() * data[1].length );
    const randomUser2 = data[ 1 ][ randomrole ];
    
        document.getElementById( "texte1" ).innerHTML = `Tu joueras : ${ randomUser.name } <div><img src="${ randomUser.icon }"><div>`;
        document.getElementById( "user1" ).innerHTML = "Joueur : " + user1;
        document.getElementById( "texte2" ).innerHTML = `Ton role : ${ randomUser2.Role }`;
        document.getElementById( "destiny" ).classList.add( "destiny" );
}
async function byuser2 ()
{
    const fichiers = await fetch( 'champions.json' );
    const data = await fichiers.json();
    const randomchamp = Math.floor( Math.random() * data[ 0 ].length );
    const randomUser = data[ 0 ][ randomchamp ];

    const randomrole = Math.floor( Math.random() * data[1].length );
    const randomUser2 = data[ 1 ][ randomrole ];
    
        document.getElementById( "texte4" ).innerHTML = `Tu joueras : ${ randomUser.name } <div><img src="${ randomUser.icon }"><div>`;
        document.getElementById( "user2" ).innerHTML = "Joueur : " + user1;
        document.getElementById( "texte3" ).innerHTML = `Ton role : ${ randomUser2.Role }`;
        document.getElementById( "destiny" ).classList.add( "destiny" );
}
async function jockerbtn (event)
{
    event.preventDefault();
    let jourJ = new Date().getDay();
    if ( jour == jourJ ){
    if ( incr > 2)
    {
        alert( "Plus de Jocker pour le moment LOL, joues ta merde, bisous." );
        let btn = document.getElementById( "reset" );
        btn.classList.remove( "btnvisible" );
        btn.innerHTML = "Y'a plus de Jockeeeeer BYYYYYYYYYYYYE"
        document.getElementById( "jocker1" ).innerHTML = `Bah oui ${user1} t'as tout bouffé le bouton est parti, raclure.`;
    } else 
    {
        if ( incr == 0 )
        {
            let tentatives = 2
            
            if ( confirm( "il te restera " + tentatives + " Jocker" ) )
            {
                await byuser();
                incr++;
                document.getElementById( "jocker1" ).innerHTML = `Attention ${user1} plus que ${ tentatives } jocker :3`;
            }
        } else {
            let tentatives = 2 - incr;
            if ( confirm( "il te restera " + tentatives + " Jocker" ) )
            {
                byuser();
                incr++;
                document.getElementById( "jocker1" ).innerHTML = `Attention ${user1} plus que ${ tentatives } jocker :3`;
            }
        }
    }
    } else
    {
        incr = 0;
        jour = jourJ;
    } 
};

async function jockerbtn2 (event)
{
    event.preventDefault();
    let jourJJ = new Date().getDay();
    if ( jour2 == jourJJ ){
    if ( incr2 > 2)
    {
        alert( "Plus de Jocker pour le moment LOL, joues ta merde, bisous." );
        let btn2 = document.getElementById( "resete" );
        btn2.classList.remove( "btnvisible" );
        btn2.innerHTML = "Y'a plus de Jockeeeeer BYYYYYYYYYYYYE"
        document.getElementById( "jocker2" ).innerHTML = `Bah oui ${user2}, t'as tout bouffé le bouton est parti, raclure.`;
    } else 
    {
        if ( incr2 == 0 )
        {
            let tentatives = 2
            
            if ( confirm( "il te restera " + tentatives + " Jocker" ) )
            {
                await byuser2();
                incr2++;
                document.getElementById( "jocker2" ).innerHTML = `Attention ${user2}, plus que ${ tentatives } jocker :3`;
            }
        } else {
            let tentatives = 2 - incr2;
            if ( confirm( "il te restera " + tentatives + " Jocker" ) )
            {
                byuser2();
                incr2++;
                document.getElementById( "jocker2" ).innerHTML = `Attention ${user2}, plus que ${ tentatives } jocker :3`;
            }
        }
    }
    } else
    {
        incr2 = 0;
        jour2 = jourJJ;
    } 
};
document.getElementById( "reset" ).addEventListener( 'click', jockerbtn );
document.getElementById( "resete" ).addEventListener( 'click', jockerbtn2 );