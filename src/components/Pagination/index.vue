<template>
  <div class="pagination">
    <button
      :disabled="myCurrentPage <= 1"
      @click="setCurrentPage(myCurrentPage - 1)"
    >
      &lt;
    </button>
    <button :class="{ active: myCurrentPage === 1 }" @click="setCurrentPage(1)">
      1
    </button>
    <button v-show="startEnd.start > 2">...</button>
    <button
      v-for="item in mapBtns"
      :key="item"
      @click="setCurrentPage(startEnd.start + item - 1)"
      :class="{ active: myCurrentPage === startEnd.start + item - 1 }"
    >
      {{ startEnd.start + item - 1 }}
    </button>
    <button v-show="startEnd.end < totalPage - 1">...</button>
    <button
      :class="{ active: myCurrentPage === totalPage }"
      @click="setCurrentPage(totalPage)"
      v-show="totalPage > 1"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="myCurrentPage >= totalPage"
      @click="setCurrentPage(myCurrentPage + 1)"
    >
      &gt;
    </button>
    <button>总数：{{ total }}条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    // 当前页码
    currentPage: {
      type: Number,
      default: 1,
    },
    // 显示按钮的数量
    pagerCount: {
      type: Number,
      //   验证，验证通过返回true，失败返回false
      validator(val) {
        return val >= 5 && val <= 21 && val % 2 === 1;
      },
      dafault: 7,
    },
    // 每页条数
    pageSize: {
      type: Number,
      default: 10,
    },
    // 总数
    total: {
      typr: Number,
      default: 0,
    },
  },
  data() {
    return {
      // 为了方便修改currenPage，定义data属性
      myCurrentPage: this.currentPage,
    };
  },
  watch: {
    //   监视页码的变化，每次页码发生变化，触发函数发送请求更新数据
    myCurrentPage(currentPage) {
      this.$emit("current-change", currentPage);
    },
    // 当外面页面发生变化，里面的页码也发生变化，默认回到第一页
    currentPage(currentPage) {
      this.myCurrentPage = currentPage;
    },
  },
  computed: {
    //   总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startEnd() {
      const { myCurrentPage, pagerCount, totalPage } = this;

      //   中间按钮个数
      const count = pagerCount - 2;

      //   中间前/后按钮个数
      const halfCount = Math.floor(count / 2);

      //   开始，结束按钮
      let start, end;

      //   如果当前按钮大于等于临界值（总页数-中间前/后按钮个数）后按钮个数少于或等于后保留按钮个数
      //   start就是一个写死的值。等于总页数-中间按钮个数
      // 1 ... 5 6 7 8 [9] 10
      if (myCurrentPage >= totalPage - halfCount) {
        start = totalPage - count;
      } else {
        //   1...3 4 [5] 6 7...10
        // 正常情况
        start = myCurrentPage - halfCount;
      }
      if (start <= 1) {
        // 1 [2] 3 4 5 6 ...10
        start = 2;
      }

      // 正常情况
      // 1...3 4 [5] 6 7...10
      end = start + count - 1;

      if (end >= totalPage) {
        end = totalPage - 1;
      }

      return {
        start,
        end,
      };
    },
    // 需要遍历的按钮数量
    mapBtns() {
      const { end, start } = this.startEnd;
      const count = end - start + 1;
      return count >= 1 ? count : 0;
    },
  },
  methods: {
    setCurrentPage(currentPage) {
      this.myCurrentPage = currentPage;
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  white-space: nowrap;
  font-weight: 700;
  justify-content: center;
  button {
    margin: 0 5px;
    padding: 0 4px;
    font-size: 13px;
    min-width: 30px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: none;
    outline: none;
    display: block;
    background-color: #f4f4f5;
    color: #606266;
    border-radius: 2px;
  }
}

button.active {
  background-color: #409eff;
  color: #fff;
}
</style>
