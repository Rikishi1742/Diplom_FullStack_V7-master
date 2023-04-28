import { useParams } from "react-router-dom";
import './AccountContent.css';

import { UserContext} from "../../context/UserContext";
import { useContext } from "react";

const AccountContent = () => {
    const { UserId } = useParams();
    const { userPayload } = useContext(UserContext)

    return (
        <div className="Container" style={{alignItems: "start"}}>
            <div className="AccountContent">
                <div>
                    <img src="../ImgPerson/1.svg" alt="" />
                    <h2>{userPayload.username}</h2>
                    <h3>ID: {UserId}</h3>
                </div>

                <div>

                </div>
            </div>
        </div>
    );
}

export default AccountContent