<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" class="col">
      <div class="text-center">
        <h3>مرحبا بكم في </h3>
        <h1>block list</h1>
      </div>
      <div >
          <img :src="signup" class="signup-img"/>
      </div>
    </v-col>
    <v-col cols="6" sm="4" md="3" class="col2">
      <div>
        <v-card class="card"
          elevation="5"
          outlined>
          <v-card-title class="card-title">
            تسجيل حساب
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
            <v-text-field
              v-model='password'
              id='password'
              label='تأكيد كلمة المرور'
              type='password'
               filled
              rounded
              dense
              reverse>
            </v-text-field>
            <v-text-field
              v-model='username'
              id='phone'
              name='phone'
              label='رقم الهاتف'
              type='number'
              filled
              rounded
              dense
              reverse>
            </v-text-field>
            <v-select
              color="pink"
              label="البلد"
               filled
              rounded
              dense
            ></v-select>
            
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-btn color='primary' @click='loginClicked'>Login</v-btn>
            </v-card-actions>
          </v-card-text>
          <hr>
          <v-card-text class="sign-up">
            <p>اذا لديك حساب
              <NuxtLink to="/">
                سجل دخول
              </NuxtLink></p>
            </v-card-text>
        </v-card>
      </div>
    </v-col>
    
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import signup from "~/assets/signup.png"

export default {
  components: {
    Logo
  },
  data: function () {
    return {
      signup: signup
    }
  }
}
</script>
<style>
.col2{
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
}
.card{
  background-color: #211E4F !important;
  border-radius: 20px !important;
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
}
.v-label {
  font-size: 18px;
}
input{
  font-size: 20px;
  text-align: center;
}
.signup-img{
  margin-top: 10px;
  width: 750px;
  height: 650px;
  margin-right: -150px;
}
.sign-up{
  margin-top: 10px;
  font-size: 18px;
}
.card-title{
  color: white;
  justify-content: center;
}
</style>