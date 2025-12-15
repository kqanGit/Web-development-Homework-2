import { useNavigate } from "react-router-dom";

const PersonCard = ({ actor }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/person/${actor.id}`);
  };
  return (
    <div className="flex flex-col items-center mr-6 mb-4">
      {actor.image ? (
        <img
          src={actor.image}
          alt={actor.name}
          className="w-32 h-48 object-cover rounded-lg mb-2 cursor-pointer"
          onClick={handleOnClick}
        />
      ) : (
        <div
          className="w-32 h-48 flex items-center justify-center bg-gray-300 rounded-lg mb-2 cursor-pointer"
          onClick={handleOnClick}
        >
          <span className="text-gray-600">No Image</span>
        </div>
      )}
      <span className="font-bold text-black dark:text-white text-center">
        {actor.name}
      </span>
    </div>
  );
};

export default PersonCard;
