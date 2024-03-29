const sendEmailVerified = (res, url) => {
  res.status(200).send(`
 <!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>Account Verified</title>
     <link
       rel="stylesheet"
       href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
     />
     <link
     rel="icon"
     href="/images/a3075126183328c7afe584f9951848a5.png"
     />
     <style>
       body {
         background-color: #efefef;
         font-family: "Montserrat", sans-serif;
       }
       .box {
         width: 1000px;
         height: 500px;
         background-color: white;
         box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
         padding: 20px;
         margin: auto;
         position: absolute;
         top: 0;
         bottom: 0;
         left: 0;
         justify-content: center;
         flex-direction: column;
         right: 0;
         display: flex;
         align-items: center;
         text-align: center;
       }
 
       .logo {
         max-width: 18%;
         max-height: 18%;
       }
       .text1 {
         margin-bottom: 0px;
       }
       .button {
         background-color: white;
         padding: 5px;
         border: 2px solid gray;
         font-family: "Montserrat", sans-serif;
       }
       .button:active {
         background-color: #72737b;
       }
     </style>
   </head>
 
   <body>
     <div class="box">
       <img class="logo" src="/images/a3075126183328c7afe584f9951848a5.png" />
       <h3 class="text1">Your FirstStep Account is now verified</h3>
       <p class="text2">Thank you for verifying your email</p>
       <a href=${url}>
         <button class="button">Login to FirstStep</button>
       </a>
     </div>
   </body>
 </html>
 `);
};

export default sendEmailVerified;
