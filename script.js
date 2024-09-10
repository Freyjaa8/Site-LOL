
async function utilisateurs ()
{
    try
    {
        const fichiers = await fetch( 'champions.json' );
        const data = await fichiers.json();
        const randomIndex = Math.floor( Math.random() * data[ 0 ].length );
        console.log( data[0].length );
        const randomUser = data[0][ randomIndex ];
        document.getElementById( "texte1" ).innerHTML = `Tu joueras : ${ randomUser.name } <div><img src="${randomUser.icon}"><div>`;
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
    }

    catch ( error )
    {
        alert( 'Bébou, ca ne fonctionne pas, oups', error );
    }
} 

const boutonR = document.getElementById( "role" );
boutonR.addEventListener( 'click', roles );

function total ()
{
    utilisateurs();
    roles();
}
const boutonT = document.getElementById( "total" );

boutonT.addEventListener( 'click',total);