import Button from "./Button"
import jessicaAvatar from '../assets/images/avatar-jessica.jpeg';

const Card = ({ title, location, description }) => {
  return (
    <div className="bg-darkgrey w-96 rounded-md">
      <div className="flex justify-center mt-6 mb-6">
        <img src={jessicaAvatar} 
              alt="avatar" 
              className="rounded-full w-24 h-24
                        " />
      </div>
      <h2 className="text-center text-sm text-white text-3xl">{title}</h2>
      <p className="text-center text-sm text-primary mt-2">{location}</p>
      <p className="text-center text-sm text-white mt-6 mb-6">{description}</p>
      <div className="mb-6">
        <Button text="Github" />
        <Button text="Frontend Mentor" />
        <Button text="LinkedIn" />
        <Button text="Twitter" />
        <Button text="Instagram" />
      </div>
    </div>
  )
}

export default Card;