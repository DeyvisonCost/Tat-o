import { FC, useState } from "react";
import { Modal } from "../Components/Modal";
import { PrincipalText } from "../Components/Text";
import { Button, Container, Content } from "./style";

export const Home: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Container>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          setRepos={setRepos}
          setIsLoading={setIsLoading}
        />

        <Content>
          <PrincipalText />
          <Button onClick={() => setShowModal(true)}>Clique aqui !</Button>
        </Content>
        {isLoading ? (
          <div
            style={{ height: "500px", width: "500px", backgroundColor: "red" }}
          ></div>
        ) : (
          <ul>
            {repos.map((repo, index) => (
              <li key={index}>{repo.name}</li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
};
