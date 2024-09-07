import styled from 'styled-components'
import { Hover01 } from '../../components/Global.styled'

export const ContainerNotFound = styled.div`
    display: block;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
`

export const ErrorTtl = styled.h1`
    padding: 0 10px;
    margin: 152px 0 100px 0;
    color: #94a6be;
    text-align: center;
    font-size: 250px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
`

export const ErrorMsg = styled.h2`
    padding: 0 10px;
    margin: 100px;
    color: #94a6be;
    text-align: center;
    font-size: 70px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
`

export const BtnBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const RedirectBtn = styled.button`
    width: 150px;
    height: 50px;
    background-color: #565eef;
    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #ffffff;

    ${Hover01}
`
