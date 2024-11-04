import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  /* fonts */
  @font-face {
  font-family: "Pretendard";
    src: url("/fonts/PretendardVariable.ttf") format("truetype");
  }
  @font-face {
    font-family: "Poppins-Medium";
    src: url("/fonts/Poppins-Medium.ttf") format("truetype");
    font-weight: 500;
  }
  @font-face {
    font-family: "Poppins-Regular";
    src: url("/fonts/Poppins-Regular.ttf") format("truetype");
    font-weight: 400;
  }
  @font-face {
    font-family: "Poppins-Light";
    src: url("/fonts/Poppins-Light.ttf") format("truetype");
    font-weight: 300;
  }

  /* reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    background: none;
    border: none;
    font: 400 16px/1 "Poppins-Regular";
    cursor: pointer;
  }

    /* variables */
    :root{
    --bg-light-color: #fff;
    --bg-dark-color: #000;
    --bg-light-gray: #ccc;
    --bg-dark-gray: #666;
    --bg-beige-color: #f1eee9;
    --bg-accent-color: #ff481f;
  }

  /* common */
  body{
    font: 400 16px/1 "Pretendard";
    letter-spacing: -1px;
    color: var(--bg-dark-color);
  }
`;
