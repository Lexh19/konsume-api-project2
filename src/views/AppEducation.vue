<template>
    <div class="education">
        <ul>
            <li>
            <div class="btn">
             <img src="assets/img/content/arrow-left.svg"  style="background:rgba(238, 38, 157, 1);" ></div>
             <a>Beranda / Sumber Belajar</a>
            </li>
        </ul>



        <div class="content">
        <div v-for="(row, index) in imageDataRows" :key="index" class="content-inside1">
          <div v-for="image  in row" :key="image.image" class="">
            <img :src="image.image" alt="Image" />
          </div>
        </div>
      </div>
      
    </div>


</template>

<style scoped>
.education{
background: linear-gradient(to right, #6a42a2 , #663e9e);
}
.education ul{
list-style: none;
margin-left: 100px;
margin-top: 0px;

}
.education ul li a{
padding: 10px 10px;
background: white;
border-radius: 20px;
margin-left: 100px;
}
.btn{
width: 10px;
height: 20px;
}

.btn img{
padding: 20px ;
border-radius: 50px;
}
.content img{
height: 200px;
width: 400px;
}
.content-inside1{
display: flex;
justify-content: space-between;
padding: 30px 100px;
}

</style>

<script>
import http from "../axios.js"
export default {

  data() {
    return {
      data: [
      ],
    };
  },

  methods: {
    getData() {
      http.get('/user/educational-levels')
        .then(res=>{
        this.data = res.data.data.data
        console.log(this.data)
      })
    }
  },

  mounted() {
    this.getData()
  },


  computed: {
    imageDataRows() {
      const rows = [];
      for (let i = 0; i < this.data.length; i += 3) {
        rows.push(this.data.slice(i, i + 3));
      }
      return rows;
    }
  }

}

</script>

