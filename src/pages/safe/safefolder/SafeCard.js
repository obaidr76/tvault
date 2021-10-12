import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import shield from '../../../assets/images/icon_safes.svg';
import { deleteSafe, EditSafe } from '../../../redux/action/slice';
import EditSafeCard from '../../../modal/EditSafeCard';
import icon_edit_active  from '../../../assets/images/icon_edit_active.svg';
import icon_delete_active  from '../../../assets/images/icon_delete_inactive.svg';


const SafeCard = ({id, Owner,  Date, Typeof, SafeName }) => {
    const dispatch = useDispatch();

    const [EditSafePopup, setEditSafePopup] = useState(false); 
    const DeleteEvent = () => {
        dispatch(deleteSafe({id: id}));
    };

    return(
        <div key={id} className="innerCard">
            <div className="innerCard-dataL-parent">
            <img src={shield} alt="logo"/>
                <div className="innerCard-dataL">
                    <div className="innerCard-dataL-child">
                    <h2> {Owner} / {SafeName}</h2>
                    </div>
                    <h5>Last Updated: {Date}</h5>
                </div>
            </div>
            <div className="innerCard-dataR">
                <img src={icon_edit_active} alt="logo" onClick={() => setEditSafePopup(true)}/>
                <img src={icon_delete_active} alt="logo" onClick={DeleteEvent}/>
            </div>
                
            {EditSafePopup &&(
            <EditSafeCard id={id} setTrigger={setEditSafePopup}>
                {/* <h2>yes worked</h2> */}
            </EditSafeCard>
            )}
        </div>

    );
}

export default SafeCard;