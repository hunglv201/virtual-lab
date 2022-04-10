setTimeout(function() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("main-layout").style.display = "block";
}, 0);

setTimeout(function() {
    console.log("zoom")
    $(".video-test").addClass("video-test-show")
    $(".item-hire").addClass("hire-zoom")
    $(".video-play").get(0).play()
}, 1500)

$(".oj24").click(function(event) {
    event.stopPropagation()
    console.log("zoom")
    $(".video-test").addClass("video-test-show")
    $(".item-hire").addClass("hire-zoom")
})

$(".oj29").click(function() {
    console.log("hire")
    $(".video-test").removeClass("video-test-show")
    $(".item-hire").removeClass("hire-zoom")
})

$(".hoanthanh").click(function() {
    var datl = $(".chon-da");
    if (datl.length == 0) {
        Toastify({
            text: "Hoàn thành câu hỏi",
            duration: 2000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            backgroundColor: "red",
        }).showToast();
    } else {
        console.log("hire")
        $(".video-test").removeClass("video-test-show")
        $(".item-hire").removeClass("hire-zoom")

        setTimeout(function() {
            $(".oj28").css("display", "none")
            $(".oj27").addClass("oj27-zoom")
        }, 800)

        setTimeout(function() {
            goEquipment()
        }, 3000)
    }

})

$("#xemvideo").click(function(event) {
    event.stopPropagation()
    console.log("video")
    $(".list-cauhoi").removeClass("display-block")
    $(".video-play").removeClass("display-none")
    $("#xemvideo").toggleClass("tab-choose")
    $("#cauhoi").toggleClass("tab-choose")
})

$("#cauhoi").click(function(event) {
    event.stopPropagation()
    tabCauhoi()
})

function tabCauhoi() {
    $("#cauhoi").toggleClass("tab-choose")
    $("#xemvideo").toggleClass("tab-choose")
    console.log("cauhoi")
    $("#audio1")[0].play();
    $(".list-cauhoi").addClass("display-block")
    $(".video-play").addClass("display-none")
}

function goEquipment() {
    $("#main-layout").addClass("layout-opacity-7")
    $("#loadingGoto").css("display", "flex")
    setTimeout(function() {
        window.location.href = 'equipment.html'
    }, 600)
}

function chooseDA(da) {
    console.log("chon da")
    if (da == 1) {
        $(".oj32").toggleClass("chon-da")
        chonsai()
    }
    if (da == 2) {
        $(".oj33").toggleClass("chon-da")
        chonsai()
    }
    if (da == 3) {
        $(".oj34").toggleClass("chon-da")
        chondung()
    }
    if (da == 4) {
        $(".oj35").toggleClass("chon-da")
        chonsai()
    }
}

function chondung() {
    setTimeout(function() {
        $(".show-rs").css("opacity", 1);
        $(".m4textD").css("display", "block")
        $("#audio2")[0].play();
    }, 600)
}

function chonsai(){
    setTimeout(function() {
        $(".show-rs").css("opacity", 1);
        $(".m4textS").css("display", "block")
        $("#audio3")[0].play();
    }, 600)
}

var video = document.getElementsByTagName('video')[0];
video.onended = function(e) {
    setTimeout(function() {
        tabCauhoi()
    }, 1500)
};