import React from 'react';
import styled from 'styled-components';

const ProjectTag = ({ tag }) => {
  return (
    <Tag>
      <p>{tag}</p>
    </Tag>
  );
};

export default ProjectTag;

const Tag = styled.div`
  display: inline-block;
  background-color: #d6ecff;
  padding: 3px 5px;
  font-size: 14px;
  margin: 5px 2px 0 0;
  border-radius: 3px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 4px 8px;
  }
`;
