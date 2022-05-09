<template>
  <div>
    <div class="navbar">
      <div class="logo"></div>
      <div class="pages">
        <div>Home</div>
        <div>About</div>
        <div>Events</div>
        <div class="login-btn">
          <v-btn class="btn2" flat color="#7833F6">Sign up</v-btn>
        </div>
      </div>
    </div>

    <div class="sec1">
      <div class="hero">
        <div class="head">
          <h1>UBCOMSA <span>Connecting</span> Mentees to Mentors</h1>
        </div>
        <div class="bgm"></div>
        <div class="btns">
          <v-btn class="btn1" flat color="#7833F6">Find a mentor</v-btn>
          <v-btn class="btn2" flat variant="outlined" color="#7833F6">Be a mentor</v-btn>
        </div>
      </div>
      <div class="bg"></div>
    </div>

    <div class="sec2">
      <div class="sec2-l">
        <div class="txt-des">
          <div class="head-style">
            <div class="about-h1">
              <h1>About</h1>
            </div>
            <div class="about-btm"></div>
          </div>
        </div>
        <div class="p1">
          <p>
            UBCOMSA department of computer science student association is a community for
            all current and former student of computer science department of the
            university of Buea.
          </p>
        </div>
        <div class="p2">
          <p>
            As a non-profit organisation, UBCOMSA has for aim bring together current
            student as mentees, and former students as mentors in all the fields of
            computer science.
          </p>
        </div>
      </div>
      <div class="sec2-r">
        <div class="img-des"></div>
      </div>
    </div>

    <div class="sec3">
      <div class="head-style">
        <div class="about-h1">
          <h1>Features</h1>
        </div>
        <div class="about-btm"></div>
      </div>
      <div class="cards-div">
        <div class="card-d">
          <div class="card-u">
            <img src="" alt="" />
            <p class="p1">Mentorship</p>
            <p class="p2">
              We help connect you with mentors specialised in various career fields
            </p>
          </div>
        </div>
        <div class="card-d">
          <div class="card-u">
            <img src="" alt="" />
            <p class="p1">Opportunities</p>
            <p class="p2">We assist in making yourself hireable in the tech market</p>
          </div>
        </div>
        <div class="card-d">
          <div class="card-u">
            <img src="" alt="" />
            <p class="p1">Hands-on Skill</p>
            <p class="p2">We help you in bridging the gap between theory and practice.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="sec4">
      <div class="head-style">
        <div class="about-h1">
          <h1>Events</h1>
        </div>
        <div class="about-btm"></div>
      </div>
      <div class="cards-div">
        <div class="card-main">
          <div class="cd-icon">
            <img src="../assets/arcticons_bus.png" alt="" />
          </div>
          <div class="cd-1">
            <div class="txt">Fieldtrips</div>
            <div class="btnx">
              <v-btn size="small" flat variant="outlined" color="#7833F6">More</v-btn>
            </div>
          </div>
        </div>
        <div class="card-main">
          <div class="cd-icon">
            <img src="../assets/fluent_code-20-regular.png" alt="" />
          </div>
          <div class="cd-1">
            <div class="txt">Hackacthons</div>
            <div class="btnx">
              <v-btn size="small" flat variant="outlined" color="#7833F6">More</v-btn>
            </div>
          </div>
        </div>
        <div class="card-main">
          <div class="cd-icon">
            <img src="../assets/arcticons_voteinfo.png" alt="" />
          </div>
          <div class="cd-1">
            <div class="txt">Elections</div>
            <div class="btnx">
              <v-btn size="small" flat variant="outlined" color="#7833F6">More</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sec5">
      <div class="cat-div">
        <p>Frontend Web Development</p>
      </div>
    </div>

    <div class="footer">
      <div class="social">
        <h2>Social</h2>
        <div class="item-div">
          <div class="id-icon">
            <img height="30px" src="../assets/icons8-linkedin-circled-48.png" alt="" />
          </div>
          <div class="id-txt">LinkedIn</div>
        </div>
        <div class="item-div">
          <div class="id-icon">
            <img height="30px" src="../assets/icons8-twitter-48.png" alt="" />
          </div>
          <div class="id-txt">Twitter</div>
        </div>
        <div class="item-div">
          <div class="id-icon">
            <img height="30px" src="../assets/icons8-facebook-48.png" alt="" />
          </div>
          <div class="id-txt">Facebook</div>
        </div>
      </div>
      <div class="pg-links">
        <h2>Links</h2>
        <div class="pg-link">Home</div>
        <div class="pg-link">About</div>
        <div class="pg-link">Events</div>
      </div>
      <div class="contact-us">
        <h2>Contact Us</h2>
        <div class="cs-email">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Enter your email"
            required
          ></v-text-field>
        </div>
        <div class="cs-subject">
          <v-textarea
            name="input-3-1"
            label="Default style"
            rows="1"
            value="What do you wish to let us know."
            hint="Hint text"
          ></v-textarea>
        </div>
        <div class="cs-submit">
          <v-btn class="btn1" flat color="#F6C000">Submit message</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import styleHead from "../components/style-head.vue";
</script>

<style scoped>
.navbar {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 2px 3px 5px rgba(128, 128, 128, 0.488);
}
.login-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-btn > .btn2 {
  color: white;
}
.logo {
  background-image: url("../assets/logoub.PNG");
  height: 50px;
  width: 150px;
  background-size: contain;
}
.pages {
  flex-direction: row;
  display: flex;
  gap: 20px;
  margin-left: auto;
  margin-right: 20px;
}
.pages > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sec1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  margin-top: 50px;
}
.head {
  padding: 0 0 20px 0;
}
.head > h1 {
  font-weight: 500;
}
.head > h1 > span {
  color: #7833f7;
}
.hero {
  padding: 0 0 0 80px;
  width: 65%;
}
.hero > .head {
  font-size: 25px;
  width: 80%;
  margin-bottom: 50px;
}
.hero > .btns {
  display: flex;
  flex-direction: row;
}
.btn1 {
  margin-right: 20px;
  color: white;
}
.bg {
  background-image: url("../assets/Group3.png");
  height: 300px;
  width: 50%;
  background-size: contain;
}
.head-style {
  display: flex;
  flex-direction: column;
  padding: 0 0 0 0;
  margin: 0 0 25px 0;
}
.head-style > .about-h1 {
  font-size: 15px;
  margin: 0 0 10px 0;
}
.head-style > .about-btm {
  width: 100px;
  height: 5px;
  background: linear-gradient(92.45deg, #f7c000 -4.21%, #7833f7 65%);
  border-radius: 10px;
}
.sec2 {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  padding: 50px 0 80px 80px;
  background-color: #7833f71f;
}
.sec2-l {
  display: flex;
  flex-direction: column;
  width: 45%;
  line-height: 2rem;
}
.sec2-l > .p1,
.p2 {
  margin: 0 0 10px 0;
  width: 80%;
  font-size: medium;
  color:rgba(0, 0, 0, 0.854)
}
.sec2 .sec2-r {
  width: 50%;
  display: flex;
  justify-content: center;
}
.sec2-r > .img-des {
  display: flex;
  justify-content: center;
  background-image: url("../assets/Group16.png");
  background-size: cover;
  height: 310px;
  width: 300px;
}
.sec3 {
  width: 100%;
  margin: 50px 0 0 0;
  padding: 0 80px 0 80px;
}
.sec3 > .cards-div {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}
.card-d {
  display: flex;
  flex-direction: row;
  position: relative;
  height: 230px;
  width: 250px;
  background: linear-gradient(92.45deg, #f7c000 -4.21%, #7833f7 65%);
  border-radius: 10px;
  margin: 20px 0 0 0;
}
.card-u {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: absolute;
  left: -20px;
  bottom: -20px;
  height: 230px;
  width: 250px;
  background-color: #ededed;
  border-radius: 10px;
}
.card-u > .p1 {
  font-weight: bold;
}
.card-u > .p2 {
  font-size: 15px;
  margin: 10px 0 0 0;
  color: black;
}
.sec4 {
  width: 100%;
  margin: 100px 0 0 0;
  padding: 0 80px 0 80px;
}
.sec4 > .cards-div {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}
.sec4 > .cards-div > .card-main {
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 280px;
  background-color: #7833f7;
  border-radius: 10px;
  position: relative;
  margin: 20px 0 0 0;
}

.sec4 > .cards-div > .card-main > .cd-1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  width: 280px;
  height: 50px;
  bottom: 0;
  position: absolute;
  border-radius: 8px;
  background-color: white;
  box-shadow: 2px 3px 5px rgba(128, 128, 128, 0.452);
}
.cd-1 > .btnx {
  margin: 0 0 0 auto;
}
.cd-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  margin: 30px 0 0 0;
}
.footer {
  display: flex;
  width: 100%;
  height: 350px;
  background-color: #7833f7;
  margin: 150px 0 0 0;
  justify-content: space-between;
  padding: 20px 0 0 0;
}
.social {
  display: flex;
  flex-direction: column;
  color: white;
  padding: 20px 50px;
}
.social > .item-div {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0 0 0;
}
.id-icon {
  display: flex;
  border-radius: 20%;
  border: 2px solid white;
  margin: 0 20px 0 0;
  background-color: #ededed;
}
.pg-links {
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  margin: 20px 0 0px 0;
  text-align: left;
}
.pg-link {
  color: white;
  margin: 20px 0 0px 0;
}
.contact-us {
  display: flex;
  flex-direction: column;
  color: white;
  padding: 20px 50px;
  width: 40%;
}
.cs-submit > .btn1 {
  color: black;
}
.sec5 {
  display: flex;
  flex-direction: row;
  width: 100%;
}

@media only screen and (max-width: 450px) {
  .sec1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    margin-top: 50px;
  }
  .head {
    padding: 0 0 20px 0;
  }
  .head > h1 {
    font-weight: 500;
    font-size: large;
  }
  .head > h1 > span {
    color: #7833f7;
  }
  .hero {
    padding: 0 0 0 30px;
    width: 100%;
  }
  .hero > .head {
    font-size: 25px;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
  .hero > .btns {
    display: flex;
    flex-direction: column;
    gap: 20px 0;
    width: 200px;
  }
  .btn1 {
    margin-right: 20px;
    color: white;
  }
  .bgm {
    background-image: url("../assets/Group3.png");
    height: 150px;
    width: 100%;
    background-size: contain;
    margin-bottom: 20px;
  }
  .head-style {
    display: flex;
    flex-direction: column;
    padding: 0 0 0 0;
    margin: 0 0 25px 0;
  }
  .head-style > .about-h1 {
    font-size: 15px;
    margin: 0 0 10px 0;
  }
  .head-style > .about-btm {
    width: 100px;
    height: 5px;
    background: linear-gradient(92.45deg, #f7c000 -4.21%, #7833f7 65%);
    border-radius: 10px;
  }
}
</style>
