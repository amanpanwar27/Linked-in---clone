import styled from "styled-components";
import Leftside from "./Leftside";
import Rightside from "./Rightside";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Main from "./Main";
const Home = ({ users }) => {
  return (
    <div className="Home">
      <Container>
        <Layout>
          <Leftside />
          <Main />
          <Rightside />
        </Layout>
      </Container>
    </div>
  );
};

const Container = styled.div`
  padding-top: 80px;
  width: 100%;
`;
const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: 2.5fr 5fr 2fr;
  grid-column-gap: 30px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
const Mapstatetoprops = (state) => {
  return {
    users: state.userState.users,
  };
};
const newcomponent = connect(Mapstatetoprops)(Home);
export default newcomponent;
