import React from 'react';

interface RichTextEditorProps {
  initialContent: string;
  sectionId: string;
  className?: string;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  initialContent,
  sectionId,
  className = ''
}) => {
  return (
    <div className={className}>
      {initialContent}
    </div>
  );
}; 