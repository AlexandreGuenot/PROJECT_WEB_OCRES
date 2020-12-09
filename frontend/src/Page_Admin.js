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
        <div>
            <h1>Page Admin</h1>
            <Row>
                <Col>
                    <CourbesAdmin />
                </Col>
                <Col>
                    <Nbres_de_pasAdmin />
                </Col>
                <Col>
                    <CamembertAdmin />
                </Col>
            </Row>
            <Row>
                <Col>
                    <VisiteAdmin />
                </Col>
                <Col>
                    <EcranAdmin />

                </Col>
                <Col>
                    <SportAdmin />
                </Col>
            </Row>

        </div>

    );
}

export default Page_Admin;