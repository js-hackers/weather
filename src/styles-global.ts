import {css, Global} from '@emotion/core';
import {createElement as e} from 'react';
import {E} from './types';

const styles = css`
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}

  /*! Modifications to normalize */

  *,
  *::before,
  *::after {
    border: 0;
    box-sizing: inherit;
    font-weight: normal;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    font-family: sans-serif;
  }

  /*! End modifications to normalize */

  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700|Roboto+Mono|Roboto:400,700&display=swap&subset=latin-ext');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  :root {
    --color-bg--dark: hsl(210, 10%, 15%);
    --color-fg--dark: hsl(0, 0%, 85%);
    --color-bg--light: hsl(0, 0%, 100%);
    --color-fg--light: hsl(0, 0%, 0%);
    --color-accent: hsl(210, 100%, 50%);
    --font-mono: 'Roboto Mono', monospace;
    /* --font-sans: 'Roboto', sans-serif; */
    --font-sans: 'Nunito Sans', sans-serif;
  }

  body {
    --color-bg: var(--color-bg--dark);
    --color-fg: var(--color-fg--dark);
    background-color: var(--color-bg);
    color: var(--color-fg);
    font-family: var(--font-sans);
  }

  code {
    font-family: var(--font-mono);
  }
`;

const GlobalStyles = (): E => e(Global, {styles});
export default GlobalStyles;
