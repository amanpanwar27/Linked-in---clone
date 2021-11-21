import styled from "styled-components";
const Leftside = (props) => {
  return (
    <Container>
      <Artcard>
        <Userinfo>
          <Userbackground>
            <Photo />
          </Userbackground>
          <span>Welcome, there!</span>
          <a>Add a photo</a>
        </Userinfo>
        <Widget>
          <span>Connections</span>
          <div>
            <span>Grow your network</span>
            <img src="/images/widget-icon.svg" />
          </div>
        </Widget>
        <Items>
          <img src="/images/item-icon.svg" />
          <span>My items</span>
        </Items>
      </Artcard>
      <Communitycard>
        <Events>
          <span>Groups</span>
          <div>
            <span>Events</span>
            <img src="/images/plus-icon.svg" />
          </div>
          <span>Follow Hashtags</span>
        </Events>
        <More>
          <span>Discover more</span>
        </More>
      </Communitycard>
    </Container>
  );
};
const Container = styled.div`
  grid-area: "Leftside";
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  text-align: center;
  height: auto;
  margin-right: 10px;
  background-color: white;
  @media (max-width: 768px) {
    margin-bottom:20px;
  }
`;
const Userinfo = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  & > span {
    margin-top: 30px;
    font-size: 18px;
    font-weight: bolder;
  }
  & > a {
    color: #0966c2;
    font-size: 14px;
    margin-bottom: 5px;
  }
  border-bottom: rgba(0, 0, 0, 0.08) l;
`;
const Userbackground = styled.div`
  background: url("/images/card-bg.svg");
  margin: 0;
  width: 100%;
  height: 70px;
  background-position: center;
  border-radius: 6px;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Photo = styled.div`
  background: url("/images/photo.svg");
  height: 55px;
  width: 55px;
  background-position: center;
  box-sizing: border-box;
  background-size: 40px 40px;
  position: relative;
  background-repeat: no-repeat;
  top: 40px;
  background-color: white;
  left: 42%;
  border-radius: 50%;
  box-shadow: 0 0 0 2px rgba(-1, -1, -1, 0.08);
  @media (max-width: 768px) {
    left: 43%;
  }
`;
const Widget = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.09);
  & > span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.49);
    font-weight: bold;
    display: flex;
    flex-direction: row;
    padding-left: 5px;
  }
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span {
      padding-top: 2px;
      color: #0966c2;
      padding-left: 5px;
    }
    img {
      width: 20px;
      height: 20px;
      padding-bottom: 5px;
      padding-right: 5px;
    }
  }
`;
const Items = styled.span`
  display: flex;
  flex-direction: row;
  padding-left: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: bold;
  img {
    padding-bottom: 2px;
  }
`;
const Artcard = styled.div`
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
`;
const Communitycard = styled.div`
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.08);
  margin-top: 15px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
`;
const More = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.49);
`;
const Events = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  gap: 15px;
  padding-bottom: 5px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.09);
  span,
  div {
    display: flex;
    flex-direction: row;
    padding-left: 5px;
    justify-content: space-between;
    img {
      padding-right: 5px;
      height: 20px;
      width: 20px;
    }
  }
`;
export default Leftside;
