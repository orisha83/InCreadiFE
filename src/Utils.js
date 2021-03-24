import axios from 'axios'

const getDataFromServer = async function (collection) 
{
    let DataArr
    let res
    switch (collection) {
        case 'q1':
            res = await axios.get("http://localhost:8000/api/q1")
            DataArr = res.data
            console.log(DataArr)
        break;
        case 'q2':
            res = await axios.get("http://localhost:8000/api/q2")
            DataArr = res.data
            console.log(DataArr)
        break;
        
          
        default:
    }
    return DataArr
}

export default {getDataFromServer}