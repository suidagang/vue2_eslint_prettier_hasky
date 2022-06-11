export const pageMixins = {
  data() {
    return {
      list: [],
      listData: [], //实际展示数据
      total: 10,
      listQuery: {
        pageNum: 1,
        pageSize: 3
      }
    }
  },
  methods: {
    //获取表格序号
    getIndex($index) {
      //表格序号
      return (this.listQuery.pageNum - 1) * this.listQuery.pageSize + $index + 1
    },
    //去掉过滤条件的数据
    searchList() {
      this.total = this.list.length
      return this.list
    },
    //分页数据处理函数
    pageDataFn: function () {
      let list = this.searchList()
      //保存每页数据的数组
      var pagedata = []
      //设置开始
      let start = this.listQuery.pageSize * this.listQuery.pageNum - this.listQuery.pageSize
      // 设置结束长度
      let end = this.listQuery.pageSize * this.listQuery.pageNum
      end = end > list.length ? list.length : end
      for (let i = start; i < end; i++) {
        //所有分页数据 data
        pagedata.push(list[i])
      }
      this.listData = pagedata
    }
  }
}
