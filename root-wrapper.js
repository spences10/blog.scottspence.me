import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  AnchorTag,
  BlockQuote,
  Code,
  StyledH2,
  StyledH3,
  StyledH4,
} from './src/components/elements';
import {
  InlineCode,
  Paragraph,
  StyledInlineCode,
} from './src/components/elements/GroupedElements';
import {
  BlogThemeContext,
  BlogThemeProvider,
} from './src/contexts/BlogThemeContext';

// import { Dump } from './src/utils/helpers';

// components is its own object outside of render so that the references to
// components are stable
const components = {
  blockquote: BlockQuote,
  h2: StyledH2,
  h3: StyledH3,
  h4: StyledH4,
  p: Paragraph,
  'p.a': AnchorTag,
  'p.inlineCode': StyledInlineCode,
  'li.inlineCode': StyledInlineCode,
  code: InlineCode,
  pre: ({ children: { props } }) => {
    // if there's a codeString and some props, we passed the test
    if (props.mdxType === 'code') {
      return (
        <div style={{ position: 'relative' }}>
          <Code
            codeString={props.children.trim()}
            language={
              props.className &&
              props.className.replace('language-', '')
            }
            {...props}
          />
        </div>
      );
    }
    // it's possible to have a pre without a code in it
    return <pre />;
  },
  wrapper: ({ children }) => <>{children}</>,
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
