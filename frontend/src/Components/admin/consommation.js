import React, { useState, useEffect } from 'react';
import { Button, Card, ListGroup, Form, } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { listConsommation, deleteConsommation, updateConsommation, createConsommation } from '../../service/API'
function CamembertAdmin() {

    const [titre, setTitre] = useState(null)
    const [valeur, setValeur] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        listConsommationAction()
    }, [])

    const listConsommationAction = () => {
        listConsommation().then(res => {
            // on stocke la lsite envoyée depuis l'api dans un state
            setData(res.data)
        }).catch(e => {
            alert(e)
        })
    }


    const createConsommationAction = () => {
        createConsommation(titre, valeur).then(res => {
            listConsommationAction()
        }).catch(e => {
            alert(e)
        })
    }


    const deleteConsommationAction = (sommeil) => {
        // on fait passer en argument de cette fonction le sommeil sur lequel on a cliqué pour le supprimer
        deleteConsommation(sommeil._id).then(res => {
            listConsommationAction() // on recharge les données
        }).catch(e => {
            alert(e)
        })
    }

    const updateConsommationAction = (consommation) => {
        updateConsommation(consommation).then(res => {
            alert("Mise à jour réussie")
            listConsommationAction()
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
            <h1>Widget Consommation </h1>

            <Card style={{ padding: "10px" }}>
                <Form>
                    <Form.Group >
                        <Form.Label>Titre</Form.Label>
                        <Form.Control type="text" placeholder="Titre" onChange={e => setTitre(e.target.value)} value={titre} />

                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Valeur</Form.Label>
                        <Form.Control type="number" placeholder="Valeur" onChange={e => setValeur(e.target.value)} value={valeur} />

                    </Form.Group>
                    <Button variant="primary" type="button" onClick={createConsommationAction}>
                        Créer
                    </Button>
                </Form>
                <Card.Title>
                    Liste des données
                </Card.Title>
                <ListGroup variant="flush" style={{ maxHeight: "300px", overflow: "auto" }}>
                    {data.map((consommation, index) => (
                        <ListGroup.Item key={"consommation" + index}>
                            <Form>
                                <Form.Group >
                                    <Form.Label>Titre</Form.Label>
                                    <Form.Control type="text" placeholder="Titre" onChange={e => handleChangeTitre(e.target.value, index)} value={consommation.titre} />

                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Valeur</Form.Label>
                                    <Form.Control type="number" placeholder="Valeur" onChange={e => handleChangeValeur(e.target.value, index)} value={consommation.valeur} />
                                </Form.Group>
                            </Form>
                            <Button onClick={() => updateConsommationAction(consommation)}>Mettre à jour</Button>

                            <Button variant="danger" onClick={() => deleteConsommationAction(consommation)}>Supprimer</Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>



        </div>




    );
}

export default CamembertAdmin;