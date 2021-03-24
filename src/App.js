import {useState,useEffect} from 'react'
import Utils from './Utils'
import './App.css';

function App() {

  const [q1, setQ1] = useState()
  const [q2, setQ2] = useState([])
  const [q2Res, setQ2Res] = useState()

  const getq1Data = async () =>
    {
        let res = await Utils.getDataFromServer("q1")
        //console.log(res)
        setQ1(res)
    }

    const parseData = () =>
    {
      let fistRowElem = []
      let secondRowElem = []
      let tableElem = []
      let liElem = []
      let lisArray = []
      
      q2.forEach(Elem =>
      {
        fistRowElem = []
        fistRowElem.push(<td>Parent ID</td>)
        fistRowElem.push(Elem.data.map((item,index) =>
        {
          return <td key={index}>{item.currentDate}</td>
        }))
        console.log(fistRowElem)
        secondRowElem = []
        secondRowElem.push(Elem.parentId)
        secondRowElem.push(Elem.data.map((item,index) =>
        {
          return <td key={index}>{item.changePercentOnDate}</td>
        }))
        console.log(secondRowElem)
        tableElem = []
        tableElem.push(<table border="1"><thead>{fistRowElem}</thead><tbody>{secondRowElem}</tbody></table>)
        liElem = []
        liElem.push(<li>{tableElem}</li>)
        lisArray.push(liElem)
      })
      
      let ULsArray = <ul>{lisArray}</ul>
      console.log(ULsArray)
      return ULsArray
    }

    const getq2Data = async () =>
    {
        let res = await Utils.getDataFromServer("q2")
        console.log(res)
        setQ2(res)
        
    }

    useEffect(() =>
    {
      let q2Res = parseData()
      setQ2Res(q2Res)
    },[q2])


  return (
    <div className="App">
      <input type="button" onClick={getq1Data} value="press here to get Q1 answer"/> <br/>
      <input type="button" onClick={getq2Data} value="press here to get Q2 answer"/> <br/>

      {q1 && 
      <table border="1">
        <tr>  
            <td>parent_id</td><td>2015</td><td>2016</td><td> 2017</td><td>2018</td><td>2019</td><td>2020</td><td>2021</td><td>2022</td><td>2023</td><td>YEAR_TOTAL</td>
        </tr>
      {
        q1.map((item,index) =>
        {
          return <tr key={index}>
              <td>{item.ParentId}</td>
              <td>{item.YEAR_2015}</td>
              <td>{item.YEAR_2016}</td>
              <td>{item.YEAR_2017}</td>
              <td>{item.YEAR_2018}</td>
              <td>{item.YEAR_2019}</td>
              <td>{item.YEAR_2020}</td>
              <td>{item.YEAR_2021}</td>
              <td>{item.YEAR_2022}</td>
              <td>{item.YEAR_2023}</td>
              <td>{item.YEAR_TOTAL}</td>
          </tr>
        })
      }
      </table>}

     {q2Res}
         
      </div>
  );
}

export default App;
