<template>
  <v-row justify="center" align="center">
    <v-col cols="11" sm="4" md="4" class="col1">
      <div>
        <v-card class="card"
          elevation="7"
          outlined>
          <v-card-title class="card-title">
            تسجيل الدخول
          </v-card-title>
          <hr>
          <v-card-text class="input-form">
            <v-text-field class="text-filed"
              v-model='username'
              id='username'
              name='username'
              label='اسم المستخدم'
              type='text'
              filled
              rounded
              dense
              reverse>
            </v-text-field>
            <v-text-field class="text-filed"
              v-model='password'
              id='password'
              label='كلمة المرور'
              type='password'
              filled
              rounded
              dense
              reverse>
            </v-text-field>
            <v-card-text class="forgit">
              <NuxtLink to="/">
                نسيت كلمة المرور؟
              </NuxtLink>
            </v-card-text>
            <v-checkbox  class="checkbox"
              v-model="ex4"
              label="تذكرني"
              color="primary"
              value="primary"
              hide-details
              ></v-checkbox>
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-btn class="login-btn"   elevation="4"  @click='loginClicked'>تسجل دخول</v-btn>
            </v-card-actions>
          </v-card-text>
          <hr>
          <v-card-text class="sign-up">
            <p>اذا ليس لديك حساب
              <NuxtLink to="/Registration">
                سجل حساب
              </NuxtLink></p>
            </v-card-text>
        </v-card>
      </div>
    </v-col>
    <v-col cols="12" sm="8" md="6" class="col">
      <div class="text-center">
        <h3>مرحبا بكم في </h3>
        <h1>block list</h1>
        <p>يسهل موقعنا التعرف على الأشخاص الغير موثوقين 
        في استلام الطلبات عدم المصداقية مع أصحاب المتاجر الالكترونية</p>
      </div>
      <div >
          <img :src="login" class="login-img"/>
      </div>
    </v-col>
    
  </v-row>
</template>

<script>
import login from "~/static/login.png"

export default {
  layout:'Registration',
  data: function () {
    return {
      login: login
    }
  }
}
</script>
<style>
.col1{
  margin-left: auto;
  margin-right: 0px;
  margin-top: 220px;
}
.card{
  text-align: center;
  justify-content: center;
  background-color: #211E4F !important;
  border-radius: 20px !important;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.col{
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
  font-size: 30px;
}
.col h1{
  width: 600px;
  margin-bottom: 40px;
}
.input-form{
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.v-label {
  height: 25px !important;
  font-size: 18px;
}
input{
  font-size: 20px;
  text-align: center;
}
.login-img{
  margin-top: 20px;
  width: 650px;
  height: 550px;
  margin-left: -150px;
}
.forgit{
  margin-top: -30px;
  text-align: right;
  font-size: 18px;
}
.forgit a{
  color: rgb(100, 83, 255) !important;
}
.sign-up p{
  margin-bottom: 10px;
  font-size: 18px;
  color: white;
}
.sign-up a{
  color: rgb(100, 83, 255) !important;
}
.checkbox{
  margin-right: 15px;
  float: right;
}
.checkbox label{
  color: white !important;
}
.card-title{
  color: white;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 22px;
}
.text-filed .v-input__slot {
  background-color: white !important;
  margin-top: 20px;
}
.v-input--selection-controls__input i{
  color: white !important;
}
.login-btn{
  background-color: #6170E7 !important;
  color: white !important;
  font-size: 18px !important;
  width: 150px;
}
</style>