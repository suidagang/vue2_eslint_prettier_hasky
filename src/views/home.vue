<template>
  <div class="home">
    <el-select
      class="main-select-tree"
      ref="selectTree"
      v-model="value"
      style=" 560px;"
    >
      <el-option
        v-for="item in dealOptions(datas)"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        style="display: none"
      />
      <el-tree
        class="main-select-el-tree"
        ref="selecteltree"
        :data="datas"
        node-key="id"
        highlight-current
        :props="defaultProps"
        @node-click="handleNodeClick"
        :current-node-key="value"
        :expand-on-click-node="expandOnClickNode"
        default-expand-all
      />
    </el-select>
    <div class="list-text" style="margin-top: 400px">统计时间起：</div>
    <el-date-picker
      v-model="startDate"
      type="month"
      format="yyyy-MM"
      value-format="yyyy-MM"
      :picker-options="pickerOptionsStart"
      placeholder="选择月份"
      size="mini"
    >
    </el-date-picker>
    <div class="list-text">统计时间止：</div>
    <el-date-picker
      v-model="endDate"
      type="month"
      format="yyyy-MM"
      value-format="yyyy-MM"
      placeholder="选择月份"
      :picker-options="pickerOptionsEnd"
      size="mini"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      startDate: '',
      endDate: '',
      // pickerOptionsStart: this.startDateOption(),
      // pickerOptionsEnd: this.endDateOption(),
      value: 6,
      expandOnClickNode: true,
      options: [],
      datas: [
        {
          id: 1,
          label: '云南',
          children: [
            {
              id: 2,
              label: '昆明',
              children: [
                {
                  id: 3,
                  label: '五华区',
                  children: [{ id: 8, label: '北辰小区' }]
                },
                { id: 4, label: '盘龙区' }
              ]
            }
          ]
        },
        {
          id: 5,
          label: '湖南',
          children: [
            { id: 6, label: '长沙' },
            { id: 7, label: '永州' }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  mounted() {
    this.startDate = '2022-03';
    this.endDate = '2022-05';
    console.log(this.dealOptions(this.datas), '--0');
  },
  computed: {
    pickerOptionsStart() {
      let _self = this;
      console.log('监听开始1');
      console.log(_self.endDate);
      return {
        disabledDate: (time) => {
          if (!_self.endDate) {
            return false;
          }
          return (
            time.getTime() >
            new Date(_self.endDate.replace(/-/g, '/')).getTime()
          );
        }
      };
    },
    pickerOptionsEnd() {
      let _self = this;
      console.log('监听结束1');
      console.log(_self.startDate);
      return {
        disabledDate: (time) => {
          if (!_self.startDate) {
            return false;
          }
          return (
            time.getTime() <
            new Date(_self.startDate.replace(/-/g, '/')).getTime()
          );
        }
      };
    }
  },
  methods: {
    dealOptions(data) {
      return data.reduce(
        (arr, { id, label, children = [] }) =>
          arr.concat([{ value: id, label }], this.dealOptions(children)),
        []
      );
    },
    handleNodeClick(node) {
      this.value = node.id;
      this.$refs.selectTree.blur();
    }
  }
};
</script>
<style lang="less">
.main-select-el-tree .el-tree-node .is-current > .el-tree-node__content {
  font-weight: bold;
  color: #409eff;
}
.main-select-el-tree .el-tree-node.is-current > .el-tree-node__content {
  font-weight: bold;
  color: #409eff;
}
</style>
