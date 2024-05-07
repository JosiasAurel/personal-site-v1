import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
//import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styles from "../styles/codeblock.module.css";

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
  };

  static defaultProps = {
    language: null,
  };

  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter
        className={styles.code}
        language={language}
        style={style}
      >
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;
