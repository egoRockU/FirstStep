const sendEmailLinkExpiredPage = (res, url) => {
  res.status(200).send(`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Link Expired</title>
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
        margin-bottom: 5px;
      }
      .button:active {
        background-color: #72737b;
      }
      .text3 {
        color: #72737b;
        font-size: small;
      }
      .link {
        font-size: small;
      }
    </style>
  </head>

  <body>
    <div class="box">
      <img class="logo" src="/images/a3075126183328c7afe584f9951848a5.png" />
      <h3 class="text1">This Email link is Expired</h3>
      <p class="text2">Request another link by clicking the button below</p>
      <a href=${url}>
        <button class="button">Request Verification Email</button>
      </a>
      <p class="text3">
        If the button below does not work, copy the link and use it to your
        browser
      </p>
      <a href=${url} class="link"
        >${url}</a
      >
    </div>
  </body>
</html>
`);
};

export default sendEmailLinkExpiredPage;
