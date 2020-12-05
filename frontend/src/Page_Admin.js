import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createSommeil } from './service/API'
function Page_Admin() {
    const [date, setDate] = useState(new Date())
    const [temps, setTemps] = useState(0)
    const createSommeilAction = () => {
        createSommeil(date, temps).then(res => {
            console.log(res.data)
        }).catch(e => {
            alert(e)
        })
    }


    return (
        <div>
            <h1>Page Admin</h1>
            <Row style={{ padding: "50px" }}>
                <Col>
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
                                Envoyer
                            </Button>
                        </Form>
                    </Card>
                </Col>
                <Col>

                </Col>
                <Col>

                </Col>
            </Row>

        </div>




    );
}

export default Page_Admin;