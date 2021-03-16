import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Col, Container, Row} from 'react-bootstrap'
import Content from './Content'
import axios from 'axios'
import '../App.css'


const Home = () => {
    const [data,setdata] = useState(null)
    const [refresh, setrefresh] = useState(0)
    useEffect(() => {
        
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h%2C7d').then(response=>{setdata(response.data)})
        
    }, [])

    
    
    
    
    
    const renderOutput=()=>{
        if(data){
            
            return(
                data.map(coin=>{

                    return(
                        <Col md={6} xs={12} >
    
                            <Content 
                            days={coin.price_change_percentage_7d_in_currency} 
                            hours={coin.price_change_percentage_24h_in_currency} 
                            price={coin.current_price} 
                            image={coin.image}
                            name={coin.name}
                            />
    
                        </Col>
                    )
                    })
            )
        }
        else{
            return(<h1>Loading....</h1>)
        }
    }
    
   
    return (
        <Container>
            <Link to='/converter'><button className="ui red button">Go to next page</button></Link>
            <Row >
               {renderOutput()}
            </Row>
        </Container>
    )
}

export default Home
