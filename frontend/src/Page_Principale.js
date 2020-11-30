import React from 'react';
import './App.css';
import Widget_Courbes from './Components/Courbes';
import Widget_Arraignée from './Components/Arraignée'
import Widget_Histogramme from './Components/Histogramme'
import Nbres_de_pas from './Components/Nbres_de_pas'
import Camembert from './Components/Camembert'
import Vertical_Sticks from './Components/Sticks'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


// Page Widgets 
function Page_Principale() {
    return(
        <div className="main">
            <Container-fluid>
                <Row>   {/* Row */}
                
                    <Col lg={4} md={6} sm={12}>
                            <Widget_Courbes/>
                    </Col>

                    <Col lg={4} md={6} sm={12}>                    
                            <Nbres_de_pas/>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                            <Camembert/>
                    </Col>
                    <Col lg={4} md={6}sm={12}>
                            <Widget_Histogramme/>
                    </Col>
                    <Col lg={4} md={6}sm={12}>
                            <Widget_Arraignée/>       
                    </Col>
                    <Col lg={4} md={6}sm={12}>
                            <Vertical_Sticks/>
                    </Col>

                </Row>   {/*  Row */}

            <footer>
                    Made by Gilles Liso & Alexandre Guenot
            </footer>
        </Container-fluid>

        </div>
        
    );
}
export default Page_Principale;