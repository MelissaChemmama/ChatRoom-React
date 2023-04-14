
// == Import components
import Form from '../Form'
import Messages from '../Messages';
import SettingsForm from '../Settings';
import { PlusCircle } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import { toggleSettingsDisplay } from "../../actions/chat";

import "./styles.scss";

const Chat= ()  => {
  const dispatch = useDispatch();
  const toggleDisplay = useSelector((state) => state.settingsDisplayed);

  return (
    <>

    <PlusCircle className='btn-plus' onClick={() => { dispatch(toggleSettingsDisplay()) }} size={35} />
    {toggleDisplay && <SettingsForm />} 
    {/* Si toggleDisplay est true alors on affiche le formulaire du setting */}
    <div className='chat'>
      <Messages />
      <Form />
    </div>
  </>
  )
}

export default Chat;
