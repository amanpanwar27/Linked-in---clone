import styled from "styled-components";
export default function Login(props) {
  return (
    <div className="login">
      <Container>
        <Navbar>
          <a href="/">
            <img src="/images/login-logo.svg"></img>
          </a>
          <div>
            <Join>Join now</Join>
            <Signin>Sign in</Signin>
          </div>
        </Navbar>
        <Section>
          <Hero>
            Welcome to your professional community
            <img src="/images/login-hero.svg" />
            <Form>
              <Google>
                <img src="/images/google.svg" />
                <span>Sign in with Google</span>
              </Google>
            </Form>
          </Hero>
        </Section>
      </Container>
    </div>
  );
}
const Container = styled.div`
  padding: 0px;
`;
const Navbar = styled.nav`
  max-width: 100%;
  margin: auto;
  padding: 15px 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
  }
  @media (max-width: 760px) {
    padding-left: 10px;
  }
`;
const Join = styled.a`
  text-decoration: none;
  padding: 10px 12px;
  font-size: 18px;
  margin-right: 12px;
  border-radius: 4px;
  &:hover {
    background-color: lightgray;
    text-decoration: none;
  }
`;
const Signin = styled.a`
  padding: 10px 12px;
  text-decoration: none;
  box-shadow: inset 0 0 0 1px #0966c2;
  border-radius: 24px;
  font-weight: bolder;
  margin-right: 20px;
  color: #0966c2;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
  }
`;
const Section = styled.section`
  padding: 12px 10px;
  align-content: start;
  max-width: 100%;
  img {
    width: 100%;
    margin-left: 60%;
    left: 55%;
    padding-top: 0;
    height: 720px;
    box-sizing: border-box;
    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: -20%;
    }
  }
`;
const Hero = styled.h1`
  font-size: 50px;
  color: #2977c9;
  max-width: 70%;
  line-height: 1.2;
  align-content: start;
  @media (max-width: 800px) {
    max-width: 100%;
    font-size: 20px;
  }
`;
const Form = styled.div`
  max-width: 250px;
  max-height: 200px;
  position: relative;
  bottom: 500px;
  left: 50px;
  @media (max-width: 768px) {
    bottom: 60px;
    left: 25%;
  }
`;
const Google = styled.button`
  width: 100%;
  display: flex;
  background-color: white;
  border: none;
  height: 50px;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 /0%);
  img {
    margin: 0px;
    height: 25px;
    width: 30px;
  }
  &:hover {
    background-color: lightgrey;
  }
`;
