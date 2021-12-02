import react, { useState } from 'react'

const Accordion = ({id,title,content}) => {

    const [isActive, setIsActive] = useState(false); 

    return (
        <>
            <div className={isActive === id ? 'accordion-title d-flex justify-content-between border my-1 p-2 btn btn-success w-100' : 'accordion-title d-flex justify-content-between border my-1 p-2 btn'} onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="accordion-content p-2">{content}</div>}
        </>
    )
}

export default Accordion;