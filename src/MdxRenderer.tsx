import React, { useEffect, useState } from 'react';

import { evaluate } from '@mdx-js/mdx';
import { MDXProvider } from '@mdx-js/react';
import * as runtime from 'react/jsx-runtime'; // needed by evaluate()
import * as ReactDOMServer from 'react-dom/server';
import Spoiler from 'pages/home/mdx/Spoiler';
import Quote from 'pages/home/mdx/Quote';

export interface MdxRendererProps {
    content?: string | null;
}

function MdxRenderer ({
    content = "",
}: MdxRendererProps) {
    const [Content, setContent] = useState<React.ElementType>(() => "");

    useEffect(() => {
        if (content === null) return;

        (async () => {
            const { default: Node } = await evaluate(content, runtime);
            setContent(() => Node);
        })();
    }, [content]);

    if (!content || !Content) return <div>[no content]</div>;

    const components = {
        Spoiler,
        Quote,
        //Custom: () => <div style={{ color: 'tomato' }}>I'm a custom React component!</div>,
    };

    return (
        <MDXProvider>
            <Content components={components} />
        </MDXProvider>
    );
}

export default MdxRenderer;
