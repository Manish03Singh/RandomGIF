import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export const useGif = (tag) => {

    const [gif, setGif] = useState('')
    const [loading, setloading] = useState('false')

    async function fetchData(tag){
        setloading(true)
        const {data} = await axios.get(tag ? `${randomurl}&tag=${tag}` : randomurl)
        const image = data.data.images.downsized_large.url
        console.log(image)
        setGif(image)
        setloading(false)
    }

    useEffect(() =>{
        fetchData('soccer');
    },[])

    return {gif, loading, fetchData}
}

export default useGif;
