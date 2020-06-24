---
title: form
---

简单使用

::: demo

```vue
<template>
  <div class="s-form-container">
    <s-form ref="form" :model="formdata" :rules="rules" label-width="80px">
      <s-form-item label="活动名称" prop="name">
        <s-input
          placeholder="请输入活动名称"
          v-model="formdata.name"
          clearable
        ></s-input>
      </s-form-item>

      <s-form-item label="活动人数" prop="count">
        <s-inputnumber
          v-model="formdata.count"
          :min="1"
          :max="100"
        ></s-inputnumber>
      </s-form-item>
      <s-form-item label="活动性质" prop="type">
        <s-checkbox-group v-model="formdata.type">
          <s-checkbox label="美食餐厅线上活动"></s-checkbox>
          <s-checkbox label="地推活动"></s-checkbox>
          <s-checkbox label="线下主题活动"></s-checkbox>
        </s-checkbox-group>
      </s-form-item>
      <s-form-item label="特殊资源" prop="resource">
        <s-radio-group v-model="formdata.resource">
          <s-radio value="线上品牌商赞助" label="线上品牌商赞助"></s-radio>
          <s-radio value="线上品牌商赞助" label="线下场地免费"></s-radio>
        </s-radio-group>
      </s-form-item>

      <s-form-item label="活动形式" prop="desc">
        <s-input
          type="textarea"
          v-model="formdata.desc"
          placeholder="请输入活动形式"
        ></s-input>
      </s-form-item>

      <s-form-item>
        <s-button type="primary" @click.native="submit">立即创建</s-button>
        <s-button>取消</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formdata: {
        name: '',
        type: ['线下主题活动'],
        resource: '',
        desc: '',
        count: 1,
        pics: []
      },
      rules: {
        name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [
          {
            required: true,
            message: '请至少选择一个活动资源',
            trigger: 'change'
          }
        ],
        pics: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一张活动照片',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    uploadSuccess(data) {
      console.log('上传成功后传给用户的图片')
      console.log(data)
      this.formdata.pics = data
    },
    uploadError(err) {
      this.$message({
        message: err,
        type: 'error'
      })
    },
    submit() {
      // 表单校验
      console.log(111)
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert('校验成功')
        } else {
          alert('校验失败')
          return false
        }
      })
    }
  }
}
</script>

```

:::
