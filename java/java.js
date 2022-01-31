
function flowerFly() {
    this.view = document.querySelector(".canhhoa"); //Lấy phần tử đầu tiên của class canhhoa làm vùng rơi
    this.typeObject = [
        "canh-hoa-dao1",
        "canh-hoa-dao2",
        "canh-hoa-dao3",
        "canh-hoa-dao4",
        "bong-hoa-dao1",
        "bong-hoa-dao2"
    ];

    // Phương thức chứa các lần random

    this.random = function(){
        
        this.i = Math.floor(Math.random()*6); //random 0->5

        this.top = Math.floor(Math.random()*150); // Tạo ra vị trí Top ngẫu nhiên
        this.left = Math.floor(Math.random()*150); // Tạo ra vị trí Left ngẫu nhiên
        this.aTop = Math.ceil(Math.random()*6)/10; // Lẫy ngẫu nhiên một giá trị từ 0.1->0.5 làm gia tốc theo trục Y
        this.aLeft = Math.ceil(Math.random()*6)/10;
        // Lấy ngẫu nhiên một số từ 0.1->0.5 làm gia tốc theo trục X 
        
        
        do {
            this.aLeft = Math.ceil(Math.random()*6)/10;
        }
        while(this.aLeft == this.aTop);


        if(this.i>=4) {
            this.width = 8;
            this.height = 8;
        } 
        else {
            this.width = 5;
            this.height = 5;
        }
    };
}


flowerFly.prototype = new configFly();

function configFly() {

    this.typeObject = [];
    this.typeFlieImg = ".png"; // Kiểu của file ảnh mà <img /> hiển thị
    this.i = Math.floor(Math.random()*6); // Lưu một số ngẫu nhiên để lấy ra ngẫu nhiên một kiểu hoa trong mảng typeFlower
    // Tạo các đối tượng cánh hoa và bông hoa
    this.createObjectFly = function(){
        this.random();
        this.objectFly = document.createElement("img");

        this.objectFly.src = "imgs/"+this.typeObject[this.i]+this.typeFlieImg;
        this.objectFly.style.width = this.width + "%";
        this.objectFly.style.height = this.height + "%";

        this.objectFly.style.top = this.top + "px";
        this.objectFly.style.left = this.left + "px";

        this.objectFly.style.position = "absolute";
        this.view.appendChild(this.objectFly);
        this.actionFly();
    };

    // Tạo hành động di chuyển cho đối tượng <img />
    this.actionFly = function(){
        var animationFrame;

        var action = ()=>{
            this.top += this.aTop; 
            this.left += this.aLeft;
            this.objectFly.style.top = this.top + "px";
            this.objectFly.style.left = this.left + "px";
            // Kiểm tra xem đối tượng đã di chuyển vượt quá khung nhìn của trình duyệt chưa
            // nếu đã vượt qua thì xóa hành động interval và xóa đối tượng đi
            // set lại vị trí ban đầu cho đối tượng mới và tạo đối tượng mới
            if(this.left >= window.screen.availWidth || this.top >= window.screen.availHeight) {
                cancelAnimationFrame(animationFrame);
                this.view.removeChild(this.objectFly);
                // this.top = Math.floor(Math.random()*2)*100 + 30 + Math.floor(Math.random()*10)*Math.floor(Math.random()*5); // Tạo ra vị trí Top ngẫu nhiên
                // this.left = Math.floor(Math.random()*2)*100 + 30 + Math.floor(Math.random()*10)*Math.floor(Math.random()*5); // Tạo ra vị trí Left ngẫu nhiên
                setTimeout(()=>{
                    this.createObjectFly();
                }, 1000);
            } 
            else {
                animationFrame = window.requestAnimationFrame(action);
            }
        };
        action();
    };

}

function displayFlowerFly(){
    var listFlowerFly = [];
    var i = 0;
    setTimeout(function(){
        var interval = setInterval(function(){
            listFlowerFly[i] = new flowerFly();
            listFlowerFly[i].createObjectFly();
            ++i;
            if(i == 50)
                clearInterval(interval);
        }, 600);
    }, 1800);
}
this.displayFlowerFly();
