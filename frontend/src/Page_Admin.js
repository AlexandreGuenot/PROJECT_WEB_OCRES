import React, {Fragment} from 'react';
import './App.css';
function Page_Admin() {
    return( 
        <Fragment>
           {//server.post('/post.html', function(request, response) :{})
           // exécuté lorsqu'est appelé post.html 
           //je crois c'est la fonction pour post sur node js
            }
 
            <h1> Admin Page </h1>

            <h2>Informations de la semaine</h2>

            <p>Pour mieux comprendre votre santé et recevoir les meilleures conseils bien-être, </p>
            <p>complétez ce formulaire au moins une fois par semaine, après avoir relevé vos</p>
            <p>différentes habitudes physiologiques.</p>
            <p>L'équipe Health.I se fera un plaisir des les analyser pour vous.</p>

            <h3>Remplir mon questionnaire de santé !</h3>

            <form method="post" id="id_form" action="">
                <fieldset  form="id_form" enabled>

                    <legend>Informations personnelles</legend>

                    <p>Tout d'abord, votre identité:</p>

                    <label>Nom</label> : <input type="text" name="nom" id="nom" required/>
                    <label>Prénom</label> : <input type="text" name="prenom" id="prenom" required/>
                    <label>Date de naissance</label> : <input type="date" id="bday" required/> <br/>

                    <legend>Sommeil</legend>

                    <p>Nous allons maintenant regarder votre temps de sommeil hebdomadaire</p>

                    <label>Lundi</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="lundi"/> <br/>
                    <label>Mardi</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="mardi"/> <br/>
                    <label>Mercredi</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="mercredi"/><br/>
                    <label>Jeudi</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="jeudi"/> <br/>
                    <label>Vendredi</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="vendredi"/><br/>
                    <label>Samedi</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="samedi"/> <br/>
                    <label>Dimanche</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="dimanche"/> <br/>

                    <legend>Alimentation</legend>

                    <p>Indiquez nous vos habitudes alimentaires de la semaine</p>

                    <label>Viande</label> : <input type="range" name="food_hebdo" min="0" max="7" step="1" id="viande"/> 
                    <label>Poisson</label> : <input type="range" name="food_hebdo" min="0" max="7" step="1" id="poisson"/>
                    <label>Légume</label> : <input type="range" name="food_hebdo" min="0" max="7" step="1" id="legume"/>
                    <label>Féculent</label> : <input type="range" name="food_hebdo" min="0" max="7" step="1" id="feculent"/><br/>

                    <legend>Activité physique</legend>

                    <p>Vous marchez beaucoup ? Faites le nous savoir ! Petit tips cadeaux : votre smartphone a une fonction vous Indiquant le nombre de pas journalier, utilisez la, c'est plus simple. ;)</p>

                    <label>Lundi</label> : <input type="number" name="marche" min="0" max="100000" step="100" id="lundi"/> <br/>
                    <label>Mardi</label> : <input type="number" name="marche" min="0" max="100000" step="100" id="mardi"/> <br/>
                    <label>Mercredi</label> : <input type="number" name="marche" min="0" max="100000" step="100" id="mercredi"/><br/>
                    <label>Jeudi</label> : <input type="number" name="marche" min="0" max="100000" step="100" id="jeudi"/> <br/>
                    <label>Vendredi</label> : <input type="number" name="marche" min="0" max="100000" step="100" id="vendredi"/><br/>
                    <label>Samedi</label> : <input type="number" name="marche" min="0" max="100000" step="100" id="samedi"/> <br/>
                    <label>Dimanche</label> : <input type="number" name="marche" min="0" max="100000" step="100" id="dimanche"/> <br/>


                    <p>Parlez nous de vos 3 activités sportives principales</p>

                    <select name="sports" id="sport_1">
                        <option value="tennis"> Tennis</option>
                        <option value="bad"> Badmynton</option>
                        <option value="basket"> Basketball</option>
                        <option value="hand"> Handball</option>
                        <option value="foot"> Football</option>
                        <option value="escale"> Escalade</option>
                        <option value="course"> Running</option>
                        <option value="swim"> Natation</option>
                        <option value="velo"> Vélo</option>
                    </select>
                    <label>  Temps hebdomadaire  </label> : <input type="number" name="pratique" min="0" max="24" step="0.5" id="temps_1"/><br/>

                    <select name="sports" id="sport_2">
                        <option value="tennis"> Tennis</option>
                        <option value="bad"> Badmynton</option>
                        <option value="basket"> Basketball</option>
                        <option value="hand"> Handball</option>
                        <option value="foot"> Football</option>
                        <option value="escale"> Escalade</option>
                        <option value="course"> Running</option>
                        <option value="swim"> Natation</option>
                        <option value="velo"> Vélo</option>
                    </select>
                    <label>  Temps hebdomadaire  </label> : <input type="number" name="pratique" min="0" max="24" step="0.5" id="temps_2"/><br/>

                    <select name="sports" id="sport_3">
                        <option value="tennis"> Tennis</option>
                        <option value="bad"> Badmynton</option>
                        <option value="basket"> Basketball</option>
                        <option value="hand"> Handball</option>
                        <option value="foot"> Football</option>
                        <option value="escale"> Escalade</option>
                        <option value="course"> Running</option>
                        <option value="swim"> Natation</option>
                        <option value="velo"> Vélo</option>
                    </select>
                    <label>  Temps hebdomadaire  </label> : <input type="number" name="pratique" min="0" max="24" step="0.5" id="temps_3"/><br/>

                    <legend>Exposition aux écrans</legend>

                    <p>Vous travaillez avec un ordinateur? Vous êtes un grand adepte du fameux "Netflix & chill" sans le "chill"? Vous ne ratez aucune sauce sur Twitter, aucun buzz sur Instagram?</p>
                    <p>Alors faites nous part du temps (en moyenne) que vous passez derrière vos écrans. Petit tips: pour le téléphone, vous avez normalement une fonction vous informant du temps passé avec l'écran allumé ;)</p>

                    <label>Lundi</label> : <input type="number" name="screen" min="0.5" max="24" step="0.5" id="lundi"/> <br/>
                    <label>Mardi</label> : <input type="number" name="screen" min="0.5" max="24" step="0.5" id="mardi"/> <br/>
                    <label>Mercredi</label> : <input type="number" name="screen" min="0.5" max="24" step="0.5" id="mercredi"/><br/>
                    <label>Jeudi</label> : <input type="number" name="screen" min="0.5" max="24" step="0.5" id="jeudi"/> <br/>
                    <label>Vendredi</label> : <input type="number" name="screen" min="0.5" max="24" step="0.5" id="vendredi"/><br/>
                    <label>Samedi</label> : <input type="number" name="screen" min="0.5" max="24" step="0.5" id="samedi"/> <br/>
                    <label>Dimanche</label> : <input type="number" name="screen" min="0.5" max="24" step="0.5" id="dimanche"/> <br/>

                    <legend>Activité médicale</legend>

                    <p>Nous visitons tous le médecin au moins une fois par an. Combien de fois vous-êtes vous rendu dans un cabinet ces trois derniers mois?</p>

                    <input type="number" name="visite" min="0" max="99" step="1" id="visite_1"/>

                    <p>C'est bon pour nous! Envoyez ces informations afin de compléter votre dashboard santé, et de bénéficier de nos meilleurs conseils, fournis directement par notr eéquipe de nutritionnistes et coachs sportifs Health.I !</p>

                    <input type="submit" name="validation" value='Devenir "Health.I" ! "'/>
                </fieldset>
            </form>
        </Fragment>
    );
}

export default Page_Admin;