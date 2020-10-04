auth.onAuthStateChanged(user => {
    if (user) {
      
        setupUI(user);
      
    } else {
      setupUI();
    //   setupGuides([]);
    }
  });



const signupForm = document.querySelector('#signUpForm');

signupForm.addEventListener('submit' , (e) =>{
    e.preventDefault();
  
  // get user info
  const email = signupForm['signUpEmail'].value;
  const password = signupForm['signUpPassword'].value;
  console.log(email,password);

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    // close the signup modal & reset form
    
    signupForm.reset();
    $('#signUpModal').modal('hide')
    
  });

});


const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit' , (e) =>{
    e.preventDefault();
  
  // get user info
  const email = loginForm['loginEmail'].value;
  const password = loginForm['loginPassword'].value;
  

  // sign up the user
  auth.signInWithEmailAndPassword(email, password).then(cred => {
    // close the signup modal & reset form
    
    $('#loginModal').modal('hide')
    loginForm.reset();
    
  });

});





const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});


