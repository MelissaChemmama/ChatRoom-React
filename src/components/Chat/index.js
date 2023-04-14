
// == Import components
import Form from '../Form'
import Messages from '../Messages';
import SettingsForm from '../Settings';
import { PlusCircle, XCircle } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import { toggleSettingsDisplay } from "../../actions/chat";

import "./styles.scss";

const Chat= ()  => {
  const dispatch = useDispatch();
  const toggleDisplay = useSelector((state) => state.settingsDisplayed);

  return (
    <>
{/* Si toggle display est False, alors j'affiche le plus, sinon j'affiche la croix et le form. */}

{
(toggleDisplay != true)
          ?  
          // Alors
          <PlusCircle className='btn-plus' onClick={() => { dispatch(toggleSettingsDisplay()) }} size={35} />
          :
          // sinon
          <>
            <XCircle className='btn-plus' onClick={() => { dispatch(toggleSettingsDisplay()) }} size={35} />
            <SettingsForm />
          </>
      }
    <div className='chat'>
      <Messages />
      <Form />
    </div>
  </>
  )
}

export default Chat;
