import Picture from '../../../assets/images/picture.jpg'
import './Logo.scss'

const Logo = () => {


  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={Picture}
        alt="JavaScript,  Developer"
      />


    </div>
  )
}

export default Logo
