import react, { useState } from 'react'


const tabbing = [
    {
        id : 1,
        tabName : 'Section title 1',
        content : 'Content of section 1'
    },
    {
        id : 2,
        tabName : 'Section title 2',
        content : 'Content of section 2'
    },
    {
        id : 3,
        tabName : 'Section title 3',
        content : 'Content of section 3'
    }
]

const Tabbing = () => {
    const [visibleTab, setVisibleTab] = useState(tabbing[0].id)
    const listTitles = tabbing.map((item,i) => 
      <li key={i} className="list-group-item" onClick={() => setVisibleTab(item.id)} className={visibleTab === item.id ? "mx-2 flex-direction-row tab-title tab-title--active btn btn-primary" : "tab-title flex-direction-row btn btn-outline-primary mx-2"}>{item.tabName}</li>
    )

    const listContent = tabbing.map((item) => 
      <p style={visibleTab === item.id ? {} : {display: 'none'}}>{item.content}</p>
    )

    return (
        <>
            <h1>Tabbing</h1>
            <div className="tabs">
                <ul className="list-group mt-3 flex-row">
                    {listTitles}
                </ul>
                <div className="tab-content m-2">
                    {listContent}
                </div>
            </div>
        </>
    )

}

export default Tabbing;