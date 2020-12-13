import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CamembertAdmin from './Components/admin/consommation';
import CourbesAdmin from './Components/admin/Courbes'
import EcranAdmin from './Components/admin/Ecran';
import Nbres_de_pasAdmin from './Components/admin/Nbres_de_pas';
import SportAdmin from './Components/admin/sport';
import VisiteAdmin from './Components/admin/Visite';



function Page_Admin() {



    return (
        <div class="admin_page">
            <div class="gros_titre">
            <h1>Un formulaire qui change la vie</h1>
            </div>
            <div class="description_admin">
                <p>Commencez à mettre de l'ordre dans votre organisme et laissez Healthi.I prendre soin de vous, en remplissant chaque semaine ce formulaire de santé.</p>
                <p>Nos coachs sportifs, nutritionnistes et aides soignants de qualité analyserons vos données afin de vous fournir les meilleurs programmes et conseils santé.</p>
            </div>
            <div class="container_cruds">
                <Container-fluid>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <CourbesAdmin />
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Nbres_de_pasAdmin />
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <CamembertAdmin />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <VisiteAdmin />
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <SportAdmin />
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <EcranAdmin />
                        </Col>
                    </Row>
                </Container-fluid>
            </div>
            <footer>
                        Made by Gilles Liso & Alexandre Guenot
            </footer>
        </div>

    );
}

export default Page_Admin;