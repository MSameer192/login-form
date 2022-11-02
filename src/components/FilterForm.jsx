import React, { useState } from 'react';

export default function FilterForm() {
    const [number, setNumber] = useState();
    const [list, setList] = useState([]);



    const filterArray = () => {
        setList([...list, number])
        setNumber('')
    }



    return (
        <>
            <form action="" className='container mt-5' onSubmit={(event) => { event.preventDefault() }}>
                Please put your number :
                <input className='mx-3 ' type="text" name="" id="" value={number} onChange={(event) => { setNumber(event.target.value) }} />

                <button className='btn btn-primary' onClick={filterArray}> Filter Array </button>
            </form>

            <div className="container">

                {
                   


                        list.filter((item) => {item < 0 })

                        return(
                            <p>{item}</p>
                        )
                }



            </div>
        </>

    );
}