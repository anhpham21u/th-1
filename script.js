const toggleData1Btn = document.getElementById('toggle-data1');
const toggleData2Btn = document.getElementById('toggle-data2');
const toggleIcon1 = document.getElementById('toggle-icon1');
const toggleIcon2 = document.getElementById('toggle-icon2');
const data1El = document.getElementById('data1');
const data2El = document.getElementById('data2');

toggleData1Btn.addEventListener('click', () => {
    data1El.classList.toggle('hidden');
    toggleIcon1.classList.toggle('rotate-45');
});

toggleData2Btn.addEventListener('click', () => {
    data2El.classList.toggle('hidden');
    toggleIcon2.classList.toggle('rotate-45');
});

// fetch('load_data.php')
//     .then(response => response.text())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => console.error('Lỗi khi lấy dữ liệu:', error))
