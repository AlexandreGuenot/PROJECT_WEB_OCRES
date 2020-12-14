import React, { useState, useEffect } from 'react';
import { Button, Card, ListGroup, Form, } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { listEcran, deleteEcran, updateEcran, createEcran } from '../../service/API'
function EcranAdmin() {

    const [titre, setTitre] = useState("Lundi")
    const [valeur, setValeur] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        listEcranAction()
    }, [])

    const listEcranAction = () => {
        listEcran().then(res => {
            // on stocke la lsite envoyée depuis l'api dans un state
            setData(res.data)
        }).catch(e => {
            alert(e)
        })
    }


    const createEcranAction = () => {
        createEcran(titre, valeur).then(res => {
            listEcranAction()
        }).catch(e => {
            alert(e)
        })
    }


    const deleteEcranAction = (sommeil) => {
        // on fait passer en argument de cette fonction le sommeil sur lequel on a cliqué pour le supprimer
        deleteEcran(sommeil._id).then(res => {
            listEcranAction() // on recharge les données
        }).catch(e => {
            alert(e)
        })
    }

    const updateEcranAction = (ecran) => {
        updateEcran(ecran).then(res => {
            alert("Mise à jour réussie")
            listEcranAction()
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
            <h1>Expositions aux écrans </h1>
            <p>Rentrez le nombre d'heures que vous avez passé sur l'ensemble de vos écrans</p>
            <Card style={{ padding: "10px" }}>
                <Form>
                    <Form.Group >
                        <Form.Label>Jour</Form.Label>
                        <Form.Control as="select" size="lg" custom onChange={e => setTitre(e.target.value)} value={titre}>
                            <option>Lundi</option>
                            <option>Mardi</option>
                            <option>Mercredi</option>
                            <option>Jeudi</option>
                            <option>Vendredi</option>
                            <option>Samedi</option>
                            <option>Dimanche</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Nombre d'heures</Form.Label>
                        <Form.Control type="number" placeholder="Valeur" onChange={e => setValeur(e.target.value)} value={valeur} />

                    </Form.Group>
                    <Button variant="primary" type="button" onClick={createEcranAction}>
                        Créer
                    </Button>
                </Form>
                <Card.Title>
                    Liste des données
                </Card.Title>
                <ListGroup variant="flush" style={{ maxHeight: "300px", overflow: "auto" }}>
                    {data.map((ecran, index) => (
                        <ListGroup.Item key={"ecran" + index}>
                            <Form>
                                <Form.Group >
                                    <Form.Label>Jour</Form.Label>
                                    <Form.Control as="select" size="lg" custom onChange={e => handleChangeTitre(e.target.value, index)} value={ecran.titre}>
                                        <option>Lundi</option>
                                        <option>Mardi</option>
                                        <option>Mercredi</option>
                                        <option>Jeudi</option>
                                        <option>Vendredi</option>
                                        <option>Samedi</option>
                                        <option>Dimanche</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Nombre d'heures</Form.Label>
                                    <Form.Control type="number" placeholder="Valeur" onChange={e => handleChangeValeur(e.target.value, index)} value={ecran.valeur} />
                                </Form.Group>
                            </Form>
                            <Button onClick={() => updateEcranAction(ecran)}>Mettre à jour</Button>

                            <Button variant="danger" onClick={() => deleteEcranAction(ecran)}>Supprimer</Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>



        </div>




    );
}

export default EcranAdmin;