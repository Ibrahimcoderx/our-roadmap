
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import { BsCircle} from "react-icons/bs";
import { BiBoltCircle } from "react-icons/bi";
import { PiCheckCircleBold } from "react-icons/pi";


function index() {

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

                          <div>

                            <Link href=''>
                              <img className='LogoImg' src='/logo.png'></img>
                            </Link>
                            
                          </div>

                          <div className='Roadmap_Menubar_item2'>

                            <Link href=''>
                                 ROADMAP
                            </Link>
                            
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

