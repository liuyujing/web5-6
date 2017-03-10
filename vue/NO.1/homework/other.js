/**
 * Created by liuyujing on 2017/3/9.
 */

class Book {
        constructor(_container) {
            this.container = _container;
            this.init();
        }

        init(){
            this.vue = new Vue({
                el:this.container,
                data:{
                    dataList:DataManager.getData()
                },
                methods:{
                    insertData:function(item){
                        console.log(this.dataList);
                      this.dataList.push(item);
                        DataManager.setData(this.dataList)
                    },
                    getData(){}
                }
            });
        };

    }






