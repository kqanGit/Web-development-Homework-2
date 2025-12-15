import { useNavigate } from "react-router-dom";

const PersonCard = ({ actor }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/person/${actor.id}`);
  };
  return (
    <div className="flex flex-col items-center mr-6 mb-4">
      <img
        src={actor.image}
        alt={actor.name}
        className="w-32 h-48 object-cover rounded-lg mb-2"
        onClick={handleOnClick}
      />
      <span className="font-bold text-black dark:text-white text-center">
        {actor.name}
      </span>
    </div>
  );
};

export default PersonCard;
