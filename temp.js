function kiemTraChanNhoHon2004(a, n) {
    // Khởi tạo kết quả ban đầu là false (Không tồn tại)
    let ketqua = false;
    // Khởi tạo biến đếm i
    let i = 0;
    // Vòng lặp while sẽ chạy khi i còn nhỏ hơn n
    while (i < n) {
        // Nếu tìm thấy giá trị chẵn nhỏ hơn 2004
        if (a[i] % 2 === 0 && a[i] < 2004) {
            ketqua = true;
            break; // Thoát khỏi vòng lặp
        }
        // Tăng biến đếm i lên 1 đơn vị
        i = i + 1;
    }
    return ketqua;
}

// Chương trình chính
let n = parseInt(prompt("Nhập số lượng phần tử:"));
let a = [];
for (let i = 0; i < n; i++) {
    let x = parseInt(prompt(`Nhập phần tử thứ ${i}:`));
    a.push(x);
}

if (kiemTraChanNhoHon2004(a, n) === true) {
    alert("Mảng có tồn tại giá trị chẵn nhỏ hơn 2004.");
} else {
    alert("Mảng không tồn tại giá trị chẵn nhỏ hơn 2004.");
}