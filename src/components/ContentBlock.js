
import React from 'react';
import styled from 'styled-components';

const ContentBlockWrapper = styled.section`
background: ${({background}) => {
    return background ? `url("${background}")` : 'var(--clr-concrete-white)';
  }};
  background-size: cover;
  color: ${({color}) => {
    return color || 'inherit';
  }};
  box-shadow: var(--dark-shadow);
  & > div {
    display: flex;
    min-height: ${({baseHeight}) => {
      return baseHeight ? `${baseHeight}vh` : '50vh';
    }};
    padding: 2rem;
    margin: 0 auto;
    max-width: var(--max-width);
    justify-content: center;
    flex-flow: column;
  }
  &:first-of-type {
    & > div {
      min-height: ${({baseHeight}) => {
        return `calc(${baseHeight || '50'}vh - 5rem)`;
      }};
    }
  }
  h1, h2, p {
    text-shadow: 1px 1px 4px #000;
  }
`;

export default function ContentBlock(props) {
  if (props.type === 'hero') {
    return (
      <ContentBlockWrapper baseHeight={100} background={props.background} color={props.color}>
        {props.children}
      </ContentBlockWrapper>
    );
  } else if (props.type === 'question') {
    
  } else if (props.type === 'twoPics') {
    
  } else if (props.type === 'info') {
    
  } else if (props.type === 'noImage') {
    
  }
  return (
    <ContentBlockWrapper>
      <h1>No proper wrapper found for this block type</h1>
    </ContentBlockWrapper>
  );
}
