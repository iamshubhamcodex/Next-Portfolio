function fillTemplate(obj) {
  // let{desctructe} = obj
  let template = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>${fullName} Resume | ResumeDownloader</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"><link href="https://fonts.googleapis.com/css?family=Manjari&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet">
<style>:root{--yellow: #ffc600;--black: #272727;}html{box-sizing: border-box;color: var(--black);}*,*:before,*:after{box-sizing: inherit;}body{background-image: url("./images/topography.svg"), linear-gradient(110deg, #f93d66, #6d47d9);font-family: manjari;}.paper{background-color: rgb(245, 245, 245);width: 75%;display: block;margin: 60px auto 60px auto;border-radius: 3px;padding: 50px;box-shadow: -10px 40px 60px rgb(71, 71, 71);}.header{display: flex;justify-content: center;align-items: center;}img{height: 200px;padding: 10px;border: 2px solid #e7395f;border-radius: 50%;}.img{flex-grow: .2;}.namenJob{line-height: 30px;}.name{font-size: 3rem;font-weight: bold;}.job{font-family: pacifico;}.info{display: grid;grid-template-columns: 40% auto;margin-top: 30px;}.left{border-left: 2px solid rgb(105, 105, 105);padding-left: 30px;}.headLine{font-size: 1.5rem;font-weight: bold;margin-bottom: 20px;border-bottom: 2px solid rgb(87, 87, 87);width: 60%;}.profile{padding-left: 10px;font-weight: bold;}.about{display: flex;justify-content: space-around;margin-bottom: 35px;line-height: 25px;}p{margin-bottom: 20px;}#Certifications{margin-top: 30px;}.edu{justify-content: flex-start;line-height: 40px;}.lang{line-height: 27px;}/* Media Queriesss */@media only screen and (max-width: 1200px){.info{display: grid;grid-template-columns: auto;grid-template-rows: auto auto;}}@media only screen and (max-width: 1024px){.name{font-size: 2rem;}.header{display: grid;grid-gap: 20px;justify-content: flex-start;}}@media only screen and (max-width: 720px){.paper{width: 100%;}}</style>
</head><body>
<div class="container">
  <!-- Paper -->
<div class="paper"><!-- Top Header --><div class="header"><div class="img"><img src="img/Me.jpg" alt="Pic"></div><div class="namenJob"><div class="name">${fullName}</div><div class="job">$  {passion}</div></div></div><!-- Next Part --><!-- Main --><div class="info"><!-- Right Content --><div class="right"><h1 class="headLine">Profile</h1><div class="about"><div class="profile"><div>Name</div><div>Birthday/Age</div><div>Nationality</div></div><div class="profile2"><div>${fullName}</div><div>${dob} / ${age} years</div><div>${nationality}</div></div></div>
<!-- CONTACT --><h1 class="headLine">Contanct</h1><div class="about"><div class="profile"><div><i class="fa fa-phone"></i></div><div><i class="fa fa-map-marker"></i></div><div><i class="fa fa-envelope" aria-hidden="true"></i></div></div><div class="profile2"><div>${mobile}</div><div>${location}</div><div>${email}</div></div></div><!-- Skills --><h1 class="headLine">Skills</h1><div class="about"><div class="profile"><div>Java</div><div>PHP</div><div>HTML5</div><div>CSS3</div><div>Javascript</div></div><div class="profile2"><div><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i></div><div><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i></div><div><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i></div><div><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i></div><div><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i></div></div></div><!-- Certifications --><h1 class="headLine" id="Certifications">Certification</h1><p><strong>Web Desing Course</strong> At udemy.com </p><p><strong>PHP Web Development</strong> At udemy.com </p><p><strong>Java Script ES6 Full course</strong> At udemy.com</p></div><!-- Left Content --><div class="left"><h1 class="headLine">Career Objectives</h1><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At delectus nihil eligendi nobis excepturi cumqueest, quis dolorem aliquam quaerat mollitia placeat reiciendis incidunt quo recusandae sunt dolor facere sedLorem, ipsum dolor.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci omnis aperiam sint in nemo eumtemporibus quis. Temporibus atque modi, eaque neque eius similique, facilis natus voluptatem at voluptatum.</p><!-- Education --><h1 class="headLine">Education</h1><div class="about edu"><div class="profile" style="margin-right: 15px"><div>2009-2017</div><div>2017-2021</div></div><div class="provile2"><div>High School at Kabul Afghanistan</div><div>Bachelor Degree Software engineering</div></div></div><!-- Experience --><h1 class="headLine">Experience</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate quas fuga excepturi molestias.Totam laboriosam distinctio cum illo ad.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ratione laborum adipisci vero cum autem.</p>
<h1 class="headLine">Language</h1><div class="lang"><div>English</div><!----><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><!----><div>Pashto</div><!----><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><!----><div>Persian</div><!----><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><!----></div><!-- Organizations --><h1 class="headLine" style="margin-top: 20px">Organizations</h1><div class="org">Netlinks.af 2017-now</div></div></div>
</div>
</div>
</body>
</html>`;
}
