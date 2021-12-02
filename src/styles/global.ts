import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background:#f0f2f5;
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape: #ffffff;
  }

  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  //font-size:16px(ideal para desktop)
  //rem = 16px ou tamanhp do font-size da nossa pagina
  
  html {
    @media (max-width:1000px){
      font-size:93.75%;
    }

    @media (max-width:720px){
      font-size: 87.5%;
    }
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', Arial, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Poppins', Arial, sans-serif;
    font-weight: 600;
  }

  button {
    cursor: pointer;
    font-family: 'Poppins', Arial, sans-serif;
  }

  [disabled] {
    opacity:0.6;
    cursor: not-allowed;
  }

.react-modal-overlay{
  background: rgba(0,0,0,0.5);

  position:fixed;
  top:0;
  bottom:0;
  right:0;
  left:0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.react-modal-content{
  width:100%;
  max-width:576px;
  background: var(--background);;
  padding:3rem;
  
  position: relative;
  border-radius: 0.24rem;

}
`;
