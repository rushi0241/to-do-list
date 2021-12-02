import React, { useState } from 'react'
import MenuList from './MenuList'
const allCategory =  [...new Set(MenuList.map((currCategroy)=>currCategroy.category))]
const Menu = () => {
    const addAll = ["All", ...allCategory]
    const [menuListing, setMenuListing] = useState(MenuList)
    const [activeTab, setActiveTab] = useState(addAll[0])
    const [catMenu, setcatMenu] = useState(addAll)
    
    const filterMenu = (categoryMenu) => {
        setActiveTab(categoryMenu)
        if(categoryMenu === "All") {
            return setMenuListing(MenuList)            
        }
        const updateMenuList = MenuList.filter((elem)=> {
            return elem.category === categoryMenu;
        });

        setMenuListing(updateMenuList)
    }

    return (
        <>
            <div className="container">
                <div className="row my-4 justify-content-center"> 
                    <div className="col-md-6 d-flex justify-content-around">
                        {
                            catMenu.map((ele,i)=>{
                                return(
                                    <button className={activeTab === ele ? "btn btn-primary" : "btn btn-outline-primary"} onClick={()=>filterMenu(ele)} key={i}>{ele}</button>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="row my-4">
                    {
                        menuListing.map((elem)=>{
                            const { address, id, name, category } = elem;
                            return (
                                <div className="col-md-3 my-3" key={id}>
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <div className="content">
                                                <h5 className="card-title">{name}</h5>
                                                <p className="card-text">{address}</p>
                                                <p className="card-text">{category}</p>
                                            </div>
                                            <div className="bottom mt-3">
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Menu;