<template>
<div>
  <v-card class="card-person"
  shaped>
    <div>
        <div class="card_image">
            <div class="CompanyName"> 
            <p>محمد محمود</p>
            <img src="https://www.glassdoor.com/blog/app/uploads/sites/2/why-are-you-the-best-person-for-this-job-724x450.jpg" id="AccountPicture"/>
        </div>
            <img src="https://www.glassdoor.com/blog/app/uploads/sites/2/why-are-you-the-best-person-for-this-job-724x450.jpg" /> </div>
        <div class="card_text">
            <p id="card_title" >اسم الشخص</p>
            <p id="card_Type">078063516165</p>
            <p id="card_Type">التفاصيل</p>
            <div class="voit">
            <v-btn class="voit-btn"> <v-icon left> mdi-chat-outline</v-icon></v-btn>
            <v-btn class="voit-btn"> <v-icon left> mdi-chevron-down-box-outline </v-icon></v-btn>
            <v-btn class="voit-btn"> <v-icon left> mdi-chevron-up-box-outline</v-icon></v-btn></div>
            <v-btn class="view-btn"> مشاهدة </v-btn>
        </div>
    </div>
  </v-card>
</div>
</template>

<script>
export default {

}
</script>

<style>
.card-person{
    width: 300px;
    height: 300px;
    margin: auto;
    box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.1),
    -1px -1px 8px 2px rgba(0, 0, 0, 0.1) !important;
}
.card_image img{
    width: 300px;
    height: 300px;
    border-radius: 20px 0px 20px 0px;
    object-fit: cover;
}
.card-person:hover{
    box-shadow: 4px 4px 15px 6px rgba(0, 0, 0, 0.1),
        -2px -2px 15px 3px rgba(0, 0, 0, 0.1) !important;
}
.card-person .card_text {
    font-family: 'Almarai', sans-serif;
    border-radius: 0px 0px 20px 0px;
    margin-top: -102px;
    height: 100px;
}
.card_text {
    padding-top: 5px;
    position: relative;
    background-color: rgba(17, 15, 60,56%);
}
#card_title {
    text-align: right;
    font-size: 25px;
    color: white;
    padding: 0px 5px 10px 5px;
}
#card_Type {
    text-align: right;
    font-size: 16px;
    color: white;
    padding: 2px 5px;
}



.CompanyName {
    text-align: center;
    position: absolute;
    background: #110F3C;
    color: #ffffff;
    padding: 8px 15px;
    font-size: 18px;
    border-radius: 20px 0px 0px 20px;
    right: 0;
}
.CompanyName p{
    font-size: 18px;
    color:white;
    font-family: 'Almarai', sans-serif;
    margin-block-start: 0px;
    margin-block-end: 0em;
    margin-inline-start: 28px;
    margin-inline-end: 0px;
    margin-right: 25px;
}
#AccountPicture {
    margin-top: -25px;
    margin-right: -8px;
    float: right;
    width: 30px;
    height: 30px;
    border-radius: 50px;
}


.voit{
    margin-top: -100px;
    float: left;
    margin-left: 10px;
}
.voit-btn{
    margin-right: 5px;
    width: 40px;
    min-width: 30px !important;
    height: 35px !important;
    padding: 0px 0px !important;
}
.view-btn{
    margin-right: 5px;
    width: 100px;
    min-width: 30px !important;
    height: 40px !important;
    margin-top: -40px;
    float: left;
    margin-left: 10px;
}
</style>