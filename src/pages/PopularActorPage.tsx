import { Alert } from "react-bootstrap";
import { useState } from "react";
import usePopularActors from "../hooks/usePopularActor";
import PopularActorList from "../components/PopularActorList";

const PopularActorPage = () => {
  console.log("🔍 PopularActorPage is rendered");
  const [page, setPage] = useState(1);
  const { data: Actor, error, isError } = usePopularActors(page);
  console.log("Popular actors data:", Actor);
  return (
    <>
      {isError && <Alert>{error.message}</Alert>}

      {Actor && Actor?.results.length > 0 && (
        <>
          <div className="PopularActorListContainer">
            {Actor?.results.map((actors) => (
              <PopularActorList key={actors.id} actor={actors} />
            ))}

            {/* <div id="buttons">
              <Pagination
                page={films.page}
                totalPages={films.total_pages}
                hasPreviousPage={page > 1}
                hasNextPage={page < films.total_pages}
                onPreviousPage={() => setPage((p) => p - 1)}
                onNextPage={() => setPage((p) => p + 1)}
              />
            </div> */}
          </div>
        </>
      )}
    </>
  );
};

export default PopularActorPage;
