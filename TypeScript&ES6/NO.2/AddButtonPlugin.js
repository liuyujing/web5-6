/**
 * Created by liuyujing on 2017/3/7.
 */

// ul 3/li
// 需要知道 所在的位置 （父元素/唯一标识符）

// 需要知道 最大 最小 的区间（这两个值 需要可以调节）

// 加减按钮的事件 -- 到 最小的区间 ++最大的区间

//命名空间
window.buttonPlugin = window.buttonPlugin||{};

/*
function Person() {

}


var p = {};
window.p.user = new Person();

function aaa() {

}

var a = aaa;
*/


(function () {

    /*
    * AddButton 创建按钮的类 （构造函数）
    * _mark 父元素的唯一标识符 (id)
    * */
    function AddButton(_mark,_minNum,_maxNum) {
        //初始化 当前显示数字的值
        this.curNum = 0;
        
        //最小值
        this.minNum = _minNum||0;
        //最大值
        this.maxNum = _maxNum||10;
        
        this.superView = document.querySelector("#"+_mark+"");

        this.init();
    }

    //初始化界面的方法
    AddButton.prototype.init = function () {

        var titleList = ["-","0","+"];

        var contentView = document.createElement("ul");
        contentView.className = "add-button-container";
        // var self = this;
        titleList.forEach(function (item,index) {

            var itemView = document.createElement("li");
            itemView.textContent = item;

            contentView.appendChild(itemView);

            if (index != 1){
                this.addEventListener(itemView);
            }else {
                //找到 当前显示 数字的视图
                this.showNumView = itemView;
            }
        }.bind(this));

        this.superView.appendChild(contentView);
    };

    //添加事件
    AddButton.prototype.addEventListener = function (view) {

        var self = this;

        view.onclick = function () {
            console.log(this.textContent);

            if (this.textContent == "-"){

                self.curNum --;
                if(self.curNum<self.minNum){
                     self.curNum = self.minNum;
                }

            }
            if (this.textContent == "+"){
                self.curNum ++;
                if(self.curNum>self.maxNum){
                    self.curNum = self.maxNum;
                }
            }

            self.showNumView.textContent = self.curNum;
        }

    };


    window.buttonPlugin.AddButton = AddButton;
})();

