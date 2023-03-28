(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){},19:function(e,a,t){e.exports=t.p+"static/media/calorie_tracker-logo.6bfd8773.png"},20:function(e,a,t){e.exports=t(39)},29:function(e,a,t){},31:function(e,a,t){},34:function(e,a,t){},36:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(18),c=t.n(r),i=(t(29),t(31),t(17),t(3)),s=t(5),o=t(15),m=(t(34),t(19)),u=t.n(m);function h(e){var a=l.a.useState(!1),t=Object(i.a)(a,2),n=t[0],r=t[1];return l.a.createElement("nav",{className:n?"navbar active":"navbar"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("img",{className:"navbar-heading",src:u.a,alt:""})),l.a.createElement("ul",{className:"nav-items"},l.a.createElement("li",{className:"active"},l.a.createElement(s.b,{to:"/calorie_tracker",onClick:function(){return r(!1)}},"Home")),l.a.createElement("li",{className:"active"},l.a.createElement(s.b,{to:"/calorie_tracker/food",onClick:function(){return r(!1)}},"Food")),l.a.createElement("li",{className:"active"},l.a.createElement(s.b,{to:"/calorie_tracker/exercise",onClick:function(){return r(!1)}},"Exercise")),l.a.createElement("li",{className:"active"},l.a.createElement(s.b,{to:"/calorie_tracker/challenges",onClick:function(){return r(!1)}},"Challenges")),l.a.createElement("li",{className:"active"},l.a.createElement(s.b,{to:"/calorie_tracker/blog",onClick:function(){return r(!1)}},"Blog"))),l.a.createElement("div",{className:"mobile-navbar"},l.a.createElement(o.b,{name:"menu-outline",className:"mobile-nav-icon flex-align-right ",onClick:function(){return r(!0)}}),l.a.createElement(o.a,{name:"close-outline",className:"mobile-nav-icon close-outline",onClick:function(){return r(!1)}})))}t(36);function d(){var e=Object(n.useState)(),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(),s=Object(i.a)(c,2),o=s[0],m=s[1],u=Object(n.useState)(),h=Object(i.a)(u,2),d=h[0],g=h[1],E=Object(n.useState)("00.00"),p=Object(i.a)(E,2),b=p[0],f=p[1],w=Object(n.useState)(""),v=Object(i.a)(w,2),y=v[0],k=v[1];return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"box"},l.a.createElement("h1",null,"BMI Calculator"),l.a.createElement("div",{className:"content"},l.a.createElement("form",{action:"",onSubmit:function(e){if(e.preventDefault(),""===o||""===d||""===t)alert("All fields are required!");else{var a=o/(d/100*d/100);f(a.toFixed(1)),a<18.5?k("Underweight"):18.5<=a&&a<=24.9?k("Healthy"):25<=a&&a<=29.9?k("Overweight"):30<=a&&a<=34.9?k("Obese"):35<=a&&k("Extremely obese")}}},l.a.createElement("div",{className:"input"},l.a.createElement("label",{for:"height"},"Age"),l.a.createElement("input",{type:"text",value:t,onChange:function(e){return r(e.target.value)},className:"text-input",id:"age",autocomplete:"off",required:!0})),l.a.createElement("div",{className:"gender"},l.a.createElement("label",{className:"container"},l.a.createElement("input",{type:"radio",name:"radio",id:"m"}),l.a.createElement("p",{className:"text"},"Male"),l.a.createElement("span",{className:"checkmark"})),l.a.createElement("label",{className:"container"},l.a.createElement("input",{type:"radio",name:"radio",id:"f"}),l.a.createElement("p",{className:"text"},"Female"),l.a.createElement("span",{className:"checkmark"}))),l.a.createElement("div",{className:"containerHW"},l.a.createElement("div",{className:"inputH"},l.a.createElement("label",{for:"height"},"Height(cm)"),l.a.createElement("input",{value:d,onChange:function(e){return g(e.target.value)},type:"number",id:"height",required:!0})),l.a.createElement("div",{className:"inputW"},l.a.createElement("label",{for:"weight"},"Weight(kg)"),l.a.createElement("input",{value:o,onChange:function(e){return m(e.target.value)},type:"number",id:"weight",required:!0}))),l.a.createElement("button",{className:"calculate",id:"submit",onclick:"calculate();"},"Calculate BMI"))),l.a.createElement("div",{className:"result"},l.a.createElement("p",null,"Your BMI is"),l.a.createElement("div",{id:"result"},b),l.a.createElement("p",{className:"comment"},y))))}function g(){return l.a.createElement("div",{className:"container"},l.a.createElement("marquee",{behavior:"",direction:"left"},l.a.createElement(s.b,{to:"/calorie_tracker/bmi"}," Want to know your BMI? \xa0",l.a.createElement("button",{className:"bmi-btn"},"Click Me"))),l.a.createElement("h1",{className:"heading"},"Calorie Counter:"),l.a.createElement("div",{className:"home-descrip"},l.a.createElement("p",null,"A calorie counter is a way to count your daily caloric intake using our easy to use caloric counter. Calorie counting is an easy way for you to manage your weight. If you have a daily caloric requirement that you want to meet, or you need to monitor your caloric intake, our calorie counting technique is for you. Our calorie chart is easy to read, and you can easily count the calories in food that you eat."),l.a.createElement("p",null," ",l.a.createElement("br",null),l.a.createElement("b",null,"What is health? "),'The World health organisation (WHO) defines health as "a state of complete physical, mental and social well-being and not merely the absence of disease and infirmity." To put it into simple words, into our regular perspective of the word "health" , it is a situation of not falling ill or not letting our body go through any kind of problems now, and in the near future.',l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("b",null,"Exercise:")," along with food, you need to follow few regular exercises which will allow you to be fit and gives mental relaxation. Calories are calculated using these exercises. try to increase the time spent on each exercise for every day."),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("b",null,"What is a Calorie?")),l.a.createElement("p",null,"The amount of energy in an item of food or drink is measured in calories. When we eat and drink more calories than we use up, our bodies store the excess as body fat. If this continues, over time we may put on weight. As a guide, an average man needs around 2,500kcal (10,500kJ) a day to maintain a healthy body weight. For an average woman, that figure is around 2,000kcal (8,400kJ) a day. These values can vary depending on age, size and levels of physical activity, among other factors.")))}function E(){return l.a.createElement("div",{className:"container"},l.a.createElement("form",{action:"/action_page.php"},"Food Name/Type:",l.a.createElement("input",{type:"search",name:"food search"}),l.a.createElement("input",{type:"submit",name:"search"})),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Recently Eaten:"),l.a.createElement("th",null),l.a.createElement("th",null,"Newly Eaten:"),l.a.createElement("th",null)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{className:"food-image",src:"https://s3-media3.fl.yelpcdn.com/bphoto/TGFfINlc05G-uqiTLNmUww/o.jpg",alt:"Mountain"})),"\xa0",l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.google.com/search?espv=2&q=papa+john%27s+pizza+buffalo+chicken+pizza&stick=H4sIAAAAAAAAAONgFuLUz9U3MDIoKctV4tVP1zc0TEo2NCs2NSrRUs5OttJPy89P0c9NzSuNLyjKL8tMSS2yAvNS80qKMlOLHzEWcQu8_HFPWCpz0pqT1xiTuYjRJWTDxeaaV5JZUikkw8UrhXCCBoMUNxeCKyWiJcRZ-rYx5-zG9H7BgKU96v5G027yAAA1-MKEtgAAAA&sa=X&ved=0ahUKEwiSjtbfhKrTAhUk2IMKHe1-BBUQri4ILg"},"Papa John's Buffalo Chicken Pizza"),l.a.createElement("br",null),l.a.createElement("br",null),"Eaten by Sandeep")),l.a.createElement("td",null,l.a.createElement("img",{className:"food-image",src:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmPncANdouq0BXFTGuF5lgPlXqKDtkY5vs5H1bmDXLbDcyds41",alt:"Mountain"})),"\xa0",l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.mcdonalds.com/us/en-us/product/chicken-mcnuggets-4-piece.html"},"mcdonalds Chicken Nuggets"),l.a.createElement("br",null),l.a.createElement("br",null),"Submitted by Sandeep"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("br",null),l.a.createElement("img",{className:"food-image",src:"https://cdn-starbucks.netdna-ssl.com/uploads/images/_framed/T8roeBHm-4500-3000.JPG",alt:"Mountain"})),"\xa0",l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.starbucks.com/menu/drinks/frappuccino-blended-beverages/java-chip-frappuccino-blended-beverage"},"Starbucks - Java chip"),l.a.createElement("br",null),l.a.createElement("br",null),"Eaten by Rupanandha")),l.a.createElement("td",null,l.a.createElement("img",{className:"food-image",src:"http://www.kfc.ca/menuImage.axd?Name=Dipper&Section=Boxed&type=modal",alt:"Mountain"})),"\xa0",l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.kfc.com/menu/meals/big-box-meals"},"KFC - Big box meal"),l.a.createElement("br",null),l.a.createElement("br",null),"Submitted by Vamsi Nagendra"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("br",null),l.a.createElement("img",{className:"food-image",src:"https://d17840adovynop.cloudfront.net/wp-content/uploads/2014/03/chick-fil-a-secret-menu-meal.jpg",alt:"Mountain"})),"\xa0",l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.chick-fil-a.com/Menu-Items/Chick-fil-A-Chicken-Sandwich"},"Chick-fil-A-Chicken-Sandwich"),l.a.createElement("br",null),l.a.createElement("br",null),"Eaten by Vamsi Nagendra")),l.a.createElement("td",null,l.a.createElement("img",{className:"food-image",src:"http://www.bk.com/sites/default/files/GardenGrilledChickenSalad_Thumbnail_v4_0.jpg",alt:"Mountain"})),"\xa0",l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("a",{href:"http://www.bk.com/menu/salads_n_veggies"},"Burger King - Garden Green Salad"),l.a.createElement("br",null),l.a.createElement("br",null),"Submitted by Rupanandha"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("br",null),l.a.createElement("img",{className:"food-image",src:"https://www.einsteinbros.com/images/logo-einstein-social.png",alt:"Mountain"})),"\xa0",l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.einsteinbros.com/images/docs/EBB_Nutrition.pdf"},"EinsteinBro's - Egg Bagel Sandwich"),l.a.createElement("br",null),l.a.createElement("br",null),"Eaten by Varshitha")),l.a.createElement("td",null,l.a.createElement("img",{className:"food-image",src:"https://lh5.ggpht.com/wqINPLbIUx0Yu2QMBjsMls4ajGHUy3YkCKa90OfDR807T-MaSrwEtSs4TTTDIeMcDVQU9Xh5k7cicglp9U7q=s400",alt:"Mountain"})),"\xa0",l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.sonicdrivein.com/menu/168-snacks-sides/items/453-chili-cheese-natural-cut-fries"},"Sonic - Chilli Cheese Cut Fries"),l.a.createElement("br",null),l.a.createElement("br",null),"Submitted by Varshitha")))))}var p=t(0);function b(){return l.a.createElement("div",{className:"container"},l.a.createElement("h3",{className:"exercise-heading"},"Select Your Category"),l.a.createElement("div",{className:"exercise-container"},l.a.createElement("div",{className:"exercise-box"},l.a.createElement("a",{href:"https://www.verywellfamily.com/easy-exercises-for-kids-1257391",target:"_blank"},l.a.createElement("img",{className:"exercise-image",src:"https://static.vecteezy.com/system/resources/previews/005/151/801/non_2x/cartoon-little-kids-exercising-in-the-park-free-vector.jpg",alt:"Childen Exercise"}),l.a.createElement("p",null,"Children Age(6-17yrs)"))),l.a.createElement("div",{className:"exercise-box"},l.a.createElement("a",{href:"https://www.utrecsports.org/public/upload/files/general/SP20_FW_PT_AtHome_Workouts_Strength.pdf",target:"_blank"},l.a.createElement("img",{className:"exercise-image",src:"https://media.istockphoto.com/id/1407656524/vector/man-doing-push-up-flat-vector-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=On5A0WoSDYrvhyyaM7g7IU2u4V746KChM7xsrw3_R5o=",alt:""}),l.a.createElement("p",null,"Adult Age(18-50yrs)"))),l.a.createElement("div",{className:"exercise-box"},l.a.createElement("a",{href:"https://www.seniorlifestyle.com/resources/blog/7-best-exercises-for-seniors-and-a-few-to-avoid/",target:"_blank"},l.a.createElement("img",{className:"exercise-image",src:"https://www.caregiversolutions.ca/wp-content/uploads/Some-thoughts-on-walkers.jpg",alt:"Old People Exercise"}),l.a.createElement("p",null,"Old Age(60+ yrs)"))),l.a.createElement("div",{className:"exercise-box"},l.a.createElement("a",{href:"https://www.whattoexpect.com/pregnancy/exercises-for-pregnant-women",target:"_blank"},l.a.createElement("img",{className:"exercise-image",src:"https://media.istockphoto.com/id/524541196/vector/meditating-on-maternity-pregnant-woman-meditating-while-sitting-yoga-position.jpg?s=612x612&w=0&k=20&c=46E7RdDIXf7b3k5YSnYWJPxEISwCaAI-3UwhaF8P-4Y=",alt:""}),l.a.createElement("p",null,"Pregnant Woman")))))}function f(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{ClassNameName:"trending-articles"},l.a.createElement("h2",{className:"blog-heading"},"Trending Articles"),l.a.createElement("br",null),l.a.createElement("div",{className:"blog-container"},l.a.createElement("div",null,l.a.createElement("a",{href:"https://blog.myfitnesspal.com/which-food-tracking-method-works-best-for-weight-loss/"},l.a.createElement("img",{src:"https://blog.myfitnesspal.com/wp-content/uploads/2017/03/5-Steps-to-Break-Free-from-Binge-Eating-752x472.jpg",ClassName:"img-responsive",alt:"5StepsToBreakFreeFromBingeEating"}),l.a.createElement("p",null,"5 Steps To Break Free From Binge Eating"))),l.a.createElement("div",null,l.a.createElement("a",{href:"https://www.healthline.com/health/what-exercise-burns-the-most-calories#:~:text=Calories%20burned%20per%20minute%3A,-10.8%20to%2016&text=Running%20is%20the%20best%20workout,improving%20flexibility%2C%20and%20increasing%20endurance"},l.a.createElement("img",{src:"https://post.healthline.com/wp-content/uploads/2019/04/Runner_Stretch_Park_Orange-1296x728-Header-1296x728.jpg",ClassName:"img-responsive",alt:"14DayWalkPlan"}),l.a.createElement("p",null,"12 Exercises That Burn the Most Calories"))),l.a.createElement("div",null,l.a.createElement("a",{href:"https://blog.myfitnesspal.com/10-make-ahead-breakfasts-under-300-calories/"},l.a.createElement("img",{src:"https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-10.jpg",ClassName:"img-responsive",alt:"10MakeAheadBreakfasts"}),l.a.createElement("p",null,"10 Make-Ahead Breakfasts Under 300 Calories"))))),l.a.createElement("div",{ClassName:"latest-articles"},l.a.createElement("h2",{className:"blog-heading"},"Latest Articles"),l.a.createElement("br",null),l.a.createElement("div",{className:"blog-container"},l.a.createElement("div",null,l.a.createElement("a",{href:"https://blog.myfitnesspal.com/fitness-basics-goal-setting-and-motivation/"},l.a.createElement("img",{src:"https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Fitness-Basics-Goal-Setting-and-Motivation-2-1-752x472.jpg",ClassName:"img-responsive",alt:"FastedCardio"}),l.a.createElement("p",null,"Fitness Basics: Goal Setting and Motivation"))),l.a.createElement("div",null,l.a.createElement("a",{href:"https://blog.myfitnesspal.com/5-signs-youre-not-eating-enough-protein/"},l.a.createElement("img",{src:"https://blog.myfitnesspal.com/wp-content/uploads/2020/11/10-Signs-Youre-Not-Eating-Enough-Protein-2-752x472.jpg",ClassName:"img-responsive",alt:"HelpIHateVegetables"}),l.a.createElement("p",null,"Healty Eating Tips for teens"))),l.a.createElement("div",null,l.a.createElement("a",{href:"http://blog.myfitnesspal.com/stretches-cyclists-5-pose-yoga-fix/"},l.a.createElement("img",{src:"https://blog.myfitnesspal.com/wp-content/uploads/2017/04/Yoga-5-Pose-Yoga-Fix-Stretches-for-Cyclists-752x472.jpg",ClassName:"img-responsive",alt:"Stretches-for-Cyclists"}),l.a.createElement("p",null,"Streches for Cyclists | 5-Pose Yoga Fix"))))))}function w(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Challenges"),l.a.createElement("div",{className:"challenge-container"},l.a.createElement("div",null,l.a.createElement("a",{href:"https://www.eatingwell.com/article/290516/30-day-slash-your-sugar-challenge/"},l.a.createElement("img",{src:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2022%2F07%2F22%2FJB_slash_sugar_cal_UPDATE_-01.jpg",class:"img-responsive",alt:"nosugar-challenge-intro"}))),l.a.createElement("div",null,l.a.createElement("a",{href:"https://darebee.com/challenges/first-thing-water-challenge.html"},l.a.createElement("img",{src:"https://www.devourdinner.com/wp-content/uploads/2019/12/Devour-Dinner_30-Day-Water-Challenge-791x1024.jpg",alt:"water-challenge-intro"}))),l.a.createElement("div",null,l.a.createElement("a",{href:"https://darebee.com/challenges/walk-and-run-challenge.html"},l.a.createElement("img",{src:"https://www.snackinginsneakers.com/wp-content/uploads/2022/06/Running-Challenge-Pin.webp",class:"img-responsive",alt:"30-days-of-fitness-challenge-intro"})))))}var v=function(){return l.a.createElement("div",null,l.a.createElement(s.a,null,l.a.createElement(h,null),l.a.createElement(p.c,null,l.a.createElement(p.a,{index:!0,path:"/calorie_tracker",element:l.a.createElement(g,null)}),l.a.createElement(p.a,{exact:!0,path:"/calorie_tracker/bmi",element:l.a.createElement(d,null)}),l.a.createElement(p.a,{exact:!0,path:"/calorie_tracker/food",element:l.a.createElement(E,null)}),l.a.createElement(p.a,{exact:!0,path:"/calorie_tracker/exercise",element:l.a.createElement(b,null)}),l.a.createElement(p.a,{exact:!0,path:"/calorie_tracker/blog",element:l.a.createElement(f,null)}),l.a.createElement(p.a,{exact:!0,path:"/calorie_tracker/challenges",element:l.a.createElement(w,null)}))))},y=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,40)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null))),y()}},[[20,3,2]]]);
//# sourceMappingURL=main.fd925c4c.chunk.js.map