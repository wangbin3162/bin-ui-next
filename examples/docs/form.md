## Form 表单

<div class="global-anchor">
  <b-anchor :scroll-offset="100">
    <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
  </b-anchor>
</div>

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据

### 基础用法

基础的表单使用，表单项，比如输入框、选择器、开关、单选框、多选框等。

::: demo

```html

<template>
  <b-form ref="form" :model="form" label-width="80px">
    <b-form-item label="姓名">
      <b-input v-model="form.name" placeholder="输入姓名"></b-input>
    </b-form-item>
    <b-form-item label="年龄">
      <b-input-number v-model="form.age"></b-input-number>
    </b-form-item>
    <b-form-item label="户籍地">
      <b-select v-model="form.region" placeholder="请选择户籍地">
        <b-option label="上海" value="shanghai"></b-option>
        <b-option label="北京" value="beijing"></b-option>
        <b-option label="南京" value="nanjing"></b-option>
        <b-option label="徐州" value="xuzhou"></b-option>
      </b-select>
    </b-form-item>
    <b-form-item label="学历">
      <b-radio-group v-model="form.edu">
        <b-radio label="高中"></b-radio>
        <b-radio label="大专"></b-radio>
        <b-radio label="本科"></b-radio>
        <b-radio label="硕士"></b-radio>
      </b-radio-group>
    </b-form-item>
    <b-form-item label="爱好">
      <b-checkbox-group v-model="form.hobby">
        <b-checkbox label="打游戏" name="hobby"></b-checkbox>
        <b-checkbox label="看电影" name="hobby"></b-checkbox>
        <b-checkbox label="打篮球/运动" name="hobby"></b-checkbox>
        <b-checkbox label="看书" name="hobby"></b-checkbox>
      </b-checkbox-group>
    </b-form-item>
    <b-form-item label="住址">
      <b-input type="textarea" v-model="form.desc" placeholder="请输入住址..."></b-input>
    </b-form-item>
    <b-form-item>
      <b-button type="primary" @click="onSubmit">提交</b-button>
      <b-button>取消</b-button>
    </b-form-item>
  </b-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          age: null,
          city: '',
          edu: '',
          hobby: [],
          address: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
```

:::

### 行内表单

表单内容项比较少的情况可以使用行内模式

::: demo

```html

<template>
  <b-form ref="form" :model="form" inline class="demo-form-inline">
    <b-form-item label="姓名">
      <b-input v-model="form.name" placeholder="输入姓名"></b-input>
    </b-form-item>
    <b-form-item label="户籍地">
      <b-select v-model="form.region" placeholder="请选择户籍地">
        <b-option label="上海" value="shanghai"></b-option>
        <b-option label="北京" value="beijing"></b-option>
        <b-option label="南京" value="nanjing"></b-option>
        <b-option label="徐州" value="xuzhou"></b-option>
      </b-select>
    </b-form-item>
    <b-form-item>
      <b-button type="primary" @click="onSubmit">提交</b-button>
    </b-form-item>
  </b-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          city: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
```

:::

### 对齐和尺寸

可以有三种不同的标签对齐方式

::: demo

```html

<template>
  <div flex>
    <p>对齐方式：
      <b-radio-group v-model="labelPosition">
        <b-radio label="left">左对齐</b-radio>
        <b-radio label="right">右对齐</b-radio>
        <b-radio label="top">顶部对齐</b-radio>
      </b-radio-group>
    </p>
    <p>尺寸大小：
      <b-radio-group v-model="size">
        <b-radio label="large">large</b-radio>
        <b-radio label="default">default</b-radio>
        <b-radio label="small">small</b-radio>
        <b-radio label="mini">mini</b-radio>
      </b-radio-group>
    </p>
  </div>
  <div style="margin: 20px;"></div>
  <b-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" :size="size">
    <b-form-item label="名称">
      <b-input v-model="formLabelAlign.name"></b-input>
    </b-form-item>
    <b-form-item label="活动区域">
      <b-input v-model="formLabelAlign.region"></b-input>
    </b-form-item>
    <b-form-item label="活动形式">
      <b-input v-model="formLabelAlign.type"></b-input>
    </b-form-item>
    <b-form-item>
      <b-button type="primary">提交</b-button>
      <b-button>取消</b-button>
    </b-form-item>
  </b-form>
</template>
<script>
  export default {
    data() {
      return {
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        labelPosition: 'right',
        size: 'default'
      }
    }
  }
</script>
```

:::

### 表单校验

提供基础的校验规则，校验规则参考

::: demo

```html

<template>
  <b-form ref="ruleForm" :model="form" label-width="80px" :rules="ruleValidate">
    <b-form-item prop="name" label="名称">
      <b-input v-model="form.name" placeholder="用户名"></b-input>
    </b-form-item>
    <b-form-item prop="mail" label="邮箱">
      <b-input v-model="form.mail" placeholder="邮箱"></b-input>
    </b-form-item>
    <b-form-item>
      <b-button type="primary" @click="submitForm('ruleForm')">提交</b-button>
      <b-button @click="resetForm('ruleForm')">重置</b-button>
    </b-form-item>
  </b-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          mail: ''
        },
        ruleValidate: {
          name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
```

:::

### 自定义校验规则

可以自定义校验函数来实现更多的校验判定

::: demo

```html

<template>
  <b-form :model="ruleForm" status-icon size="large" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <b-form-item label="密码" prop="pass">
      <b-input type="password" v-model="ruleForm.pass" autocomplete="off"></b-input>
    </b-form-item>
    <b-form-item label="确认密码" prop="checkPass">
      <b-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></b-input>
    </b-form-item>
    <b-form-item label="年龄" prop="age">
      <b-input v-model.number="ruleForm.age" type="number"></b-input>
    </b-form-item>
    <b-form-item>
      <b-button type="primary" @click="submitForm('ruleForm')">提交</b-button>
      <b-button @click="resetForm('ruleForm')">重置</b-button>
    </b-form-item>
  </b-form>
  {{ruleForm}}
</template>
<script>
  export default {
    data() {
      const checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      const validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [{ validator: validatePass, trigger: 'blur' }],
          checkPass: [{ validator: validatePass2, trigger: 'blur' }],
          age: [{ validator: checkAge, trigger: 'blur' }]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
```

:::
