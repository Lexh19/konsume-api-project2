<template>
    <header class="header" >
        
        <ul >
            <img src="/assets/img/header/image-4.svg" alt="">
        <li>
            <div class="btn">
            <a>Beranda</a>
            </div>
        </li>

       <li>
            <div class="btn">
            <a>Acara</a>
            </div>
        </li>
        
        <li>
            <div class="btn">
            <a>Kontak</a>
            </div>
        </li>

        <li>
            <div class="btn">
            <a>Login<img src="/assets/img/header/Vector.svg" alt="" class="icon"></a>
            </div>
        </li>
    </ul>
    
   </header>
</template>
<style scoped>
header{

padding: 20px;
background: linear-gradient(to right, #6a42a2 , #663e9e);
}
header ul{
display: flex;
justify-content: right;
}
header ul img{
margin-right: 270px;
}
header ul li{
list-style: none;
margin-right: 10px;
}
.btn{
margin-top: 30px;
margin-right: 70px;
}
.btn a{
text-decoration: none;
font-size: 16px;
background: rgba(238, 38, 157, 1);
padding: 16px 35px;
color: white;
border-radius: 30px;
width: 70px;
}
.btn a:hover {
background: white;
color: rgba(238, 38, 157, 1);
}
.btn .icon {
width: 20px; 
height: 20px; 
margin-right: 0px; 
vertical-align: middle; 
}

.bintang1{
float: left;
margin-top: -1000px;
margin-left: 10px;
}
.bintang2{
float: left;
margin-top: -1000px;
margin-left: 200px;
}
.bintang3{
float: right;
margin-top: -700px;
margin-right: 300px;
}



</style>