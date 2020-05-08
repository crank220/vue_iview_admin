<template>
  <div class="form-verification-demo">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="姓名" prop="name">
        <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
      </FormItem>
      <FormItem label="邮箱" prop="mail">
        <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
      </FormItem>
      <FormItem label="网址地址" prop="url">
        <Input v-model="formValidate.url" placeholder="请输入网址"></Input>
      </FormItem>
      <FormItem label="身份证号" prop="card">
        <Input v-model="formValidate.card" placeholder="请输入身份证号"></Input>
      </FormItem>
      <FormItem label="手机号" prop="phone">
        <Input v-model="formValidate.phone" placeholder="请输入手机号"></Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input v-model="formValidate.password" placeholder="请输入密码"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { isEmail, isUrl, isCard, isPhone, isPassword } from "../../../lib/verification/index"
export default {
  name: "WorkshopFormVerification",
  data () {
    return {
      formValidate: {
        name: '',
        mail: '',
        url: '',
        card: '',
        phone: '',
        password: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ],
        mail: [{
          required: true,
          validator: (rule, value, callback) => {
            if (!value) {
              callback(new Error('邮箱不能为空'))
            } else if (isEmail(value)) {
              return callback(new Error('请输入正确的电子邮箱'))
            } else {
              callback()
            }
          },
          trigger: 'blur'
        }],
        url: [{
          required: true,
          validator: (rule, value, callback) => {
            if (!value) {
              callback(new Error('网站地址不能为空'))
            } else if (isUrl(value)) {
              return callback(new Error('请输入正确的网站地址'))
            } else {
              callback()
            }
          },
          trigger: 'blur'
        }],
        card: [{
          required: true,
          validator: (rule, value, callback) => {
            if (!value) {
              callback(new Error('身份证号不能为空'))
            } else if (isCard(value)) {
              return callback(new Error('请输入正确的身份证号'))
            } else {
              callback()
            }
          },
          trigger: 'blur'
        }],
        phone: [{
          required: true,
          validator: (rule, value, callback) => {
            if (!value) {
              return callback(new Error('手机号不能为空'))
            } else if (isPhone(value)) {
              return callback(new Error('请输入正确的手机号'))
            } else {
              callback()
            }
          },
          trigger: 'blur'
        }],
        password: [{
          required: true,
          validator: (rule, value, callback) => {
            if (!value) {
              return callback(new Error('当前密码不能为空'))
            } else if (isPassword(value)) {
              return callback(new Error('必须是6-20位英文字母、数字或符号，不能是纯数字或纯字母'))
            } else {
              callback()
            }
          },
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('验证成功!');
        } else {
          this.$Message.error('验证失败!');
        }
      })
    }
  }
}
</script>