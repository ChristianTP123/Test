import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Site } from '../../funcs.js';
import { Break } from '../../funcs.js';

export default function Coin() {
    const router = useRouter();
    const { id } = router.query;
    
    const [coin, setCoin] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
        if (!router.isReady) return;
        fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&sparkline=false`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setIsLoading(false);
                setCoin(json);
            });
            
    }, [router.isReady]);
    console.log(coin)
    
    return(
        <>
        
            <br></br>
            <br></br>
            <div class="row">
                <Break />
                <Site link="../../" text="Home" /> 
                <Site link="../../about" text="About" />
                <Break />
            </div>
            <div class="box">
                
                
            </div>
        </>
    )
}
