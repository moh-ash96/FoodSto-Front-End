import axios from 'axios'
import { useState, useEffect } from "react"

export default(
    function Main(){

        const [data, setData] = useState([])

        async function getData(){
            const response = await axios.get('https://foodsto-api.herokuapp.com/api/v1/products/');
            return response
        }
        useEffect(async()=>{
            const response = await getData()
            const { data } = response
            setData(data)
        },[])

        return (
            <main className="flex flex-col text-center">
                <h1 className="mt-10 text-4xl">Our products</h1>
                <div className="flex flex-wrap justify-center">
                {
                    data.map(product=>(<div className="flex flex-col items-center p-3 mt-20 bg-white rounded-lg w-80 ml-11">
                        <div className="flex items-center w-40 h-56">
                        <img src={product.image} width="200px"/>
                        </div>
                        <div>
                            <h2 className="mt-5 text-2xl">{product.name}</h2>
                            <p className="ml-2 text-xs text-left">{product.description}</p>
                            <h3 className="text-sm font-bold">{product.price} JD</h3>
                        </div>
                    </div>))
                }
                </div>
            </main>
        )
    }
)