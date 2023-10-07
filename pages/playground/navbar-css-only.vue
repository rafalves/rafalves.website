<template>
  <div class="h-full antialiased mt-5 font-poppins">
    <div class="h-full font-sans ">
      <p class="text-center pt-3">Navbar CSS Only</p>
      <p class="text-center pt-3">The secret for a navbar with only CSS is using a input checkbox to hold the OPEN/CLOSE
        state</p>

      <p class="text-center py-3">Example using float 🤮 (and some other old techniques): <a
          class="a_source italic font-semibold" href="https://www.youtube.com/watch?v=oLgtucwjVII" target="_blank">Source
          <Icon class="-mt-1" size="25px" name="logos:youtube-icon" color="white" />
        </a></p>

      <p class="text-center">Resize the screen to see the mobile version</p>

      <div class="root">
        <!-- Navigation bar -->

        <nav>
          <input type="checkbox" id="check">
          <label for="check" class="checkbtn">
            <Icon name="ic:sharp-menu" color="white" />

          </label>
          <label class="logo">NavBar with only CSS</label>
          <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </nav>
      </div>

    </div>
  </div>
</template>

<style scoped>
.a_source:hover {
  background: transparent;
  text-decoration-line: underline;
}

root {
  padding: 0;
  margin: 0;
  text-decoration: none;
  box-sizing: border-box;
}


label.logo {
  color: white;
  font-size: 35px;
  line-height: 80px;
  padding: 0 100px;
  font-weight: bold;
}

nav {
  background: #0086e6;
  height: 80px;
}

nav ul {
  float: right;
  margin-right: 20px;
}

nav ul li {
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
}

nav ul li a {
  color: white;
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 3px;
  text-transform: uppercase;
}

a.active,
a:hover {
  background: #1b9bff;
  transition: .5s;
}

.checkbtn {
  font-size: 30px;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}

#check {
  display: none;
}

@media (max-width: 952px) {
  label.logo {
    font-size: 30px;
    padding-left: 50px;
  }

  nav ul li a {
    font-size: 16px;
  }
}

@media (max-width: 858px) {
  .checkbtn {
    display: block;
  }

  ul {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #2c3e50;
    left: -100%;
    text-align: center;
    transition: all .05s;
  }

  nav ul li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }

  nav ul li a {
    font-size: 20px;
  }

  a:hover,
  a.active {
    background: none;
    color: #0082e6;
  }

  #check:checked~ul {
    left: 0;
  }

}
</style>