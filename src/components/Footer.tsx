import { BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <BookOpen className="h-4 w-4" />
            <span className="text-sm">Portfolio Học Tập Số</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            © 2024 Vũ Văn Diệm • Sinh viên Kinh tế – Chính trị • UEB – VNU
          </p>
        </div>
      </div>
    </footer>
  );
}
