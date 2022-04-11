var step = 1;

var state = 1; //chua giay, cat, ban   tb9-8  tb1
// state = 2; //chua cat, ban tb9-9  tb1
// state = 3; //chua ban tb9-10
// state = 4; //chua ban , than  tb9-5
// state = 0 //sạch


if (state == 1) {
    $(".binh1").attr("src", "./images/tb1.png")
    $(".binh2").attr("src", "./images/tb9-8.png")
} else if (state == 2) {
    $(".binh1").attr("src", "./images/tb1.png")
    $(".binh2").attr("src", "./images/tb9-9.png")
} else if (state == 3) {
    $(".binh1").attr("src", "./images/tb1.png")
    $(".binh2").attr("src", "./images/tb9-10.jpeg")
} else if (state == 4) {
    $(".binh1").attr("src", "./images/tb1.png")
    $(".binh2").attr("src", "./images/tb9-5.png")
} else if (state == 0) {
    $(".binh1").attr("src", "./images/tb1.png")
    $(".binh2").attr("src", "./images/tb9-10.jpeg")
}

huongdan();

function mute() {
    $(".audio")[0].muted = true;
    $(".audio")[1].muted = true;
    $(".audio")[2].muted = true;
    $(".audio")[3].muted = true;
    $(".audio")[4].muted = true;
    $(".audio")[5].muted = true;
    $(".audio")[6].muted = true;
    $(".audio")[7].muted = true;
    $(".audio")[8].muted = true;
    $(".audio")[9].muted = true;
    $(".audio")[10].muted = true;
    $(".audio")[11].muted = true;
    $(".audio")[12].muted = true;
    $(".audio")[13].muted = true;
    $(".audio")[14].muted = true;
    $(".audio")[15].muted = true;
    $(".audio")[16].muted = true;
    $(".audio")[17].muted = true;
    $(".audio")[18].muted = true;
    $(".audio")[19].muted = true;
    $(".audio")[20].muted = true;
}

function phattieng (stt) {
    mute()
    $(".audio")[stt].muted = false;
    $(".audio")[stt].play();
}

var stepStatus = "dang" // dodep, xong

function drag(ev) {

    var idTB = ev.target.id
    if (idTB == "binh1") {
        if (checkbinhrong() == "b1") {
            binh1donuoc(false)
        } else {
            if (checkdungcudangdung().includes("giay") && !checkdungcudangdung().includes("pheu")) {
                setTimeout(function() {
                    $("#giay-uot").addClass("hien-giay-uot2")
                    setTimeout(function() {
                        $("#giay-uot").removeClass("hien-giay-uot2")
                        $("#giay-loc").css("opacity", 1)
                    }, 8000)
                    themNote("Không được rồi! Giấy bị dính nước sẽ mềm nên trượt vào cốc. Con cần tìm một dụng cụ nào đó để đỡ giấy lọc.", 4000)
                    phattieng(5) 
                    $("#giay-loc").css("opacity", 0)
                }, 4000)
            }
            if (checkdungcudangdung() == "ray") {
                if (state == 1) {
                    setTimeout(function() {
                        state = 2
                        $("#vun-giay").addClass("hien-vun-giay2")
                        setTimeout(function() {
                            $("#vun-giay").removeClass("hien-vun-giay2")
                            themNote("Tuyệt vời, vụn nilon đã được giữ lại trên rây do lớn hơn lỗ rây nên bị kẹt lại. Nhưng nước, cát đã chảy xuyên qua lỗ rây. Các con hãy thử nghĩ cách để lọc cát ra khỏi nước nhé", 8000)
                            phattieng(0) 
                        }, 3000)

                    }, 2000)

                }
            }
            if (checkdungcudangdung().includes("giay") && checkdungcudangdung().includes("pheu")) {
                if (state == 1) {
                    setTimeout(function() {
                        $("#nuoc-tran").addClass("nuoc-tran2")
                        setTimeout(function() {
                            $("#nuoc-tran").removeClass("nuoc-tran2")
                            themNote("Không được rồi! Vụn nilon đã bịt mất các lỗ nhỏ trên giấy lọc nên nước đã bị tràn ra ngoài! Ta phải tách vụn nilon ra khỏi nước trước. Có cách nào để lọc bỏ các vụn nilon không?", 8000)
                            phattieng(21) 
                        }, 3000)

                    }, 3000)
                } else if (state == 2) {
                    setTimeout(function() {
                        state = 3
                        $("#cat").addClass("hien-vun-cat2")
                        setTimeout(function() {
                            $("#cat").removeClass("hien-vun-cat2")
                            themNote("Con làm tốt lắm! Hạt cát có kích thước lớn hơn lỗ giấy lọc, vì vậy cát sẽ đọng lại trên giấy lọc. Nước có kích thước hạt nhỏ hơn nên chảy xuyên qua giấy.", 11000)
                            phattieng(3) 
                        }, 3000)

                    }, 2000)
                } else if (state == 4) {
                    setTimeout(function() {
                        state = 0;
                    }, 3000)
                }
            }
            binh1donuoc(true)
        }

    } else if (idTB == "binh2") {
        if (checkbinhrong() != "b1") {
            binh2donuoc(false)
        } else {
            if (checkdungcudangdung().includes("giay") && !checkdungcudangdung().includes("pheu")) {
                setTimeout(function() {
                    $("#giay-uot").addClass("hien-giay-uot1")
                    setTimeout(function() {
                        $("#giay-uot").removeClass("hien-giay-uot1")
                        $("#giay-loc").css("opacity", 1)
                    }, 8000)
                    themNote("Không được rồi! Giấy bị dính nước sẽ mềm nên trượt vào cốc. Con cần tìm một dụng cụ nào đó để đỡ giấy lọc.", 4000)
                    phattieng(5) 
                    $("#giay-loc").css("opacity", 0)
                }, 4000)
            }
            if (state == 1) {
                if (checkdungcudangdung() == "ray") {
                    setTimeout(function() {
                        state = 2
                        $("#vun-giay").addClass("hien-vun-cat1")
                        setTimeout(function() {
                            $("#vun-giay").removeClass("hien-vun-cat1")
                            themNote("Tuyệt vời, vụn nilon đã được giữ lại trên rây do lớn hơn lỗ rây nên bị kẹt lại. Nhưng nước, cát đã chảy xuyên qua lỗ rây. Các con hãy thử nghĩ cách để lọc cát ra khỏi nước nhé", 4000)
                            phattieng(0) 
                        }, 3000)

                    }, 3000)

                }
            }
            if (checkdungcudangdung().includes("giay") && checkdungcudangdung().includes("pheu")) {
                if (state == 1) {
                    setTimeout(function() {
                        $("#nuoc-tran").addClass("nuoc-tran1")
                        setTimeout(function() {
                            $("#nuoc-tran").removeClass("nuoc-tran1")
                            themNote("Không được rồi! Vụn nilon đã bịt mất các lỗ nhỏ trên giấy lọc nên nước đã bị tràn ra ngoài! Ta phải tách vụn nilon ra khỏi nước trước. Có cách nào để lọc bỏ các vụn nilon không?", 4000)
                            phattieng(21) 
                        }, 3000)

                    }, 2000)
                } else if (state == 2) {
                    setTimeout(function() {
                        state = 3
                        $("#cat").addClass("hien-vun-cat1")
                        setTimeout(function() {
                            $("#cat").removeClass("hien-vun-cat1")
                            themNote("Con làm tốt lắm! Hạt cát có kích thước lớn hơn lỗ giấy lọc, vì vậy cát sẽ đọng lại trên giấy lọc. Nước có kích thước hạt nhỏ hơn nên chảy xuyên qua giấy.", 11000)
                            phattieng(3) 
                        }, 3000)

                    }, 2000)
                } else if (state == 4) {
                    setTimeout(function() {
                        state = 0;
                    }, 3000)
                }
            }
            binh2donuoc(true)
        }

    } else if (idTB == "pheu") {

        if (state == 1) {
            if (checkdungcudangdung() !== "ray" && checkdungcudangdung() !== "giay") {
                datpheu(true)
                themNote("Chỉ có phễu thôi không đủ. Con cần thêm một vật dụng nữa để lọc nước.", 6000)
                phattieng(19) 
            } else {
                datpheu(false)
            }
        } else {
            datpheu(true)
        }
    } else if (idTB == "giay-loc") {
        if (checkdungcudangdung() == "ray") {
            themNote("Không được rồi! Con thử nghĩ cách khác xem.", 4000)
            phattieng(7) 
        } else {
            datloc()
        }
    } else if (idTB == "ray") {
        if (state == 1) {
            if (checkdungcudangdung() === "pheu" || checkdungcudangdung() === "giay")
                datray(false)
            else {
                datray(true)
            }
        } else if (state == 2) {
            if (checkdungcudangdung() === "pheu" || checkdungcudangdung() === "giay")
                datray(false)
            else {
                datray(true)
            }
        } else {
            datray(true)
        }


    } else if (idTB == "dua") {
        datdua()
    } else if (idTB == "than-hoat-tinh") {
        if (state != 3 && state != 4) {
            dothanvaobinh(false)
        } else {
            dothanvaobinh(true)
        }

    }
}

setTimeout(function() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("main-layout").style.display = "block";
}, 0);

function dothanvaobinh(active) {
    $(".bao-ngoai").toggleClass("bao")
    if (active) {
        if (checkbinhrong() != "b1") {
            setTimeout(function() {
                $("#do-than").addClass("hien-than2")
                setTimeout(function() {
                    $("#do-than").removeClass("hien-than2")
                    $(".binh2").attr("src", "./images/tb1.png")
                    $(".binh1").attr("src", "./images/tb9-12.png")
                    state = 4
                    themNote("Than hoạt tính có tác dụng lọc màu và khử cả được mùi cho nước đấy con ạ. Tuy nhiên, nước hiện tại vẫn đang có màu xám do than hoạt tính. Con hãy tìm cách lọc than hoạt tính ra khỏi nước để nước trong trở lại nhé! ", 14000)
                    phattieng(10) 
                }, 3000)

            }, 2000)
            $(".than-hoat-tinh").toggleClass("do-than-binh1")
            setTimeout(function() {
                $(".than-hoat-tinh").toggleClass("do-than-binh1")
                $(".bao-ngoai").toggleClass("bao")
            }, 4000)
        } else {
            setTimeout(function() {
                $("#do-than").addClass("hien-than1")
                setTimeout(function() {
                    $("#do-than").removeClass("hien-than1")
                    $(".binh1").attr("src", "./images/tb1.png")
                    $(".binh2").attr("src", "./images/tb9-12.png")
                    state = 4
                    themNote("Than hoạt tính có tác dụng lọc màu và khử cả được mùi cho nước đấy con ạ. Tuy nhiên, nước hiện tại vẫn đang có màu xám do than hoạt tính. Con hãy tìm cách lọc than hoạt tính ra khỏi nước để nước trong trở lại nhé! ", 14000)
                    phattieng(10) 
                }, 3000)

            }, 2000)
            $(".than-hoat-tinh").toggleClass("do-than-binh2")
            setTimeout(function() {
                $(".than-hoat-tinh").toggleClass("do-than-binh2")
                $(".bao-ngoai").toggleClass("bao")
            }, 4000)
        }

    } else {
        $(".than-hoat-tinh").toggleClass("chon-sai")
        themNote("Ý tưởng hay đấy! Nhưng con chỉ nên sử dụng than hoạt tính để khử màu cho nước khi không còn các tạp chất bẩn như đá và cát ở trong nước nữa. Con hãy nghĩ cách loại bỏ các chất bẩn ra khỏi nước nhé.", 14000)
        phattieng(18)
        setTimeout(function() {
            $(".than-hoat-tinh").toggleClass("chon-sai")
            $(".bao-ngoai").toggleClass("bao")
        }, 1200)
    }

}

function binh1donuoc(active) {
    $(".bao-ngoai").toggleClass("bao")
    if (active) {
        $(".binh1").toggleClass("do-binh-1")
        setTimeout(function() {
            $(".binh1").toggleClass("do-binh-1")
            if (state == 1) {
                $(".binh1").attr("src", "./images/tb1.png")
                $(".binh2").attr("src", "./images/tb9-8.png")
            } else if (state == 2) {
                $(".binh1").attr("src", "./images/tb1.png")
                $(".binh2").attr("src", "./images/tb9-9.png")
            } else if (state == 3) {
                $(".binh1").attr("src", "./images/tb1.png")
                $(".binh2").attr("src", "./images/tb9-5.png")
            } else if (state == 4) {
                $(".binh1").attr("src", "./images/tb1.png")
                $(".binh2").attr("src", "./images/tb9-12.png")
            } else if (state == 0) {
                $(".binh1").attr("src", "./images/tb1.png")
                $(".binh2").attr("src", "./images/tb9-10.jpeg")
                setTimeout(function() {
                    themNote("Thành công rồi! Nước đã sạch sẽ trở lại. Con đã hoàn thành xuất sắc giúp bạn nước trở nên sạch sẽ rồi đấy. Tuy nhiên, cách lọc này chỉ loại bỏ được một số chất không tan trong nước. Các con cần đun sôi nước trước khi uống để tiêu diệt được hết các vi khuẩn và loại bỏ các chất độc còn tồn tại trong nước.", 20000)
                    phattieng(11)
                    $(".dungcu").css("opacity", "0")
                    $(".hp").css("display", "block")
                    $(".button-don-dep").css("display", "block")
                }, 5000)
            }
            resetdungcu()
            $(".bao-ngoai").toggleClass("bao")
        }, 4000)


    } else {
        $(".binh1").toggleClass("chon-sai")
        setTimeout(function() {
            $(".binh1").toggleClass("chon-sai")
            $(".bao-ngoai").toggleClass("bao")
        }, 1200)
    }

}

function binh2donuoc(active) {
    $(".bao-ngoai").toggleClass("bao")
    if (active) {
        $(".binh2").toggleClass("do-binh-2")
        setTimeout(function() {
            $(".binh2").toggleClass("do-binh-2")
            if (state == 1) {
                $(".binh2").attr("src", "./images/tb1.png")
                $(".binh1").attr("src", "./images/tb9-8.png")
            } else if (state == 2) {
                $(".binh2").attr("src", "./images/tb1.png")
                $(".binh1").attr("src", "./images/tb9-9.png")
            } else if (state == 3) {
                $(".binh2").attr("src", "./images/tb1.png")
                $(".binh1").attr("src", "./images/tb9-5.png")
            } else if (state == 4) {
                $(".binh2").attr("src", "./images/tb1.png")
                $(".binh1").attr("src", "./images/tb9-12.png")
            } else if (state == 0) {
                $(".binh2").attr("src", "./images/tb1.png")
                $(".binh1").attr("src", "./images/tb9-10.jpeg")
                setTimeout(function() {
                    themNote("Thành công rồi! Nước đã sạch sẽ trở lại. Con đã hoàn thành xuất sắc giúp bạn nước trở nên sạch sẽ rồi đấy. Tuy nhiên, cách lọc này chỉ loại bỏ được một số chất không tan trong nước. Các con cần đun sôi nước trước khi uống để tiêu diệt được hết các vi khuẩn và loại bỏ các chất độc còn tồn tại trong nước.", 20000)
                    phattieng(11)
                    $(".dungcu").css("opacity", "0")
                    $(".hp").css("display", "block")
                    $(".button-don-dep").css("display", "block")
                }, 5000)
            }
            resetdungcu()
            $(".bao-ngoai").toggleClass("bao")
        }, 4000)
    } else {
        $(".binh2").toggleClass("chon-sai")
        setTimeout(function() {
            $(".binh2").toggleClass("chon-sai")
            $(".bao-ngoai").toggleClass("bao")
        }, 1200)
    }

}

function resetdungcu() {
    setTimeout(function() {
        $(".ray").removeClass("ray-binh1")
        $(".pheu").removeClass("pheu-binh1")
        $(".giay-loc").removeClass("loc-binh1")
        $(".ray").removeClass("ray-binh2")
        $(".pheu").removeClass("pheu-binh2")
        $(".giay-loc").removeClass("loc-binh2")
    }, 1000)
}

function checkdungcudangdung() {
    var ray = $("#ray").attr('class')
    var pheu = $("#pheu").attr('class')
    var giay = $("#giay-loc").attr('class')
    var rs = "";
    if (ray.includes("ray-binh1") || ray.includes("ray-binh2")) {
        rs = rs + "ray"
    }

    if (pheu.includes("pheu-binh1") || pheu.includes("pheu-binh2")) {
        rs = rs + "pheu"
    }

    if (giay.includes("loc-binh1") || giay.includes("loc-binh2")) {
        rs = rs + "giay"
    }

    console.log(rs)
    return rs
}

function datdua() {
    $(".bao-ngoai").toggleClass("bao")
    $(".dua").toggleClass("chon-sai")
    setTimeout(function() {
        $(".dua").toggleClass("chon-sai")
        $(".bao-ngoai").toggleClass("bao")
    }, 1200)
}

function datray(active) {
    $(".bao-ngoai").toggleClass("bao")
    if (active) {
        if (checkbinhrong() == "b1") {
            $(".ray").toggleClass("ray-binh1")
        } else {
            $(".ray").toggleClass("ray-binh2")
        }
        $(".bao-ngoai").toggleClass("bao")
    } else {
        $(".ray").toggleClass("chon-sai")
        themNote("Không được rồi! Con thử nghĩ cách khác xem.", 4000)
        phattieng(7)
        setTimeout(function() {
            $(".ray").toggleClass("chon-sai")
            $(".bao-ngoai").toggleClass("bao")
        }, 1200)
    }
}

function datpheu(active) {
    $(".bao-ngoai").toggleClass("bao")
    if (active) {
        if (checkbinhrong() == "b1") {
            $(".pheu").toggleClass("pheu-binh1")
        } else {
            $(".pheu").toggleClass("pheu-binh2")
            
        }

        $(".bao-ngoai").toggleClass("bao")

    } else {
        $(".pheu").toggleClass("chon-sai")
        themNote("Không được rồi! Con thử nghĩ cách khác xem.", 4000)
        phattieng(7)
        setTimeout(function() {
            $(".pheu").toggleClass("chon-sai")
            $(".bao-ngoai").toggleClass("bao")
        }, 1200)
    }



}

function themNote(note, time = 8000) {
    $(".note").text(note)
    // setTimeout(function() {
    //     huongdan()
    // }, time)
}

function xemhuongdan(){
    huongdan()
}

function datloc() {
    $(".bao-ngoai").toggleClass("bao")
    if (true) {
        if (checkbinhrong() == "b1") {
            $(".giay-loc").toggleClass("loc-binh1")
        } else {
            $(".giay-loc").toggleClass("loc-binh2")
        }

        $(".bao-ngoai").toggleClass("bao")
    } 

}

function checkbinhrong() {
    var imgb1 = $(".binh1").attr('src');
    if (imgb1.includes("tb1")) {
        return "b1"
    } else {
        return "b2"
    }
}

function goListLap() {
    $("#main-layout").addClass("layout-opacity-7")
    $("#loadingGoto").css("display", "flex")
    setTimeout(function() {
        window.location.href = 'rs-test.html'
    }, 600)
}

function dondep() {
    $("#main-layout").addClass("layout-opacity-7")
    $("#loadingGoto").css("display", "flex")
    setTimeout(function() {
        window.location.href = 'clean.html'
    }, 600)
}

function huongdan() {
    if (state == 0) {
        setTimeout(function() {
            $(".note").text("Bây giờ, chúng ta chỉ cần dọn dẹp phòng thí nghiệm sạch sẽ nữa thôi! ")
            phattieng(17)
        }, 10000)
    } else if (state == 1) {
        $(".note").text("Trong nước có vụn nilon và cát. Theo con, chúng ta nên lọc tạp chất nào trước? Các con hãy nghĩ cách lọc tạp chất này ra khỏi nước. ")
        phattieng(16) 
         
        // setTimeout(function() {
        //     $(".note").text("Con thử nghĩ xem, vụn nilon và cát, tạp chất nào có kích thước lớn hơn thì sẽ được lọc khỏi nước dễ dàng hơn.")
            
        //     phattieng(15)
        // }, 9000)
    } else if (state == 2) {
        $(".note").text("Bước tiếp theo là lọc cát ra khỏi nước, thử nghĩ xem bạn cần vật dụng gì nào")
        
        phattieng(14)
    } else if (state == 3) {
        $(".note").text("Để lọc sạch nước, chúng ta cần than hoạt tính. Khi hoà lẫn vào nước, than sẽ lọc được các hạt tạp chất cực nhỏ và khử màu cho nước.")
        
        phattieng(20)
    } else if (state == 4) {
        $(".note").text("Cô gợi ý, các hạt than tinh thể có kích thước lớn hơn lỗ giấy lọc. Hãy lựa chọn dụng cụ thông minh để hoàn thành thí nghiệm này nhé.")
        
        phattieng(2)
    }
}

// setInterval(() => {
//     $(".bao-ngoai").toggleClass("bao")
// }, 5000);