
// == Import components
import Form from '../Form'
import Messages from '../Messages';

import "./styles.scss";

const Chat= ()  => {

  return (
    <div className='chat'>
<Messages />
<Form />
    </div>
  )
}

export default Chat;
