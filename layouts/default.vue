<template>
<div>
  <h1 id="black-list">block list</h1>
    <v-navigation-drawer class="nav"
      v-model="drawer"
      permanent>
      <v-list-item class="px-2">
        <v-list-item-title class="person-name">John Leider</v-list-item-title>
        <v-list-item-avatar class="person-img">
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
      </v-list-item>
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
@import url('https://fonts.googleapis.com/css2?family=Almarai&display=swap');
html{
  font-family: 'Almarai', sans-serif;
  text-align: center;
}
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
  margin:20px 0px 20px 0px ;
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
  border-color: white !important;
}
#black-list{
  font-size: 40px;
  text-align: right;
  margin-right: 50px;
  margin-top: 2%;
  margin-bottom: 20px;
}
</style>