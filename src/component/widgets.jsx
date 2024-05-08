import React from 'react'

export default function Widgets({icon, name}) {
    return (
        <>
            <div className="col-lg-auto col-md-4 col-6">
                <div className="card mb-2 mb-lg-0">
                    <div className="card-body d-flex position-relative">
                        <div className="icon">

                            <img src={icon} />
                        </div>
                        <div className="content position-absolute">
                            <span className="text-capitalize">{name}</span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
