import { useParams } from "react-router-dom";
import './AccountContent.css';

const AccountContent = () => {
    const { UserId } = useParams();

    return (
        <div className="Container">
            <div className="AccountContent">
                <div>
                    <img src="./AccountLogo.png" alt="" />
                </div>

                <div>

                </div>
            </div>
        </div>
    );
}

export default AccountContent