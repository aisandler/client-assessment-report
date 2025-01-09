export interface Note {
  id: string;
  content: string;
  section: string;
  timestamp: Date;
  pinned?: boolean;
} 