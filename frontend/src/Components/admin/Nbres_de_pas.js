import React, { useState, useEffect } from 'react';
import { Button, Card, ListGroup, Form, } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { listStep, deleteStep, updateStep, createStep } from '../../service/API'
function Nbres_de_pasAdmin() {

    const [titre, setTitre] = useState(null)
    const [valeur, setValeur] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        listStepAction()
    }, [])

    const listStepAction = () => {
        listStep().then(res => {
            // on stocke la lsite envoyée depuis l'api dans un state
            setData(res.data)
        }).catch(e => {
            alert(e)
        })
    }


    const createStepAction = () => {
        createStep(titre, valeur).then(res => {
            listStepAction()
        }).catch(e => {
            alert(e)
        })
    }


    const deleteStepAction = (step) => {
        // on fait passer en argument de cette fonction le sommeil sur lequel on a cliqué pour le supprimer
        deleteStep(step._id).then(res => {
            listStepAction() // on recharge les données
        }).catch(e => {
            alert(e)
        })
    }

    const updateStepAction = (step) => {
        updateStep(step).then(res => {
            alert("Mise à jour réussie")
            listStepAction()
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
            <h1>Widget Nombre de pas</h1>

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
                    <Button variant="primary" type="button" onClick={createStepAction}>
                        Créer
                    </Button>
                </Form>
                <Card.Title>
                    Liste des données
                </Card.Title>
                <ListGroup variant="flush" style={{ maxHeight: "300px", overflow: "auto" }}>
                    {data.map((step, index) => (
                        <ListGroup.Item key={"step" + index}>
                            <Form>
                                <Form.Group >
                                    <Form.Label>Titre</Form.Label>
                                    <Form.Control type="text" placeholder="Titre" onChange={e => handleChangeTitre(e.target.value, index)} value={step.titre} />

                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Valeur</Form.Label>
                                    <Form.Control type="number" placeholder="Valeur" onChange={e => handleChangeValeur(e.target.value, index)} value={step.valeur} />
                                </Form.Group>
                            </Form>
                            <Button onClick={() => updateStepAction(step)}>Mettre à jour</Button>

                            <Button variant="danger" onClick={() => deleteStepAction(step)}>Supprimer</Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>



        </div>




    );
}

export default Nbres_de_pasAdmin;