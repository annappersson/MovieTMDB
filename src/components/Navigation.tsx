import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router";
import useGenres from "../hooks/useGenres";

const Navigation: React.FC = () => {
  const { data: genres, isLoading, isError } = useGenres();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          🎬 TMDB Movie Site
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/actors">
              Actors
            </Nav.Link>
            <Nav.Link as={Link} to="/movies">
              Movies
            </Nav.Link>

            <NavDropdown title="Genres" id="basic-nav-dropdown">
              {isLoading && (
                <NavDropdown.Item disabled>Loading...</NavDropdown.Item>
              )}

              {isError && (
                <NavDropdown.Item disabled>
                  Could not load genres
                </NavDropdown.Item>
              )}

              {genres?.genres.map((genre) => (
                <NavDropdown.Item
                  key={genre.id}
                  as={Link}
                  to={`/genre/${genre.id}`}
                >
                  {genre.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
