fetch('load_data.php')
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Lỗi khi lấy dữ liệu:', error))