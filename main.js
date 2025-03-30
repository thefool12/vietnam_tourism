
var map = L.map('map').setView([21.0285, 105.8542], 13); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var historic = [
    { "ten": "Văn Miếu Quốc Tử Giám", "lat": 21.0281, "lng": 105.8356,
        "diachi": "Số 58 phố Quốc Tử Giám, phường Văn Miếu, quận Đống Đa, Hà Nội.",
        "giave": "70.000 VNĐ/lượt/khách",
        "website": "https://vi.wikipedia.org/wiki/V%C4%83n_Mi%E1%BA%BFu_%E2%80%93_Qu%E1%BB%91c_T%E1%BB%AD_Gi%C3%A1m",
        "hinhanh": "vanMieuQuocTuGiam.jpg"
     },
    { "ten": "Lăng Chủ tịch Hồ Chí Minh", "lat": 21.037005464683496, "lng": 105.83528230635437,
        "diachi": "Số 2 Hùng Vương, phường Điện Biên, quận Ba Đình, Hà Nội.",
        "giave": "Miễn phí",
        "website": "https://vi.wikipedia.org/wiki/L%C4%83ng_Ch%E1%BB%A7_t%E1%BB%8Bch_H%E1%BB%93_Ch%C3%AD_Minh",
        "hinhanh": "langBac.png"
     },
    { "ten": "Hoàng thành Thăng Long", "lat":  21.035353260739303, "lng":105.840549074107781,
        "diachi": " Số 19C đường Hoàng Diệu, phường Điện Biên, quận Ba Đình, Hà Nội.",
        "giave": "70.000 VNĐ/lượt/khách. Người khuyết tật đặc biệt nặng, người dưới 16 tuổi: Miễn phí.",
        "website": "https://vi.wikipedia.org/wiki/Ho%C3%A0ng_th%C3%A0nh_Th%C4%83ng_Long",
        "hinhanh": "hoangThanhThangLong.png"
    },
    { "ten": "Chùa Một Cột", "lat":  21.035866986205736, "lng":105.83364460120636,
        "diachi": "Phố Chùa Một Cột, phường Đội Cấn, quận Ba Đình, Hà Nội.",
        "giave": "Miễn phí. Du khách nước ngoài: 25.000 VNĐ/lượt.",
        "website": "https://vi.wikipedia.org/wiki/Ch%C3%B9a_M%E1%BB%99t_C%E1%BB%99t",
        "hinhanh": "chuaMotCot.png"
    },
    { "ten": "Đền Bạch Mã", "lat": 21.03575826461848, "lng":105.85102642041979,
        "diachi": "Số 76 phố Hàng Buồm, quận Hoàn Kiếm, Hà Nội.",
        "giave": "Miễn phí",
        "website": "https://vi.wikipedia.org/wiki/%C4%90%E1%BB%81n_B%E1%BA%A1ch_M%C3%A3",
        "hinhanh": "denBachMa.jpg"
    },
    { "ten": "Đền Voi Phục", "lat":  21.0308126680967, "lng":105.80420133138648,
        "diachi": "Số 362 phố Kim Mã, phường Ngọc Khánh, quận Ba Đình, Hà Nội.",
        "giave": "Miễn phí",
        "website": "https://vi.wikipedia.org/wiki/%C4%90%E1%BB%81n_Voi_Ph%E1%BB%A5c",
        "hinhanh": "denVoiPhuc.png"
    },
    { "ten": "Đền Kim Liên", "lat": 21.010549017407275,  "lng":105.83807567153673,
        "diachi": "Số 144 phố Kim Hoa, phường Phương Liên, quận Đống Đa, Hà Nội.",
        "giave": "Miễn phí",
        "website": "https://vi.wikipedia.org/wiki/%C4%90%E1%BB%81n_Kim_Li%C3%AAn",
        "hinhanh": "denKimLien.png"
    },
    { "ten": "Đền Quán Thánh", "lat": 21.043079120121853, "lng":105.8366381657218,
        "diachi": "Ngã tư đường Thanh Niên và Quán Thánh, quận Ba Đình, Hà Nội.",
        "giave": "10.000 VNĐ/người, miễn phí đối với trẻ nhỏ.",
        "website": "https://vi.wikipedia.org/wiki/%C4%90%E1%BB%81n_Qu%C3%A1n_Th%C3%A1nh",
        "hinhanh": "denQuanThanh.png"
    },
    { "ten": "Di tích Nhà tù Hỏa Lò", "lat":  21.025352681963373,"lng":105.84660424330339,
        "diachi": "Số 1, phố Hỏa Lò, quận Hoàn Kiếm, Hà Nội.",
        "giave": "50.000 VNĐ/lượt/khách. Người khuyết tật đặc biệt nặng, trẻ dưới 16 tuổi: Miễn phí.",
        "website": "https://vi.wikipedia.org/wiki/Nh%C3%A0_t%C3%B9_H%E1%BB%8Fa_L%C3%B2",
        "hinhanh": "nhaTuHoaLo.png"
    },
    { "ten": "Tháp nước Hàng Đậu", "lat": 21.040177197675803, "lng":105.84754592651926,
        "diachi": "Phố Hàng Đậu, phường Quán Thánh, quận Ba Đình, Hà Nội.",
        "giave": "Du khách được chụp ảnh miễn phí bên ngoài.",
        "website": "https://vi.wikipedia.org/wiki/Th%C3%A1p_n%C6%B0%E1%BB%9Bc_H%C3%A0ng_%C4%90%E1%BA%ADu",
        "hinhanh": "thapNuocHangDau.png"
    },
    { "ten": "Di tích Thành Cổ Loa", "lat":  21.112224018523808, "lng":105.87167528130901,
        "diachi": "Xã Cổ Loa, huyện Đông Anh, thành phố Hà Nội.",
        "giave": "Người lớn: 30.000 VNĐ/lượt/khách. Người khuyết tật đặc biệt nặng, trẻ dưới 16 tuổi: Miễn phí.",
        "website": "https://vi.wikipedia.org/wiki/Th%C3%A0nh_C%E1%BB%95_Loa",
        "hinhanh": "thanhCoLoa.png"
    },
    { "ten": "Đền Ngọc Sơn ", "lat":   21.030788626312237, "lng":105.8526498262858,
        "diachi": "Hồ Hoàn Kiếm, thuộc phố Hàng Trống, quận Hoàn Kiếm, Hà Nội.",
        "giave": "Người lớn: 30.000 VNĐ/người. Trẻ em dưới 16 tuổi: Miễn phí.",
        "website": "https://vi.wikipedia.org/wiki/%C4%90%E1%BB%81n_Ng%E1%BB%8Dc_S%C6%A1n",
        "hinhanh": "denNgocSon.jpg"
    },
    { "ten": "Cột Cờ Hà Nội  ", "lat":   21.032599701358006,  "lng":105.83987377949472,
        "diachi": "Số 28A Điện Biên Phủ, phường Điện Biên, quận Ba Đình, Hà Nội.",
        "giave": "Người lớn: 20.000 VNĐ/người. Trẻ em dưới 15 tuổi, người có công cách mạng,…: Miễn phí.",
        "website": "https://vi.wikipedia.org/wiki/C%E1%BB%99t_c%E1%BB%9D_H%C3%A0_N%E1%BB%99i",
        "hinhanh": "cotCoHaNoi.jpg"
    },
    { "ten": "Gò Đống Đa ", "lat":   21.01190892420983, "lng":105.82426475357398,
        "diachi": "Phố Thanh Hà, quận Hoàn Kiếm, ngã tư Hàng Chiểu, Đào Duy Từ, Hà Nội.",
        "giave": "Miễn phí.",
        "website": "https://vi.wikipedia.org/wiki/G%C3%B2_%C4%90%E1%BB%91ng_%C4%90a",
        "hinhanh": "goDongDa.jpg"
    },
    { "ten": "Chùa Láng ", "lat":   21.023415899307317, "lng":105.80259595719407,
        "diachi": "Số 112 phố Chùa Láng, phường Láng Thượng, quận Đống Đa, Hà Nội.",
        "giave": "Miễn phí.",
        "website": "https://vi.wikipedia.org/wiki/Ch%C3%B9a_L%C3%A1ng",
        "hinhanh": "chuaLang.jpg"
    },
    { "ten": "Chùa Trấn Quốc", "lat":   21.04795, "lng":105.83673,
        "diachi": "Đường Thanh Niên, phường Yên Phụ, quận Tây Hồ, Hà Nội.",
        "giave": "5.000 VNĐ/người/lượt.",
        "website": "https://vi.wikipedia.org/wiki/Ch%C3%B9a_Tr%E1%BA%A5n_Qu%E1%BB%91c",
        "hinhanh": "chuaTranQuoc.jpg"
    },

];

var markers = [];
function addMarkers(data) {
    markers.forEach(m => map.removeLayer(m.marker));
    markers = [];
    
    data.forEach(function (xem) {
        var popupContent = `
            <b>${xem.ten}</b><br>
            <img src="${xem.hinhanh}" alt="${xem.ten}" style="width:150px; height:auto; border-radius:5px;"><br>
            <b>Địa chỉ:</b> ${xem.diachi}<br>
            <b>Giá vé:</b> ${xem.giave}<br>
            <b>Website:</b> <a href="${xem.website}" target="_blank">Xem chi tiết</a>
        `;
        
        var marker = L.marker([xem.lat, xem.lng]).addTo(map)
            .bindPopup(popupContent);

        markers.push({ marker, ten: xem.ten.toLowerCase() });
    });
}

addMarkers(historic);

document.getElementById("search-btn").addEventListener("click", function() {
    var searchText = document.getElementById("search").value.toLowerCase();
    var filteredData = historic.filter(xem => xem.ten.toLowerCase().includes(searchText));
    addMarkers(filteredData);
});
document.getElementById("locate-btn").addEventListener("click", function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLat = position.coords.latitude;
            var userLng = position.coords.longitude;

            // Thêm hoặc cập nhật marker vị trí người dùng
            if (window.userMarker) {
                map.removeLayer(window.userMarker);
            }
            window.userMarker = L.marker([userLat, userLng], {
                icon: L.icon({
                    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Icon vị trí người dùng
                    iconSize: [30, 30]
                })
            }).addTo(map).bindPopup("Vị trí của bạn").openPopup();

            map.setView([userLat, userLng], 14);
        }, function(error) {
            alert("Không thể lấy vị trí của bạn. Hãy kiểm tra quyền truy cập vị trí!");
        });
    } else {
        alert("Trình duyệt của bạn không hỗ trợ định vị!");
    }
});




