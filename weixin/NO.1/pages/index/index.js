var app = getApp()

Page( {
    data: {
        userInfo: {},
        toastHidden: true,
        toastContent: '',
        userListInfo: [ {
            leftItem: '我的账户',
            showArrow: true,
        }, {
                leftItem: '邀请好友 （一起赚钱）',
                margin: '20rpx',
                showArrow: true,
            }, {
                leftItem: '我的业绩',
                showArrow: true,
            }, {
                leftItem: '用户协议',
                margin: '20rpx',
                showArrow: true,
            }, {
                leftItem: '当前版本',
                rightItem: 'V 1.0.0 (内测版)',
                margin: '20rpx',
                showArrow: false,
            }]
    },

    onLoad: function() {
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo( function( userInfo ) {
            //更新数据
            that.setData( {
                userInfo: userInfo
            })
        })
    },

    toastChange: function() {
        this.setData( {
            toastHidden: true
        })
    },

    headTap( e ) {
        //更新数据
        this.setData( {
            toastHidden: false,
            toastContent: "点击头部"
        })
    },

    cellItemClick( e ) {
        var index = e.currentTarget.dataset.index
        console.log( "index = " + index )
        //更新数据
        this.setData( {
            toastHidden: false,
            toastContent: "点击" + index
        })
    },
})