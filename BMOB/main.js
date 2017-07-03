
/**
 * Created by liuyujing on 2017/4/17.
 */
(function () {


    Bmob.initialize("24c11bcafa22938dd14e6f404b05561b", "fb69f0fd73be63906bec83388abc069f");

    function addNews() {
        var News = Bmob.Object.extend("news");
        var info = {
            title:"今日头条",
            des:"着火了"
        };

        var news = new News();
        news.save(info,{
            success:function (obj) {
                console.log(obj.get("title"));
            },
            error:function () {
                console.log("error");
            }
        });

    }

    // addNews();

    function searchNews(id) {

        var News = Bmob.Object.extend("news");
        var query = new Bmob.Query(News);
        query.get(id,{
            success:function (obj) {
                console.log(obj.get("des"));

                obj.set("des","234567876543234567");

                obj.save(null,{
                    success:function (info) {
                console.log(info.get("des"));
                        //删除数据
                        info.destroy();
                    }
                })

            },
            error:function () {
                console.log("error");
            }
        });
    }

    searchNews("1e326f2f1e");

})();