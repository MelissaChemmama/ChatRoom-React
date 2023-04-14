import './styles.scss';

const SettingsForm = () => {


  return (
    <form
      className='settingsform'
    >
      <input
        type="text"
        className="emailform-input"
        placeholder="Saisissez votre email"
      />

      <input
        type="text"
        className="passwordform-input"
        placeholder="Saisissez votre mot de passe"
      />

      <button type="submit" className="settingsform-submit">Envoyer</button>

    </form>


  )


}


export default SettingsForm;
