import React from 'react'
import { Col, Container, Row ,ListGroup, Image} from 'react-bootstrap'
const Content = (props) => {

    const  renderChange=(value)=>{
        if(value > 0){
            return(
                <div style={{color:'green'}}>
                    <i class="big angle double up icon"></i>
                    <p>% change</p>
                    <h4>{value.toFixed(7)}</h4>
                </div>
            )

        }
        else{

            return(
                <div style={{color:'red'}}>
                    <i class="big angle double down icon" ></i>
                    <p>% change</p>
                    
                    
                    <h4> {value.toFixed(7)}</h4>
                </div>
            )

        }
    

    }

    return (
        <Container className='ui raised segment' style={{height:280,marginTop:25}}>
            <ListGroup horizontal>

                <Col md={5} xs={5} fluid>
                    <ListGroup.Item style={{height:100,border:'none',marginTop:-10}} >
                    <img src={props.image} style={{height:40,marginTop:0,marginLeft:-20}}></img>
                    <h2 style={{marginLeft:-20,marginTop:16 }}>{props.name}</h2>
                </ListGroup.Item>
                </Col>

                <Col md={7} xs={7} >
                <ListGroup.Item style={{height:100,marginTop:10,border:'none',textAlign:'center'}}>
                <h2 style={{marginTop:38,}}>${props.price}</h2>
                </ListGroup.Item>
                </Col>


            </ListGroup>

            <ListGroup horizontal>

                <Col md={6} xs={6}  fluid>
                <ListGroup.Item style={{height:100,marginTop:25,border:'none'}} >
                    {renderChange(props.days)}
                </ListGroup.Item>
                </Col>

                <Col md={6} xs={6}>
                <ListGroup.Item style={{height:100,marginTop:25,border:'none'}}>
                {renderChange(props.hours)}
                </ListGroup.Item>
                </Col>
                
            </ListGroup>
            
            
            
        </Container>
    )
}

export default Content
