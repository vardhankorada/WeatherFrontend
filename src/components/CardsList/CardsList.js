import { Card } from "../Card/Card"
import "./CardsList.css"

export const CardsList = () => {
    return (
        <div className="cards-list">
            {
                [1, 1, 1, 1].map(() => {
                    return <Card />
                })
            }
        </div>
    )
}