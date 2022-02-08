import { createUseStyles } from "react-jss";

const colors = {
  primary: "#071A2F",
  secondary: "#001E3C",
  btnPrimary: "#007fff",
  btnHover: "#0059B2",
};

//#region pictureStyles
export const pictureStyles = createUseStyles({
  leftContainer: `
    text-align: center;
    font-family: 'Roboto', sans-serif;
  `,
  imgContainer: `
    width: 100%;
    max-width: 500px;
  `,
  img: `
    width: 100%;
    height: 100%;
  `,
  link: `
    color: white;
  `
});
//#endregion pictureStyles

//#region mainStyle
export const mainStyle = createUseStyles({
  main: `
    font-family: 'Roboto', sans-serif;
    padding: 1rem;
    margin: 0;
    background-color: ${colors.secondary};
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    min-height: 100vh;
  `,
});
//#endregion mainStyle

//#region FormStyles
export const formStyle = createUseStyles({
  form: `
    position: relative;
    padding: 1rem;
    width: 100%;
    max-width: 500px;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  `,
  formInput: `
    width: 90%;
    padding: .5rem;
    border-radius: 0.25rem;
    outline: none;
    border: none;
    margin: 0.5rem 0;
    text-align: center;
    `,
  formButton: `
    display: block;
    margin: 0.5rem 0;
    width: 90%;
    padding: 0.5rem;
    border: 1px solid #fff;
    border-radius: 0.25rem;
    background-color: ${colors.btnPrimary};
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  `,
  buttonDisable: `
    color: black;
    font-weight: bold;
    background-color: #ccc;
    cursor: not-allowed;
  `,
  select: `
    width: 90%;
    padding: .5rem;
    border-radius: 0.25rem;
    outline: none;
    border: none;
    margin: 0.5rem 0;
    text-align: center;
  `,
  option: `
    text-align: center;
    width: 100%;
  `,
  formResult: `
  font-family: 'Roboto', sans-serif;
  border-radius: 1rem;
  padding: 1rem;
  margin: 0;
  background-color: ${colors.secondary};
  color: #fff;
  width: 90%;
  max-width: 450px;
  overflow-wrap: break-word;
`
});
//#endregion FormStyles