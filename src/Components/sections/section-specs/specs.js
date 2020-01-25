import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import Spec from './spec/spec';
import clock from '../../../Assests/icons/icon_specs/clock.png';
import chef from '../../../Assests/icons/icon_specs/hat.png';
import leaf from '../../../Assests/icons/icon_specs/leaf.png';
import basket from '../../../Assests/icons/icon_specs/basket.png';

const specs=()=>{
    return(
        <Container>
            <Row>
                <Col>
                    <Spec src={basket} head="100% organic" content="Our chef start prepairing order as soon as you place it, while we keep engines hot for your delivery.Therefore we deliver food hot and at our fastest so you can enjoy every meal with your loved one on time." />
                </Col>
                <Col>
                    <Spec src={clock} head="fast delivery" content="Our chef start prepairing order as soon as you place it, while we keep engines hot for your delivery.Therefore we deliver food hot and at our fastest so you can enjoy every meal with your loved one on time."/>
                </Col>
                <Col>
                 <Spec src={leaf} head="cleanness" content="Our chef start prepairing order as soon as you place it, while we keep engines hot for your delivery.Therefore we deliver food hot and at our fastest so you can enjoy every meal with your loved one on time."/>
                </Col>
                <Col>
                 <Spec src={chef} head="Experienced Chef" content="Our chef start prepairing order as soon as you place it, while we keep engines hot for your delivery.Therefore we deliver food hot and at our fastest so you can enjoy every meal with your loved one on time."/>
                </Col>
            </Row>
        </Container>
    );
}

export default specs;