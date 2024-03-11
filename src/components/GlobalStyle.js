import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
      box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Roboto, sans-serif, Helvetica, Arial, system-ui;
    font-size: 12px;
	  line-height: 1.2;
    letter-spacing: 0.8px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.colors.black};
  }
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  a:visited {
    color: inherit;
  }

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  button{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: inherit;
    background-color: ${({ theme }) => theme.colors.normalBtn};
    border: none;
    border-radius: ${({ theme }) => theme.radii.sm};
    transition: background-color ${({ theme }) => theme.effect.cubic}
      fill  ${({ theme }) => theme.effect.cubic};
  }

  button:hover,
  button.active {
    background-color: ${({ theme }) => theme.colors.activeBtn};
  }
`;
