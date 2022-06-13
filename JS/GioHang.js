var list = [{
    Ten: "Alaska",
    Gia: 150000,
    Anh: "./Ảnh/chó/ALASKA/1.png.jfif",
}]
function addCart(index) {
    var sp = list[index]
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
    }else{
        if (check > -1) {
            listGioHang[check].SoLuong = listGioHang[check].SoLuong+1
        }else{
            listGioHang.push({
                Ten: sp.Ten,
                Gia: sp.Gia,
                Anh: sp.Anh,
                SoLuong: 1
            })
        }
    }
    localStorage.setItem("gioHang",JSON.stringify(listGioHang))
    alert("Them gio hang thanh cong")
}
function updateGioHang(index,flag){
    //up: 1
    //down : 0
    var jsonList = localStorage.getItem("gioHang")
    var listGioHang = JSON.parse(jsonList)
    if(update==1){
        listGioHang[index].SoLuong = listGioHang[index].SoLuong+1
    }else{
        listGioHang[index].SoLuong = listGioHang[index].SoLuong-1
    }
    location.reload()
}

function checkExist(Ten) {
    var index = -1
    var jsonList = localStorage.getItem("gioHang")
    var listGioHang = JSON.parse(jsonList)
    for (var i = 0; i < listGioHang.length; i++) {
        if (listGioHang[0].Ten === Ten) index = i
    }
    return index
}