import { Alert } from "react-bootstrap";
import usePopularActors from "../hooks/usePopularActor";
import PopularActorList from "../components/PopularActorList";
import Pagination from "../components/Pagination";
import { useSearchParams } from "react-router";

const PopularActorPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || "1");
  const { data: Actor, error, isError } = usePopularActors(page);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
  };

  console.log("PopularActorPage render, page:", page);
  return (
    <>
      <title>Popular Actors</title>
      {isError && <Alert>{error.message}</Alert>}

      {Actor && Actor?.results.length > 0 && (
        <>
          <div className="PopularActorListContainer">
            {Actor?.results.map((actors) => (
              <PopularActorList key={actors.id} actor={actors} />
            ))}
          </div>
          <div id="buttons">
            <Pagination
              page={page}
              totalPages={Actor.total_pages}
              hasPreviousPage={page > 1}
              hasNextPage={page < Actor.total_pages}
              onPreviousPage={() => handlePageChange(page - 1)}
              onNextPage={() => handlePageChange(page + 1)}
            />
          </div>
        </>
      )}
    </>
  );
};

export default PopularActorPage;
