
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

function total ()
{
    utilisateurs();
    roles();
    wow();
}
const boutonT = document.getElementById( "total" );

boutonT.addEventListener( 'click',total);