import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {

    const [msg, setMsg] = useState([]);

    useEffect( () => {
        axios({
            url: '/react',
            method: 'get'
        })

        .then(data => {setMsg(data);})
    }, []);


    console.log(msg);
    return (

        <>
            <h3>과연 나올 것인가?</h3>

        </>
    
    ) 
    
}

export default Home;