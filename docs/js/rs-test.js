setTimeout(function() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("main-layout").style.display = "block";
}, 0);

setTimeout(function() {
    console.log("zoom")
    $(".video-test").addClass("video-test-show")
    $(".item-hire").addClass("hire-zoom")
}, 1500)

$(".list-cauhoi").addClass("display-block")
$(".video-play").addClass("display-none")

$(".oj24").click(function(event) {
    event.stopPropagation()
    console.log("zoom")
    $(".video-test").addClass("video-test-show")
    $(".item-hire").addClass("hire-zoom")
})

function xemvideo() {
    console.log("video")
    $(".list-cauhoi").removeClass("display-block")
    $(".video-play").removeClass("display-none")
    $(".video-play").get(0).play()
}


function tabCauhoi() {
    $(".list-cauhoi").addClass("display-block")
    $(".video-play").addClass("display-none")
}

function goLap() {
    $("#main-layout").addClass("layout-opacity-7")
    $("#loadingGoto").css("display", "flex")
    setTimeout(function() {
        window.location.href = 'list-lap.html'
    }, 600)
}

function chooseDA(da) {
    console.log("chon da")
    if (da == 1)
        $(".oj32").toggleClass("chon-da")
    if (da == 2)
        $(".oj33").toggleClass("chon-da")
    if (da == 3)
        $(".oj34").toggleClass("chon-da")
    if (da == 4)
        $(".oj35").toggleClass("chon-da")

    setTimeout(function() {
        $(".show-rs").css("opacity", 1);
    }, 500)

    setTimeout(function() {
        xemvideo()
    }, 2000)
}

function hoanthanh() {
    var datl = $(".chon-da");
    if (datl.length == 0) {
        Toastify({
            text: "Hoàn thành câu hỏi",
            duration: 1000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            backgroundColor: "red",
        }).showToast();
    } else {
        setTimeout(function() {
            goEquipment()
        }, 3000)
    }

}

var video = document.getElementsByTagName('video')[0];
video.onended = function(e) {
    setTimeout(function() {
        showKq()
    }, 3000)
};


function showKq() {
    $(".kq").addClass("display-block")
    $(".video-play").addClass("display-none")
}