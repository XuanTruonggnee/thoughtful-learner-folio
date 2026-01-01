import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { Link } from "react-router-dom";
import { 
  FolderTree, 
  Search, 
  MessageSquare, 
  Users, 
  Video, 
  Shield,
  CheckCircle2,
  FileText,
  Lightbulb
} from "lucide-react";

export default function Projects() {
  return (
    <Layout>
      {/* Header */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4">Các bài tập học phần</h1>
            <p className="text-lg text-muted-foreground">
              Tổng hợp 6 bài tập thực hành kỹ năng số, được trình bày theo đúng 
              thứ tự chương học với đầy đủ quá trình và nhận xét.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-6 border-b border-border sticky top-16 bg-background/95 backdrop-blur z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <a
                key={num}
                href={`#bai-${num}`}
                className="px-3 py-1.5 text-sm rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-colors"
              >
                Bài {num}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Bài 1 */}
            <ProjectCard
              chapterNumber={1}
              title="Thao tác cơ bản với tệp tin và thư mục"
              description="Thiết kế cấu trúc thư mục học tập logic, quy tắc đặt tên tệp tin rõ ràng và nhất quán."
              sections={[
                {
                  title: "🎯 Mục tiêu bài tập",
                  content: (
                    <div>
                      <p>Bài tập nhằm rèn luyện các kỹ năng:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Tạo và tổ chức hệ thống thư mục cho việc học tập</li>
                        <li>Áp dụng quy tắc đặt tên tệp tin khoa học</li>
                        <li>Thực hiện các thao tác cơ bản: tạo, sao chép, di chuyển, xóa</li>
                        <li>Sử dụng phím tắt để tăng hiệu suất làm việc</li>
                      </ul>
                    </div>
                  )
                },
                {
                  title: "📋 Quá trình thực hiện",
                  content: (
                    <div className="space-y-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <FolderTree className="h-4 w-4 text-primary" />
                          Bước 1: Tạo thư mục gốc
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          Tạo thư mục chính mang tên <code className="bg-background px-1 rounded">ThucHanh_VuVanDiem</code> trên Desktop 
                          để chứa toàn bộ bài tập thực hành.
                        </p>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <FolderTree className="h-4 w-4 text-primary" />
                          Bước 2: Tạo các thư mục con
                        </h5>
                        <p className="text-sm text-muted-foreground mb-2">
                          Thiết kế cấu trúc phân cấp với các thư mục:
                        </p>
                        <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                          <li><code className="bg-background px-1 rounded">Bai_giang</code> — Lưu trữ slide và tài liệu giảng dạy</li>
                          <li><code className="bg-background px-1 rounded">Bai_tap</code> — Chứa các bài tập theo tuần</li>
                          <li><code className="bg-background px-1 rounded">Tai_lieu_tham_khao</code> — Tài liệu bổ sung</li>
                          <li><code className="bg-background px-1 rounded">Du_an</code> — Các dự án lớn</li>
                        </ul>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary" />
                          Bước 3: Tạo tệp tin mẫu
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          Tạo các tệp Word, Excel, PowerPoint với quy tắc đặt tên: 
                          <code className="bg-background px-1 rounded">LoaiTaiLieu_TenChuDe_Ngay.docx</code>
                        </p>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          Bước 4-7: Thao tác với tệp tin
                        </h5>
                        <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                          <li>Sao chép tệp giữa các thư mục (Ctrl+C, Ctrl+V)</li>
                          <li>Di chuyển tệp (Ctrl+X, Ctrl+V)</li>
                          <li>Đổi tên theo quy tắc mới</li>
                          <li>Xóa tệp không cần thiết</li>
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  title: "📁 Sản phẩm cuối cùng",
                  content: (
                    <div>
                      <p className="mb-4">Cấu trúc thư mục hoàn chỉnh:</p>
                      <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm">
                        <pre className="whitespace-pre-wrap">{`ThucHanh_VuVanDiem/
├── Bai_giang/
│   ├── Chuong1_GioiThieu.pptx
│   └── Chuong2_KyNangSo.pptx
├── Bai_tap/
│   ├── Tuan1/
│   ├── Tuan2/
│   └── Tuan3/
├── Tai_lieu_tham_khao/
│   ├── Sach/
│   └── BaiBao/
└── Du_an/
    └── DoAn_CuoiKy/`}</pre>
                      </div>
                    </div>
                  )
                },
                {
                  title: "💡 Nhận xét & Kỹ năng rút ra",
                  content: (
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-accent mt-0.5" />
                        <p><strong>Kỹ năng tổ chức:</strong> Biết cách phân loại và sắp xếp thông tin một cách logic, dễ tìm kiếm.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-accent mt-0.5" />
                        <p><strong>Quy tắc đặt tên:</strong> Áp dụng naming convention nhất quán giúp quản lý tệp hiệu quả hơn.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-accent mt-0.5" />
                        <p><strong>Thao tác nhanh:</strong> Sử dụng phím tắt tiết kiệm thời gian đáng kể trong công việc hàng ngày.</p>
                      </div>
                    </div>
                  )
                }
              ]}
            />

            {/* Bài 2 */}
            <ProjectCard
              chapterNumber={2}
              title="Tìm kiếm và đánh giá thông tin học thuật"
              description="Nghiên cứu chủ đề 'Tác động của chính sách nới lỏng tiền tệ' với 12 nguồn tài liệu học thuật."
              sections={[
                {
                  title: "🎯 Mục tiêu bài tập",
                  content: (
                    <div>
                      <p>Rèn luyện kỹ năng tìm kiếm và đánh giá thông tin học thuật:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Sử dụng từ khóa và toán tử tìm kiếm nâng cao</li>
                        <li>Tìm kiếm trên các cơ sở dữ liệu học thuật (Google Scholar, JSTOR, v.v.)</li>
                        <li>Đánh giá độ tin cậy của nguồn thông tin</li>
                        <li>So sánh hiệu quả các phương pháp tìm kiếm</li>
                      </ul>
                    </div>
                  )
                },
                {
                  title: "🔍 Chủ đề và Phương pháp tìm kiếm",
                  content: (
                    <div className="space-y-4">
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <Search className="h-4 w-4 text-primary" />
                          Chủ đề nghiên cứu
                        </h5>
                        <p className="text-lg font-medium">
                          "Tác động của chính sách nới lỏng tiền tệ đến nền kinh tế Việt Nam"
                        </p>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-3">Từ khóa và toán tử sử dụng:</h5>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-muted/50 p-3 rounded-lg text-sm">
                            <code className="text-primary">"monetary policy" Vietnam</code>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg text-sm">
                            <code className="text-primary">site:scholar.google.com</code>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg text-sm">
                            <code className="text-primary">filetype:pdf economic growth</code>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-lg text-sm">
                            <code className="text-primary">"quantitative easing" OR "QE"</code>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  title: "📚 Danh sách 12 tài liệu học thuật",
                  content: (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 px-3 font-semibold">STT</th>
                            <th className="text-left py-2 px-3 font-semibold">Tác giả</th>
                            <th className="text-left py-2 px-3 font-semibold">Năm</th>
                            <th className="text-left py-2 px-3 font-semibold">Nguồn</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b border-border/50">
                            <td className="py-2 px-3">1</td>
                            <td className="py-2 px-3">Nguyễn Thị Minh Huệ</td>
                            <td className="py-2 px-3">2022</td>
                            <td className="py-2 px-3">Tạp chí Kinh tế và Phát triển</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-2 px-3">2</td>
                            <td className="py-2 px-3">Trần Ngọc Thơ</td>
                            <td className="py-2 px-3">2021</td>
                            <td className="py-2 px-3">Tạp chí Ngân hàng</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-2 px-3">3</td>
                            <td className="py-2 px-3">World Bank</td>
                            <td className="py-2 px-3">2023</td>
                            <td className="py-2 px-3">World Bank Reports</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-2 px-3">4</td>
                            <td className="py-2 px-3">IMF Research</td>
                            <td className="py-2 px-3">2022</td>
                            <td className="py-2 px-3">IMF Working Papers</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-2 px-3">5</td>
                            <td className="py-2 px-3">Phạm Thế Anh</td>
                            <td className="py-2 px-3">2020</td>
                            <td className="py-2 px-3">VNU Journal of Science</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-2 px-3">6-12</td>
                            <td className="py-2 px-3" colSpan={3}>... và 7 tài liệu khác từ Google Scholar, JSTOR, ResearchGate</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )
                },
                {
                  title: "✅ Đánh giá độ tin cậy nguồn",
                  content: (
                    <div>
                      <p className="mb-4">Các tiêu chí đánh giá được áp dụng:</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h5 className="font-semibold mb-2">5 tiêu chí CRAAP</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Currency (Tính thời sự)</li>
                            <li>• Relevance (Tính phù hợp)</li>
                            <li>• Authority (Thẩm quyền)</li>
                            <li>• Accuracy (Độ chính xác)</li>
                            <li>• Purpose (Mục đích)</li>
                          </ul>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h5 className="font-semibold mb-2">Kết quả đánh giá</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• 8/12 nguồn: Rất tin cậy</li>
                            <li>• 3/12 nguồn: Tin cậy</li>
                            <li>• 1/12 nguồn: Cần kiểm chứng thêm</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  title: "💡 Nhận xét & Kỹ năng rút ra",
                  content: (
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-accent mt-0.5" />
                        <p><strong>Toán tử tìm kiếm:</strong> Sử dụng site:, filetype:, dấu ngoặc kép giúp thu hẹp kết quả và tìm đúng nguồn cần thiết.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-accent mt-0.5" />
                        <p><strong>Đánh giá nguồn:</strong> Không phải mọi kết quả tìm kiếm đều đáng tin — cần kiểm tra tác giả, năm xuất bản, nguồn gốc.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-accent mt-0.5" />
                        <p><strong>Cơ sở dữ liệu học thuật:</strong> Google Scholar, JSTOR, ResearchGate là những nguồn đáng tin cậy hơn tìm kiếm Google thông thường.</p>
                      </div>
                    </div>
                  )
                }
              ]}
            />

            {/* Bài 3 */}
            <ProjectCard
              chapterNumber={3}
              title="Viết prompt hiệu quả cho học tập"
              description="So sánh các cấp độ prompt từ cơ bản đến nâng cao với 3 tác vụ học tập khác nhau."
              sections={[
                {
                  title: "🎯 Mục tiêu bài tập",
                  content: (
                    <div>
                      <p>Thực hành kỹ năng viết prompt hiệu quả khi sử dụng AI:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Hiểu cấu trúc của một prompt tốt</li>
                        <li>So sánh kết quả giữa prompt đơn giản và prompt chi tiết</li>
                        <li>Áp dụng các kỹ thuật: role-playing, few-shot, chain-of-thought</li>
                        <li>Đánh giá chất lượng đầu ra từ AI</li>
                      </ul>
                    </div>
                  )
                },
                {
                  title: "📝 Tác vụ 1: Tóm tắt tài liệu",
                  content: (
                    <div className="space-y-4">
                      <div className="grid gap-4">
                        <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border border-red-200 dark:border-red-900">
                          <h5 className="font-semibold mb-2 text-red-700 dark:text-red-400">❌ Prompt cơ bản</h5>
                          <p className="text-sm italic">"Tóm tắt bài viết này"</p>
                          <p className="text-xs text-muted-foreground mt-2">Kết quả: Quá chung chung, thiếu trọng tâm</p>
                        </div>
                        
                        <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg border border-yellow-200 dark:border-yellow-900">
                          <h5 className="font-semibold mb-2 text-yellow-700 dark:text-yellow-400">⚡ Prompt cải tiến</h5>
                          <p className="text-sm italic">"Tóm tắt bài viết này trong 200 từ, tập trung vào các luận điểm chính về chính sách tiền tệ"</p>
                          <p className="text-xs text-muted-foreground mt-2">Kết quả: Có độ dài cụ thể, có trọng tâm</p>
                        </div>
                        
                        <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200 dark:border-green-900">
                          <h5 className="font-semibold mb-2 text-green-700 dark:text-green-400">✅ Prompt nâng cao</h5>
                          <p className="text-sm italic">"Bạn là một nghiên cứu sinh kinh tế. Hãy tóm tắt bài viết này theo cấu trúc: (1) Vấn đề nghiên cứu, (2) Phương pháp, (3) Kết quả chính, (4) Hàm ý chính sách. Mỗi phần 50 từ."</p>
                          <p className="text-xs text-muted-foreground mt-2">Kết quả: Có vai trò, cấu trúc rõ ràng, định lượng cụ thể</p>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  title: "📝 Tác vụ 2: Giải thích khái niệm",
                  content: (
                    <div className="space-y-4">
                      <div className="grid gap-4">
                        <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border border-red-200 dark:border-red-900">
                          <h5 className="font-semibold mb-2 text-red-700 dark:text-red-400">❌ Prompt cơ bản</h5>
                          <p className="text-sm italic">"Giải thích lạm phát"</p>
                        </div>
                        
                        <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200 dark:border-green-900">
                          <h5 className="font-semibold mb-2 text-green-700 dark:text-green-400">✅ Prompt nâng cao</h5>
                          <p className="text-sm italic">"Giải thích khái niệm lạm phát cho sinh viên kinh tế năm nhất. Bao gồm: định nghĩa, nguyên nhân (3 loại), tác động (tích cực và tiêu cực), ví dụ thực tế ở Việt Nam 2022-2023. Sử dụng ngôn ngữ dễ hiểu, có bullet points."</p>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  title: "📝 Tác vụ 3: Tạo câu hỏi ôn tập",
                  content: (
                    <div className="space-y-4">
                      <div className="grid gap-4">
                        <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border border-red-200 dark:border-red-900">
                          <h5 className="font-semibold mb-2 text-red-700 dark:text-red-400">❌ Prompt cơ bản</h5>
                          <p className="text-sm italic">"Tạo câu hỏi về chương 5"</p>
                        </div>
                        
                        <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200 dark:border-green-900">
                          <h5 className="font-semibold mb-2 text-green-700 dark:text-green-400">✅ Prompt nâng cao</h5>
                          <p className="text-sm italic">"Dựa trên nội dung Chương 5: Chính sách tiền tệ, hãy tạo 10 câu hỏi ôn tập gồm: 3 câu nhớ kiến thức, 4 câu hiểu/phân tích, 3 câu vận dụng. Mỗi câu kèm đáp án ngắn gọn và gợi ý học."</p>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  title: "💡 Nhận xét & Kỹ năng rút ra",
                  content: (
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MessageSquare className="h-5 w-5 text-accent mt-0.5" />
                        <p><strong>Cấu trúc prompt tốt:</strong> Vai trò + Nhiệm vụ cụ thể + Định dạng đầu ra + Ràng buộc (độ dài, ngôn ngữ, v.v.)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <MessageSquare className="h-5 w-5 text-accent mt-0.5" />
                        <p><strong>Kỹ thuật role-playing:</strong> Gán vai trò cho AI giúp nhận được câu trả lời phù hợp với ngữ cảnh hơn.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <MessageSquare className="h-5 w-5 text-accent mt-0.5" />
                        <p><strong>Iteration:</strong> Prompt đầu tiên hiếm khi hoàn hảo — cần thử nghiệm và cải thiện dần.</p>
                      </div>
                    </div>
                  )
                }
              ]}
            />

            {/* Bài 4 */}
            <ProjectCard
              chapterNumber={4}
              title="Hợp tác trực tuyến cho dự án nhóm"
              description="Dự án nhóm 'Tác động của thị trường AI đến người lao động' với Trello, Google Docs và Zoom."
              sections={[
                {
                  title: "🎯 Mục tiêu bài tập",
                  content: (
                    <div>
                      <p>Thực hành kỹ năng hợp tác trực tuyến trong môi trường làm việc nhóm:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Sử dụng công cụ quản lý dự án (Trello)</li>
                        <li>Phân công nhiệm vụ và theo dõi tiến độ</li>
                        <li>Soạn thảo đồng thời với Google Docs</li>
                        <li>Họp trực tuyến hiệu quả với Zoom</li>
                      </ul>
                    </div>
                  )
                },
                {
                  title: "📋 Mô tả dự án nhóm",
                  content: (
                    <div className="space-y-4">
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          Thông tin dự án
                        </h5>
                        <ul className="text-sm space-y-2">
                          <li><strong>Tên dự án:</strong> Tác động của thị trường AI đến người lao động Việt Nam</li>
                          <li><strong>Số thành viên:</strong> 4 người</li>
                          <li><strong>Thời gian:</strong> 3 tuần</li>
                          <li><strong>Sản phẩm:</strong> Báo cáo nghiên cứu + Infographic</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-3">Phân công nhiệm vụ:</h5>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm border-collapse">
                            <thead>
                              <tr className="border-b border-border">
                                <th className="text-left py-2 px-3 font-semibold">Thành viên</th>
                                <th className="text-left py-2 px-3 font-semibold">Nhiệm vụ</th>
                                <th className="text-left py-2 px-3 font-semibold">Deadline</th>
                              </tr>
                            </thead>
                            <tbody className="text-muted-foreground">
                              <tr className="border-b border-border/50">
                                <td className="py-2 px-3">Thành viên A</td>
                                <td className="py-2 px-3">Tổng quan thị trường AI</td>
                                <td className="py-2 px-3">Tuần 1</td>
                              </tr>
                              <tr className="border-b border-border/50">
                                <td className="py-2 px-3">Thành viên B</td>
                                <td className="py-2 px-3">Phân tích tác động việc làm</td>
                                <td className="py-2 px-3">Tuần 2</td>
                              </tr>
                              <tr className="border-b border-border/50">
                                <td className="py-2 px-3">Thành viên C</td>
                                <td className="py-2 px-3">Khảo sát + Phỏng vấn</td>
                                <td className="py-2 px-3">Tuần 2</td>
                              </tr>
                              <tr className="border-b border-border/50">
                                <td className="py-2 px-3">Thành viên D</td>
                                <td className="py-2 px-3">Thiết kế Infographic</td>
                                <td className="py-2 px-3">Tuần 3</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  title: "🛠️ Công cụ sử dụng",
                  content: (
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-muted/50 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl">📋</span>
                        </div>
                        <h5 className="font-semibold mb-1">Trello</h5>
                        <p className="text-xs text-muted-foreground">Quản lý công việc theo Kanban: To Do → Doing → Done</p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl">📝</span>
                        </div>
                        <h5 className="font-semibold mb-1">Google Docs</h5>
                        <p className="text-xs text-muted-foreground">Soạn thảo đồng thời, comment, suggestion mode</p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl">🎥</span>
                        </div>
                        <h5 className="font-semibold mb-1">Zoom</h5>
                        <p className="text-xs text-muted-foreground">Họp nhóm hàng tuần, chia sẻ màn hình</p>
                      </div>
                    </div>
                  )
                },
                {
                  title: "💡 Nhận xét & Kỹ năng rút ra",
                  content: (
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-accent mt-0.5" />
                        <p><strong>Giao tiếp là then chốt:</strong> Cập nhật tiến độ thường xuyên trên Trello giúp cả nhóm nắm được tình hình.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-accent mt-0.5" />
                        <p><strong>Phân công rõ ràng:</strong> Mỗi người có deadline riêng, trách nhiệm cụ thể, dễ theo dõi và đánh giá.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-accent mt-0.5" />
                        <p><strong>Công cụ phù hợp:</strong> Kết hợp nhiều công cụ cho các mục đích khác nhau tạo workflow hiệu quả.</p>
                      </div>
                    </div>
                  )
                }
              ]}
            />

            {/* Bài 5 */}
            <ProjectCard
              chapterNumber={5}
              title="Sáng tạo nội dung số với AI"
              description="Bài thuyết trình 'Ứng dụng AI trong học tập' với 8 slides được thiết kế chuyên nghiệp."
              sections={[
                {
                  title: "🎯 Mục tiêu bài tập",
                  content: (
                    <div>
                      <p>Thực hành sáng tạo nội dung số với sự hỗ trợ của AI:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Lên ý tưởng và cấu trúc nội dung</li>
                        <li>Thiết kế slide thuyết trình chuyên nghiệp</li>
                        <li>Sử dụng AI hỗ trợ trong các khâu sản xuất</li>
                        <li>Đánh giá vai trò của AI trong quy trình sáng tạo</li>
                      </ul>
                    </div>
                  )
                },
                {
                  title: "🎬 Sản phẩm: Bài thuyết trình",
                  content: (
                    <div className="space-y-4">
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <Video className="h-4 w-4 text-primary" />
                          Thông tin bài thuyết trình
                        </h5>
                        <ul className="text-sm space-y-2">
                          <li><strong>Chủ đề:</strong> Ứng dụng AI trong học tập</li>
                          <li><strong>Số slides:</strong> 8 slides</li>
                          <li><strong>Thời lượng dự kiến:</strong> 10-15 phút</li>
                          <li><strong>Công cụ:</strong> PowerPoint/Canva + ChatGPT + DALL-E</li>
                        </ul>
                      </div>
                    </div>
                  )
                },
                {
                  title: "📊 Cấu trúc 8 Slides",
                  content: (
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">1</span>
                          <h5 className="font-semibold text-sm">Trang bìa</h5>
                        </div>
                        <p className="text-xs text-muted-foreground">Tiêu đề, tên tác giả, ngày thuyết trình</p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">2</span>
                          <h5 className="font-semibold text-sm">Mục lục</h5>
                        </div>
                        <p className="text-xs text-muted-foreground">Tổng quan nội dung trình bày</p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">3</span>
                          <h5 className="font-semibold text-sm">AI là gì?</h5>
                        </div>
                        <p className="text-xs text-muted-foreground">Định nghĩa và các loại AI phổ biến</p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">4</span>
                          <h5 className="font-semibold text-sm">AI trong học tập</h5>
                        </div>
                        <p className="text-xs text-muted-foreground">Các ứng dụng: ChatGPT, Grammarly, Quizlet</p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">5</span>
                          <h5 className="font-semibold text-sm">Lợi ích</h5>
                        </div>
                        <p className="text-xs text-muted-foreground">Tiết kiệm thời gian, cá nhân hóa, hỗ trợ 24/7</p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">6</span>
                          <h5 className="font-semibold text-sm">Thách thức</h5>
                        </div>
                        <p className="text-xs text-muted-foreground">Phụ thuộc, đạo văn, thiếu tư duy phản biện</p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">7</span>
                          <h5 className="font-semibold text-sm">Sử dụng có trách nhiệm</h5>
                        </div>
                        <p className="text-xs text-muted-foreground">Nguyên tắc và đề xuất cho sinh viên</p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">8</span>
                          <h5 className="font-semibold text-sm">Kết luận & Q&A</h5>
                        </div>
                        <p className="text-xs text-muted-foreground">Tóm tắt và phần hỏi đáp</p>
                      </div>
                    </div>
                  )
                },
                {
                  title: "🤖 AI đã hỗ trợ như thế nào",
                  content: (
                    <div className="space-y-4">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-2 px-3 font-semibold">Khâu</th>
                              <th className="text-left py-2 px-3 font-semibold">Công cụ AI</th>
                              <th className="text-left py-2 px-3 font-semibold">Vai trò</th>
                            </tr>
                          </thead>
                          <tbody className="text-muted-foreground">
                            <tr className="border-b border-border/50">
                              <td className="py-2 px-3">Lên ý tưởng</td>
                              <td className="py-2 px-3">ChatGPT</td>
                              <td className="py-2 px-3">Brainstorm cấu trúc, gợi ý nội dung</td>
                            </tr>
                            <tr className="border-b border-border/50">
                              <td className="py-2 px-3">Viết nội dung</td>
                              <td className="py-2 px-3">ChatGPT</td>
                              <td className="py-2 px-3">Draft bullet points, chỉnh sửa văn phong</td>
                            </tr>
                            <tr className="border-b border-border/50">
                              <td className="py-2 px-3">Thiết kế</td>
                              <td className="py-2 px-3">Canva AI</td>
                              <td className="py-2 px-3">Gợi ý layout, màu sắc</td>
                            </tr>
                            <tr className="border-b border-border/50">
                              <td className="py-2 px-3">Hình ảnh</td>
                              <td className="py-2 px-3">DALL-E / Midjourney</td>
                              <td className="py-2 px-3">Tạo hình minh họa</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        Lưu ý: AI chỉ hỗ trợ, tôi vẫn là người đưa ra quyết định cuối cùng về nội dung và thiết kế.
                      </p>
                    </div>
                  )
                },
                {
                  title: "💡 Nhận xét & Kỹ năng rút ra",
                  content: (
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Video className="h-5 w-5 text-accent mt-0.5" />
                        <p><strong>AI là công cụ, không phải tác giả:</strong> AI giúp tăng tốc nhưng cần kiểm tra và điều chỉnh theo ý định của mình.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Video className="h-5 w-5 text-accent mt-0.5" />
                        <p><strong>Kết hợp nhiều công cụ:</strong> Mỗi AI có thế mạnh riêng — kết hợp tạo workflow hoàn chỉnh.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Video className="h-5 w-5 text-accent mt-0.5" />
                        <p><strong>Giữ dấu ấn cá nhân:</strong> Sản phẩm cuối cùng phải phản ánh góc nhìn và phong cách của người tạo.</p>
                      </div>
                    </div>
                  )
                }
              ]}
            />

            {/* Bài 6 */}
            <ProjectCard
              chapterNumber={6}
              title="Sử dụng AI có trách nhiệm"
              description="Nghiên cứu chính sách AI của VNU/UEB và xây dựng bộ nguyên tắc cá nhân sử dụng AI."
              sections={[
                {
                  title: "🎯 Mục tiêu bài tập",
                  content: (
                    <div>
                      <p>Nghiên cứu và thực hành sử dụng AI có trách nhiệm trong học thuật:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Tìm hiểu chính sách AI của các trường đại học</li>
                        <li>Phân tích các vấn đề đạo đức khi sử dụng AI</li>
                        <li>Xây dựng bộ nguyên tắc cá nhân</li>
                        <li>Áp dụng AI có trách nhiệm trong một tác vụ thực tế</li>
                      </ul>
                    </div>
                  )
                },
                {
                  title: "🏛️ Nghiên cứu chính sách AI của VNU/UEB",
                  content: (
                    <div className="space-y-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-3">Điểm chính trong chính sách:</h5>
                        <ul className="text-sm space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Cho phép sử dụng AI như công cụ hỗ trợ học tập</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Yêu cầu trích dẫn nguồn khi sử dụng AI-generated content</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span>Cấm sử dụng AI để hoàn thành bài kiểm tra/bài thi</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span>Cấm nộp sản phẩm AI mà không có đóng góp cá nhân</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                        <h5 className="font-semibold mb-2">Nhận xét về chính sách:</h5>
                        <p className="text-sm text-muted-foreground">
                          Chính sách của VNU/UEB khá cân bằng: khuyến khích tận dụng AI để nâng cao hiệu quả học tập, 
                          đồng thời đặt ra ranh giới rõ ràng để bảo vệ liêm chính học thuật. 
                          Tuy nhiên, cần có hướng dẫn chi tiết hơn cho từng loại bài tập.
                        </p>
                      </div>
                    </div>
                  )
                },
                {
                  title: "📝 Ứng dụng thực tế: Tóm tắt đề cương Triết học",
                  content: (
                    <div className="space-y-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Tác vụ:</h5>
                        <p className="text-sm text-muted-foreground">
                          Sử dụng ChatGPT để tóm tắt đề cương môn Triết học Mác-Lênin, 
                          giúp ôn tập hiệu quả hơn.
                        </p>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Quy trình thực hiện:</h5>
                        <ol className="text-sm text-muted-foreground space-y-2 list-decimal pl-6">
                          <li>Đọc kỹ đề cương gốc để hiểu nội dung</li>
                          <li>Viết prompt yêu cầu AI tóm tắt theo từng chương</li>
                          <li>Đối chiếu kết quả AI với tài liệu gốc</li>
                          <li>Chỉnh sửa và bổ sung những phần AI hiểu sai</li>
                          <li>Ghi chú nguồn gốc: "Tóm tắt có hỗ trợ từ ChatGPT"</li>
                        </ol>
                      </div>
                    </div>
                  )
                },
                {
                  title: "⚖️ Bộ nguyên tắc cá nhân sử dụng AI",
                  content: (
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg border border-primary/20">
                        <div className="flex items-start gap-3">
                          <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">1</span>
                          <div>
                            <h5 className="font-semibold">Minh bạch</h5>
                            <p className="text-sm text-muted-foreground">Luôn ghi rõ khi có sử dụng AI trong bài làm.</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg border border-primary/20">
                        <div className="flex items-start gap-3">
                          <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">2</span>
                          <div>
                            <h5 className="font-semibold">Kiểm chứng</h5>
                            <p className="text-sm text-muted-foreground">Không tin tưởng mù quáng — luôn đối chiếu với nguồn đáng tin cậy.</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg border border-primary/20">
                        <div className="flex items-start gap-3">
                          <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">3</span>
                          <div>
                            <h5 className="font-semibold">Hỗ trợ, không thay thế</h5>
                            <p className="text-sm text-muted-foreground">AI là công cụ hỗ trợ tư duy, không phải thay thế quá trình học.</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg border border-primary/20">
                        <div className="flex items-start gap-3">
                          <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">4</span>
                          <div>
                            <h5 className="font-semibold">Phát triển kỹ năng</h5>
                            <p className="text-sm text-muted-foreground">Sử dụng AI để học cách làm, không chỉ để có kết quả.</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg border border-primary/20">
                        <div className="flex items-start gap-3">
                          <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">5</span>
                          <div>
                            <h5 className="font-semibold">Tôn trọng quy định</h5>
                            <p className="text-sm text-muted-foreground">Tuân thủ chính sách của trường và giảng viên về sử dụng AI.</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg border border-primary/20">
                        <div className="flex items-start gap-3">
                          <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">6</span>
                          <div>
                            <h5 className="font-semibold">Bảo mật thông tin</h5>
                            <p className="text-sm text-muted-foreground">Không chia sẻ dữ liệu cá nhân hoặc nhạy cảm với AI.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  title: "💡 Nhận xét & Kỹ năng rút ra",
                  content: (
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-accent mt-0.5" />
                        <p><strong>Đạo đức số:</strong> Trong thời đại AI, liêm chính học thuật cần được hiểu rộng hơn — bao gồm cách sử dụng công nghệ.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-accent mt-0.5" />
                        <p><strong>Tự giác:</strong> Không có hệ thống nào kiểm soát hoàn toàn — trách nhiệm thuộc về người sử dụng.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-accent mt-0.5" />
                        <p><strong>Cân bằng:</strong> Tận dụng lợi ích của AI mà vẫn giữ được quá trình học tập có ý nghĩa.</p>
                      </div>
                    </div>
                  )
                }
              ]}
            />

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-4">Tiếp theo</h3>
          <p className="text-muted-foreground mb-6">
            Xem tổng kết và những bài học rút ra từ quá trình xây dựng portfolio.
          </p>
          <Link 
            to="/conclusion" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Đến trang Kết luận
          </Link>
        </div>
      </section>
    </Layout>
  );
}
