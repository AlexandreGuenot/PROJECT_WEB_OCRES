import React, { useState, useEffect } from 'react';
import { Button, Card, ListGroup, Form, } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { listVisite, deleteVisite, updateVisite, createVisite } from '../../service/API'
function VisiteAdmin() {

    const [titre, setTitre] = useState("Jan - Fev - Mars")
    const [valeur, setValeur] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        listVisiteAction()
    }, [])

    const listVisiteAction = () => {
        listVisite().then(res => {
            // on stocke la lsite envoyée depuis l'api dans un state
            setData(res.data)
        }).catch(e => {
            alert(e)
        })
    }


    const createVisiteAction = () => {
        createVisite(titre, valeur).then(res => {
            listVisiteAction()
        }).catch(e => {
            alert(e)
        })
    }


    const deleteVisiteAction = (sommeil) => {
        // on fait passer en argument de cette fonction le sommeil sur lequel on a cliqué pour le supprimer
        deleteVisite(sommeil._id).then(res => {
            listVisiteAction() // on recharge les données
        }).catch(e => {
            alert(e)
        })
    }

    const updateVisiteAction = (visite) => {
        updateVisite(visite).then(res => {
            alert("Mise à jour réussie")
            listVisiteAction()
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
            <h1>Visites Médicales</h1>
            <p> Combien de fois avez-vous consulté cette année?</p>
            <Card style={{ padding: "10px" }}>
                <Form>
                    <Form.Group >
                        <Form.Label>Trimestre</Form.Label>
                        <Form.Control as="select" size="lg" custom onChange={e => setTitre(e.target.value)} value={titre}>
                            <option>Trimestre 1</option>
                            <option>Trimestre 2</option>
                            <option>Trimestre 3</option>
                            <option>Trimestre 4</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Nombre de visites </Form.Label>
                        <Form.Control type="number" placeholder="Valeur" onChange={e => setValeur(e.target.value)} value={valeur} />

                    </Form.Group>
                    <Button variant="primary" type="button" onClick={createVisiteAction}>
                        Créer
                    </Button>
                </Form>
                <Card.Title>
                    Liste des données
                </Card.Title>
                <ListGroup variant="flush" style={{ maxHeight: "300px", overflow: "auto" }}>
                    {data.map((visite, index) => (
                        <ListGroup.Item key={"visite" + index}>
                            <Form>
                                <Form.Group >
                                    <Form.Label>Trimestre</Form.Label>
                                    <Form.Control as="select" size="lg" custom onChange={e => handleChangeTitre(e.target.value, index)} value={visite.titre}>
                                        <option>Trimestre 1</option>
                                        <option>Trimestre 2</option>
                                        <option>Trimestre 3</option>
                                        <option>Trimestre 4</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Nombre de visites</Form.Label>
                                    <Form.Control type="number" placeholder="Valeur" onChange={e => handleChangeValeur(e.target.value, index)} value={visite.valeur} />
                                </Form.Group>
                            </Form>
                            <Button onClick={() => updateVisiteAction(visite)}>Mettre à jour</Button>

                            <Button variant="danger" onClick={() => deleteVisiteAction(visite)}>Supprimer</Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>



        </div>




    );
}

export default VisiteAdmin;