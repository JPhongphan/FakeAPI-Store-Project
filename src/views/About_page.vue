<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-4">
                <h1>เกี่ยวกับ</h1>
            </div>
            <div class="col-lg-8 mb-5">
                <p>เว็บไซต์รายการสินค้านี้จัดทำเพื่อการศึกษาการเรียกใช้ API เพื่อนำข้อมูลมาแสดงบนหน้าเว็บไซต์ และศึกษาการใช้ VueJs รวมถึงการใช้เครื่องมือต่างๆในการทำเว็บไซต์เพื่อนำไปพัฒนาต่อยอดในโปรเจคอื่นๆ โดยรูปแบบการจัดวางองค์ประกอบและข้อมูลต่างๆ อ้างอิงจากเว็บไซต์ขายสินค้าจริง</p>
            </div>
            <div class="col-lg-12">
                <h2>เครื่องมือ</h2>
            </div>
            <div class="col-lg-12 mb-5">
                <div class="d-flex mb-2 flex-wrap align-items-center justify-content-around">
                    <div class="card-icon" v-for="(fram, index) in framwork_card" :key="index" style="width:180px; height: 210px;">
                        <img class="logo-framwork" :src="fram.image" alt="">
                    </div>
                </div>
            </div>
            <div class="col-lg-12">
                <h2>ติดต่อ</h2>
            </div>
            <div class="col-lg-12 p-3" style="background-color: black; color: white; padding: 10px; border-radius: 30px;">
                <div class="row text-center">
                    <div class="col  d-flex align-items-center justify-content-around"><img class="contact-img" src="https://cdn.pic.in.th/file/picinth/nuengphann-1.png" alt=""></div>
                    <div class="col d-flex align-items-center justify-content-around">
                        <form class="d-flex flex-column" style="gap: 10px;" @submit.prevent="sendEmail" >
                            <label for="email">Email:</label>
                            <input type="email" id="email" v-model="email" required>
                            <label for="name">Name:</label>
                            <input type="text" id="name" v-model="name" required>
                            <label for="message">Message:</label>
                            <textarea id="message" v-model="message" required style="text-align: center;"></textarea>
                            <button type="submit" class="btn btn-light">Send</button>
                        </form>
                    </div>
                    <div class="col pt-2 align-items-center justify-content-around">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122917.69123091939!2d100.12123405!3d15.688709099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e048b46b361f6d%3A0x60e079d073ee8343!2z4LmA4LiX4Lio4Lia4Liy4Lil4LiZ4LiE4Lij4LiZ4LiE4Lij4Liq4Lin4Lij4Lij4LiE4LmMIOC4reC4s-C5gOC4oOC4reC5gOC4oeC4t-C4reC4h-C4meC4hOC4o-C4quC4p-C4o-C4o-C4hOC5jCDguJnguITguKPguKrguKfguKPguKPguITguYw!5e0!3m2!1sth!2sth!4v1689412792736!5m2!1sth!2sth" width="325" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            framwork_card:{
                framework1:{
                    name: "Vue.js",
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png' 
                },
                framework2:{
                    name: "Bootstrap",
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png' 
                },
                framework3:{
                    name: "Vite",
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png' 
                },
                framework4:{
                    name: "Pinia",
                    image: 'data:image/jpeg;base64,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' 
                },
                framework5:{
                    name: "Axios",
                    image: 'data:image/png;base64,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' 
                },
                framework6:{
                    name: "Fake API",
                    image: 'https://fakestoreapi.com/icons/logo.png' 
                },
            },
            email: '',
            name: '',
            message: ''  
        }
    },
    methods: {
    sendEmail() {
      const mailtoLink = `mailto:phongphan.prm@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(
        `Email: ${this.email}\nName: ${this.name}\nMessage: ${this.message}`
      )}`;
      window.location.href = mailtoLink;
    }
  }
}
</script>
<style>
    form input{
        
        border-radius: 20px;
        text-align: center;
        width: 18rem;
        height: 2.5rem;
        outline: none;
        border: none;
    }
    .contact-img{
        padding: 10px;
        border-radius:200px;
        width: 15rem;
    }
    .logo-framwork{
        width: 6.5rem;
        transition: 0.2s;
    }
    .card-icon{
        margin: 10px 0px;
        gap: 10px;
        padding: 10px;
        border-radius: 20px;
        border: 1px solid rgb(255, 255, 255);
        box-shadow: 1px 1px 4px #dadada;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 10rem;
        height: 13rem;
        transition: 0.2s;
    }
    .card-icon:hover{
        width: 11rem;
        height: 14rem;
        box-shadow: 7px 7px 18px #e0e0e0;
        transition: 0.4s;
    }
    .card-icon:hover .logo-framwork{
        width: 7rem;
        transition: 0.4s;
    }
</style>