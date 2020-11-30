import React, {Fragment} from 'react';
import './App.css';
function Page_Admin() {
    return( 
        <Fragment>
           {//server.post('/post.html', function(request, response) :{})
           // exécuté lorsqu'est appelé post.html 
           //je crois c'est la fonction pour post sur node js, à voir quand on fera le backend
            }
            <div class="main_admin">

                <h1>Informations de la semaine</h1>

                <p>Pour mieux comprendre votre santé et recevoir les meilleures conseils bien-être, </p>
                <p>complétez ce formulaire au moins une fois par semaine, après avoir relevé vos</p>
                <p>différentes habitudes physiologiques.</p>
                <p>L'équipe Health.I se fera un plaisir des les analyser pour vous.</p>

                <h2>Remplir mon questionnaire de santé !</h2>

                <form method="post" id="id_form" action="">
                    <fieldset  form="id_form" enabled>

                        <div class="infos_perso_form">
                            <legend>Informations personnelles</legend>

                            <p>Tout d'abord, votre identité:</p>

                            <label>Nom</label> : <input type="text" name="nom" id="nom" required/><br/>
                            <label>Prénom</label> : <input type="text" name="prenom" id="prenom" required/><br/>
                            <label>Date de naissance</label> : <input type="date" id="bday" required/> <br/>
                        </div>

                        <div class="sommeil_form">
                            <legend>Sommeil</legend>

                            <p>Nous allons maintenant regarder votre temps de sommeil hebdomadaire</p>

                            <label>Lundi</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="lundi"/>
                            <label>Mardi</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="mardi"/>
                            <label>Mercredi</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="mercredi"/>
                            <label>Jeudi</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="jeudi"/>
                            <label>Vendredi</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="vendredi"/>
                            <label>Samedi</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="samedi"/>
                            <label>Dimanche</label> : <input type="number" name="dodo" min="1" max="12" step="0.5" id="dimanche"/> <br/>
                        </div>

                        <div class="bouffe_form">
                            <legend>Alimentation</legend>

                            <p>Indiquez nous vos habitudes alimentaires de la semaine</p>

                            <label>Viande</label> : <input type="range" name="food_hebdo" min="0" max="7" step="1" id="viande"/> 
                            <label>Légume</label> : <input type="range" name="food_hebdo" min="0" max="7" step="1" id="legume"/><br/>
                            <label>Poisson</label> : <input type="range" name="food_hebdo" min="0" max="7" step="1" id="poisson"/>
                            <label>Féculent</label> : <input type="range" name="food_hebdo" min="0" max="7" step="1" id="feculent"/><br/>
                        </div>

                        <div class="sport_form_p1">
                            <legend>Activité physique</legend>

                            <p>Vous marchez beaucoup ? Faites le nous savoir ! Petit tips cadeaux : votre smartphone a une fonction vous Indiquant le nombre de pas journalier, utilisez la, c'est plus simple. ;)</p>

                            <label>Lundi</label> : <input type="number" name="marche" min="0" max="100000" step="100" id="lundi"/> 
                            <label>Mardi</label> : <input type="number" name="marche" min="0" max="100000" step="100" id="mardi"/> 
                            <label>Mercredi</label> : <input type="number" name="marche" min="0" max="100000" step="100" id="mercredi"/>
                            <label>Jeudi</label> : <input type="number" name="marche" min="0" max="100000" step="100" id="jeudi"/>
                            <label>Vendredi</label> : <input type="number" name="marche" min="0" max="100000" step="100" id="vendredi"/>
                            <label>Samedi</label> : <input type="number" name="marche" min="0" max="100000" step="100" id="samedi"/>
                            <label>Dimanche</label> : <input type="number" name="marche" min="0" max="100000" step="100" id="dimanche"/> <br/>
                        </div>
                        <div class="sport_form_p2">
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
                        </div>

                        <div class="screen_form">
                            <legend>Exposition aux écrans</legend>

                            <p>Vous travaillez avec un ordinateur? Vous êtes un grand adepte du fameux "Netflix & chill" sans le "chill"? Vous ne ratez aucune sauce sur Twitter, aucun buzz sur Instagram?</p>
                            <p>Alors faites nous part du temps (en moyenne) que vous passez derrière vos écrans. Petit tips: pour le téléphone, vous avez normalement une fonction vous informant du temps passé avec l'écran allumé ;)</p>

                            <label>Lundi</label> : <input type="number" name="screen" min="0.5" max="24" step="0.5" id="lundi"/>
                            <label>Mardi</label> : <input type="number" name="screen" min="0.5" max="24" step="0.5" id="mardi"/>
                            <label>Mercredi</label> : <input type="number" name="screen" min="0.5" max="24" step="0.5" id="mercredi"/>
                            <label>Jeudi</label> : <input type="number" name="screen" min="0.5" max="24" step="0.5" id="jeudi"/>
                            <label>Vendredi</label> : <input type="number" name="screen" min="0.5" max="24" step="0.5" id="vendredi"/>
                            <label>Samedi</label> : <input type="number" name="screen" min="0.5" max="24" step="0.5" id="samedi"/>
                            <label>Dimanche</label> : <input type="number" name="screen" min="0.5" max="24" step="0.5" id="dimanche"/> <br/>
                        </div>

                        <div class="docto_form">
                            <legend>Activité médicale</legend>

                            <p>Nous visitons tous le médecin au moins une fois par an. Combien de fois vous-êtes vous rendu dans un cabinet ces trois derniers mois?</p>

                            <input type="number" name="visite" min="0" max="99" step="1" id="visite_1"/>
                        </div>

                        <div class="fin_form">
                            <p>C'est bon pour nous! Envoyez ces informations afin de compléter votre dashboard santé, et de bénéficier de nos meilleurs conseils, fournis directement par notre équipe de nutritionnistes et coachs sportifs Health.I !</p>

                            <input type="submit" name="validation" value='Devenir "Health.I" ! "'/><br/>
                        </div>
                    </fieldset>
                </form>
            </div>
            <footer>
                    Made by Gilles Liso & Alexandre Guenot
            </footer>
        </Fragment>
    );
}

export default Page_Admin;