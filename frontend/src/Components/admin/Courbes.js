import React, { useState, useEffect } from 'react';
import { Button, Card, Col, ListGroup, Form, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createSommeil, listSommeil, deleteSommeil, updateSommeil } from '../../service/API'
function CourbesAdmin() {

    const [date, setDate] = useState(new Date())
    const [temps, setTemps] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {

        listSommeilAction()
    }, [])

    const listSommeilAction = () => {
        listSommeil().then(res => {
            // on stocke la lsite envoyée depuis l'api dans un state
            setData(res.data)
        }).catch(e => {
            alert(e)
        })
    }


    const createSommeilAction = () => {
        createSommeil(date, temps).then(res => {
            listSommeilAction()
        }).catch(e => {
            alert(e)
        })
    }


    const deleteSommeilAction = (sommeil) => {
        // on fait passer en argument de cette fonction le sommeil sur lequel on a cliqué pour le supprimer
        deleteSommeil(sommeil._id).then(res => {
            listSommeilAction() // on recharge les données
        }).catch(e => {
            alert(e)
        })
    }

    const updateSommeilAction = (sommeil) => {
        updateSommeil(sommeil).then(res => {
            alert("Mise à jour réussie")
            listSommeilAction()
        }).catch(e => {
            alert(e)
        })
    }

    const handleChangeDate = (date, index) => {
        // on créé une copie du state data
        let newData = [...data];
        newData[index].date = date
        // on mets à jour le satte data
        setData(newData)
    }

    const handleChangeTemps = (temps, index) => {
        // on créé une copie du state data
        let newData = [...data];
        newData[index].temps = temps
        // on mets à jour le satte data
        setData(newData)
    }



    return (
        <div>
            <h1>Sommeil</h1>
            <p>Indiquez votre temps de sommeil en fonction de la date</p>
            <Card style={{ padding: "10px" }}>
                <Form>
                    <Form.Group >
                        <Form.Label>Date</Form.Label>
                        <DatePicker selected={date} onChange={date => setDate(date)} />

                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Temps de sommeil en heure</Form.Label>
                        <Form.Control type="number" placeholder="Temps" onChange={e => setTemps(e.target.value)} value={temps} />

                    </Form.Group>
                    <Button variant="primary" type="button" onClick={createSommeilAction}>
                        Créer
                            </Button>
                </Form>
                <Card.Title>
                    Liste des données
                </Card.Title>
                <ListGroup variant="flush" style={{ maxHeight: "300px", overflow: "auto" }}>
                    {data.map((sommeil, index) => (
                        <ListGroup.Item key={"sommeil" + index}>
                            <Form>
                                <Form.Group >
                                    <Form.Label>Date</Form.Label>
                                    <DatePicker selected={new Date(sommeil.date)} onChange={date => handleChangeDate(date, index)} />

                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Temps de sommeil en heure</Form.Label>
                                    <Form.Control type="number" placeholder="Temps" onChange={e => handleChangeTemps(e.target.value, index)} value={sommeil.temps} />

                                </Form.Group>
                            </Form>
                            <Button onClick={() => updateSommeilAction(sommeil)}>Mettre à jour</Button>

                            <Button variant="danger" onClick={() => deleteSommeilAction(sommeil)}>Supprimer</Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>



        </div>




    );
}

export default CourbesAdmin;