import { useParams } from "react-router";
import { Alert } from "react-bootstrap";
import useActor from "../hooks/useActor";
import ActorDetailCard from "../components/ActorDetailCard";

const ActorDetailPage = () => {
  const { actorId } = useParams<{ actorId: string }>();
  const { data, error, isError, isLoading } = useActor(Number(actorId));

  if (isError) return <Alert variant="danger">{error.message}</Alert>;

  if (!data && !isLoading)
    return <Alert variant="warning">No data found 😢</Alert>;

  return (
    <>
      <title>{data?.name}</title>
      {data && (
        <div className="ActorDetail-Container">
          <ActorDetailCard key={data.id} actor={data} />
        </div>
      )}
    </>
  );
};

export default ActorDetailPage;
