setTimeout(function() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("main-layout").style.display = "block";
    $(".thungrac").toggleClass("show-thungrac")
}, 0);

function themNote(note) {
    $(".note").text(note)
    setTimeout(function() {
        $(".note").text("...")
    }, 2000)
}

function goListLap() {
    $("#main-layout").addClass("layout-opacity-7")
    $("#loadingGoto").css("display", "flex")
    setTimeout(function() {
        window.location.href = 'rs-test.html'
    }, 600)
}

function chonsai(data) {
    $(data).addClass("chon-sai-tb");
    themNote("Rất tiếc, con sắp xếp chưa đúng vị trí rồi. Kiểm tra lại và đặt đồ vật về đúng vị trí nhé")
    $(".audio")[3].play();
    setTimeout(function() {
        $(data).removeClass("chon-sai-tb");
    }, 1000)
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var vatnem = "#" + ev.dataTransfer.getData("text");
    var thung = ev.target.id;
    if (thung == "t1") {
        if (vatnem == "#giay-loc")
            $(vatnem).addClass("display-none")
        else {
            chonsai(vatnem)
        }
    }

    if (thung == "t2") {
        if (vatnem == "#pheu" || vatnem == "#binh2" || vatnem == "#dua" || vatnem == "#ray")
            $(vatnem).addClass("display-none")
        else {
            chonsai(vatnem)
        }
    }

    if (thung == "t3") {
        if (vatnem == "#than-hoat-tinh")
            $(vatnem).addClass("display-none")
        else {
            chonsai(vatnem)
        }
    }

    var count = $(".display-none").length;
    console.log(count)
    if (count == 6) {
        $(".note").text("Và bây giờ, phòng thí nghiệm đã sạch sẽ trở lại rồi - thật tuyệt!")
        $(".audio")[2].play();
        setTimeout(function() {
            $(".note").text("Trước khi rời khỏi phòng thí nghiệm, con hãy trả lời một số câu hỏi mà cô đưa ra sau đây nhé!")
            $(".audio")[1].play();
        }, 5000);

        setTimeout(function() {

            $("#main-layout").addClass("layout-opacity-7")
            $("#loadingGoto").css("display", "flex")
            setTimeout(function() {
                window.location.href = 'rs-test.html'
            }, 600)
        }, 12000)
    }
}