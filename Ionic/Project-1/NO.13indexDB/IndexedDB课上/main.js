/**
 * Created by liuyujing on 2017/1/4.
 */
(function () {

    function View() {

        this.dbManager = new DataBaseManager("db",2);

        this.getDoms();
        this.addEventListener();
    }

    //获取所有节点
    View.prototype.getDoms = function () {
        this.usernameInput = document.querySelector("#username");
        this.ageInput = document.querySelector("#age");
        this.addButton = document.querySelector(".add");
        this.updateButton = document.querySelector(".update");
        this.searchAllButton = document.querySelector(".searchAll");
        this.searchButton = document.querySelector(".search");
        this.deleteButton = document.querySelector(".delete");
        this.resultContainer = document.querySelector(".result-container");
    };

    //给节点 添加事件监听
    View.prototype.addEventListener = function () {

        var self = this;

        this.addButton.onclick = function () {

            self.dbManager.addData({name:self.usernameInput.value,age:self.ageInput.value});

        };

        this.updateButton.onclick = function () {

            self.dbManager.updateData({name:self.usernameInput.value,age:self.ageInput.value});

        };

        this.searchAllButton.onclick = function () {
            self.dbManager.searchAllData(function (result) {

                //null  []
                if (!result||!result.length){
                    alert("没有搜索到数据!");
                    return;
                }

                var contentString = "";
                result.forEach(function (item) {
                    contentString += ("<li>名字:"+item.name+" 年龄:"+item.age+"</li>");
                });

                self.resultContainer.innerHTML = "<ul>"+contentString+"</ul>";
            });
        };

        this.searchButton.onclick = function () {

            self.dbManager.searchData(self.usernameInput.value,function (result) {

                self.resultContainer.innerHTML = "名字:"+result.name+" 年龄:"+result.age+"";

            });

        };

        this.deleteButton.onclick = function () {

            self.dbManager.deleteData(self.usernameInput.value);
        };
    };

    new View();

})();
