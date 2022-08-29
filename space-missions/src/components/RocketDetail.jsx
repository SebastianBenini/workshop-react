import { useParams } from "react-router-dom";
export function RocketDetail() {

    const {rocketId} = useParams()

    return <div> hola {rocketId} </div>
}