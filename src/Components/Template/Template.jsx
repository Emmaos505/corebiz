import React from 'react';
import styled from './styles';

const Template = ({ children }) => {
    return (
        <styled.Wrapper>
            {children}
        </styled.Wrapper>
    )
}

export default Template;