import React, {Fragment} from 'react';
import './App.css';
function Page_Admin() {
    return( 
        <Fragment>
            <h1> Admin Page </h1>

            <h2>Informations de la semaine</h2>

            <p>Pour mieux comprendre votre santé et recevoir les meilleures conseils bien-être, </p>
            <p>complétez ce formulaire au moins une fois par semaine, après avoir relevé vos</p>
            <p>différentes habitudes physiologiques.</p>
            <p>L'équipe Health.I se fera un plaisir des les analyser pour vous.</p>

            <h3>Remplir mon questionnaire de santé !</h3>

            <form method="post" action="traitement.php">
                <p>Tout d'abord, votre identité:</p>

                <label>Nom</label> : <input type="text" name="nom" id="nom"/>
                <label>Prénom</label> : <input type="text" name="prenom" id="prenom"/>
                <label>Date de naissance</label> : <input type="date" id="bday"/> <br/>

                <p>Nous allons maintenant regarder votre temps de sommeil hebdomadaire</p>

                <label>Lundi</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="lundi"/> <br/>
                <label>Mardi</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="mardi"/> <br/>
                <label>Mercredi</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="mercredi"/><br/>
                <label>Jeudi</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="jeudi"/> <br/>
                <label>Vendredi</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="vendredi"/><br/>
                <label>Samedi</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="samedi"/> <br/>
                <label>Dimanche</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="dimanche"/> <br/>

                <p>Indiquez nous vos habitudes alimentaires de la semaine</p>

                <label>Viande</label> : <input type="range" name="food_hebdo" min="0" max="7" step="1" id="viande"/> 
                <label>Poisson</label> : <input type="range" name="food_hebdo" min="0" max="7" step="1" id="poisson"/>
                <label>Légume</label> : <input type="range" name="food_hebdo" min="0" max="7" step="1" id="legume"/>
                <label>Féculent</label> : <input type="range" name="food_hebdo" min="0" max="7" step="1" id="feculent"/><br/>

                <p>Parlez nous de vos 3 activités sportives principales</p>

                <input type="checkbox" name="sport" id="tennis"/><label for="tennis"> Tennis</label><br/>
                <input type="checkbox" name="sport" id="bad"/><label for="tennis"> Badmynton</label><br/>
                <input type="checkbox" name="sport" id="basket"/><label for="tennis"> Basketball</label><br/>
                <input type="checkbox" name="sport" id="hand"/><label for="tennis"> Handball</label><br/>
                <input type="checkbox" name="sport" id="foot"/><label for="tennis"> Football</label><br/>
                <input type="checkbox" name="sport" id="escale"/><label for="tennis"> Escalade</label><br/>
                <input type="checkbox" name="sport" id="course"/><label for="tennis"> Running</label><br/>
                <input type="checkbox" name="sport" id="velo"/><label for="tennis"> Vélo</label><br/>

            </form>
        </Fragment>
    );
}

export default Page_Admin;