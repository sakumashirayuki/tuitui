<template>
    <div>
        <HeadTop head-title="绑定手机" go-back="true"></HeadTop>
        <SliderVerification></SliderVerification>
        <div id="wrapper">
            <div id="middle" class="container">
                <div class="title">hello，欢迎回来</div>
                <div class="account-form">
                    <div class="account-form-group has-error">
                        <!--下面这行是为了避免chrome自动填充，触发focus和blur事件-->
                        <div class="iLoginComp-phone-num-wrapper">
                            <div class="country-area">
                                <span>中国</span>
                                <span>+86</span>
                                <i class="el-icon-arrow-right"></i>
                            </div>
                            <input
                                type="text"
                                name="txtuserName"
                                style="display: none"
                            />
                            <input
                                type="text"
                                name="txtuserName"
                                class="account-form-control js-input-name"
                                v-model.trim="name"
                                autocomplete="off"
                                maxlength="20"
                                placeholder="手机号"
                            />
                        </div>
                    </div>
                    <div class="account-form-group has-error">
                        <!--下面这行是为了避免chrome自动填充，触发focus和blur事件-->
                        <div class="iLoginComp-verify-code-wrapper">
                            <input
                                :type="inputType"
                                name="txtPassword"
                                style="display: none"
                            />
                            <input
                                :type="inputType"
                                name="txtPassword"
                                class="account-form-control js-input-password"
                                autocomplete="off"
                                v-model.trim="password"
                                maxlength="20"
                                placeholder="请输入验证码"
                            />
                            <span @click="handleVerify">获取验证码</span>
                        </div>
                    </div>
                    <div class="account-form-group button-row">
                        <div class="account-form-tip js-error"></div>
                        <div
                            href="javascript:void(0)"
                            class="account-form-btn js-btn-login"
                            @click="submit"
                        >
                            登录
                        </div>
                    </div>
                </div>
            </div>
            <div class="account-sns-login">
                <div class="tit">
                    <div class="line"></div>
                    <p>测试环境仅支持已有账号登录</p>
                    <div class="line"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeadTop from "@/components/header/Head";
import SliderVerification from "@/components/SliderVerification";

export default {
    name: "bindMobile",
    data(){
        return{
            showVerification: false
        };
    },
    components: {
        HeadTop,
        SliderVerification
    },
    methods: {
        handleVerify(){

        }
    }
};
</script>

<style lang="scss" scoped>
#wrapper {
    background-color: #fff;
    height: 100%;
    width: 100%;
    position: fixed;
}
.container {
    padding: 0.8rem;
    font-size: 0.37333333rem;
    .title {
        font-size: 26px;
        font-weight: bold;
    }
    .account-form {
        text-align: center;
        margin-top: 1rem;
        .account-form-group {
            position: relative;
            overflow: hidden;
            border-bottom: 1px solid #d9dde1;
            .iLoginComp-phone-num-wrapper {
                display: flex;
                align-items: center;
                padding-left: 0.13333333rem;
                .country-area {
                    display: flex;
                    align-items: center;
                    font-size: 0.28rem;
                    color: #646464;
                    white-space: nowrap;
                    span {
                        margin-right: 0.1rem;
                    }
                }
            }
            .iLoginComp-verify-code-wrapper{
                display: flex;
                align-items: center;
                white-space: nowrap;
                span{
                    color: #646464;
                    padding-left: 0.25rem;
                    border-left: 1px solid #d9dde1;
                    cursor: pointer;
                }
            }
            .iLoginComp-activate{
                color: #FE8C00;
            }
            .account-form-control {
                // margin-bottom: 0.21333333rem;
                padding-left: 0.13333333rem;
                display: block;
                width: 100%;
                color: #787d82;
                box-sizing: border-box;
                height: 1.33333333rem;
                font-size: 0.37333333rem;
                .verify {
                    float: left;
                    width: 4.8rem;
                }
                .verify-row {
                    display: none;
                }
            }
            .account-form-tip {
                display: none;
                color: #ff2d50;
                clear: both;
                font-size: 0.32rem;
                line-height: 0.53333333rem;
                text-align: left;
            }
            .imwap-visibility {
                position: absolute;
                color: #333;
                top: 0.42666667rem;
                right: 0.13333333rem;
                font-size: 16px;
            }
            .icon-cha {
                position: absolute;
                color: #333;
                top: 0.42666667rem;
                right: 0.13333333rem;
                font-size: 14px;
            }
            .account-form-btn {
                display: block;
                margin-top: 0.8rem;
                color: #fff;
                background: #f9a74b;
                font-size: 0.42666667rem;
                line-height: 1.2rem;
                border-radius: 0.13333333rem;
            }
            img {
                float: right;
                border: 1px solid #d9dde1;
                box-sizing: border-box;
                height: 1.12rem;
            }
        }
    }
    .forget-password-box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0.13333333rem;
        a {
            display: block;
            height: 0.45333333rem;
            padding: 0 0.53333333rem;
            font-size: 14px;
            line-height: 0.45333333rem;
        }
    }
}
.account-sns-login {
    margin-top: 2rem;
    height: 100px;
    width: 100%;
    .tit {
        display: flex;
        justify-content: center;
        align-items: center;
        .line {
            margin: 0 0.26666667rem;
            width: 1.28rem;
            height: 0.05333333rem;
            background-color: #e8e8e8;
        }
        p {
            color: #aeaeae;
        }
    }
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0.53333333rem;
        .account-sns-login ul li {
            margin: 0 0.8rem;
            i {
                font-size: 30px;
                color: #cbcbcb;
            }
        }
    }
}
</style>
