import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../containers/header';
import Example from '../../components/modalLogin'
import SecHeader from '../../containers/navbar';
import Footar from '../../components/footar';
import ControlledCarousel from '../../components/carousel';
import { HeartOutlined } from '@ant-design/icons';
import olx from '../../images/bike/olx.jpg';
import map from '../../images/bike/map.PNG';
import '../../App.css';
import Chat from '../Chaat';


function bikeDetail(props) {

    const data = props.location.state;
    if (!data) {
        props.history.push('/');
    }



    return (
        <>
            <div>
                <Header />

                <SecHeader />

                <Container fluid style={{ paddingTop: '100px' }}>
                    <Row style={{ padding: '10px 30px' }}>
                        <Col style={{ padding: '0px' }} lg={12} md={12} sm={12} >
                            <div>
                                <p>
                                    Home / Bikes / Motorcycles / Motorcycles in Punjab / Motorcycles in Faisalabad / Sports & Heavy Bikes in Faisalabad
                            </p>
                            </div>
                        </Col>
                    </Row>
                </Container>


                <Container fluid style={{ padding: '0px 50px' }} >

                    <Row>
                        <Col lg={8} md={8} sm={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: "black", padding: '0px 0px 0px 0px' }}>
                            <ControlledCarousel Images={data.images} />

                            {/* icon img */}

                            <Col lg={12} md={12} sm={12} style={{
                                backgroundColor: 'white', border: "2px solid #ebeeef",
                                display: 'flex', overflow: 'scroll', alignItems: 'center', margin: '0px'
                            }}>

                                {
                                    data.images.map((item) => {
                                        return <div style={{ padding: '20px' }}>>
                                        <img src={item} alt="icon" style={{ width: '70px', height: '70px' }} />
                                        </div>
                                    })
                                }
                            </Col>


                            {/* Details colum */}

                            <div className="borderActv"
                                style={{ width: '100%', border: "2px solid #ebeeef" }}>

                                <Col lg={12} md={12} sm={12}>

                                    <Row style={{ backgroundColor: "white", display: 'flex', justifyContent: "center", alignItems: 'center', padding: '10px 0px 20px 0px ' }}>

                                        <Col lg={3} md={12} sm={12}>
                                            <h4 style={{ fontWeight: '700', fontSize: '20px', color: '#002f34' }}>Details</h4>
                                            <span style={{ color: 'rgba(0,47,52,.64)' }}>Make</span>
                                            <br />
                                            <span style={{ color: 'rgba(0,47,52,.64)' }}>Condition</span>
                                        </Col>

                                        <Col lg={3} md={12} sm={12}>
                                            <br />
                                            <span>{data.detail.make}</span>

                                            <br />
                                            <span>New</span>
                                        </Col>

                                        <Col lg={3} md={12} sm={12}>
                                            <span style={{ color: 'rgba(0,47,52,.64)' }}>year</span>
                                        </Col>

                                        <Col lg={3} md={12} sm={12}>
                                            <span>{data.detail.year}</span>
                                        </Col>

                                    </Row>

                                </Col>


                                {/* Description colum */}

                                <Col lg={12} md={12} sm={12} style={{ backgroundColor: "white", display: 'flex', flexDirection: 'column' }}>
                                    <h4 style={{ borderTop: "2px solid #ebeeef", paddingTop: '15px', fontWeight: '700', fontSize: '20px', color: '#002f34' }}>Description</h4>
                                    {
                                        data.description.map((item) => {
                                            return (
                                                <span>{item}</span>

                                            )
                                        })
                                    }

                                </Col>
                            </div>
                        </Col>


                        {/* side baar */}

                        <Col lg={4} md={4} sm={12} className="sideColum">
                            <div className="borderActv"
                                style={{ border: "2px solid #ebeeef", }}>
                                <div style={{ padding: '15px ' }}>
                                    <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{data.price}</span>
                                    <HeartOutlined style={{ width: '30px', float: 'right' }} />

                                </div>
                                <div style={{ paddingLeft: '15px', color: 'rgba(0,47,52,.64)' }}>
                                    {data.name}
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 10px' }}>
                                    <span style={{ paddingLeft: '6px', color: 'rgba(0,47,52,.64)' }}>
                                        {data.city}
                                    </span>

                                    <span style={{ color: 'rgba(0,47,52,.64)' }}> {data.detail.year}</span>
                                </div>
                            </div>


                            <div className="borderActv"
                                style={{ border: "2px solid #ebeeef", margin: '10px 0px', padding: '15px' }}>
                                <h4>Seller description</h4>
                                <div style={{ width: '100%', display: 'flex' }}>
                                    <div style={{ backgroundColor: "", width: '20%', height: '20%', paddingTop: '10px', borderRadius: '2em', textAlign: 'center' }}>
                                        <img src={olx} style={{ width: '50px', height: '50px' }} alt="olx" />
                                    </div>
                                    <div style={{ width: '80%', padding: '10px 10px' }}>
                                        <h6 style={{ fontWeight: 'bold', fontSize: '20px' }}>Ow Motorsports</h6>
                                        <span style={{ color: 'rgba(0,47,52,.64)' }}>Member since Apr 2018</span>
                                    </div>
                                </div>

                                <div style={{ paddingTop: '20px' }}>

                                    <Example />
                                </div>

                            </div>

                            <div className="borderActv"
                                style={{ border: "2px solid #ebeeef", height: '250px', padding: '15px' }}>
                                <div >
                                    <h3 style={{ marginBottom: '20px' }}>Posted in</h3>
                                    {data.Country}
                                </div>
                                <div style={{ padding: '10px' }}>
                                    <img src={map} alt="map" style={{ width: '100%', height: '130px' }} />
                                </div>
                            </div>
                        </Col>




                    </Row>



                </Container>

                <Footar />
            </div>
            {
                1 === 2 ?
                    <Chat />
                    :
                    null
            }
        </>
    )
}

export default bikeDetail;