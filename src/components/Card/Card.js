import "./Card.css"

export const Card = (props) => {
    return(
        <div className="card">
            <div className="card_title title-white">
                <p>10 Sep, Mon</p>
            </div>
            <div className="card_minmax title-white">
                <p>Min-Temp: 15<sup>o</sup>C</p>
            </div>
            <div className="card_temp title-white">
                <p>25<sup>o</sup>C</p>
            </div>
            <div className="card_minmax title-white">
                <p>Max-Temp: 35<sup>o</sup>C</p>
            </div>
        </div>
    )
}