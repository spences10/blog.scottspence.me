import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BlockQuote } from './src/components/BlockQuote';
import { Code } from './src/components/Code';
import { StyledH2 } from './src/components/H2';
import {
  BlogThemeContext,
  BlogThemeProvider,
} from './src/contexts/BlogThemeContext';
// import { Dump } from './src/utils/helpers';

// components is its own object outside of render so that the references to
// components are stable
const components = {
  pre: ({ children: { props } }) => {
    // if there's a codeString and some props, we passed the test
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={
            props.className &&
            props.className.replace('language-', '')
          }
          {...props}
        />
      );
    }
    // it's possible to have a pre without a code in it
    return <pre />;
  },
  blockquote: BlockQuote,
  h2: StyledH2,
};

export const wrapRootElement = ({ element }) => (
  <BlogThemeProvider>
    <BlogThemeContext.Consumer>
      {({ theme }) => (
        <ThemeProvider theme={theme}>
          <MDXProvider components={components}>{element}</MDXProvider>
        </ThemeProvider>
      )}
    </BlogThemeContext.Consumer>
  </BlogThemeProvider>
);
