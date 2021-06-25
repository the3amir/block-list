<template>
  <v-row justify="center" align="center">
    <v-col cols="11" sm="8" md="6" class="col">
      <div class="text-center">
        <h3>مرحبا بكم في </h3>
        <h1>block list</h1>
      </div>
      <div >
          <img :src="signup" class="signup-img"/>
      </div>
    </v-col>
    <v-col cols="6" sm="4" md="4" class="col2">
      <div>
        <v-card class="card"
          elevation="5"
          outlined>
          <v-card-title class="card-title">
            تسجيل حساب
          </v-card-title>
          <hr>
          <v-card-text class="input-form">
            <v-text-field class="text-filed"
              v-model='username'
              id='pagename'
              name='pagename'
              label='اسم البيج'
              type='text'
               filled
              rounded
              dense
              reverse>
            </v-text-field>
            <v-text-field class="text-filed"
              v-model='password'
              id='pagelink'
              label='رابط البيج'
              type='text'
               filled
              rounded
              dense
              reverse>
            </v-text-field>
            <v-text-field class="text-filed"
              v-model='password'
              id='type'
              label='نوع النشاط'
              type='text'
               filled
              rounded
              dense
              reverse>
            </v-text-field>
            <v-text-field class="text-filed"
              v-model='username'
              id='jop'
              name='jop'
              label='دورك في البيج'
              type='text'
              filled
              rounded
              dense
              reverse>
            </v-text-field>
            
            <v-spacer></v-spacer>
            <v-card-actions>
                <v-btn class="sign-btn" @click='loginClicked'>تسجيل</v-btn>
                <v-btn class="sign-btn" @click="$router.push('Registration')">السابقة</v-btn>
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
import signup from "~/static/signup.png"

export default {
  layout:'Registration',
  data: function () {
    return {
      signup: signup
    }
  }
}
</script>
<style>
.sign-btn{
    background-color: #6170E7 !important;
    color: white !important;
    font-size: 18px !important;
    width: 150px;
    margin-left: 5px;
    margin-right: 60px;
}
</style>