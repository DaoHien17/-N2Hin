var list = [{
    Ten: "Alaska",
    Gia: 150000,
    Anh: "./Ảnh/chó/ALASKA/1.png.jfif",
}]


function loadCart() {
    var jsonList = localStorage.getItem("gioHang")
    var listGioHang = JSON.parse(jsonList)
    var tong = 0
    var html = ''
    for (var i = 0; i < listGioHang.length; i++) {
        item = listGioHang[i]
        tong = tong + parseInt(item.SoLuong) * parseInt(item.Gia)
        html = html + ` <tr>
    <td>
        <div class="sanpham">
            <img width="100" src="${item.Anh}" />
            <div class="content_sanpham">
                <p> ${item.Ten} </p>
            </div>
        </div>
    </td>
    <td>${parseInt(item.Gia).toLocaleString()}đ</td>
    <td class="quantity">
        <button onclick="updateGioHang(${i},0)">-</button>
        <input id="q_1" type="text"  value="${item.SoLuong}">
        <button onclick="updateGioHang(${i},1)">+</button>
        <button onclick="deleteGioHang(${i},1)">x</button>
    </td>
    <td>${(parseInt(item.Gia)*parseInt(item.SoLuong)).toLocaleString()}đ</td>
</tr>`
    }
    document.getElementById("gioHang").innerHTML = html;
    document.getElementById("tien").innerHTML = `<div id="tien" class="tien">${tong.toLocaleString()}đ</div>`

}

function deleteAll() {
    localStorage.clear()
    location.href = "index.HTML"
}
loadCart()


function addCart(index) {
    var sp = list[index]
    console.log(sp)
    var check = checkExist(sp.Ten)

    var jsonList = localStorage.getItem("gioHang")
    var listGioHang = JSON.parse(jsonList)
    if (listGioHang == null) {
        listGioHang = []
        listGioHang.push({
            Ten: sp.Ten,
            Gia: sp.Gia,
            Anh: sp.Anh,
            SoLuong: 1
        })
    } else {
        if (check > -1) {
            listGioHang[check].SoLuong = listGioHang[check].SoLuong + 1
        } else {
            listGioHang.push({
                Ten: sp.Ten,
                Gia: sp.Gia,
                Anh: sp.Anh,
                SoLuong: 1
            })
        }
    }
    localStorage.setItem("gioHang", JSON.stringify(listGioHang))
    alert("Them gio hang thanh cong")
}

function updateGioHang(index, flag) {
    //up: 1
    //down : 0
    var jsonList = localStorage.getItem("gioHang")
    var listGioHang = JSON.parse(jsonList)
    if (flag == 1) {
        listGioHang[index].SoLuong = listGioHang[index].SoLuong + 1
    } else {
        if (listGioHang[index].SoLuong - 1 === 0) {
            deleteGioHang(index)
        } else {
            listGioHang[index].SoLuong = listGioHang[index].SoLuong - 1
        }

    }
    localStorage.setItem("gioHang", JSON.stringify(listGioHang))
    location.reload()

}

function deleteGioHang(index) {
    var jsonList = localStorage.getItem("gioHang")
    var listGioHang = JSON.parse(jsonList)
    listGioHang.splice(index, 1)
    localStorage.setItem("gioHang", JSON.stringify(listGioHang))
    location.reload()
}

function checkExist(Ten) {
    var index = -1
    var jsonList = localStorage.getItem("gioHang")
    var listGioHang = JSON.parse(jsonList)
    if (listGioHang != null && listGioHang.length > 0) {
        for (var i = 0; i < listGioHang.length; i++) {
            if (listGioHang[i].Ten === Ten) index = i
        }
    }

    return index
}