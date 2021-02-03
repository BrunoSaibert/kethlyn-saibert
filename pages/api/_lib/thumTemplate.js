export default function getThumbnailTemplate({ background }) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Thumbnail</title>
  
    <style>
      body {
        margin: 0;
        height: 100vh;
      }
  
      #wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;

        background: #7158e2;
        background-image: url(${background});

        background-position: center;
        background-size: cover;
      }
    </style>
  </head>
  <body>
    <div id="wrapper">
    </div>
  </body>
  </html>`;
}
