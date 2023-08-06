
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import { BsCircle} from "react-icons/bs";
import { BiBoltCircle } from "react-icons/bi";
import { PiCheckCircleBold } from "react-icons/pi";

// modal

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

// dropdown
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



function index() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (

    <div className='Roadmap'>

      {/* =======================================================================================================
                  Menubar
      ===========================================================================================================*/}
      <section>

        <Container>
              <Row>
                  <Col>

                      <div className='Roadmap_Menubar'>

                          <div className='Roadmap_Menubar1'>

                            <Link href=''>
                              <img className='LogoImg' src='/logo.png'></img>
                            </Link>

                              <div className='Roadmap_Menubar_item2'>

                                <Link href=''>
                                    ROADMAP
                                </Link>
                              
                              </div>
                            
                          </div>

                          <div className='Roadmap_Menubar_item3'>

                              <>
                                <Button className='RoadmapRight-Button'  onClick={handleShow}>
                                    New Post
                                </Button>

                                <Modal show={show} onHide={handleClose} className='ModalPadding'>
                                  <Modal.Header closeButton>
                                    <Modal.Title>New Submission</Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    <Form>
                                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                          type="email"
                                          placeholder=" Title of Your Submission"
                                          autoFocus
                                        />
                                      </Form.Group>



                                    <div className='Dropdownmain_Box'>

                                        <Form.Group
                                            className="mb-3 Dropdownbtn"
                                            controlId="exampleForm.ControlTextarea1"
                                          >
                                            <Form.Label>Request</Form.Label>
                                            <DropdownButton id="dropdown-basic-button" title="Requests & Wish List">
                                              <Dropdown.Item href="#/action-1">Bugs & Fixes</Dropdown.Item>
                                              <Dropdown.Item href="#/action-2">Features</Dropdown.Item>
                                              <Dropdown.Item href="#/action-3">Integrations</Dropdown.Item>
                                              <Dropdown.Item href="#/action-3">Requests & Wish List</Dropdown.Item>
                                              <Dropdown.Item href="#/action-3">Themes / Templates</Dropdown.Item>
                                            </DropdownButton>
                                        </Form.Group>


                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1"
                                          >
                                            <Form.Label>Tags</Form.Label>
                                            <DropdownButton id="dropdown-basic-button" title="Select Tags">
                                              <Dropdown.Item href="#/action-1">Bug</Dropdown.Item>
                                              <Dropdown.Item href="#/action-3">Element</Dropdown.Item>
                                              <Dropdown.Item href="#/action-3">Improvement</Dropdown.Item>
                                              <Dropdown.Item href="#/action-3">Integration</Dropdown.Item>
                                              <Dropdown.Item href="#/action-2">CMS</Dropdown.Item>
                                              <Dropdown.Item href="#/action-3">Element</Dropdown.Item>
                                              <Dropdown.Item href="#/action-3">Dashboard</Dropdown.Item>
                                             
                                            </DropdownButton>
                                        </Form.Group>


                                    </div>

                                    


                                      <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                      >
                                        <Form.Label>Your Thoughts</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                      </Form.Group>


                                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                          type="email"
                                          placeholder=" support@funnelliner.com"
                                          autoFocus
                                        />
                                      </Form.Group>




                                    </Form>
                                  </Modal.Body>
                                  <Modal.Footer>
                                   
                                    <Button className='RoadmapRight-Button_Last'  onClick={handleClose}>
                                      New Post
                                    </Button>
                                  </Modal.Footer>
                                </Modal>
                              </>
                            
                          </div>

                      </div>
                  
                  </Col>
              </Row>
        </Container>

        <div className='RoadmapHr'></div>

      </section>


      {/* =============================================================================================
            Feature
      ================================================================================================*/}
      
      {/* <section>

        <Container>
          <Row>
            <Col>
            
              <div  className='Roadmap_Feature_main'>

                  <Link href="">
                    <div className='Roadmap_Feature_item1'>
                      <h4>Feature Requests</h4>
                      <div>320</div>
                    </div>
                  </Link>

                  <Link href="">
                    <div className='Roadmap_Feature_item1'>
                      <h4>Bugs & Fixes</h4>
                      <div>3</div>
                    </div>
                  </Link>

                  <Link href="">
                    <div className='Roadmap_Feature_item1'>
                      <h4>Integrations</h4>
                      <div>30</div>
                    </div>
                  </Link>

                  <Link href="">
                    <div className='Roadmap_Feature_item1'>
                      <h4>Support</h4>
                      <div>30</div>
                    </div>
                  </Link>


              </div>

            </Col>
          </Row>
        </Container>

      </section> */}

    {/* ======================================================================================
              Card
    ==========================================================================================*/}

      <section>

        <Container>

          <Row>

              <Col lg={3}>

                  <div className='CardRoadmap'>
                    
                    
                      <h5 className='CardRoadmap1'> <BsCircle/>Wishlist & Requests </h5>
                      <div className='RoadmapHr2'></div>

                      {/* Small card 1---- */}

                      <div className='CardRoadmap_item2'>
                        <h4>Funnelliner interactive dashboards  </h4>
                        <p>Jun 16th</p>
                        <Link href="">Feature request</Link>
                      </div>
                  
                      <div className='CardRoadmap_item2'>
                        <h4>New user experiances  </h4>
                        <p>Jun 16th</p>
                        <Link href="">Feature request</Link>
                      </div>
                  
                      <div className='CardRoadmap_item2'>
                        <h4>Added marketing tools</h4>
                        <p>Jun 16th</p>
                        <Link href="">Feature request</Link>
                      </div>


                      <div className='CardRoadmap_item2'>
                        <h4>Update feedback features  </h4>
                        <p>Jun 16th</p>
                        <Link href="">Feature request</Link>
                      </div>

                      <div className='CardRoadmap_item2'>
                        <h4>Image quality improved</h4>
                        <p>Jun 16th</p>
                        <Link href="">Feature request</Link>
                      </div>


                  </div>
                   
              </Col>

              <Col lg={3}>

                  <div className='CardRoadmap'>

                      <h5 className='CardRoadmap2'><BiBoltCircle/>Planned </h5>
                      <div className='RoadmapHr2'></div>

                       {/* Small card 2----- */}



                      <div className='CardRoadmap_item2'>
                        <h4>Funnelliner interactive dashboards</h4>
                        <p>Jun 16th</p>
                        <Link href="">Feature request</Link>
                      </div>

                      <div className='CardRoadmap_item2'>
                        <h4>Integrated with SEO tools  </h4>
                        <p>Jun 16th</p>
                        <Link href="">Feature request</Link>
                      </div>
                  
                      <div className='CardRoadmap_item2'>
                        <h4>Upgrades the system info   </h4>
                        <p>Jun 16th</p>
                        <Link href="">Feature request</Link>
                      </div>
                  
                      <div className='CardRoadmap_item2'>
                        <h4>Unlocking more features for user  </h4>
                        <p>Jun 16th</p>
                        <Link href="">Feature request</Link>
                      </div>
                  
                      <div className='CardRoadmap_item2'>
                        <h4>Analytical features enabled  </h4>
                        <p>Jun 16th</p>
                        <Link href="">Feature request</Link>
                      </div>
                  

                  </div>
                   
              </Col>

              <Col lg={3}>

                  <div className='CardRoadmap'>

                      <h5 className='CardRoadmap3'> <PiCheckCircleBold/>In Progress </h5>
                      <div className='RoadmapHr2'></div>

                       {/* Small card 3----- */}

                      <div className='CardRoadmap_item2'>
                        <h4>Api response improvement</h4>
                        <p>Jun 16th</p>
                        <Link href="">Feature request</Link>
                      </div>
                      
                      <div className='CardRoadmap_item2'>
                        <h4>Dashboard features improvement</h4>
                        <p>Jun 16th</p>
                        <Link href="">Feature request</Link>
                      </div>
                      
                      <div className='CardRoadmap_item2'>
                        <h4>Update feedback features</h4>
                        <p>Jun 16th</p>
                        <Link href="">Feature request</Link>
                      </div>

                     
                  
                  </div>
                   
              </Col>

              <Col lg={3}>

                  <div className='CardRoadmap'>

                      <h5 className='CardRoadmap4'> <PiCheckCircleBold/>Completed</h5>
                      <div className='RoadmapHr2'></div>

                       {/* Small card 4----- */}

                      <div className='CardRoadmap_item2'>
                        <h4>Critical bug issues solved</h4>
                        <p>Jun 16th</p>
                        <Link href="">Feature request</Link>
                      </div>
                      
                      <div className='CardRoadmap_item2'>
                        <h4>Migration done</h4>
                        <p>Jun 16th</p>
                        <Link href="">Feature request</Link>
                      </div>
                      <div className='CardRoadmap_item2'>
                        <h4>User resource up-to-date</h4>
                        <p>Jun 16th</p>
                        <Link href="">Feature request</Link>
                      </div>
                      
                      <div className='CardRoadmap_item2'>
                        <h4>dashboards counter improved</h4>
                        <p>Jun 16th</p>
                        <Link href="">Feature request</Link>
                      </div>

                     
                  
                  </div>
                   
              </Col>

          </Row>

        </Container>
      </section>


      
    </div>


  )
}

export default index

