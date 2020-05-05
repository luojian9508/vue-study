<template>
  <div>
    <h1>Module1</h1>

    <div>
      <el-table
        :data="pageInfo.list"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="编号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>

      </el-table>
    </div>

    <div>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page=pageInfo.pageNumber
          :page-size="pageInfo.pageSize"
          :page-count="pageInfo.totalPagesNumber"
          :total="pageInfo.totalItemsNumber"
          :page-sizes="[5, 10, 15, 20]"
          layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
      </div>
    </div>

  </div>
</template>

<script>
import {getList} from '@/api/module1'
export default {
  name: 'index',
  data () {
    return {
      pageInfo: {
        pageNumber: 1, // 页号
        pageSize: 10, // 每页记录数
        totalItemsNumber: 0, // 总项数
        totalPagesNumber: 0, // 总页数
        list: [] // 数据列表
      }
    }
  },
  mounted () {
    this.fetchList()
  },
  methods: {
    fetchList () {
      getList({
        pageNumber: this.pageInfo.pageNumber,
        pageSize: this.pageInfo.pageSize
      }).then(response => {
        this.pageInfo = {
          pageNumber: response.data.pageNumber,
          pageSize: response.data.pageSize,
          totalItemsNumber: response.data.totalItemsNumber,
          totalPagesNumber: response.data.totalPagesNumber,
          list: response.data.list
        }
      }).catch(error => {
        console.log(error)
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageInfo.pageSize = val
      this.fetchList()
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.pageInfo.pageNumber = val
      this.fetchList()
    }
  }
}
</script>

<style scoped>

</style>
