import styled from "styled-components";
const Rightside = (props) => {
  return (
    <Container>
      <Title>
        <span>LinkedIn News</span>
        <img src="/images/feed-icon.svg" />
      </Title>
      <Newswrapper>
        <News>
          <div>
            <span>Vaccine status on resume?</span>
            <small>2d , 1300 readers</small>
          </div>
        </News>
        <News>
          <div>
            <span>Paytm leaves a big dent in wallet</span>
            <small>1d ago , 13735 readers</small>
          </div>
        </News>
        <News>
          <div>
            <span>9 tips for entry level job</span>
            <small>5 days ago </small>
          </div>
        </News>
        <News>
          <div>
            <span>what to highlight on resume?</span>
            <small>5 days ago </small>
          </div>
        </News>
        <News>
          <div>
            <span>career advice for your younger self</span>
            <small>5 days ago </small>
          </div>
        </News>
      </Newswrapper>
      <More>
      <span>Show More</span>
      <img src = '/images/right-icon.svg'/>
      </More>
    </Container>
  );
};
const Container = styled.div`
  grid-area: "rightside";
  background-color:white;
  text-align: center;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top:20px;
    margin-bottom:20px;
  }
`;
const Newswrapper = styled.ul`
display:flex;
flex-direction:column;
justify-content:space-between;
`;
const News = styled.li`
div{
  display:flex;
  justify-content:space-between;
  flex-direction:column;
  padding-top:10px;
  padding-right:30px;
  small{
    color:rgba(0,0,0,0.7);
  }
  span{
    font-weight:bold;
    font-size:15px;
  }

}
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  & > span {
    font-weight: bolder;
    color: rgba(0, 0, 0, 0.51);
  }
`;
const More = styled.div`
padding-top:50px;
span{
  font-weight:14px;
  color:#0966c2;
}
`;
export default Rightside;
