import styled from "styled-components";
const Main = (props) => {
  return (
    <Container>
      <Sharebox>
        <div>Share</div>
        <div className="postbutton">
          <img src="/images/user.svg" />
          <button>Start a post</button>
        </div>
        <div className="postmenu">
          <button>
            <img src="/images/picture.png" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/video.png" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/calendar.png" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/article.png" />
            <span>Write article</span>
          </button>
        </div>
      </Sharebox>
    </Container>
  );
};
const Container = styled.div`
  grid-area: "main";
  text-align: center;
`;
const Sharebox = styled.div`
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.08);
  background-color: white;
  & > div > img {
    width: 50px;
    border-radius: 50%;
  }
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  & > .postbutton > button {
    width: 60%;
    height: 40px;
    border-radius: 25px;
    background-color:white;
    font-weight:bolder;
    
  }
  & > div > img {
    margin-right: 10px;
  }
  & > div > button > img {
    width: 25px;
    height: 25px;
  }
  & > .postmenu {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    button {
      border: none;
      background-color: white;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      span {
        padding-top: 5px;
        padding-left: 5px;
      }
      margin-right: 20px;
    }
  }
  & > div:first-child {
    color:rgba(0,0,0,0.48);
    padding-top:10px;
    padding-bottom:10px;
    font-weight:bolder;
  }
`;
export default Main;
