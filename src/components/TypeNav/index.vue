<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <h2 class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <!-- 绑定事件委托 -->
      <div class="sort" @click="goCategory">
        <div class="all-sort-list2">
          <div
            class="item bo"
            v-for="category in categoryList"
            :key="category.categoryId"
          >
            <h3>
              <!-- 使用自定义属性获取query参数的值 -->
              <a
                :data-categoryName="category.categoryName"
                :data-categoryId="category.categoryId"
                :data-categoryType="1"
                >{{ category.categoryName }}</a
              >
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl
                  class="fore"
                  v-for="child in category.categoryChild"
                  :key="child.categoryId"
                >
                  <dt>
                    <a
                      :data-categoryName="child.categoryName"
                      :data-categoryId="child.categoryId"
                      :data-categoryType="2"
                      >{{ child.categoryName }}</a
                    >
                  </dt>
                  <dd>
                    <em
                      v-for="grandSon in child.categoryChild"
                      :key="grandSon.categoryId"
                    >
                      <a
                        :data-categoryName="grandSon.categoryName"
                        :data-categoryId="grandSon.categoryId"
                        :data-categoryType="3"
                        >{{ grandSon.categoryName }}</a
                      >
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TypeNav",
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList.slice(0, 15),
    }),
  },
  methods: {
    ...mapActions(["getCategoryList"]),
    goCategory(e) {
      const { categoryname, categoryid, categorytype } = e.target.dataset;

      // 点击的不是a标签就不跳转
      if (!categoryname) return;

      // 路由链接跳转
      this.$router.push({
        name: "search",
        query: {
          categoryname,
          [`category${categorytype}id`]: categoryid,
        },
      });
    },
  },
  mounted() {
    this.getCategoryList();
  },
};
</script>

<style  lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
