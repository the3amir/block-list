<template>
  <v-row justify="center" align="center">
    <v-col cols="11" sm="4" md="3" class="col1">
      <div>
        <v-card class="card"
          elevation="5"
          outlined>
          <v-card-title class="card-title">
            تسجيل الدخول
          </v-card-title>
          <hr>
          <v-card-text class="text-center">
            <v-text-field
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
            <v-text-field
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
              <v-btn color='primary' @click='loginClicked'>Login</v-btn>
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
import Logo from '~/components/Logo.vue'
import login from "~/assets/login.png"

export default {
  components: {
    Logo
  },
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
  margin-right: auto;
  margin-top: 260px;
}
.v-card{
  text-align: center;
  justify-content: center;
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
.v-label {
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
  margin-top: -20px;
  text-align: right;
  font-size: 18px;
}
.forgit a{
  color: rgb(81, 62, 246) !important;
}
.sign-up p{
  margin-bottom: 10px;
  font-size: 18px;
  color: white;
}
.sign-up a{
  color: rgb(81, 62, 246) !important;
}
.checkbox{
  float: right;
  color: white;
}
.card-title{
  color: white;
  justify-content: center;
}
.v-input__slot {
  background-color: white !important;
  margin-top: 10px;
}
</style>