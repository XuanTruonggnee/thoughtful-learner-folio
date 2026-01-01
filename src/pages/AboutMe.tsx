import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Brain, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutMe() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-balance">
              Portfolio Học Tập Số
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Chào mừng bạn đến với không gian học tập của tôi — nơi tôi lưu trữ 
              và phản ánh quá trình phát triển năng lực số trong môi trường đại học.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/projects">
                Xem các bài tập
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* About Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Về tôi</h2>
            
            <div className="academic-card mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-2">Sinh viên Đại học</h4>
                  <p className="text-muted-foreground">
                    Tôi là sinh viên ngành <strong>Kinh tế – Chính trị</strong> tại 
                    Trường Đại học Kinh tế, Đại học Quốc gia Hà Nội (UEB – VNU). 
                    Trong quá trình học tập, tôi nhận ra tầm quan trọng của việc 
                    trang bị kỹ năng số để thích ứng với thế giới ngày càng số hóa.
                  </p>
                </div>
              </div>
            </div>

            <div className="academic-card mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-2">Quan tâm & Định hướng</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• <strong>Học tập số</strong> — Khai thác công nghệ để nâng cao hiệu quả học tập</li>
                    <li>• <strong>Tư duy hệ thống</strong> — Phân tích vấn đề một cách toàn diện, có logic</li>
                    <li>• <strong>AI trong giáo dục</strong> — Ứng dụng trí tuệ nhân tạo như công cụ hỗ trợ, không thay thế tư duy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Mục tiêu học tập</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="academic-card">
                <div className="p-3 rounded-lg bg-accent/20 w-fit mb-4">
                  <Target className="h-5 w-5 text-accent-foreground" />
                </div>
                <h4 className="mb-2">Nâng cao kỹ năng số</h4>
                <p className="text-muted-foreground text-sm">
                  Làm chủ các công cụ số hiện đại, từ quản lý tệp tin đến 
                  hợp tác trực tuyến và sáng tạo nội dung.
                </p>
              </div>

              <div className="academic-card">
                <div className="p-3 rounded-lg bg-accent/20 w-fit mb-4">
                  <Lightbulb className="h-5 w-5 text-accent-foreground" />
                </div>
                <h4 className="mb-2">Tư duy phản biện</h4>
                <p className="text-muted-foreground text-sm">
                  Biết cách tìm kiếm, đánh giá và sử dụng thông tin một cách 
                  có chọn lọc, không tin tưởng mù quáng.
                </p>
              </div>

              <div className="academic-card">
                <div className="p-3 rounded-lg bg-accent/20 w-fit mb-4">
                  <Brain className="h-5 w-5 text-accent-foreground" />
                </div>
                <h4 className="mb-2">Sử dụng AI có trách nhiệm</h4>
                <p className="text-muted-foreground text-sm">
                  Ứng dụng AI như công cụ hỗ trợ tư duy, không phải thay thế 
                  tư duy. Luôn giữ vững liêm chính học thuật.
                </p>
              </div>

              <div className="academic-card">
                <div className="p-3 rounded-lg bg-accent/20 w-fit mb-4">
                  <BookOpen className="h-5 w-5 text-accent-foreground" />
                </div>
                <h4 className="mb-2">Học tập suốt đời</h4>
                <p className="text-muted-foreground text-sm">
                  Xây dựng nền tảng để tiếp tục học hỏi và thích ứng 
                  với sự thay đổi của công nghệ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Purpose */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">Mục đích của Portfolio</h2>
            
            <div className="academic-card">
              <div className="prose-academic">
                <p>
                  Portfolio này được xây dựng với ba mục đích chính:
                </p>
                <ul className="space-y-3 mt-4">
                  <li>
                    <strong>Lưu trữ bài tập học phần</strong> — Tổng hợp 6 bài tập 
                    theo đúng yêu cầu giảng dạy, trình bày rõ ràng quá trình thực hiện 
                    và kết quả cuối cùng.
                  </li>
                  <li>
                    <strong>Thể hiện quá trình học tập</strong> — Không chỉ là nộp bài, 
                    mà còn phản ánh tư duy, cách tiếp cận vấn đề và những bài học rút ra.
                  </li>
                  <li>
                    <strong>Dễ dàng chia sẻ và đánh giá</strong> — Định dạng web giúp 
                    giảng viên và người đọc có thể truy cập, xem xét một cách thuận tiện.
                  </li>
                </ul>
                <p className="mt-6 text-muted-foreground italic">
                  Đây không chỉ là nơi trưng bày bài tập, mà còn là bằng chứng về 
                  năng lực học tập số, khả năng tự tổ chức, tự phản tư và ứng dụng 
                  AI có trách nhiệm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-4">Sẵn sàng khám phá?</h3>
          <p className="text-muted-foreground mb-6">
            Xem chi tiết 6 bài tập học phần với đầy đủ quá trình và nhận xét.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/projects">
              Đến trang Bài tập
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
