import React, {useEffect, useRef, useState} from 'react';
import "./Pages.css";
import axios from "axios";
const AddUser = () => {



    const [user,setUser] = useState({
        name:"" ,
        email: '',
        phone:"",
        enroll: '',
        data: '',
        image:""

    })
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)
    const inputRef4 = useRef(null)

    const resetInputs = () => {
        inputRef1.current.value = ""
        inputRef2.current.value = ""
        inputRef3.current.value = ""
        inputRef4.current.value = ""
    }

    console.log(user)
    const handleChange = (e)=>{
        setUser({...user, [e.target.name]: e.target.value})
    }

 const handleClick = () => {
        axios.post(`https://637789715c4777651220950c.mockapi.io/student`,{
            ...user
        })

            .then((response) => {
               alert("Успешно")
            }).catch((error)=>{
            console.log(error , "E")
        })

    }

    return (
        <section id="user">
            <div className="container">
                <center>
                    <div >
                        <form action="" onSubmit={(e) => e.preventDefault()}  className="user">
                            <input ref={inputRef1} type="text" placeholder='Name' name='name' value={user.name} onChange={handleChange}/>
                            <input ref={inputRef2} type="email" placeholder='Email' name='email' value={user.email} onChange={handleChange}/>
                            <input ref={inputRef3} type="number" placeholder='Phone' name='phone' value={user.phone} onChange={handleChange}/>
                            <input ref={inputRef4} type="number" placeholder='Enroll' name='enroll' value={user.enroll} onChange={handleChange}/>
                            <button onClick={() => {
                                handleClick()
                                resetInputs()
                            }} className="headerBtn" style={{margin:"10px"}}>Добавить</button>
                        </form>
                    </div>
                </center>

            </div>

        </section>
    );
};

export default AddUser;