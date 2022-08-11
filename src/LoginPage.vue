<template>
  <div>
    <h2>SignUp</h2>
    +91<input v-if="!waitAnswer" type="number" v-model="phNo" placeholder="Phone Number"/>
    <button v-if="!waitAnswer" id="sign-in-button" @click="sendOtp">Get OTP</button>
    <div id="recaptcha-container"></div><br>
    <input v-if="waitAnswer" type="text" v-model="result" placeholder="OTP"/>

    <button v-if="waitAnswer" @click="verifyOtp">Verify</button><br>
    <button v-if="waitAnswer" @click="sendOtp()">Resend OTP</button>
    {{result}}
  </div>
</template>

<script>
    import * as firebase from 'firebase/compat/app'
    import 'firebase/compat/auth'

  export default {
    data(){
      return{
        phNo: '330114232',
        appVerifier : '',
        result : '',
        text : '',
        waitAnswer: false
      }
    },
    methods :{
      sendOtp(){
        if(!this.phNo.length){
          alert('Invalid Phone Number Format !');
        }else{
          this.waitAnswer = true;
          let countryCode = '+998' //india
          let phoneNumber = countryCode + this.phNo
          //
          let appVerifier = this.appVerifier
          console.log(appVerifier)  
          //
          firebase.default.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;
              alert('SMS sent')
            }).catch(function (error) {
                console.log(error)
            // Error; SMS not sent
            // ...
            console.log('Error ! SMS not sent')
          });
        }
      },
      //
      verifyOtp(){
        console.log(this.result.length)
        if(this.result.length == 6){
          let vm = this
          let code = this.result

          window.confirmationResult.confirm(code).then(function (result) {
            // User signed in successfully.
            console.log(result.user.uid)
            // ...
            //route to set password !
            vm.$router.push({path:'/'})


  .catch(function(error) {
    console.log("Error fetching user data:", error);
  });
          }).catch(function () {
            // User couldn't sign in (bad verification code?)
          });
        }else{
            console.log("111")
        }
      },
      initReCaptcha(){
        setTimeout(()=>{
          window.recaptchaVerifier = new firebase.default.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': function() {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              // ...
            },
            'expired-callback': function() {
              // Response expired. Ask user to solve reCAPTCHA again.
              // ...
            }
          });
          //
          this.appVerifier =  window.recaptchaVerifier
        },1000)
      }
    },
    created(){

        firebase.default.auth().onAuthStateChanged(function(user) {
             if (user) {
                console.log(user.uid)
             }else {
    // No user is signed in.
  }});

      this.initReCaptcha()
    }
  }
</script>
