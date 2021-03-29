<template>
    <div class="login">
        <el-form
        :label-position="labelPosition"
        :model="formLabelAlign"
        class="login_form"
        :rules="rules"
        ref="formLabelAlign"
        >
        <el-form-item prop="name">
            <!-- <img src="../assets/1.jpg" alt="" /> -->
            <el-input
            v-model="formLabelAlign.name"
            prefix-icon=" el-icon-user"
            class="login_input"
            ></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
            <el-input
            v-model="formLabelAlign.pwd"
            show-password
            prefix-icon="el-icon-unlock"
            class="login_input"
            ></el-input>
        </el-form-item>
        <el-button
            type="primary"
            class="login_btn"
            @click="onSubmit('formLabelAlign')"
            >登录</el-button
        >
        </el-form>
    </div>
</template>

<script>
import Requset from "../request/index.js"
export default {
props: {},
    data() {
        return {
        labelPosition: "left",
        formLabelAlign: {
            name: "admin",
            pwd: "tiger",
        },
        rules: {
            name: [
            { required: true, message: "请输入用户名", trigger: "blur" },
            { min: 3, max: 16, message: "长度在 3 到 5 个字符", trigger: "blur" },
            ],
            pwd: [
            { required: true, message: "请输入密码", trigger: "blur" },
            { min: 3, max: 6, message: "长度在 6到 10 个字符", trigger: "blur" },
            ],
        },
        };
    },
    methods: {
        onSubmit(formName) {
            console.log(this)
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log(this.formLabelAlign.name,this.formLabelAlign.pwd)
                Requset({
                    url:"/userLogin/authUser", 
                    method:"get",
                    params:{
                        userName: this.formLabelAlign.name,
                        passWord: this.formLabelAlign.pwd
                    }
                    })
                    .then((res) => {
                    console.log(res);
                    if(res.code!==2000){
                        console.log("error submit!!");
                this.$message.error("用户或密码错误!");
                return false;
                    }else{
                        this.$message({
                        message: "登录成功",
                        type: "success",
                        duration: 1000,
                        onClose: () => {
                        window.sessionStorage.setItem("token", res.data.token);
                        this.$router.push("/Home");
                        },
                    });
                    }
                    });
                } else {
                console.log("error submit!!");
                this.$message.error("用户或密码错误!");
                return false;
                }
            });
        },
    },
    components: {},
};
</script>

    <style scoped lang="less">
.login {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../assets/like.jpg);
    background-size:cover ;
    .login_form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30%;
        padding: 30px;
        border-radius: 10px;
        border: 1px solid #fff;

        .login_input {
        width: 250px;
        }
        .login_btn {
        width: 45%;
        }
        img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute;
        top: -59px;
        left: 102px;
        }
    }
}
</style>

