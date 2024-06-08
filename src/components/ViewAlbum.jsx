import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAlbum = () => {
    const [data, changeData] = useState(
        [
            {"title": "happy","pages": 589, "price":879},
            {"title": "smile","pages": 789, "price":339},
            {"title": "enjoy","pages": 189, "price":987}
        ]
    )
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <div className="card" >
                                            <img src="https://5.imimg.com/data5/SELLER/Default/2022/7/NV/JR/CQ/144120352/customized-photo-scrapbook-500x500.png" class="card-img-top" alt="..."></img>
                                            <div className="card-body">

                                                <p className="card-text">title :{value.title}</p>
                                                <p className="card-text">Pages :{value.pages}</p>
                                                <p className="card-text">price :{value.price}</p>


                                            </div>
                                        </div>

                                    </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAlbum