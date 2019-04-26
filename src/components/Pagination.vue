<template>
  <div class="pagination">
    <div class="pageButtons">
      <button class="first" @click="firstClick">{{first}}</button>
      <button class="pre" @click="preClick">{{pre}}</button>
      <button class="page" :class="{active:current===value}" v-for="value in page" @click="pageClick(value)">{{value}}
      </button>
      <button class="next" @click="nextClick">{{next}}</button>
      <button class="last" @click="lastClick">{{last}}</button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Panigation",
    data() {
      return {
        first: '首页',
        last: '尾页',
        pre: '<上一页',
        next: '下一页>',
        current: 1,
        page: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      firstClick() {
        this.current = 1
        this.$emit('pagechange', this.current)
        this.page = [1, 2, 3, 4, 5]
        console.log(this.page);
        this.windowScroll()
      },
      lastClick() {
        this.current = 99
        this.$emit('pagechange', this.current)
        this.page = [95, 96, 97, 98, 99]
        this.windowScroll()
      },
      nextClick() {
        this.current += 1
        this.$emit('pagechange', this.current)
        this.pageNumChange()
        this.windowScroll()
      },
      preClick() {
        this.current -= 1
        this.$emit('pagechange', this.current)
        this.pageNumChange()
        this.windowScroll()

      },
      pageClick(pageNum) {
        this.current = pageNum
        this.pageNumChange()
        this.$emit('pagechange', this.current)
        this.windowScroll()
      },
      pageNumChange() {
        let lastNum = this.page.slice(-1)[0]   //取当前数组最后一个数
        let firstNum = this.page[0]
        if (this.current === lastNum) {
          this.page = this.page.map((x) => {
            return x + 1
          })
        } else if (this.current === firstNum && this.current !== 1) {
          this.page = this.page.map((x) => {
            return x - 1
          })
        }
      },
      windowScroll() {
        window.scrollTo(0, 0)
      }
    }
  }
</script>

<style scoped>
  .pagination{
    text-align: center;
  }
  .pageButtons {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    margin: 10px auto;
  }
  .pageButtons button{
    margin:0 10px;
  }
  .first,.last,.pre,.next{
    padding:0 10px ;
    height: 30px;
  }

  .page {
    height: 30px;
    width: 30px;
  }
  .page:hover{
    border: 1px solid #3e89fa;
    color:#3e89fa
  }
  .active {
    border: 1px solid #3e89fa;
    color:#3e89fa;
    font-weight: bolder;
  }
</style>
