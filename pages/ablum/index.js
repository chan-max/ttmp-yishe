
Page({
  data: {
    chasingList:[]//chasingList：正在追剧list
  },
  onLoad() {
    // const { videoPlayerList } = await getVideoList();
    // this.getChasingList()
  },
  onShow(){
    this.getChasingList()
  },

  //获取本地缓存 用户收藏剧集数据
  getChasingList() {
    const getStorageSyncRes = tt.getStorageSync("likeAblum");
    console.log("likeAblum",getStorageSyncRes);
    const chasingArr = Array.isArray(getStorageSyncRes) ? getStorageSyncRes.filter(i => i !== null) : [];
    console.log("获取缓存的收藏剧:",chasingArr);
    //  相同剧集去重
    const uniqueArr = Array.from(new Set(chasingArr.map(item => item.ablum_id))).map(id => chasingArr.find(item => item.ablum_id === id));
    this.setData({
      chasingList:uniqueArr,
    })
    console.log("将获取缓存收藏剧去重:",uniqueArr);
  },

})