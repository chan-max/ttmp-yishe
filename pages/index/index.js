import {
  getVideoList
} from "../../api/common"
const app = getApp()

Page({
  data: {
    videoList:[],
    videoPlayerList:[]
  },
  async onLoad () {
    const {videoList,videoPlayerList} = await getVideoList();
    this.setData({
      videoList,
      videoPlayerList
    })
  },
  //跳转至 video
  goVideo(e){
    const ablumId = e.currentTarget.dataset?.id
    const episodesId = e.currentTarget.dataset?.episodesid
    console.log("广场页video-aid&eid:",ablumId,episodesId);
    tt.navigateTo({
      url: `/package-video/pages/video/index?ablum_id=${ablumId}&episodes_id=${episodesId}`,
      success: (res) => {
        
      },
      fail: (res) => {
        
      },
    });
  },
  //跳转至 video-player
  goVideoPlayer(e){
    const ablumId = e.currentTarget.dataset?.id
    const episodesId = e.currentTarget.dataset?.episodesid
    console.log("广场页videoPlayer-aid&eid:",ablumId,episodesId);
    tt.navigateTo({
      url: `/package-video-player/pages/video-player/index?ablum_id=${ablumId}&episodes_id=${episodesId}`,
      success: (res) => {
        
      },
      fail: (res) => {
        
      },
    });
  }
})
