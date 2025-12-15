import { useFetch } from "@/hooks/useFetch";
import { getPersonDetail } from "@/services/api";
import { useParams } from "react-router-dom";

const PersonDetail = () => {
    const { id } = useParams();
  const { data: person, loading, error } = useFetch(() => getPersonDetail(id), [id]);
  console.log(person);
  return <></>;
};

export default PersonDetail;
