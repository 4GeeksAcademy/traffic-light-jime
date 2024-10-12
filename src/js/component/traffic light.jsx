import React from "react";

const TrafficLight = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="bg-dark" style={{ width: "30px", height: "150px" }}></div>
            <div className="bg-dark rounded-5 d-flex justify-content-evenly flex-column align-items-center"
                style={{ width: "150px", height: "300px" }}></div>

        </div>

    )

}






export default TrafficLight;

