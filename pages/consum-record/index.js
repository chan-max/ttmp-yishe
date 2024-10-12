import {
  getrecordList
} from "../../api/common"

Page({
  data: {
    recordList:[]
  },
  async onLoad () {
    const {recordList} = await getrecordList();
    this.setData({
      recordList
    })
  },
})