import React,{ useState } from 'react';
const ToDo = () => {

    const [inputData, setinputData] = useState('');
    const [error, setError] = useState(false);
    const [ items, setItems ] = useState([]);

    const addItems = () => {
        if(!inputData) {
            setError(true)
        }else{
            setItems([...items, inputData]);
            setinputData('')
            setError(false)
        }
    }

    const deleteItems = (id) => {
        const updateData = items.filter((ele, ind)=>{
            return ind !== id
        })
        setItems(updateData)
    }

    return (
        <>
            <div className="search-container">
                <h1>To Do list</h1>
                <form>
                    <div className="d-flex mb-2">
                        <input type="text" className="form-control mr-sm-2 w-100" placeholder="Add to Item" value={inputData} onChange={(e) => setinputData(e.target.value)} onKeyPress={(e) => {e.key === 'Enter' && e.preventDefault()}}/>
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={addItems} type="button" title="Add">Add</button>
                    </div>
                    <p className={error ? 'd-block text-danger': 'd-none' }>Please enter your Item list</p>
                </form>
            </div>
            <div className="add-item-container">
                <ul className="list-group mt-2">
                    {
                        items.map((elem,i)=>{
                            return (
                                <li className="text-capitalize list-group-item d-flex align-items-center justify-content-between my-1" key={i}>
                                    {elem} <i className="fas fa-trash-alt btn p-0" onClick={()=>deleteItems(i)} title="Delete"></i>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <button className="btn btn-danger mt-2" onClick={()=>setItems([])}>Remove All</button>
        </>
    );
}

export default ToDo;