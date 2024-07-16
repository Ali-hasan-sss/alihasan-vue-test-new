<template>
  <div>
    <Navbar />
    <div class="container my-5 regester">
      <div class="form-container">
        <h2>Register</h2>
        <form @submit.prevent="register">
          <div class="input-group">
            <label for="name">Your Full Name:</label>
            <input type="text" id="name" v-model="name" required />
          </div>
          <div class="input-group">
            <label for="email"> Your Email:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="input-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <div class="input-group">
            <label for="confirmPassword">Rebeat Your Password:</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              required
            />
          </div>
          <button type="submit">Register</button>
          <div v-if="error" class="error">{{ error }}</div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/footer.vue";

export default {
  name: "SignUp",
  components: { Navbar, Footer },
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
    };
  },
  methods: {
    async register() {
      this.error = "";
      if (!this.email || !this.password || !this.confirmPassword) {
        this.error = "all inputs is required";
        return;
      }
      if (this.password.length < 8) {
        this.error = "password will be up 8char";
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.error = "password is not ";
        return;
      }
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/register",
          {
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirmation: this.confirmPassword,
          }
        );
        console.log("regester is done", response.data);
        localStorage.setItem("email", this.email);
        this.$router.push("/");
      } catch (err) {
        if (err.response && err.response.status === 422) {
          const errors = err.response.data.errors;
          if (errors) {
            this.error = Object.values(errors).flat().join(", ");
          } else {
            this.error = "this Email is allredy teaken";
          }
        } else {
          this.error = "error pleas try again later";
        }
        console.error("error", err);
      }
    },
  },
};
</script>

<style scoped>
.regester {
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
