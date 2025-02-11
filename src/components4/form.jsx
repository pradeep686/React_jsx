import { useState } from "react";

//React forms are a way to collect user input in a React application

function MyForm(){

    const [name,setName] = useState("");
    console.log('current state..' + name);

    const [values, setValue] = useState({Phone: "+91", country: "India", about: ""})

    function handeleSubmit(e){
         e.preventDefault();  //it not allow the browser to reload
         //why?      when the submit button clicks defaultly browser grt refresh it browsers behaviour
         //but, in react we not need that beacuse of browser reload the data in textfield is deleted.
        console.log("form submitted...")
        console.log('End state..' , name);

        console.log('End state..' , values);
    }

    //optimized way


    // name and value is must needed
    // because is object type {key: value} needed....

    function handleAllData(elements){ 
        const name = elements.target.name //name = inside label -->mention attribut name 
        const value = elements.target.value
        setValue(   (previousState)   => { return {...previousState, [name] : value}} )
    }

    
     

    return <form onSubmit={ handeleSubmit}>
    <br></br> 
    <br/>  {/*self closing */}
                        {/*      it detect the changes      */}
        <label>Name: <input  placeholder="Enter name"  type="text" onChange={ (data)  =>  { setName(data.target.value) } }>
        </input></label><br/> 
        <label>age: <input  placeholder="Enter age"  type="text" onChange={ (data)  =>  { setValue({Age: data.target.value}) } }>
        </input></label><br/> 
        <label>email: <input  placeholder="Enter mail id"  type="text" onChange={ (data)  =>  { setValue (  (previousState)   => {
            return {...previousState, Email : data.target.value}}
            ) } }>
        </input></label><br/> <br/> <br/> 


        {/* above is too large, optimized using one function: */}

        After simplification using one Function to handle All Data's<br/><br/><br/>
        <label>School: <input  placeholder="Enter school name"  type="text" name="school" onChange={  handleAllData  }>
        </input></label><br/> <br/> 
        <label>College: <input  placeholder="Enter college name"  type="text" name="college"  onChange={  handleAllData }>
        </input></label><br/> <br/> 
        <label>Phone: <input  placeholder="Enter mobile number"  type="text" name="phone"  value={values.Phone} onChange={ handleAllData } >
        </input></label><br/> <br/> 
        <label>Address: <input  placeholder="Enter address"  type="text" name="address"  onChange={ handleAllData }>
        
        {/* select */}
        
        </input></label><br/> <br/> 

        <label>Country: 
            <select name="country"  values={values.country}onChange={ handleAllData }> 
            
            <option value="">Select</option>

            <option value=" India ">India</option>
            <option value=" US ">US</option>
            <option value=" UK ">UK</option>
            <option value=" France">France</option>
                    
        </select>
        </label><br/> <br/> 

        {/* textarea */}

        <label>Enter yourSelf:                                                  {/*Self CLOSING TAG*/}
            <textarea name="about" value={values.about}  onChange={ handleAllData }/></label>

        <input type="submit" value="submit form"/>

    </form>
}

export default MyForm;