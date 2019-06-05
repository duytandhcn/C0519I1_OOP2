// Khai báo lớp công tắc

function SwitchButton(lamp) {

    // Khai báo thuộc tính

    this.status = true;
    this.lamp = lamp;
    
    /*  Phương thức kết nối giữa công tắc và bóng đèn
        Nếu công tắc có trạng thái là true thì bóng đèn bật
        Nếu công tắc có trạng thái là false thì bóng đèn tắt */

    this.connectToLamp = function () {
        if (this.status) {
            this.lamp.turnOn();
        } else {
            this.lamp.turnOff();
        }
    };
    // Phương thức tắt công tắc

    this.switchOff = function () {
        this.status = false;
    };
    // Phương thức bật công tắc

    this.switchOn = function () {
        this.status = true;
    };
}
