import styled from "styled-components";
import { Hover03, PopTarget } from "../Global.styled.js";

export const PopUserSetHeader = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid ${(p) => p.theme.popUserSetBorder};
  background: ${(p) => p.theme.popUserSetBg};
  box-shadow: 0px 10px 39px 0px ${(p) => p.theme.popUserSetShadow};
  padding: 34px;
  text-align: center;
  z-index: 2;

  ${PopTarget}
`;

export const PopUserSetName = styled.p`
  color: ${(p) => p.theme.popUserSetText};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserSetMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserSetTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: ${(p) => p.theme.popUserSetText};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }
`;

export const ThemeCheckbox = styled.input`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: ${(p) => p.theme.checkboxBg};
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${(p) => p.theme.checkboxToggle};
    transition: 0.5s;
  }

  &:checked::before {
    left: 12px;
  }
`;

export const PopUserSetButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565eef;
  border-radius: 4px;
  border: 1px solid ${(p) => p.theme.popUserSetBtn};

  a {
    color: ${(p) => p.theme.popUserSetBtn};
  }

  ${Hover03}
`;
