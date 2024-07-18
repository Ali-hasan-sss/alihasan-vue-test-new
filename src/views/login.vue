<template>
  <div>
    <NavBar />
    <div class="container my-5 login">
      <div class="form-container">
        <h2>LogeIn</h2>
        <form @submit.prevent="login">
          <div class="input-group">
            <label for="email">Your Email</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="input-group">
            <label for="password">Your Password</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <button type="submit">LogIn</button>
          <div v-if="error" class="error">{{ error }}</div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";
import NavBar from "../components/Navbar.vue";
import axios from "axios";

export default {
  name: "LogIn",
  components: { NavBar, Footer },
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async login() {
      this.error = "";
      if (!this.email || !this.password) {
        this.error = "all inputs is required";
        return;
      }
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/login", {
          email: this.email,
          password: this.password,
        });
        console.log("logein is done", response.data);
        localStorage.setItem("email", this.email);
        this.$router.push("/");
      } catch (err) {
        if (err.response && err.response.status === 422) {
          this.error = "Email or Password is wrong";
        } else if (err.response && err.response.status === 401) {
          this.error = "you are not registered";
        } else {
          this.error = "error please try again later";
        }
        console.error("error", err);
      }
    },
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-image: url(../assets/Images/logo.png); */
  background-position: left;
  background-size: 40%;
  background-repeat: no-repeat;
}
h2 {
  text-align: center;
  margin-bottom: 50px;
  color: #fde044b2;
  font-weight: 700;
  font-size: 3rem;
  letter-spacing: 4px;
}
form {
  border: 2px solid #fde044b2;
  background-color: #22222274;
  width: 350px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #fff;
}
.input-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
input {
  padding: 10px;
  border: 2px solid #fde044b2;
  outline: none;
}
button {
  width: 100%;
  background-color: transparent;
  padding: 10px 20px;
  margin-top: 25px;
  font-size: 1em;
  color: #fff;
  border: 1px solid #fde044b2;
  cursor: pointer;
  text-transform: uppercase;
}

button:hover {
  background-color: #fde044b2;
}
.error {
  margin-top: 1em;
  color: red;
}
</style>
