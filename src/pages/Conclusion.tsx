import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Lightbulb, 
  Target, 
  Heart,
  AlertCircle,
  CheckCircle2,
  ArrowLeft
} from "lucide-react";

export default function Conclusion() {
  return (
    <Layout>
      {/* Header */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4">Kết luận</h1>
            <p className="text-lg text-muted-foreground">
              Phản ánh về quá trình xây dựng portfolio và những bài học rút ra 
              từ học phần Kỹ năng số.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">

            {/* Experience */}
            <div className="academic-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl mb-4">Trải nghiệm xây dựng Portfolio</h2>
                  <div className="prose-academic">
                    <p>
                      Việc xây dựng portfolio học tập số là một trải nghiệm thú vị và đầy thử thách. 
                      Đây không chỉ là việc "nộp bài tập", mà còn là cơ hội để tôi nhìn lại toàn bộ 
                      quá trình học tập, sắp xếp lại kiến thức và thể hiện năng lực của mình một cách 
                      có hệ thống.
                    </p>
                    <p>
                      Từ việc tổ chức thư mục đơn giản đến nghiên cứu về sử dụng AI có trách nhiệm, 
                      mỗi bài tập đều đóng góp một phần vào bức tranh toàn diện về kỹ năng số. 
                      Portfolio này không chỉ là sản phẩm cuối cùng, mà còn là <em>bằng chứng về quá trình học tập</em>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Learned */}
            <div>
              <h2 className="text-2xl text-center mb-8">Những kỹ năng quan trọng đã học được</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="academic-card">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="mb-2">Kỹ năng tổ chức thông tin</h4>
                      <p className="text-sm text-muted-foreground">
                        Biết cách phân loại, đặt tên và sắp xếp tệp tin/thư mục một cách logic. 
                        Đây là nền tảng cho mọi hoạt động học tập và làm việc hiệu quả.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="academic-card">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="mb-2">Tư duy phản biện</h4>
                      <p className="text-sm text-muted-foreground">
                        Học cách đánh giá nguồn thông tin, không tin tưởng mù quáng vào kết quả 
                        tìm kiếm hoặc đầu ra từ AI. Luôn đặt câu hỏi và kiểm chứng.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="academic-card">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="mb-2">Kỹ năng tìm kiếm nâng cao</h4>
                      <p className="text-sm text-muted-foreground">
                        Sử dụng toán tử tìm kiếm, truy cập cơ sở dữ liệu học thuật, và lọc 
                        kết quả hiệu quả. Tiết kiệm thời gian và tìm được nguồn chất lượng.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="academic-card">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="mb-2">Sử dụng AI hiệu quả</h4>
                      <p className="text-sm text-muted-foreground">
                        Viết prompt tốt, kết hợp nhiều công cụ AI, và quan trọng nhất — 
                        giữ AI ở vai trò hỗ trợ, không phải thay thế tư duy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="academic-card">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="mb-2">Hợp tác trực tuyến</h4>
                      <p className="text-sm text-muted-foreground">
                        Làm việc nhóm hiệu quả với các công cụ số, phân công rõ ràng, 
                        giao tiếp thường xuyên và theo dõi tiến độ minh bạch.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="academic-card">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="mb-2">Đạo đức số</h4>
                      <p className="text-sm text-muted-foreground">
                        Hiểu về liêm chính học thuật trong bối cảnh AI, xây dựng nguyên tắc 
                        cá nhân và áp dụng trong thực tế.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="academic-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/20">
                  <Heart className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl mb-4">Những điểm tâm đắc</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="h-5 w-5 text-accent mt-0.5" />
                      <p>
                        <strong>AI là công cụ mạnh mẽ nhưng cần được sử dụng đúng cách.</strong> 
                        Tôi đã học được rằng việc viết một prompt tốt quan trọng không kém 
                        việc đánh giá kết quả mà AI trả về.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lightbulb className="h-5 w-5 text-accent mt-0.5" />
                      <p>
                        <strong>Quá trình quan trọng hơn kết quả.</strong> 
                        Mỗi bài tập không chỉ là sản phẩm để nộp, mà còn là cơ hội để 
                        thực sự học và phát triển kỹ năng.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lightbulb className="h-5 w-5 text-accent mt-0.5" />
                      <p>
                        <strong>Kỹ năng số là nền tảng không thể thiếu.</strong> 
                        Trong thế giới ngày càng số hóa, những kỹ năng này sẽ đi theo tôi 
                        trong suốt sự nghiệp, không chỉ trong học tập.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenges */}
            <div className="academic-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-destructive/10">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl mb-4">Khó khăn và cách vượt qua</h2>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">1. Quản lý thời gian</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        <em>Khó khăn:</em> Cân bằng giữa học phần này với các môn khác.
                      </p>
                      <p className="text-sm">
                        <em>Cách vượt qua:</em> Áp dụng chính kỹ năng quản lý dự án học được từ Bài 4 — 
                        chia nhỏ công việc, đặt deadline cụ thể cho từng bài.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">2. Đánh giá độ tin cậy nguồn</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        <em>Khó khăn:</em> Ban đầu khó phân biệt nguồn tốt và nguồn không đáng tin.
                      </p>
                      <p className="text-sm">
                        <em>Cách vượt qua:</em> Áp dụng khung đánh giá CRAAP một cách có hệ thống, 
                        dần dần hình thành "bản năng" nhận diện nguồn chất lượng.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">3. Cân bằng sử dụng AI</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        <em>Khó khăn:</em> Dễ bị lệ thuộc vào AI, mất đi quá trình tư duy.
                      </p>
                      <p className="text-sm">
                        <em>Cách vượt qua:</em> Luôn tự làm trước, chỉ dùng AI để hỗ trợ và kiểm tra. 
                        Ghi lại những gì đã học được từ mỗi tương tác với AI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Thoughts */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl mb-4">Lời kết</h2>
                  <div className="prose-academic">
                    <p>
                      Portfolio này là minh chứng cho hành trình học tập của tôi trong học phần Kỹ năng số. 
                      Mỗi bài tập, mỗi thử thách đều là cơ hội để tôi phát triển — không chỉ về kỹ năng, 
                      mà còn về tư duy và thái độ học tập.
                    </p>
                    <p>
                      Tôi tin rằng những kỹ năng học được từ học phần này sẽ là nền tảng vững chắc 
                      cho sự nghiệp tương lai. Trong thời đại số, biết cách tìm kiếm thông tin, 
                      sử dụng công nghệ hiệu quả và giữ vững đạo đức số là những năng lực không thể thiếu.
                    </p>
                    <p className="text-lg font-medium text-primary mt-6">
                      Cảm ơn bạn đã dành thời gian xem portfolio của tôi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to projects */}
            <div className="text-center pt-8">
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Quay lại trang Bài tập
              </Link>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
