import { ChevronDown, FileDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectSection {
  title: string;
  content: React.ReactNode;
}

interface ProjectCardProps {
  chapterNumber: number;
  title: string;
  description: string;
  sections: ProjectSection[];
  assignmentFileUrl?: string;
}

export function ProjectCard({ chapterNumber, title, description, sections, assignmentFileUrl }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="academic-card" id={`bai-${chapterNumber}`}>
      {/* File download link */}
      {assignmentFileUrl && (
        <div className="mb-4 pb-4 border-b border-border">
          <a 
            href={assignmentFileUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <FileDown className="h-4 w-4" />
            Tải file bài tập gốc (Bài {chapterNumber})
          </a>
        </div>
      )}

      {/* Header - always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="chapter-badge mb-3">
              Chương {chapterNumber}
            </div>
            <h3 className="text-xl md:text-2xl mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <ChevronDown 
            className={cn(
              "h-5 w-5 text-muted-foreground transition-transform mt-2 flex-shrink-0",
              isExpanded && "rotate-180"
            )} 
          />
        </div>
      </button>

      {/* Expandable content */}
      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-border space-y-6">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-3 text-primary">
                {section.title}
              </h4>
              <div className="prose-academic">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
