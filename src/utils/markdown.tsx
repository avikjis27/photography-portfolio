import React from 'react';

const inlineRegex = /(\*\*.*?\*\*|__.*?__|\*.*?\*|_.*?_|\[.*?\]\(.*?\))/g;

export function stripMarkdown(text: string): string {
  if (!text) return '';
  return text
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^[-*+]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    .replace(/^>\s?/gm, '');
}

function parseInlineMarkdown(text: string): React.ReactNode {
  const parts = text.split(inlineRegex);
  
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-bold text-zinc-950">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('__') && part.endsWith('__')) {
      return <strong key={index} className="font-bold text-zinc-950">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index} className="italic text-zinc-800">{part.slice(1, -1)}</em>;
    }
    if (part.startsWith('_') && part.endsWith('_')) {
      return <em key={index} className="italic text-zinc-800">{part.slice(1, -1)}</em>;
    }
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      return (
        <a key={index} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-zinc-900 underline hover:text-zinc-650 transition-colors">
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
}

export function renderMarkdown(text: string): React.ReactNode[] {
  const trimmed = text.trim();
  if (!trimmed) return [];
  
  // Split into blocks by double newlines
  const blocks = trimmed.split(/\n\n+/);
  
  return blocks.map((block, blockIdx) => {
    block = block.trim();
    if (!block) return null;
    
    // Headers
    const headerMatch = block.match(/^(#{1,6})\s+(.*)$/);
    if (headerMatch) {
      const level = headerMatch[1].length;
      const content = headerMatch[2];
      
      let headerClass = "font-sans font-bold text-zinc-900 mt-6 mb-2 block ";
      if (level === 1) headerClass += "text-2xl sm:text-3xl";
      else if (level === 2) headerClass += "text-xl sm:text-2xl";
      else if (level === 3) headerClass += "text-lg sm:text-xl";
      else headerClass += "text-base";
      
      const Tag = `h${level}` as any;
      return (
        <Tag key={blockIdx} className={headerClass}>
          {parseInlineMarkdown(content)}
        </Tag>
      );
    }
    
    // Unordered List
    if (block.startsWith('- ') || block.startsWith('* ')) {
      const items = block.split(/\n[-*]\s+/).map(item => item.replace(/^[-*]\s+/, ''));
      return (
        <ul key={blockIdx} className="list-disc pl-6 my-4 space-y-1 font-serif text-zinc-850">
          {items.map((item, itemIdx) => (
            <li key={itemIdx}>{parseInlineMarkdown(item)}</li>
          ))}
        </ul>
      );
    }
    
    // Ordered List
    if (/^\d+\.\s+/.test(block)) {
      const items = block.split(/\n\d+\.\s+/).map(item => item.replace(/^\d+\.\s+/, ''));
      return (
        <ol key={blockIdx} className="list-decimal pl-6 my-4 space-y-1 font-serif text-zinc-855">
          {items.map((item, itemIdx) => (
            <li key={itemIdx}>{parseInlineMarkdown(item)}</li>
          ))}
        </ol>
      );
    }
    
    // Blockquote
    if (block.startsWith('>')) {
      const content = block.split('\n').map(line => line.replace(/^>\s?/, '')).join('\n');
      return (
        <blockquote key={blockIdx} className="border-l-4 border-zinc-300 pl-4 py-1 italic my-4 text-zinc-650">
          {renderMarkdown(content)}
        </blockquote>
      );
    }
    
    // Drop cap logic for the first paragraph (blockIdx === 0)
    if (blockIdx === 0) {
      const firstChar = block.charAt(0);
      if (/^[a-zA-Z]/.test(firstChar)) {
        const restOfBlock = block.slice(1);
        return (
          <p key={blockIdx} className="mb-4">
            <span className="float-left mr-3 text-5xl sm:text-6xl font-bold font-serif text-zinc-900 leading-[0.8] pt-1">
              {firstChar}
            </span>
            {parseInlineMarkdown(restOfBlock)}
          </p>
        );
      }
    }
    
    // Standard Paragraph
    return (
      <p key={blockIdx} className="mb-4">
        {parseInlineMarkdown(block)}
      </p>
    );
  });
}
