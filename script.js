
const generatePassword = () => {
   const lengthPass = document.getElementById('lengthPass').value;
   const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()-_+=";

   let randomPassword = '';

   for(let i = 0; i < lengthPass; i++){
     const randomIndex = Math.round(Math.random() * charSet.length);
     const randomChar = charSet[randomIndex];
     randomPassword += randomChar;
   }

   document.getElementById('showPassword').innerText = randomPassword;
};


// ===== Copy Password Button Function =====
const copyBtn = document.getElementById('copyBtn');
copyBtn.addEventListener('click', () => {
   const passwordText = document.getElementById('showPassword').innerText;

   if (passwordText.trim() === '') {
      alert("⚠️ Please generate a password first!");
      return;
   }

   // Copy password to clipboard
   navigator.clipboard.writeText(passwordText)
      .then(() => {
         alert("✅ Password copied successfully!");
      })
      .catch(() => {
         alert("❌ Failed to copy password. Try again!");
      });

});



