import React from 'react';
import TopNav from "../navbar/TopNav";
import MainNav from "../navbar/MainNav";
import Footer from '../footer/Footer';

import ProductComponent from "../ProductComponent";
import TableComponent from "../TableComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


const MainLayout =()=>{

    return(
<React.Fragment>
    
    <MainNav/>

    <div>
    

    
      <Container>
        <br />
        <Row>
          <ProductComponent />
        </Row>
        <br />
        <Row>
          <TableComponent />
        </Row>
      </Container>
    </div>
    <Footer/>
</React.Fragment>
    );
    
}

export default MainLayout