//Create variables here

function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
fedtime=database.ref(fedtime);
fedtime.on("value",function(data){
  lastfed=data.val();
})
}


function draw() {  

  drawSprites();
  //add styles here

}
<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey= "AIzaSyAVf04Q26Z8bmCLM6pN3FWZtUWlrR0NSH4",
    authDomain: "class36-6d21c.firebaseapp.com",
    projectId: "class36-6d21c",
    storageBucket: "class36-6d21c.appspot.com",
    messagingSenderId: "697202975321",
    appId: "1:697202975321:web:5ec182b19bfe24ebfe0748"
     }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

display(){
  var x60,y100
  imageMode(CENTER);
  image(this.image,720,200,60,70);

  if(this.foodstock=9){
    for(var i=0;i<this.foodstock;i++)
    if(i=10===0){
      x=60
      y=100
      image(this.Image.x,y,60,100)
    }
  }

}

