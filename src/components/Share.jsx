import React, { useEffect } from "react";
import styled from "styled-components";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ClearIcon from '@mui/icons-material/Clear';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const Wrapper = styled.div`
  width: 50%;
  margin: auto;
  background: ${({ theme }) => theme.bgLighter};
  padding: 26px;
`;

const Heading=styled.div`
  color: ${({theme})=> theme.textSoft};
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`;

const IconContainer=styled.div`
display:flex;
align-items:center;
`;

const Share = ({ shareModal, setshareModal }) => {
  const url = window.location.href;
  const IconStyles = { borderRadius: "50%", transform: "scale(0.65)" };

  const handleCopy=()=>{
    navigator.clipboard.writeText(url);
    alert("Url Copied Successfully")
  }

  useEffect(() => {
    if (shareModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [shareModal]);

  return (
    <Container>
      <Wrapper>
        <Heading>
          <p>Share via</p>
          <ClearIcon onClick={()=>{setshareModal(false)}}/>
        </Heading>
        <IconContainer >
          <ContentCopyIcon style={{color:"white",margin:"8px",transform:"scale(1.4)"}}  onClick={handleCopy} />
        <FacebookShareButton url={url} >
          <FacebookIcon style={IconStyles}/>
        </FacebookShareButton>

        <TwitterShareButton url={url}>
          <TwitterIcon style={IconStyles}/>
        </TwitterShareButton>

        <WhatsappShareButton url={url}>
          <WhatsappIcon style={IconStyles} />
        </WhatsappShareButton>

        <LinkedinShareButton url={url}>
          <LinkedinIcon style={IconStyles} />
        </LinkedinShareButton>

<EmailShareButton url={url}>
  <EmailIcon style={IconStyles}/>
</EmailShareButton>
</IconContainer>
      </Wrapper>
    </Container>
  );
};

export default Share;
