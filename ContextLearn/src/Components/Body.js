import { useContext } from "react";
import Context from '../utils/Context'

const Body = () => {
    const {user}  = useContext(Context)
    return (
        <div className="flex justify-center items-center">
            {user.name} - {user.email}
        </div>
    );
};

export default Body;