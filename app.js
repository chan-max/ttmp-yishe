App({
  globalData:{
    systemInfo:null,
  },
  onLaunch: function () {
    this.globalData.systemInfo = tt.getSystemInfoSync();
    const Hasbindgetsource =  tt.canIUse('video-player.bindgetsource');
    this.setGlobalData('Hasbindgetsource',Hasbindgetsource)
  },
  setGlobalData(key, value) {
    this.globalData[key] = value;
  },
})
