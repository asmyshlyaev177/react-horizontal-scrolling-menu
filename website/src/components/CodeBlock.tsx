import * as React from 'react';
import snippetsHtml from 'virtual:snippets-html';

import { type SnippetKey, snippets } from '../lib/snippets';
import { Check, Copy } from './Icons';

export function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  React.useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <button
      type="button"
      className="copy-btn"
      data-copied={copied}
      aria-label={copied ? 'Copied' : label}
      onClick={() => {
        void navigator.clipboard.writeText(text).then(() => {
          setCopied(true);
          clearTimeout(timer.current);
          timer.current = setTimeout(() => setCopied(false), 1600);
        });
      }}
    >
      {copied ? <Check /> : <Copy />}
    </button>
  );
}

export function CodeBlock({
  snippet,
  title,
}: {
  snippet: SnippetKey;
  title: string;
}) {
  return (
    <div className="code-panel">
      <div className="code-panel-bar">
        <span>{title}</span>
        <CopyButton text={snippets[snippet].code} label={`Copy ${title}`} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: snippetsHtml[snippet] }} />
    </div>
  );
}
