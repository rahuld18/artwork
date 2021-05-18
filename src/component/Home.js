import React, { Component } from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Header from "./Header";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      art: false,
      filter1:'all'
     
    };
  }
  artshow() {
    this.setState({
      art: !this.state.art,
    });
  }

  filterValueUpdater=(val)=>{
    this.setState({
      filter1: val,
    });
  }

  render() {
      const fillertimg=[1, 2,3,4,5,6,7,8,9,10];
      let { filter1}= this.state;
      


      let AllItems = fillertimg.map((index) => (
        <Col key={index} className="mb-4">
          <div className="protfilo">
            <img src={require("../images/nft.png")} alt="" />
            <div className="countdiv mb-2">23h 12m 20s left</div>
            <div className="namebox mb-2">
              <div className="title-name">
                <h3>Giraffo Mr.Tomato</h3>
                <p>
                  <span>by</span> Rickimartian
                </p>
              </div>
              <span>2/5</span>
            </div>
            <div className="namebox mb-2">
              <div className="title-name">
                <h4>0.12 BNB</h4>
              </div>
              <span>
                <i className="fa fa-heart"></i>
              </span>
            </div>
            <div className="bids">
              <Nav.Link href="#">
                <span>Place a Bid</span>
              </Nav.Link>
            </div>
          </div>
        </Col>
      ));
      
    return (
      <>
        <Header />
        <div className="menu-fillter mt-4">
          <Container>
            <div className="d-flex justify-content-center main-menu">
              <Nav as="ul">
                <Nav.Item as="li">
                  <a >All Artworks</a>
                </Nav.Item>
                <Nav.Item as="li">
                  <a >Live Auctions</a>
                </Nav.Item>
                <Nav.Item as="li">
                  <a>Featured Art</a>
                </Nav.Item>
                <Nav.Item as="li">
                  <a>Creators</a>
                </Nav.Item>
              </Nav>
            </div>
          </Container>
        </div>
        <div className="expoler">
          <Container>
            <div className="title mb-4">
              <h1>Explore</h1>
            </div>
            <div className="fillerbox-next">
              <ul>
                
                <li className={filter1 === 'all'?"active":''} onClick={() => this.filterValueUpdater('all')}>
                  <img src={require("../images/fillert-icon.jpg")} alt="" />
                  <span>All</span>
                </li>
                <li className={filter1 === 'art'?"active":''} onClick={() => this.artshow()}>
                  <img src={require("../images/fillter-icon-1.jpg")} alt="" />
                  <span>Art</span>
                </li>
                <li className={filter1 === 'photography'?"active":''} onClick={() => this.filterValueUpdater('photography')}>
                  <img src={require("../images/fillter-icon-1.jpg")} alt="" />
                  <span>Photography</span>
                </li>
                <li className={filter1 === 'gameasset'?"active":''}  onClick={() => this.filterValueUpdater('gameasset')} >
                  <img src={require("../images/fillter-icon-1.jpg")} alt="" />
                  <span>Game Asset</span>
                </li>
                <li className={filter1 === 'music'?"active":''}  onClick={() => this.filterValueUpdater('music')} >
                  <img src={require("../images/fillter-icon-1.jpg")} alt="" />
                  <span>Music</span>
                </li>
                <li className={filter1 === 'metaverse'?"active":''}  onClick={() => this.filterValueUpdater('metaverse')} >
                  <img src={require("../images/fillter-icon-1.jpg")} alt="" />
                  <span>Metaverse</span>
                </li>
              </ul>
              <div className="fillter-right">
                <a href="#">
                  <i className="fa fa-filter"></i>
                  <span>Filter & sort</span>
                </a>
              </div>
            </div>
            {this.state.art ? (
              <div className="art-down">
                <ul>
                  <li>
                    <a href="#" className="active">
                      Animation <i className="fa fa-check"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      GIF <i className="fa fa-check"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Print <i className="fa fa-check"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Digital <i className="fa fa-check"></i>
                    </a>
                  </li>
                </ul>
              </div>
            ) : null}
          </Container>
        </div>
        <div className="all-fillter">
          <Container>
            <Row xs={1} md={5} lg={5}>
              {
             AllItems
              
              }
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
