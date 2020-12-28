import React from 'react';
import styled from 'styled-components';
import video from '../assets/videos/animation.mp4';
import videoPoster from '../assets/images/youtube-poster.png';

export const Video = () => (
  <RegVideoWrapper>
    <video controls poster={videoPoster}>
      <source src={video} type="video/mp4" />
    </video>
  </RegVideoWrapper>
);

const RegVideoWrapper = styled.div`
  width: 90vw;
  max-width: 700px;
  height: 60vh;
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 20%;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
