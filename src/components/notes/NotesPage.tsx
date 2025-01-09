import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RichTextEditor } from '@/components/common/RichTextEditor';
import { Pin, Search, Download, Trash2, Edit2 } from 'lucide-react';
import { Note } from '@/types/notes';

interface NotesPageProps {
  sectionId: string;
}

const SECTION_TITLES = {
  'service-analysis': 'Service Analysis Notes',
  'performance': 'Performance Analysis Notes',
  'communication': 'Communication Notes',
  'marketplace': 'Marketplace Notes',
  'implementation': 'Implementation Notes'
};

const NotesPage: React.FC<NotesPageProps> = ({ sectionId }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);

  // Load section-specific notes from localStorage on mount
  useEffect(() => {
    const savedNotes = localStorage.getItem(`notes-${sectionId}`);
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes).map((note: any) => ({
        ...note,
        timestamp: new Date(note.timestamp)
      })));
    }
  }, [sectionId]);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(`notes-${sectionId}`, JSON.stringify(notes));
  }, [notes, sectionId]);

  // Add this function to handle content changes from RichTextEditor
  const handleEditorChange = (content: string) => {
    setNewNote(content);
  };

  const handleSaveNote = () => {
    if (!newNote.trim()) return;

    if (editingNoteId) {
      setNotes(notes.map(note => 
        note.id === editingNoteId 
          ? { ...note, content: newNote, timestamp: new Date() }
          : note
      ));
      setEditingNoteId(null);
    } else {
      const newNoteObj: Note = {
        id: Date.now().toString(),
        content: newNote,
        section: sectionId,
        timestamp: new Date(),
        pinned: false
      };
      setNotes(prevNotes => [...prevNotes, newNoteObj]);
    }
    
    // Clear the editor after saving
    setNewNote('');
  };

  const handleEditNote = (note: Note) => {
    setNewNote(note.content);
    setEditingNoteId(note.id);
  };

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleTogglePin = (id: string) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, pinned: !note.pinned } : note
    ));
  };

  const handleExport = () => {
    const exportData = notes.map(note => ({
      section: note.section,
      content: note.content,
      timestamp: note.timestamp.toLocaleString(),
      pinned: note.pinned
    }));
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${sectionId}-notes-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const filteredNotes = notes
    .filter(note => 
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return b.timestamp.getTime() - a.timestamp.getTime();
    });

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{SECTION_TITLES[sectionId] || 'Notes'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search and Export */}
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search notes..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" onClick={handleExport}>
              <Download className="h-4 w-4 mr-2" />
              Export Notes
            </Button>
          </div>

          {/* Note Input */}
          <div className="space-y-4">
            <RichTextEditor
              initialContent={newNote}
              sectionId={`new-note-${sectionId}`}
              className="min-h-[200px]"
              onContentChange={handleEditorChange}
            />

            <Button 
              onClick={handleSaveNote}
              className="mt-2"
            >
              {editingNoteId ? 'Update Note' : 'Add Note'}
            </Button>
          </div>

          {/* Notes Display */}
          <div className="space-y-4 mt-6">
            {filteredNotes.map(note => (
              <Card key={note.id} className={`relative ${note.pinned ? 'border-blue-200 bg-blue-50' : ''}`}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-sm text-gray-500">
                      {note.timestamp.toLocaleString()}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleTogglePin(note.id)}
                      >
                        <Pin className={`h-4 w-4 ${note.pinned ? 'text-blue-500' : 'text-gray-500'}`} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEditNote(note)}
                      >
                        <Edit2 className="h-4 w-4 text-gray-500" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteNote(note.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                  <RichTextEditor
                    initialContent={note.content}
                    sectionId={`note-${note.id}`}
                    className="pointer-events-none"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotesPage; 