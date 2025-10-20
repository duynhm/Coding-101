def liet_ke_uoc_so_le(n):
    # Khởi tạo biến đếm i bắt đầu từ 1
    i = 1
    # Vòng lặp while sẽ chạy khi i còn nhỏ hơn hoặc bằng n
    while i <= n:
        # Kiểm tra nếu i là ước số của n && i là số lẻ
        if n % i == 0 and i % 2 == 1:
            print(i)
        # Tăng biến đếm i lên 1 đơn vị
        i = i + 1

# Chương trình chính
n = int(input("Nhập vào số nguyên dương n: "))
print(f"Các ước số lẻ của {n} là:")
liet_ke_uoc_so_le(n)
