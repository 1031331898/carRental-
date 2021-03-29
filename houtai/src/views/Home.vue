<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu 
          :router='true'
          :unique-opened="true"
          background-color="#061d33"
          >
            <el-submenu :index="index+''" v-for="(item,index) in menuList" :key="index">
              <template slot="title"
                >{{item.label}}</template
              >
                <el-menu-item :index="(index+'')+'-'+(index2+'')" 
                v-for="(it,index2) in item.children" 
                :key="index2"
                :route="{path:'/home' + it.url}"
                >{{it.label}}</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      menuList:[]
    };
  },
  methods: {},
  components: {},
  mounted(){
    console.log(123)
    this.axios.get("apq/menu/queryNodes").then(res=>{
      console.log(res)
      this.menuList=res.data.data
      })
  }
};
</script>

<style scoped lang="less">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
