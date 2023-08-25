<template>
    <div class="content">
        <div class="title">
            <h1>Halo sobat, selamat datang </h1>
            <h1>di Jateng Pintar</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
            <p>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
            <p>commodo consequat. Deuis aute irure dolor in reprehenderit in voluplate velit</p>
            <p>esse cillum dolore au fugiat nulia pariatur. Excepteur sint occaecat cupidatat</p>
            <p>non peoident, sunt n culpa quid officia deserunt moillit anim id est laborum</p>
        </div>
        <div class="logo">
        <img src="assets/img/content/Group.svg" alt="">
        </div>

        <div class="sliders">
            <div class="btn"><img src="assets/img/content/Icon Button.svg" alt=""></div>
          <div v-for="item in data1" :key="item">
           <div v-for="image in data1 " :key="image.image" class="sliders-inside">
                <img :src="image.image"  alt="Image">
                <h1>{{ image.title }}</h1>
          </div>
               
            </div>


            <div class="btn"><img src="assets/img/content/Icon Button (1).svg" alt=""></div>
        
        </div>
        
        <div class="componen">
            <img src="assets/img/Group 8.svg" alt="">
        </div>

            <div class="content2">
                        <div class="content2-inside">
                            <h1 style="color:rgba(162, 64, 165, 1) ;font-size: 32px;">Jelajahi</h1>
                            <h1 style="color:rgba(162, 64, 165, 1) ; font-size: 32px;">Jateng Pintar</h1>
                            <p>Temukan beragam sumber</p>
                            <p>belajar yang bermanfaat</p>
                            <p>untuk meningkatkan</p>
                            <p>pemahaman siswa di</p>
                            <p>website kami.</p>
                        </div>
                        <div class="content2-inside">
                            <img src="assets/img/content/Icon1.svg" alt="">
                            <h1><img src="assets/img/content/Frame58.svg" alt="">Sumber Belajar</h1>
                            <a>Lihat Selengkapnya <img src="assets/img/content/Vector1.svg" alt=""></a>
                        </div>
                        <div class="content2-inside">
                            <img src="assets/img/content/Icon2.svg" alt="">
                            <h1><img src="assets/img/content/Frame59.svg" alt="">Karya Siswa</h1>
                            <a>Lihat Selengkapnya <img src="assets/img/content/Vector1.svg" alt=""></a>
                        </div>
                        <div class="content2-inside">
                            <img src="assets/img/content/Icon3.svg" alt="">
                            <h1><img src="assets/img/content/Frame60.svg" alt="">Siswa Jateng Pintar</h1>
                            <a>Lihat Selengkapnya <img src="assets/img/content/Vector1.svg" alt=""></a>
                        </div>
                        <div class="content2-inside">
                            <img src="assets/img/content/Icon4.svg" alt="" >
                            <h1><img src="assets/img/content/Frame61.svg" alt="">Kontributor</h1>
                            <a>Lihat Selengkapnya <img src="assets/img/content/Vector1.svg" alt=""></a>
                        </div>
            </div>



            
        <fieldset class="portals">
            <legend>Jelajahi Website Lainnya</legend>
            <div class="portals-box">
            <ul >
                <li>
                    
                    <div v-for=" (row ,index) in iconDataRows" :key="index" class="btn1">
                      <div v-for="icon in data2" :key="icon.icon " class="btn1-inside">
                        <a href=""> 
                          <img :src="icon.icon" alt="" class="icon1">
                          {{ icon.title }} 
                          <img src="assets/img/content/Vector.svg" alt="" class="arrow"></a>

                        </div>
                    </div>
                    
                </li>
            </ul>
        </div>
        </fieldset>
    </div>
</template>
<style scoped>
.content {
background: linear-gradient(to right, #6a42a2 , #663e9e);
}
.componen{
margin-top: -120px;
}
.title {
position: absolute;
color: white;
margin-top: 120px;
margin-left: 150px;
}
.title h1{
font-size: 40px;
font-weight: bold;
}
.title p{
 font-size: 16px;
}

.logo img{
position: absolute;
  margin-top: 70px;
  margin-left: 650px;
}
.sliders {
position: absolute;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 0px;
margin-left: 140px;
margin-top: 800px;
margin-bottom: 200px;
}


.content2{
position: absolute;
display: flex;
width: 90%;
height: 330px;
background-color: white;
margin-top: -500px;
margin-left: 60px ;
margin-bottom: 200px;
padding-inline: 10px;
border-width: 5px;
border-radius: 16px;
}
.content2-inside {
width: 18%;
height: 295px;
background-color: white;
margin: 10px auto;
padding-inline: 10px;
border-width: 20px;
border-right: rgba(238, 38, 157, 1) solid;
}
.content2-inside h1{
font-size: 20px;
font: bold;
}


.portals {
position: absolute;
width: 90%;
height: 100px;
padding-inline: 10px;
margin-top: -90px;
margin-left: 60px;
border-width: 5px;
border:rgba(238, 38, 157, 1) solid;
border-radius: 16px;
}


.portals ul li{
  list-style: none;
  margin-right: 10px;
}
.portals ul li a{
text-decoration: none;
padding: 20px 30px;

}
.btn{
margin-top: 50px;
}
.btn1{
  display: flex;
}
.btn1-inside{
  padding: 10px;
  
}
.btn1 a{
text-decoration: none;
font-size: 16px;
background: #2e1552;
color: white;
border-radius: 30px;

}
.btn1 a:hover {
background: rgba(238, 38, 157, 1);
color: white;
}
.btn1 .icon1 {
width: 40px; 
height: 35px; 
margin-right: 10px; 
vertical-align: middle;
background-color: white;
border-radius: 16px;
}
.arrow{
  margin-left: 30px;
}

</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data1: [],
      data2: [],
    };
  },


  methods: {
    fetchData() {
       const data1 = 'https://api.jateng-pintar.teknoreka.com/api/admin/sliders';
       const data2 = 'https://api.jateng-pintar.teknoreka.com/api/admin/portals';
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjNmNmY0MDkwZDRlM2E1MTIyOGQzYTgwN2U1YmFmODI4ODU5ZDk5ZWQ3OWQwNmEyMzUzNTg2NmY1ZWE3OTBkMWE4ZmE4NGZhMmZiMTA5YjMiLCJpYXQiOjE2OTI1MjYyMzQuNjAwNTEsIm5iZiI6MTY5MjUyNjIzNC42MDA1MTIsImV4cCI6MTcyNDE0ODYzNC41OTY2MzEsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.Eqmg2LIJdwEotymjwo6ycdya7BULM77W821uD02hTJSy_JhbQB6Uw4sj-wUN62pZt6MbRwEzj3itLNkVc5LNOlUJFH1zQ7ZEEXWEDn1nUaHeIWsfGNDq36y9MZO4DK7AsVXJSXdeV95uhCyJQAQbNgACgVxy8nV-5-DOmRaE7_1hozhyHl02waEhaRs1GX_K6j8io1Cm1hTEqKbYOE8PR5GrfbOJiJqo3ZI5_e2wxSqX8M8pPwZcTs2S3TR8xUGkJd8Qw7z7EeX_fFUdqPzb51zAqPV-VLzYKoJUkFy0nxo-SHVLebZI-ITUDtvKUU5gxnVlgq4ZY7etJraauGdYU50W_kg7-milkapErX8q49GUnaL9BPg1-23i58vfxhuAXl6rI2UVlUZAQtnQZJBLRfttAwZdsQ1Rj91e-8nokWImM2ItB-AE5uH2q668DJWL582BbFI5UxQ1VgpZmuAEV-KwLEgUJF1iqB6tpf-lZggyMpnVQQMpl0TJ251hzo4zUD2qc7bN5WWDdJ8nwtWUo70YwUpsBevZdLx68DbE1TMdmKXXSgFQgX5bLMmw8Z_EPFyShOZxqH4O6BzXrLxiY_Uh9GBeyKs8MNQAKuKmnltCrJbNEM4DTsIPK9SegvdMmYDU_hdGH8gO5g-9d9Fy0Dmp0LgY8OfSJWyoGuEBU_k';

      axios.get(data1, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then(res=>{
        this.data1 = res.data.data.data
        console.log(this.data1)
      })

      .catch(error => {
        console.error('Error fetching data:', error);
      });

      axios.get(data2, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then(res=>{
        this.data2 = res.data.data.data
        console.log(this.data2)
      })

      .catch(error => {
        console.error('Error fetching data:', error);
      });
    },
  },

  mounted() {
    this.fetchData()
  },

  computed: {
    iconDataRows() {
      const rows = [];
      for (let i = 0; i < this.data2.length; i += 5) {
        rows.push(this.data2.slice(i, i + 1));
      }
      return rows;
    }
  }

}


</script>
