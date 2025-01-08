import React, { useState, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import { 
  Lock, Unlock, Bold, Italic, List, Heading2, 
  History, RotateCcw, AlignLeft, AlignCenter, 
  AlignRight, Quote, Code
} from 'lucide-react';

interface Version {
  content: string;
  timestamp: string;
}

interface RichTextEditorProps {
  initialContent: string;
  className?: string;
  sectionId: string;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  initialContent,
  className = "",
  sectionId
}) => {
  const [isLocked, setIsLocked] = useState(true);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [versions, setVersions] = useState<Version[]>([]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right'],
      }),
    ],
    content: initialContent,
    editable: !isLocked,
    onUpdate: ({ editor }) => {
      if (!isLocked) {
        saveVersion(editor.getHTML());
      }
    }
  });

  const saveVersion = (content: string) => {
    const newVersion = {
      content,
      timestamp: new Date().toISOString()
    };

    // Save to localStorage
    const historyKey = `content-${sectionId}-history`;
    const history = JSON.parse(localStorage.getItem(historyKey) || '[]');
    history.unshift(newVersion);
    localStorage.setItem(historyKey, JSON.stringify(history.slice(0, 10)));
    
    setVersions(history);
    setLastSaved(new Date());
  };

  // Load versions on mount
  useEffect(() => {
    const historyKey = `content-${sectionId}-history`;
    const history = JSON.parse(localStorage.getItem(historyKey) || '[]');
    setVersions(history);
  }, [sectionId]);

  const restoreVersion = (version: Version) => {
    if (editor) {
      editor.commands.setContent(version.content);
      setShowHistory(false);
    }
  };

  const undoLastChange = () => {
    if (versions.length > 1) {
      restoreVersion(versions[1]); // Restore previous version
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <div className={`relative group ${!isLocked ? 'ring-2 ring-blue-100 rounded-sm' : ''}`}>
      {/* Controls */}
      <div className="absolute -right-10 top-0 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => {
            const newLockedState = !isLocked;
            setIsLocked(newLockedState);
            setTimeout(() => {
              editor.setEditable(!newLockedState);
            }, 0);
          }}
          className="p-1 rounded hover:bg-gray-100"
          title={isLocked ? "Enable editing" : "Lock editing"}
        >
          {isLocked ? (
            <Lock className="h-4 w-4 text-gray-400" />
          ) : (
            <Unlock className="h-4 w-4 text-blue-500" />
          )}
        </button>
        
        {!isLocked && (
          <>
            <button
              onClick={() => setShowHistory(prev => !prev)}
              className="p-1 rounded hover:bg-gray-100"
              title="Version history"
            >
              <History className="h-4 w-4 text-gray-400" />
            </button>
            <button
              onClick={undoLastChange}
              className="p-1 rounded hover:bg-gray-100"
              title="Undo last change"
            >
              <RotateCcw className="h-4 w-4 text-gray-400" />
            </button>
          </>
        )}
      </div>

      {/* Fixed Formatting Toolbar */}
      {!isLocked && (
        <div className="mb-2 flex items-center gap-1 bg-gray-50 border rounded-lg p-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-1 pr-2 border-r">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`p-1.5 rounded hover:bg-gray-100 ${
                editor.isActive('bold') ? 'bg-gray-200' : ''
              }`}
              title="Bold"
            >
              <Bold className="h-4 w-4" />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`p-1.5 rounded hover:bg-gray-100 ${
                editor.isActive('italic') ? 'bg-gray-200' : ''
              }`}
              title="Italic"
            >
              <Italic className="h-4 w-4" />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleCode().run()}
              className={`p-1.5 rounded hover:bg-gray-100 ${
                editor.isActive('code') ? 'bg-gray-200' : ''
              }`}
              title="Code"
            >
              <Code className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-1 px-2 border-r">
            <button
              onClick={() => editor.chain().focus().setTextAlign('left').run()}
              className={`p-1.5 rounded hover:bg-gray-100 ${
                editor.isActive({ textAlign: 'left' }) ? 'bg-gray-200' : ''
              }`}
              title="Align left"
            >
              <AlignLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign('center').run()}
              className={`p-1.5 rounded hover:bg-gray-100 ${
                editor.isActive({ textAlign: 'center' }) ? 'bg-gray-200' : ''
              }`}
              title="Align center"
            >
              <AlignCenter className="h-4 w-4" />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign('right').run()}
              className={`p-1.5 rounded hover:bg-gray-100 ${
                editor.isActive({ textAlign: 'right' }) ? 'bg-gray-200' : ''
              }`}
              title="Align right"
            >
              <AlignRight className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-1 pl-2">
            <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              className={`p-1.5 rounded hover:bg-gray-100 ${
                editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''
              }`}
              title="Heading"
            >
              <Heading2 className="h-4 w-4" />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`p-1.5 rounded hover:bg-gray-100 ${
                editor.isActive('bulletList') ? 'bg-gray-200' : ''
              }`}
              title="Bullet List"
            >
              <List className="h-4 w-4" />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={`p-1.5 rounded hover:bg-gray-100 ${
                editor.isActive('blockquote') ? 'bg-gray-200' : ''
              }`}
              title="Quote"
            >
              <Quote className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Version History Panel */}
      {showHistory && (
        <div className="absolute right-0 top-8 w-64 bg-white shadow-lg border rounded-lg p-2 z-50">
          <h3 className="text-sm font-medium mb-2">Version History</h3>
          <div className="max-h-48 overflow-y-auto">
            {versions.map((version, index) => (
              <button
                key={version.timestamp}
                onClick={() => restoreVersion(version)}
                className="w-full text-left p-2 text-sm hover:bg-gray-50 rounded flex justify-between items-center"
              >
                <span>{index === 0 ? 'Current' : `Version ${versions.length - index}`}</span>
                <span className="text-gray-400 text-xs">
                  {new Date(version.timestamp).toLocaleTimeString()}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Editor Content */}
      <EditorContent 
        editor={editor} 
        className={`prose max-w-none ${className} ${isLocked ? 'cursor-default' : 'cursor-text'}`}
      />

      {/* Save Indicator */}
      {lastSaved && !isLocked && (
        <div className="absolute -bottom-5 right-0 text-xs text-gray-400">
          Last saved: {lastSaved.toLocaleTimeString()}
        </div>
      )}
    </div>
  );
}; 