Page({
  data: {
    userInfo: null,
    imId: "854808918",//客服的抖音号
  },
  onLoad: function (options) {

  },
  getUserProfile() {
    tt.getUserProfile({
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
        });
      },
      fail(err) {
        console.log('tt.getUserProfile failed', err.errMsg);
        tt.showModal({
          title: '获取用户信息失败',
          content: err.errMsg,
          showCancel: false,
        });
      },
      complete() {
      },
    });
  },
  goConsume(){
    if(this.data.userInfo){
      tt.navigateTo({
        url: `/pages/consum-record/index`,
        fail:e=>{
          console.log(e);
        }
      });
    } else{
      tt.showToast({
        title: "登录后查看消费记录",
        success: (res) => {
          
        },
        fail: (res) => {
          
        },
      });
    }
  },
  imCallback(e) {
    console.log("跳转IM客服成功", e.detail);
  },
  onimError(e) {
    console.log("拉起IM客服失败", e.detail);
    tt.showToast({
      title: `${e.detail.errMsg}`,
      success: (res) => {
        
      },
      fail: (res) => {
        
      },
    });
  },
})