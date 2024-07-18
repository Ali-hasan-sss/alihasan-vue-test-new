<template>
  <div>
    <nav class="nav-dashboard">
      <h1>store</h1>

      <ul>
        <li><a class="link" href="/dashboard">user</a></li>
        <li><a class="link" href="/#">product</a></li>
        <li><a class="link" href="/#">admin</a></li>
        <li><a class="link" href="/#">store</a></li>
      </ul>
      <router-link class="link" to="/">go to website</router-link>
    </nav>
    <div class="container">
      <h1 class="title">users</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.id">
            <td>{{ index + 1 }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <router-link class="link" :to="`/${user.id}`">
                <i class="fa-solid fa-pen-to-square update"></i
              ></router-link>
              <i
                class="fa-solid fa-trash delete"
                @click="() => delUser(user.id)"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DashBoard",
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((response) => response.json())
      .then((data) => {
        this.users = data;
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  },
  methods: {
    async delUser(id) {
      await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
      location.reload();
    },
  },
};
</script>

<style scoped>
.nav-dashboard {
  padding: 20px 50px;
  background-color: #6991e8;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container {
  padding: 10px;
}
.title {
  text-align: center;
}
ul {
  list-style: none;
  display: flex;
}
li {
  margin: 0 10px;
}
.link {
  text-decoration: none;
  color: rgb(238, 234, 229);
  font-size: 22px;
  background-color: transparent;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  padding: 12px;
  border: 1px solid #ddd;
}
th {
  background-color: rgb(125, 188, 230);
  color: #000;
}
tr:nth-child(even) {
  background-color: rgb(113, 123, 123);
}
.delete {
  color: red;
  cursor: pointer;
  margin: 5px 10px;
}
.update {
  color: blue;
  cursor: pointer;
  margin: 5px 10px;
}
</style>
