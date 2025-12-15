import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"; // Import từ shadcn

const AppPagination = ({ currentPage, totalPages, onPageChange }) => {
  // 1. Nếu chỉ có 1 trang hoặc không có trang nào -> Ẩn luôn
  if (totalPages <= 1) return null;

  // 2. Logic tạo danh sách trang cần hiển thị (Xử lý Ellipsis)
  // Ví dụ: Đang ở trang 5/100 -> Hiển thị: 1 ... 4 [5] 6 ... 100
  const generatePaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5; // Số lượng nút tối đa muốn hiện (không tính First/Last)

    if (totalPages <= maxVisiblePages) {
      // Trường hợp ít trang: Hiện hết (1 2 3 4 5)
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      // Trường hợp nhiều trang: Cần tính toán hiện dấu ...
      
      // Luôn hiện trang 1
      items.push(1);

      // Nếu trang hiện tại > 3, hiện dấu ... bên trái
      if (currentPage > 3) {
        items.push("ellipsis-start");
      }

      // Hiện các trang xung quanh trang hiện tại (trừ 1 và Last)
      // Ví dụ current=5 -> range là [4, 5, 6]
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        items.push(i);
      }

      // Nếu trang hiện tại < total - 2, hiện dấu ... bên phải
      if (currentPage < totalPages - 2) {
        items.push("ellipsis-end");
      }

      // Luôn hiện trang cuối
      items.push(totalPages);
    }
    return items;
  };

  return (
    <Pagination className="my-8">
      <PaginationContent>
        {/* Nút Previous */}
        <PaginationItem>
          <PaginationPrevious 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
            // Disable style thủ công vì shadcn PaginationLink không có prop disabled native tốt
            className={currentPage <= 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>

        {/* Render danh sách số trang đã tính toán ở trên */}
        {generatePaginationItems().map((page, index) => {
          if (page === "ellipsis-start" || page === "ellipsis-end") {
            return (
              <PaginationItem key={index}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(page);
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Nút Next */}
        <PaginationItem>
          <PaginationNext 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
            className={currentPage >= totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default AppPagination;