<template>
  <div class="menu">
    <div class="submenu"><h2>PROJECTS</h2></div>
    <div class="line"></div>
    <div class="branch">
      <h3>Android Calculator App</h3>
      <a href="https://github.com/faseehahmad00/Android-Calculator" target="_blank">VIEW</a>
      <p>Calculator provides simple and advanced mathematical functions with runtime evaluation
        in a beautifully designed app. It can perform basic arithmetic operations as well as scientific
        operations such as trigonometric and logarithmic.
      </p>
      <ul>
        <li>kotlin</li>
        <li>java</li>
      </ul>
    </div>
    <div class="branch">
      <h3>Student Registration System</h3>
      <a href="https://github.com/faseehahmad00/Student-Registration" target="_blank">VIEW</a>
      <p>A desktop application developed using JAVA-FX.It is used to manage students details.</p>
      <ul>
        <li>java</li>
        <li>java-fx</li>
        <li>sqlite DB</li>
      </ul>
    </div>
    <div class="branch">
      <h3>TicTacToe</h3>
      <a ID="href1" href="https://github.com/faseehahmad00/tic-tac-toe" target="_blank">VIEW</a>
      <p>Simple TicTacToe terminal game developed in C++ , where user is able to play with computer.</p>
      <ul>
        <li>C++</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
}
</script>

<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: white;
  }
  p {
    font-size: medium;
    text-align: justify;
  }
  div.menu {
    color: black;
    margin-top: 30px;
    padding: 10px 10px;
    text-align: left;
  }

  div.branch {
    color: white;
    padding: 10px 10px;
    margin: 20px 10px;
    border: 1px solid black;
    max-height: max-content;
    overflow: auto;
    border-radius: 10px;
    box-shadow: 4px -5px 2px silver;
    background-color: black;
    transition: all 0.4s;

  }

  div.branch:hover {
    transform: scale(1.01);
    box-shadow: none;
    border-radius: 5px;
  }


  div.submenu {
    margin-left: 5px;
    font-weight: bolder;
  }
  div.line {
    border: 1px solid black;
    height: 0;
    width: 100%;
    margin-top: -15px;
  }

  a {
    color: green;
    font-size: small;
  }

  a:hover {
    color: red;
  }

  h3 {
    margin-top: -5px;
  }

  ul {
    padding-left: 0;
  }
  li {
    background-color: lightgray;
    color: black;
    display: inline;
    margin-right: 9px;
    margin-left: 5px;
    font-weight: bold;
    padding: 2px 2px;
  }
</style>

