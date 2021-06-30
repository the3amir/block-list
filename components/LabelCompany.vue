<template>
        <div class="label"> 
        <p>محمد محمود</p>
        <p>التفاصيل</p>
        <img src="https://www.glassdoor.com/blog/app/uploads/sites/2/why-are-you-the-best-person-for-this-job-724x450.jpg" id="labelPicture"/>
        </div>
</template>

<script>
export default {

}
</script>

<style>
.label {
    width: 300px;
    height: 80px;
    text-align: right;
    position: absolute;
    background: #110F3C;
    color: #ffffff;
    padding: 8px 15px;
    font-size: 18px;
    border-radius: 10px;
}
.label p{
    font-size: 18px;
    color:white;
    font-family: 'Almarai', sans-serif;
    margin-right: 55px;
    margin-top: 5px;
}
#labelPicture {
    margin-top: -44px;
    margin-right: -8px;
    float: right;
    width: 55px;
    height: 55px;
    border-radius: 50px;
}
</style>