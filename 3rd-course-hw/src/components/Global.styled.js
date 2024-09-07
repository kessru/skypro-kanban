import styled, { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
}
`

export const WrapperStyle = styled.div`
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: ${(p) => p.theme.body};
`

export const LoaderStyle = styled.p`
    text-align: center;
    margin-top: 20px;
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
`

export const ContainerStyle = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
`

export const Orange = css`
    background-color: ${({ theme }) => theme.orangeBg};
    color: ${({ theme }) => theme.orangeText};
`
export const Green = css`
    background-color: ${({ theme }) => theme.greenBg};
    color: ${({ theme }) => theme.greenText};
`
export const Purple = css`
    background-color: ${({ theme }) => theme.purpleBg};
    color: ${({ theme }) => theme.purpleText};
`
export const Gray = css`
    background: ${({ theme }) => theme.grayBg};
    color: ${({ theme }) => theme.grayText};
`

export const themeColor = ($color) => css`
    ${$color === 'Web Design' && Orange}
    ${$color === 'Research' && Green}
${$color === 'Copywriting' && Purple}
${!$color && Gray}
`

export const Hover01 = css`
    &:hover {
        background-color: #33399b;
    }
`

export const Hover02 = css`
    &:hover {
        color: #33399b;

        &::after {
            border-left-color: #33399b;
            border-bottom-color: #33399b;
        }
    }
`

export const Hover03 = css`
    &:hover {
        background-color: #565eef;
        color: #ffffff;
        border-color: #565eef;
        a {
            color: #ffffff;
        }
    }
`

export const PopTarget = css`
    &:target {
        display: block;
    }
`

export const Subttl = css`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`

export const CategoriesP = styled.p`
    margin-bottom: 14px;

    ${Subttl}
`

export const CategoriesThemes = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
`

export const CategoriesTheme = styled.div`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 0.4;
    ${({ $color }) => themeColor($color)}

    p {
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        white-space: nowrap;
    }
`

export const ActiveCategory = css``
