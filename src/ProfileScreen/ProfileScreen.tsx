import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import { selectUser } from "../state/userSlice";
import { auth } from "../fireBase";

function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className="profileScreen">
            <div className="profileScreen-body">
                <h1>Edit Profile</h1>
                <div className="profileScreen-info">
                    <img
                        className="profileScreen-img"
                        src="../src/assets/images/Netflix-avatar.png"
                        alt=""
                    />
                    <div className="profileScreen-details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen-plans">
                            <h3>Plans</h3>
                            <div className="plan">sdssd</div>
                            <div className="plan">sdssd</div>
                            <div className="plan">sdssd</div>
                            <div className="plan">sdssd</div>
                            <div className="plan">sdssd</div>
                            <div className="plan">sdssd</div>

                            <button
                                className="profileScreen-signOutbtn"
                                onClick={() => {
                                    auth.signOut();
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen;
