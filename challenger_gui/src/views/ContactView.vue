<template>
    <h2>This is a contact page</h2>
    <div class="background">
      <div class="container">
        <div class="form-container">
          <form action="https://formspree.io/f/xgebdjdv" method="POST" @submit.prevent="validateForm">
            <label for="fname">First Name</label>
            <input ref="fnameInput" type="text" id="fname" name="firstname" placeholder="Enter name">
            <label for="lname">Last Name</label>
            <input ref="lnameInput" type="text" id="lname" name="lastname" placeholder="Enter surname">
            <label for="email">Email address</label>
            <input ref="emailInput" type="text" id="email" name="email_address" placeholder="Enter email address">
            <label for="subject">Message</label>
            <textarea ref="subjectInput" id="subject" name="subject" placeholder="Write something.." style="height: 200px;"></textarea>
            <input type="submit" value="Submit" class="submit-button">
          </form>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
//     methods: {
//       validateForm(event) {
//         const firstName = this.$refs.fnameInput.value;
//         const lastName = this.$refs.lnameInput.value;
//         const email = this.$refs.emailInput.value;
//         const subject = this.$refs.subjectInput.value;
  
//         if (firstName.trim() === "") {
//           alert("Please enter your first name.");
//           return;
//         }
  
//         if (lastName.trim() === "") {
//           alert("Please enter your last name.");
//           return;
//         }
  
//         if (email.trim() === "") {
//           alert("Please enter your email address.");
//           return;
//         }
  
//         if (!email.includes("@") || !email.includes(".")) {
//           alert("Please enter a valid email address.");
//           return;
//         }
  
//         if (subject.trim() === "") {
//           alert("Please enter a message.");
//           return;
//         }
  
//         event.target.submit();
//       }
//     }
//   }
  }
  </script>
  
  <style scoped>
  
  .background{
    margin-top: 120px;
  }
  .container {
    margin-top: 60px;
    width: 50%;
  }
  .highlight {
    color: rgb(55, 55, 153);
    font-weight: bold;
  }
  .form-container {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 8px;
    font-size: 14px; 
    font-weight: bold; 
    color: #3c2c2c;
  }
  
  input[type="text"],
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-bottom: 16px;
    resize: vertical;
  }
  
  .submit-button {
    background-color: #b9b745;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: auto;
  }
  
  .submit-button:hover {
    background-color: darkslategray;
  }
  @media (width < 500px) {
    .container {
      width: 90%;
    }
  }
  </style>