const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.innerHTML = 'Giao diện Sáng ☀️';
    } else {
        themeToggleBtn.innerHTML = 'Đổi màu chủ đề 🌙';
    }
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '') {
        alert('Lỗi: Vui lòng nhập Họ và tên!');
        return;
    }

    if (email === '') {
        alert('Lỗi: Vui lòng nhập địa chỉ Email!');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Lỗi: Định dạng Email không hợp lệ!');
        return;
    }

    if (message === '') {
        alert('Lỗi: Vui lòng nhập Nội dung liên hệ!');
        return;
    }

    alert('Đã gửi thông tin liên hệ thành công!');
    
    contactForm.reset();
});
