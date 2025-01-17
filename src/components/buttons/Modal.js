/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import styled from 'styled-components';

const Modal = ({ children, status, changeStatus }) => (
  <>
    {status && (
      <Overlay>
        <ModalContainer>
          <Modalheader>
            <h3>info</h3>
          </Modalheader>
          <CloseHelp onClick={() => changeStatus(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </CloseHelp>
          {children}
        </ModalContainer>
      </Overlay>
    )}
  </>
);

export default Modal;

const Overlay = styled.div`
  width: 60vw;
  height: 70vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  display: flex;
  align-items: center;
  justify_content: center;
`;

const ModalContainer = styled.div`
  width: 400px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

const Modalheader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-botton: 20px;
    padding; 20px;
    border-botton: 1px solid #E8E8E8;

    h3{
        font_weight: 500;
        font-size: 16px;
        color: #1766dc;
    }
`;

const CloseHelp = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #1766dc;

  &:hover {
    background: #f2f2f2;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font_size: 32px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;
