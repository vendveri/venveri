import React from 'react';
import styled from 'styled-components';
import video from '../assets/videos/animation.mp4';

export const Video = () => (
  <RegVideoWrapper>
    <video controls>
      <source src={video} type="video/mp4" />
    </video>
  </RegVideoWrapper>
);

const RegVideoWrapper = styled.div`
  width: 90vw;
  max-width: 700px;
  height: 30vh;
  position: relative;
  margin-bottom: 2rem;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
