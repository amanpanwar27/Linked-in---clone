import styled from "styled-components";
const Header = (props) => {
  return (
    <div>
      <Container>
        <Content>
          <Logo>
            <a href="/home">
              <img src="images/home-logo.svg" />
            </a>
          </Logo>
          <Search>
            <img src="/images/search-icon.svg" />
            <input type="text" placeholder="Search" />
          </Search>
          <Nav>
            <Navlistwrapper>
              <Navlist>
                <a href="/home">
                  <img src="images/nav-home.svg" />
                  <span className = 'active'>Home</span>
                </a>
              </Navlist>
              <Navlist>
                <a href="/my-networks">
                  <img src="images/nav-network.svg" />
                  <span>My networks</span>
                </a>
              </Navlist>
              <Navlist>
                <a href="/jobs">
                  <img src="images/nav-jobs.svg" />
                  <span>Jobs</span>
                </a>
              </Navlist>
              <Navlist>
                <a href="/messages">
                  <img src="images/nav-messaging.svg" />
                  <span>messaging</span>
                </a>
              </Navlist>
              <Navlist>
                <a href="/Notifications">
                  <img src="images/nav-notifications.svg" />
                  <span>Notifications</span>
                </a>
              </Navlist>
            </Navlistwrapper>
          </Nav>
        </Content>
      </Container>
    </div>
  );
};
const Container = styled.div`
  background-color: white;
  border-bottom: 1px rgba(0, 0, 0, 0.08);
  position: fixed;
  width: 100%;
  height:auto;
  z-index: 2;
`;
const Content = styled.div`
  padding: 8px 10px;
  height:auto;
  display: flex;
`;
const Logo = styled.span`
  img {
    height: 50px;
  }
`;
const Search = styled.div`
  position: relative;
  display: flex;
  left: 10px;
  align-items: center;
  input {
    width: 250px;
    height: 30px;
    padding-left: 50px;
    font-size: 18px;
    font-weight: 400;
    border: none;
    background-color: #eef3f8;
  }
  img {
    position: absolute;
    width: 25px;
    left: 3px;
  }
`;
const Nav = styled.nav`
  margin-left: auto;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    width: 100%;
    bottom: 0;
    background-color: white;
  }
`;
const Navlistwrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  flex-direction:row;
  list-style-type: none;
  width:100%;
  span{
    
}
`;
const Navlist = styled.li`
margin-right:35px;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 13px;
    img {
      height: 25px;
      width: 25px;
    }
    @media(max-width:768px)
    {
        margin-right:0;
        justify-content:space-between;
    }
    &:hover,
    &:active {
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;
export default Header;
