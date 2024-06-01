const nodemailer = require('nodemailer');
// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'brothersa020@gmail.com',
    pass: 'Dharshinisahith',
  },
});


// Function to send an email
const sendEmail = (recipient, subject, body) => {
  const mailOptions = {
    from: 'brothersa020@gmail.com',
    to: email,
    subject: "From sahith",
    text: name+password,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      alert('Email sent: ' + info.response);
    }
  });
};
const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

// Example usage
const user_email ='dhonisurya505@gmail.com';
const login_info = 'Your login information: username - example_user, password - example_password';
sendEmail(user_email, 'Login Information', login_info);

