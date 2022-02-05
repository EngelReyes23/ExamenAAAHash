import { createUseStyles } from "react-jss";

const colors = {
  primary: "#071A2F",
  secondary: "#001E3C",
  btnPrimary: "#007fff",
  btnHover: "#0059B2",
};

export const headerStyle = createUseStyles({
  header: `
    margin: 0;
    position: sticky;
    top: 0;
    background-color: ${colors.primary};
    color: #fff;
    text-align: center;
    box-sizing: border-box;
    box-shadow: rgb(19 47 76) 0px -1px 1px inset
  `,
  headerTitle: `
    padding: 1rem;
    margin: 0;
  `,
});

export const mainStyle = createUseStyles({
  main: `
    padding: 1rem;
    margin: 0;
    background-color: ${colors.secondary};
    color: #fff;
    height: calc(100vh - 36.797px);
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
});

export const formStyle = createUseStyles({
  form: `
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  formInput: `
    width: 100%;
    padding: .5rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    outline: none;
    border: none;
  `,
  formButton: `
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem;
    border: 1px solid #fff;
    border-radius: 0.25rem;
    background-color: ${colors.btnPrimary};
    color: #fff;
    cursor: pointer;
  `,
  buttonDisable: `
    color: black;
    font-weight: bold;
    background-color: #ccc;
    cursor: not-allowed;
  `,
  formError: `
    border-bottom: 1px solid red;
  `,
  formSuccess: `
    outline: none;
    border: 1px solid green;
    border-radius: 0.25rem;
  `,
});
