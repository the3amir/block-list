<template>
<div>
  <div class="upper">
    <v-row>
      <v-text-field class="search-input" label="search" solo></v-text-field>
      <v-btn class="search-btn"> <v-icon left> mdi-magnify</v-icon></v-btn>
    </v-row>
    <h1 id="black-list">block list</h1>
  </div>
    <v-navigation-drawer class="nav"
      v-model="drawer"
      permanent>
      <v-list-item class="px-2">
        <v-list-item-title class="person-name">John Leider</v-list-item-title>
        <v-list-item-avatar class="person-img">
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-btn tile color="primary" class="slider-btn">
      <v-icon left>mdi-pencil</v-icon>
      التعديل
      </v-btn>
      <v-btn tile color="success" class="slider-btn">
      <v-icon left>mdi-account-circle </v-icon>
      البروفايل
      </v-btn>
      <v-btn tile color="error" class="slider-btn">
      <v-icon left>mdi-close-circle-outline</v-icon>
      تسجيل الخروج
      </v-btn>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item class="nav-item"
          v-for="item in items"
          :key="item.title"
          link>
          <v-list-item-content >
            <v-list-item-title class="nav-title">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</div>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'الرئيسية', icon: 'mdi-home-city' },
          { title: 'قائمة المحظورين', icon: 'mdi-account-details' },
          { title: 'شركات التوصيل', icon: 'mdi-truck-fast' },
          { title: 'اضافة شخص', icon: 'mdi-account-plus' },
          { title: 'من نحن', icon: ' mdi-book-information-variant' },
          { title: 'تواصل معنا', icon: 'mdi-card-account-phone' },
        ],
        mini: true,
      }
    },
  }
</script>
<style>
.nav{
  float: right;
  height: 80vh !important;
  border: solid 1px black;
  border-radius: 20px 0px 0px 20px;
  background-color: #211E4F !important;
}
.v-navigation-drawer__border{
  left: 0;
  top: 0;
}
.v-list-item{
  padding: 10px 16px;
  margin:15px 0px 15px 0px ;
}
.px-2{
  padding: 10px 16px;
  margin:0px 0px 0px 0px ;
}
.v-list-item__icon i{
  color: white !important;
  font-size: 30px !important;
}
.v-list-item__content{
  text-align: right;
  margin-right: 10px;
}
.v-list{
  width: 90%;
  float: right;
  border-radius: 20px;
}
.person-name{
  font-size: 25px !important;
  color: white;
}
.person-img {
  width: 100px !important;
  height: 65px !important;
}
.slider-btn{
  font-size: 14px !important;
  margin-top: 10px;
}
.nav-title{
  font-size: 20px !important;
  height: 20px;
  color: white;
  padding-top: 1px; 
}
.nav-item:hover{
  background-color: #6170E7 !important;
  border-radius: 30px;
}
.v-divider{
  margin-top: 10px;
  border-color: white !important;
}
.upper{
  display:flex;
}
#black-list{
  float: right;
  font-size: 40px;
  text-align: right;
  margin-right: 50px;
  margin-top: 1%;
  margin-bottom: 20px;
}
.search-input {
  flex: 0 1 auto !important;
}
.search-input .v-input__slot{
  margin-top: 30px;
  margin-left: 30px;
  width: 350px;
}
.search-btn{
    min-width: 40px !important;
    height: 48px !important;
    margin-top: 30px;
    margin-left: -59px;
}
.search-btn i{
  font-size: 30px !important;
  margin-left: 1px;
}
</style>