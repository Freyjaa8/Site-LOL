// *******************Récupérer les utilisateurs*************************
let user1 = prompt( 'Le premier joueur est...' );
let user2 = prompt( 'Et le deuxième ?' );

// *******************Init le càr****************************************
let nbr = 5; //  Init Pour le compte à rebours d'apparition des roles/champ
let temps; // Variable contenant le ClearTimeOut pour le càr
let texte = document.getElementById( "rebours" ); // Là où s'affiche le càr

// *******************Mettre en place la date pour le Jocker*************
let date = new Date();
let jour = date.getDay(); //Récupérer le numéro du jour actuel.
let incr = 0;
let incr2 = 0;

const utilisateur = [ {
    utilisateur: '',
    champion: '',
    image : '',
    role: '',
    incr: 0
},  {
    utilisateur: '',
    champion: '',
    role: '',
    image :'',
    incr: 0
}
];

utilisateur[ 0 ].utilisateur = user1; 
utilisateur[ 1 ].utilisateur = user2; 

//*********************Choper les boutons *******************************/
let totalr = id( 'btn' );
let champr = id( 'btn2' );
let roler = id( '' );
let jocker1 = id( '' );
let jocker2 = id( '' );
//********************Fonction pour définir le random *******************/

function randomiseur ( donnees, index )
{
    const randomIndex = Math.floor( Math.random() * donnees[ index ].length );
    const randomUser = donnees[ index ][ randomIndex ];
    return randomUser;
}

//**********************Fonction pour chopper élement by ID et add une classe destiny*******************/

function id ( id)
{
    let element = document.getElementById( id );
    return element;
}

function addclass ( idhtml, id )
{
    document.getElementById( idhtml ).classList.add( id );
}

//*********************Fonction Role et Champion random ******************/
async function champion (numeroUser)
{
    
    const fichiers = await fetch( 'champions.json' );
    const data = await fichiers.json();
    const champion = randomiseur( data, 0 );
    utilisateur[ numeroUser ].champion = champion.name;
    utilisateur[ numeroUser ].image = champion.icon;
}

async function role (numeroUser)
{
    const fichiers = await fetch( 'champions.json' );
    const data = await fichiers.json();
    const role = randomiseur( data, 1 );
    utilisateur[ numeroUser ].role = role.Role;
}

// ********************Fonction random Total bébou************************/

function randomTotal ()
{
        champion(0);
        champion(1);
        role(0);
        role( 1 );
    if ( ( utilisateur[ 0 ].champion == utilisateur[ 1 ].champion ) || ( utilisateur[ 0 ].role == utilisateur[ 1 ].role ) )
    {
        randomTotal; /// PB CA MARCHE PAS IL FAUT RECLIQUAX
        console.log('sac à merde');
    }
    else
    {affichageperso( 'texte1', 0 );
        affichageperso( 'texte4', 1 );
        affichagerole( 'texte2',0 );
        affichagerole( 'texte3', 1 );
        addclass( 'reset', 'btnvisible' );
        addclass( 'resete', 'btnvisible' );
        id('reset').innerHTML = `Jocker pour ${ user1 }`;
        id('resete').innerHTML = `Jocker pour ${ user2 }`;
        
        
    }
    if ( incr > 2 )
    {
        id( 'reset' ).classList.remove( 'btnvisible' );
        id( 'resete' ).classList.remove( 'btnvisible' );
    }
}
//************************Fonction affichage de la merde d'enculé de texte pour le random******** */

function affichageperso (div, numeroUser){
    id(div).innerHTML = `Tu joueras : ${utilisateur[numeroUser].champion} <div><img src="${utilisateur[numeroUser].image}"><div>`;
    addclass( 'destiny', 'destiny' );
}
function affichagerole ( div, numeroUser )
{
    id(div).innerHTML = `Ton role : ${ utilisateur[numeroUser].role}`;
    addclass( 'destiny', 'destiny' );
}

//***************************Fonction compte à rebours***********************/

function rebours ()
{
    texte.textContent = 4;
    if (nbr > 0){
        nbr--;
        texte.textContent = nbr;
        temps = setTimeout( affiche, 1000, nbr )
    };
    if ( nbr == 0 )
    {
        randomTotal();
        id('use1').style.display = "block";
        id('use2').style.display = "block";
        texte.textContent = "";
        nbr = 4;
        clearTimeout( temps );
    }
}

//***************************Fonction pour Jocker Bouton ! ********************/

async function jocker (event, idbtn, iddiv, user, texte1, texte2, numeroUser)
{
    event.preventDefault();
    let jourJ = new Date().getDay();
    if ( jour == jourJ )
    {
        if ( utilisateur[numeroUser].incr > 2 )
        {
            alert( 'Plus de Jocker pour le moment LOL, joues ta merde, bisous.' );
            let btn = id( idbtn );
            btn.classList.remove( 'btnvisible' );
            id( iddiv).innerHTML = `Bah oui ${user} t'as tout bouffé le bouton est parti, raclure.`;
        } else
        {
            if ( utilisateur[numeroUser].incr == 0 )
            {
                let tentatives = 2;
                if ( confirm( `Il te restera ${ tentatives } jockers.` ) )
                {
                    champion( numeroUser );
                    role( numeroUser );
                    if (( utilisateur[ 0 ].champion != utilisateur[ 1 ].champion ) && ( utilisateur[ 0 ].role != utilisateur[ 1 ].role )){
                        affichageperso( texte1, numeroUser );
                        affichagerole( texte2, numeroUser );
                        utilisateur[ numeroUser ].incr++;
                        id( iddiv ).innerHTML = `Attention ${ user } plus que ${ tentatives } jocker <3`;
                    } else
                    {
                        jocker(event, idbtn, iddiv, user, texte1, texte2, numeroUser);
                    }
                }
            } else
            {
                let tentatives = 2 - utilisateur[numeroUser].incr;
                if ( confirm( `Il te restera ${ tentatives } jockers.` ) )
                {
                    champion( numeroUser );
                    role( numeroUser );
                    if (( utilisateur[ 0 ].champion != utilisateur[ 1 ].champion ) && ( utilisateur[ 0 ].role != utilisateur[ 1 ].role )){
                        affichageperso( texte1, numeroUser );
                        affichagerole( texte2, numeroUser );
                        utilisateur[ numeroUser ].incr++;
                        id( iddiv ).innerHTML = `Attention ${ user } plus que ${ tentatives } jocker <3`;
                    } else
                    {
                        jocker(event, idbtn, iddiv, user, texte1, texte2, numeroUser);
                    }
                    
                }
            }
        }
    } else
    {
        utilisateur[numeroUser].incr = 0;
        jour = jourJ;
    }
}
//**********************Event sur les boutons ********************************************/

id( 'role' ).addEventListener( 'click', function juju ()
{
    role(0);
    role( 1 );
    if (utilisateur[0].role != utilisateur[1].role)
    {
        affichagerole( 'texte2',0 );
        affichagerole( 'texte3',1 );
    } else
    {
        juju;
    }
} )

id( 'personnage' ).addEventListener( 'click', function juju ()
{
    champion(0);
    champion( 1 );
    if ( utilisateur[ 0 ].champion != utilisateur[ 1 ].champion )
    {
        affichageperso( 'texte1', 0 );
        affichageperso( 'texte4', 1 );
    } else
    {
        juju;
    }
} )

id( 'total' ).addEventListener( 'click', function(){
    randomTotal();
} )

id( 'reset' ).addEventListener( 'click', function(event){
    jocker( event, 'reset', 'jocker1', user1, 'texte2', 'texte1',0 );
} )

id( 'resete' ).addEventListener( 'click', function (event){
    jocker( event , 'resete', 'jocker2', user2, 'texte3', 'texte4',1 );
})