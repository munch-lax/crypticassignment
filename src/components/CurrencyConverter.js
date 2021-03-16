import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { ListGroup } from 'react-bootstrap'

const CurrencyConverter = () => {

    const image=require('../images/bit.svg').default

    const [data,setdata] = useState(null)
    const [input, setinput] = useState('')
    const [option1, setoption1] = useState('')
    const [option2, setoption2] = useState('')
    const [price1, setprice1] = useState()
    const [price2, setprice2] = useState()
    const [numberofcoins, setnumberofcoins] = useState()
    
    useEffect(() => {
        
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h%2C7d').then(response=>{setdata(response.data)})
        
    }, [])


    const searchPrice=(name,id)=>{
        if(data){
            
               data.map(coin=>{
                    
                    if(coin.name===name){
                        if(id==1){
                        setprice1( coin.current_price)
                        return 0}
                        else{
                            setprice2( coin.current_price)
                            return 0
                        }
                    }
                    
                })
             
            
            
            }
        else{
            return [0]
        }
        
    }

    const result=()=>{
        if(numberofcoins>0){
            return (
                <div class="ui info message">
                
                    <div class="header">
                        You will have {numberofcoins} of {option2}
                    </div>
                </div>
            )
        }
        else{
            return null
        }
    }
    



    



    const handleSubmit=()=>{
        searchPrice(option1,1)
        searchPrice(option2,2)
        console.log(price1,price2,'this is the value')
        
        
            const numberofcoins1=(Number(input)*price1)/price2
            setnumberofcoins(numberofcoins1)
        
        
    }


    
    return (
        
    <div style={{display:'flex',height:'100vh',width:'100%',justifyContent:'center'}}>
            
        <div className="ui raised segment" style={{height:'40rem',width:'30rem',marginTop:50}}>
            <ListGroup >
                <ListGroup.Item style={{height:200,border:'none'}}>
                        <div id='bitcoin'><img src={image}></img></div>
                </ListGroup.Item>

                <ListGroup.Item>
                    <label style={{marginRight:50}}><h5>Enter Amount</h5> </label>
                    <input className='ui input' onChange={e=>setinput(e.target.value)}/>
                </ListGroup.Item>

                <ListGroup.Item>
                    <label style={{marginRight:30}} ><h5>Choose Currency</h5> </label>
                    <select className='ui dropdown menu'  onClick={e=>setoption1(e.target.value)} style={{width:150}}>
                    <option>None</option>   
                        {data?data.map(coin=>{
                            return(
                                <option value={coin.name} className='item' >{coin.name}</option>
                            )
                            })
                            : <div></div>
                    
                        }
                        
                    </select>
                </ListGroup.Item>

                <ListGroup.Item>
                    <label style={{marginRight:125}}><h3>To ?</h3></label>
                        
                    <select className='ui dropdown menu' onClick={e=>setoption2(e.target.value)} style={{width:150}}>
                    <option>None</option>
                        {data?data.map(coin=>{
                            return(
                                <option value={coin.name} className='item' >{coin.name}</option>
                            )
                            })
                            : <div></div>
                    
                        }
                        
                    </select>
                    <button className='ui red button' onClick={handleSubmit}>Double tap to Submit</button>
                </ListGroup.Item>
                <ListGroup.Item>
                    {result()}
                </ListGroup.Item>
               
            </ListGroup>
        </div>
    </div>
    )
}

export default CurrencyConverter
