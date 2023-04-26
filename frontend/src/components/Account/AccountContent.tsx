import { useParams } from "react-router-dom";

const AccountContent = () => {
    const { UserId } = useParams();
    return (
        <div className="Container">
            <div>Account {UserId} </div>
        </div>
    );
}

export default AccountContent