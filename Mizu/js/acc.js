// hồ sơ của tôi. chọn ngày, tháng, năm
var yearSelect = document.getElementById("year");

// Lấy thẻ select cho tháng
var monthSelect = document.getElementById("month");

// Lấy thẻ select cho ngày
var daySelect = document.getElementById("day");

// Lấy năm hiện tại
var currentYear = new Date().getFullYear();

// Tạo các option cho năm và thêm vào thẻ select năm
for (var i = currentYear; i >= 1900; i--) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    yearSelect.appendChild(option);
}

// Tạo các option cho tháng (1-12) và thêm vào thẻ select tháng
for (var i = 1; i <= 12; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = "Tháng" + i;
    monthSelect.appendChild(option);
}

// Hàm để cập nhật danh sách ngày dựa trên tháng và năm
function updateDays() {
    var selectedYear = yearSelect.value;
    var selectedMonth = monthSelect.value;
    var daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();

    // Xóa tất cả các option ngày cũ
    daySelect.innerHTML = "";

    // Tạo các option cho ngày và thêm vào thẻ select ngày
    for (var i = 1; i <= daysInMonth; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        daySelect.appendChild(option);
    }
}

// Gọi hàm updateDays khi thay đổi tháng hoặc năm
yearSelect.addEventListener("change", updateDays);
monthSelect.addEventListener("change", updateDays);

// Khởi đầu ban đầu bằng cách gọi updateDays để cập nhật ngày cho tháng và năm hiện tại
updateDays();

// Hàm xử lý khi người dùng nhấn vào nút "Lưu thành công"

var saveButton = document.getElementById("saveButton");

// Lấy cửa sổ modal
var modal = document.getElementById("myModal");

// Lấy phần tử chứa thông báo trong modal
var modalContent = document.querySelector(".modal-content1");

// Hàm xử lý khi người dùng nhấn vào nút "Lưu"
function saveData() {
    var selectedYear = yearSelect.value;
    var selectedMonth = monthSelect.value;
    var selectedDay = daySelect.value;

    // Thực hiện xử lý lưu dữ liệu ở đây (ví dụ: hiển thị cửa sổ modal)
    modal.style.display = "block";

    // Tự động ẩn cửa sổ modal sau 2 giây
    setTimeout(function() {
        modal.style.display = "none";
    }, 1000); // 2 giây
}



// Thêm sự kiện click cho nút "Lưu"
saveButton.addEventListener("click", saveData);

function showPage(pageId) {
  // Lấy tất cả các div có class 'hoso' và ẩn chúng
  const allPages = document.querySelectorAll('.hoso');
  allPages.forEach(function(page) {
    page.style.display = 'none';
  });

  // Hiển thị trang được chọn bằng cách đặt display thành 'block'
  const selectedPage = document.querySelector(`.${pageId}`);
  selectedPage.style.display = 'block';
}





const input = document.querySelector(".sothe input");
const clearIcon = document.querySelector(".clear-icon");

input.addEventListener("input", () => {
  if (input.value.trim() !== "") {
    clearIcon.style.display = "block";
  } else {
    clearIcon.style.display = "none";
  }
});

clearIcon.addEventListener("click", () => {
  input.value = "";
  clearIcon.style.display = "none";
});

const addCardButton = document.getElementById("addCardButton");
const registrationForm = document.getElementById("registrationForm");

addCardButton.addEventListener("click", function() {
    registrationForm.style.display = "block"; // Hiển thị thẻ đăng ký khi click vào nút "Thêm thẻ mới"
});
const newButton = document.getElementById("newButton");
const alertContent = document.getElementById("alertContent");

newButton.addEventListener("click", function() {
    alertContent.style.display = "block"; // Hiển thị phần tử "alertContent" khi click vào nút "newButton"
});


const closeAlertButtonn = document.getElementById("closeAlertButtonn");
const saveButtonn = document.getElementById("saveButtonn");

// Ẩn phần tử thông báo ban đầu
myModal.style.display = "none";

// Bắt sự kiện click nút "Trở lại" để ẩn phần tử thông báo
closeAlertButtonn.addEventListener("click", function() {
  registrationForm.style.display = "none";
});

// Bắt sự kiện click nút "Lưu" để hiển thị phần tử thông báo
saveButtonn.addEventListener("click", function() {
  registrationForm.style.display = "none";
});

//chỉnh chọn địa chỉ
const newB = document.getElementById("newB");
const alert = document.getElementById("alert");
const closeAlert = document.getElementById("closeAlert");

// Bắt sự kiện khi nút "Thêm tài khoản ngân hàng" được bấm
newB.addEventListener("click", function() {
    // Hiển thị cảnh báo
    alert.style.display = "block"; // Hiển thị nội dung cảnh báo
});

// Bắt sự kiện khi nút "Đóng" trên cảnh báo được bấm
closeAlert.addEventListener("click", function() {
    alert.style.display = "none"; // Ẩn nội dung cảnh báo
});



const saveB = document.getElementById("saveB");
saveB.addEventListener("click", function() {
  alert.style.display = "none";
});


const tinhThanhSelect = document.getElementById("tinhThanh");
const quanHuyenSelect = document.getElementById("quanHuyen");
const phuongXaSelect = document.getElementById("phuongXa");

// Danh sách các tỉnh/thành phố của Việt Nam
const tinhThanhData = {
  "Hà Nội": {
      "Ba Đình": ["Cống Vị", "Điện Biên", "Trúc Bạch", "Ngọc Hà", "Kim Mã", "Nguyễn Trung Trực", "Phan Đình Phùng", "Hà Cầu", "Trần Hưng Đạo", "Vĩnh Phúc"],
      "Hoàn Kiếm": ["Hàng Bài", "Hàng Gai", "Hàng Trống", "Hòan Kiếm", "Lý Thái Tổ", "Phan Chu Trinh", "Phúc Tân", "Tràng Tiền", "Hàng Bồ"],
      // Thêm quận/huyện của Hà Nội
  },
  "Hồ Chí Minh": {
      "Quận 1": ["Bến Nghé", "Bến Thành", "Cô Giang", "Cầu Kho", "Đa Kao", "Nguyễn Cư Trinh", "Nguyễn Thái Bình", "Phạm Ngũ Lão", "Tân Định"],
      "Quận 2": ["An Lợi Đông", "An Phú", "Bình Trưng Đông", "Bình Trưng Tây", "Cát Lái", "Thạnh Mỹ Lợi", "Thảo Điền"],
      // Thêm quận/huyện của Hồ Chí Minh
  },

  "An Giang": {
      "Huyện An Phú":[],
      "Huyện Châu Phú":[],
      "Huyện Châu Thành":[],
      "Huyện Chợ Mới":[],
      "Huyện Phú Tân":[],
      "Huyện Thoại Sơn":[],
      "Huyện Tịnh Biên":[],
      "Huyện Tri Tôn":[],
      "Thành Phố Châu Đốc":[],
      "Thành Phố Long Xuyên":[],
      "Thị Xã Tân Châu":[],
  }
  
  // Thêm các tỉnh/thành phố khác
};


// Dữ liệu về quận/huyện và phường/xã
const quanHuyenData = {};
const phuongXaData = {};

// Thêm danh sách các tỉnh/thành phố vào dropdown
for (const tinhThanh in tinhThanhData) {
    const option = document.createElement("option");
    option.value = tinhThanh;
    option.textContent = tinhThanh;
    tinhThanhSelect.appendChild(option);
}

// Thêm sự kiện thay đổi cho tỉnh/thành phố
tinhThanhSelect.addEventListener("change", function () {
    const selectedTinhThanh = tinhThanhSelect.value;
    quanHuyenSelect.innerHTML = "<option value=''>Chọn quận/huyện</option>";

    if (selectedTinhThanh) {
        quanHuyenSelect.removeAttribute("disabled");
        const quanHuyenOptions = quanHuyenData[selectedTinhThanh];
        quanHuyenOptions.forEach((quanHuyen) => {
            const option = document.createElement("option");
            option.value = quanHuyen;
            option.textContent = quanHuyen;
            quanHuyenSelect.appendChild(option);
        });
    } else {
        quanHuyenSelect.setAttribute("disabled", true);
        phuongXaSelect.setAttribute("disabled", true);
    }
    phuongXaSelect.innerHTML = "<option value=''>Chọn phường/xã</option>";
});

// Thêm sự kiện thay đổi cho quận/huyện
quanHuyenSelect.addEventListener("change", function () {
    const selectedQuanHuyen = quanHuyenSelect.value;
    phuongXaSelect.innerHTML = "<option value=''>Chọn phường/xã</option>";

    if (selectedQuanHuyen) {
        phuongXaSelect.removeAttribute("disabled");
        const phuongXaOptions = phuongXaData[selectedQuanHuyen];
        phuongXaOptions.forEach((phuongXa) => {
            const option = document.createElement("option");
            option.value = phuongXa;
            option.textContent = phuongXa;
            phuongXaSelect.appendChild(option);
        });
    } else {
        phuongXaSelect.setAttribute("disabled", true);
    }
});

var checkbox = document.getElementById("myCheckbox");
checkbox.checked = true;
var checkboxx = document.getElementById("myCheckboxx");
checkboxx.checked = true;
var checkbo = document.getElementById("myCheckbo");
checkbo.checked = true;





function toggleDropdown(dropdownId) {
  var dropdownContent = document.getElementById("dropdown-" + dropdownId);
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}

function showSection(sectionId) {
  var sections = document.querySelectorAll('.section');
  sections.forEach(function(section) {
    section.style.display = 'none';
  });

  var selectedSection = document.querySelector('.' + sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
  }
}

showSections(['donmua-tatca', 'tatcaV']);





// Ngân hàng
// Lấy các phần tử HTML với tên ID mới
const alertBox = document.getElementById("alertBox");
const closeAlertButton = document.getElementById("closeAlertButton");

// Ban đầu ẩn alertContent và registrationForm
alertContent.style.display = "none";
document.getElementById("registrationForm").style.display = "none";

// Bắt sự kiện khi nút "Thêm tài khoản ngân hàng" được bấm
newButton.addEventListener("click", function() {
    alertBox.style.display = "block"; // Hiển thị khung cảnh báo
    alertContent.style.display = "block"; // Hiển thị nội dung cảnh báo
});

// Bắt sự kiện khi nút "Đóng" trên cảnh báo được bấm
closeAlertButton.addEventListener("click", function() {
    // alertBox.style.display = "none"; // Ẩn khung cảnh báo
    alertContent.style.display = "none"; // Ẩn nội dung cảnh báo
    
});

const saveButtonnn = document.getElementById("saveButtonnn");
saveButtonnn.addEventListener("click", function() {
  alertContent.style.display = "none";
});

// Lắng nghe sự kiện click trên nút "+Thêm thẻ mới"
document.getElementById('addCardButton').addEventListener('click', function() {
  // Lấy phần tử của khung đăng ký
  const registrationForm = document.getElementById('registrationForm');

  // Kiểm tra trạng thái hiển thị của khung đăng ký
  if (registrationForm.style.display === 'none' || registrationForm.style.display === '') {
    // Nếu đang ẩn, hiển thị khung đăng ký
    registrationForm.style.display = 'block';
  } else {
    // Nếu đang hiển thị, ẩn khung đăng ký
    registrationForm.style.display = 'none';
  }
});


