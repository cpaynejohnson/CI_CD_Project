import React, {useState,useEffect} from 'react';
import { Link, useParams } from "react-router-dom";


function SchoolDetail() {
    //get the id from the Route parameters
    let { id } = useParams();

    //schooState will store the specific school we fetch
    //tour state will get tour data
    const [schoolState, setSchoolState]=useState({})
    const [tourState, setTourState]=useState({})

    //function to fetch schools and store in state
    const fetchSchoolDetail = async () =>{
        try{
            console.log(id)
            const response = await fetch(`http://hub-env.eba-ufpmtewu.us-east-1.elasticbeanstalk.com/school/${id}`, {
            method: 'GET'
            });
            const responseJSON = await response.json()
            //updates state with school list
            console.log(responseJSON)
            setSchoolState(responseJSON)
        } catch(err) {
        console.log(err)
        }
    }

    //function to fetch schools and store in state
    const fetchTour = async () =>{
        try{
            console.log(id)
            const response = await fetch(`http://hub-env.eba-ufpmtewu.us-east-1.elasticbeanstalk.com/tour/${id}`, {
            method: 'GET'
            });
            const responseJSON = await response.json()
            //updates state with school list
            console.log(responseJSON)
            setTourState(responseJSON)
        } catch(err) {
        console.log(err)
        }
    }
    
    //useEffect will call the fetchSchoolDetail when this component mounts
    useEffect(() => {
        fetchSchoolDetail()
        fetchTour()
    },[id])

    return (
        schoolState
        ? 
        <div >
            
            <h2 >{schoolState.name}</h2>
            <img src={tourState.image}/>
            {/* 
            <img className="school-img" style= {{width:'700px'}} src={schoolState.image} alt={schoolState.name} />
            <br/>
            <br/>
            {/* <DogAdoption dog={dogState}/> */}
            <br/>
            <br/>
            <Link to="/" >Back</Link>
            <br/>
            <br/> 
        </div>
        :
        <p>loading..</p>

    );
}

export default SchoolDetail;