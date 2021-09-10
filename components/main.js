import Image from "next/dist/client/image"

export default(
    function Main(){
        
        const data = [
            {
                "id": 1,
                "seller": 1,
                "name": "Milk",
                "description": "Full Fat Milk",
                "image": "https://i.dailymail.co.uk/1s/2019/03/30/15/11659042-0-image-a-2_1553961271996.jpg",
                "price": "1.50"
            },
            {
                "id": 1,
                "seller": 1,
                "name": "Milk",
                "description": "Full Fat Milk",
                "image": "https://i.dailymail.co.uk/1s/2019/03/30/15/11659042-0-image-a-2_1553961271996.jpg",
                "price": "1.50"
            },
            {
                "id": 1,
                "seller": 1,
                "name": "Milk",
                "description": "Full Fat Milk",
                "image": "https://i.dailymail.co.uk/1s/2019/03/30/15/11659042-0-image-a-2_1553961271996.jpg",
                "price": "1.50"
            },
            {
                "id": 1,
                "seller": 1,
                "name": "Milk",
                "description": "Full Fat Milk",
                "image": "https://i.dailymail.co.uk/1s/2019/03/30/15/11659042-0-image-a-2_1553961271996.jpg",
                "price": "1.50"
            },
            {
                "id": 1,
                "seller": 1,
                "name": "Milk",
                "description": "Full Fat Milk",
                "image": "https://i.dailymail.co.uk/1s/2019/03/30/15/11659042-0-image-a-2_1553961271996.jpg",
                "price": "1.50"
            },
            {
                "id": 1,
                "seller": 1,
                "name": "Milk",
                "description": "Full Fat Milk",
                "image": "https://i.dailymail.co.uk/1s/2019/03/30/15/11659042-0-image-a-2_1553961271996.jpg",
                "price": "1.50"
            },
        ]


        return (
            <main>
                <h1>Our products</h1>
                {
                    data.map(product=>(<div>
                        <img src={product.image}/>
                        <div>
                            <h2>{product.name}</h2>
                            <p>Description:<br/>{product.description}</p>
                            <h3>Price: {product.price} JD</h3>
                        </div>
                    </div>))
                }

            </main>
        )
    }
)