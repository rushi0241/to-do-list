import react, { useState } from 'react'

const NameForm = () => {
    const [inputData, setInputData] = useState('');
    const [name, setName] = useState('');
    
    const onSubmits = (e) => {
        e.preventDefault();
        setName(inputData.charAt(0).toUpperCase() + inputData.slice(1))
        setInputData('')
    }

    return (
        <div className="mt-3">
            <form onSubmit={onSubmits}>
                <h4>Hello <strong>{name}</strong></h4>
                <input type="search" className="form-control mr-sm-2 w-100" placeholder="Enter your name" value={inputData} onChange={(e) => setInputData(e.target.value)}/>
                <button className="btn btn-primary mt-2 d-block w-100" type="submit">Click Me</button>
            </form>
        </div>
    )
}

export default NameForm;