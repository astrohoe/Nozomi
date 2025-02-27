import { useParams } from "react-router";

export default function Detail() {
    let { id } = useParams();

    return (
        <>{id}</>
    )
};
