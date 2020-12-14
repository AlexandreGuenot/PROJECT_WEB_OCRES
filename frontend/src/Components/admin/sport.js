import React, { useState, useEffect } from 'react';
import { Button, Card, ListGroup, Form, } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { listSport, deleteSport, updateSport, createSport } from '../../service/API'
function SportAdmin() {

    const [titre, setTitre] = useState("Tennis")
    const [valeur, setValeur] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        listSportAction()
    }, [])

    const listSportAction = () => {
        listSport().then(res => {
            // on stocke la lsite envoyée depuis l'api dans un state
            setData(res.data)
        }).catch(e => {
            alert(e)
        })
    }


    const createSportAction = () => {
        createSport(titre, valeur).then(res => {
            listSportAction()
        }).catch(e => {
            alert(e)
        })
    }


    const deleteSportAction = (sport) => {
        // on fait passer en argument de cette fonction le sommeil sur lequel on a cliqué pour le supprimer
        deleteSport(sport._id).then(res => {
            listSportAction() // on recharge les données
        }).catch(e => {
            alert(e)
        })
    }

    const updateSportAction = (sport) => {
        updateSport(sport).then(res => {
            alert("Mise à jour réussie")
            listSportAction()
        }).catch(e => {
            alert(e)
        })
    }


    const handleChangeTitre = (titre, index) => {
        // on créé une copie du state data
        let newData = [...data];
        newData[index].titre = titre
        // on mets à jour le satte data
        setData(newData)
    }

    const handleChangeValeur = (valeur, index) => {
        // on créé une copie du state data
        let newData = [...data];
        newData[index].valeur = valeur
        // on mets à jour le satte data
        setData(newData)
    }



    return (
        <div>
            <h1>Activité physique</h1>
            <p>Combien de temps pratiquez-vous vos disciplines ?</p>
            <Card style={{ padding: "10px" }}>
                <Form>
                    <Form.Group >
                        <Form.Label>Sport</Form.Label>

                        <Form.Control as="select" size="lg" custom onChange={e => setTitre(e.target.value)} value={titre}>
                            <option>Tennis</option>
                            <option>Football</option>
                            <option>Natation</option>
                            <option>Basketball</option>
                            <option>Handball</option>
                            <option>Cyclisme</option>
                            <option>Running</option>
                            <option>Escalade</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Nombre d'heures</Form.Label>
                        <Form.Control type="number" placeholder="Valeur" onChange={e => setValeur(e.target.value)} value={valeur} />


                    </Form.Group>
                    <Button variant="primary" type="button" onClick={createSportAction}>
                        Créer
                    </Button>
                </Form>
                <Card.Title>
                    Liste des données
                </Card.Title>
                <ListGroup variant="flush" style={{ maxHeight: "300px", overflow: "auto" }}>
                    {data.map((sport, index) => (
                        <ListGroup.Item key={"sport" + index}>
                            <Form>
                                <Form.Group >
                                    <Form.Label>Sport</Form.Label>
                                    <Form.Control as="select" size="lg" custom onChange={e => handleChangeTitre(e.target.value, index)} value={sport.titre}>
                                        <option>Tennis</option>
                                        <option>Football</option>
                                        <option>Natation</option>
                                        <option>Basketball</option>
                                        <option>Handball</option>
                                        <option>Cyclisme</option>
                                        <option>Running</option>
                                        <option>Escalade</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Nombre d'heures</Form.Label>
                                    <Form.Control type="number" placeholder="Valeur" onChange={e => handleChangeValeur(e.target.value, index)} value={sport.valeur} />
                                </Form.Group>
                            </Form>
                            <Button onClick={() => updateSportAction(sport)}>Mettre à jour</Button>

                            <Button variant="danger" onClick={() => deleteSportAction(sport)}>Supprimer</Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>



        </div>




    );
}

export default SportAdmin;