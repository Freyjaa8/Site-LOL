
async function utilisateurs ()
{
    try
    {
        const fichiers = await fetch( 'champions.json' );
        const data = await fichiers.json();
        const randomIndex = Math.floor( Math.random() * data[ 0 ].length );
        const randomUser = data[0][ randomIndex ];
        document.getElementById( "texte1" ).innerHTML = `Tu joueras : ${ randomUser.name } <div><img src="${ randomUser.icon }"><div>`;
        document.getElementById( "destiny" ).classList.add( "destiny" );
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
        const randomUser = data[1][ randomIndex ];
        document.getElementById( "texte2" ).innerHTML = `Ton role : ${ randomUser.Role }`;
        document.getElementById( "destiny" ).classList.add( "destiny" );
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
    utilisateurs();
    roles();
    wow();
}
const boutonT = document.getElementById( "total" );

boutonT.addEventListener( 'click', total );

// Bouton de reset


let date = new Date();
let jour = date.getDay();
let incr = 0;


document.getElementById( "reset" ).addEventListener( 'click', async function (event)
{
    
    event.preventDefault();
    let jourJ = new Date().getDay();
    if ( jour == jourJ ){
    if ( incr > 2)
    {
    alert( "Plus de Jocker pour le moment LOL, joues ta merde, bisous." );
    } else 
    {
        if ( incr == 0 )
        {
            let tentatives = 2
            if ( confirm( "il te restera " + tentatives + " Jocker" ) )
            {
                await total();
                incr++;
            }
        } else {
            let tentatives = 2 - incr;
            if ( confirm( "il te restera " + tentatives + " Jocker" ) )
            {
                await total();
                incr++;
            }
        }
    }
    } else
    {
        incr = 0;
        jour = jourJ;
    } 
});

