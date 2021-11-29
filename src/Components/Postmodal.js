import styled from "styled-components";
import { useState } from "react";
function Postmodal(props) {
  const [textarea, settextarea] = useState("");
  const [photourl, setphotourl] = useState("");
  return (
    <div className="postmodal">
      {props.clickstatus === "open" && (
        <Container>
          <Content>
            <h1>Create a Post</h1>
            <span>
              <button onClick={() => props.setclickstatus("close")}>
                <img src="/images/x.png" />
              </button>
            </span>
          </Content>
          <Sharingcontent>
            <Userinfo>
              <img src="/images/user.svg" />
              <span>Name</span>
            </Userinfo>
            <Editor>
              <textarea
                placeholder="What do you want to talk about?"
                value={textarea}
                onChange={(e) => {
                  settextarea(e.target.value);
                }}
              />
              <Uploadimage>
                <input type="file" id="file" style={{display:"none"}}></input>
                <label for="file">Click to Uploadimage</label>
              </Uploadimage>
            </Editor>
          </Sharingcontent>
          <ShareCreation>
            <Assetbutton>
              <img src="/images/gallery.png" />
            </Assetbutton>
            <Assetbutton>
              <img src="/images/video2.png" />
            </Assetbutton>
            <Assetbutton>
              <img src="/images/comment.png" />
            </Assetbutton>
            <Postbutton>Post</Postbutton>
          </ShareCreation>
        </Container>
      )}
    </div>
  );
}
const Container = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;
const Content = styled.div`
  background-color: white;
  position: relative;
  height: 100px;
  top: 100px;
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h1 {
    font-size: 25px;
    padding: 10px;
    padding-left: 50px;
    color: rgba(0, 0, 0, 0.58);
  }
  img {
    width: 15px;
    height: 15px;
    padding: 10px;
    outline: none;
  }
  border-bottom: 2px solid rgba(0, 0, 0, 0.18);
`;
const Sharingcontent = styled.div`
  background-color: white;
  position: relative;
  height: auto;
  top: 100px;
  margin: 0 20px;
`;
const Userinfo = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 25%;
  }
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  & > span {
    padding-top: 20px;
    padding-left: 20px;
    font-size: 18px;
    font-weight: bold;
  }
`;
const Editor = styled.div`
  /*  */
  padding-left: 0;
  height: auto;
  textarea {
    width: 50%;
    height: 100px;
    border: 2px solid rgba(0, 0, 0, 0.38);
    outline: none;
    padding: 5px;
    margin-top: 20px;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
`;
const ShareCreation = styled.div`
  background-color: white;
  position: relative;
  height: 100px;
  top: 100px;
  margin: 0 20px;
`;
const Assetbutton = styled.button`
  img {
    height: 25px;
    width: 25px;
  }
  margin-top: 10px;
`;
const Postbutton = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 30%;
  background-color: #0a66c2;
  color: white;
  outline: none;
  border: none;
  border-radius: 20px;
`;
const Uploadimage = styled.div``;
export default Postmodal;
