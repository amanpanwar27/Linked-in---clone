import styled from "styled-components";
const Main = (props) => {
  return (
    <Container>
      <Sharebox>
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
      <Article>
        <Articledetails>
          <Hero>
            <a>
              <img src="/images/user.svg" />
            </a>
          </Hero>
          <Herodata>
            <span>Title</span>
            <span>Date</span>
            <span>Info</span>
          </Herodata>
          <Menu>
            <img src="/images/menu.png" />
          </Menu>
        </Articledetails>
        <Description>Description</Description>
        <Postimage>
          <img src="/images/mypic.jpeg" />
        </Postimage>
        <Socialcounts>
          <button>
            <img src="/images/like.png" />
            <img src="/images/applause.png" />
            <img src="/images/heart.png" />
            <div>67</div>
          </button>

          <span>comments 23</span>
        </Socialcounts>
        <Socialactions>
          <button>
            <img src="/images/thumb-up.png" />
            <span>Like</span>
          </button>
          <button>
            <img src="/images/comments.png" />
            <span>Comments</span>
          </button>
          <button>
            <img src="/images/next.png" />
            <span>Share</span>
          </button>
          <button>
            <img src="/images/send.png" />
            <span>Send</span>
          </button>
        </Socialactions>
      </Article>
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
  border-radius: 6px;
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
    background-color: white;
    font-weight: bolder;
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
    color: rgba(0, 0, 0, 0.48);
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: bolder;
  }
`;
const Article = styled.div`
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.08);
  margin-top: 20px;
  background-color: white;
  padding: 10px 0;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
`;
const Articledetails = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
const Hero = styled.div`
  & > a > img {
    width: 40px;
    height: 40px;
  }
  margin-left: 10px;
`;
const Herodata = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 12px;
  }
  margin-left: -80%;
  @media (max-width: 768px) {
    margin-left: -70%;
  }
  span:first-child {
    font-weight: bolder;
    font-size: 13px;
  }
`;
const Menu = styled.div`
  img {
    height: 25px;
    width: 25px;

    &:hover {
      background-color: lightgray;
    }
    border-radius: 50%;
  }
  padding-right: 20px;
`;
const Description = styled.div`
  text-align: start;
  padding-left: 10px;
  padding-top: 5px;
`;
const Postimage = styled.div`
  width: 100%;
  background-color: black;
  & > img {
    width: 70%;
    height: 700px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
const Socialcounts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  & > button {
    display: flex;
    flex-direction: row;
    background-color: white;
    border: none;
  }
  & > button > img {
    width: 25px;
    height: 25px;
  }
  & > button > span::last-child {
    padding-top: 10px;
  }
`;
const Socialactions = styled.div`
  display: flex;
  flex-direction: row;
  & > button > img {
    width: 35px;
    height: 35px;
  }
  margin-left: 20px;
  margin-right: 20px;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  & > button {
    padding-top: 5px;
    border: none;
    background-color: white;
  }
  & > button > span {
    height: 100%;
    padding-left: 10px;
  }
`;
export default Main;
