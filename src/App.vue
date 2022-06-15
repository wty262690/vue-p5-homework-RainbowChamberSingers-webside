<template>
    <router-view/>

</template>

<script>
import P5 from 'p5';
export default {
  data() {
          return {
          }
  },
  mounted(){
    const sketch = p5 => {
        let snowflakes = []; 
        let precanvas;
        let f = 0;
        let r = 0;
        let ax = 0;
        let ay = 0;            
        let x = 0;
        let y = 0;
        let spring = 0.5;
        let friction = 0.5;
        let a = 0;
        let size = 45;
        let diff = size/8;
        let distance = 10;
        let enter=false;
        let orx=x;
        let ory=y;
        let num=0;

        p5.setup = () => {
            p5.createCanvas(window.innerWidth-10,window.innerHeight-10);
            precanvas=p5.createGraphics(window.innerWidth-10,window.innerHeight-10);
            precanvas.clear();
        };

        p5.draw = () => {
          let j=p5.random(0,50);
          p5.background(0);
          let t = p5.frameCount / 60; // update time
            for (let i = 0; i < 1; i++) {
            snowflakes.push(new snowflake()); // append snowflake object
          } 
          let oldR = r;
          if(p5.mouseIsPressed) {
            let mX = p5.mouseX;
            let mY = p5.mouseY;
            if(!f) {
              f = 1;
              x = mX;
              y = mY;
              orx=x;
              ory=y;
            }
            ax += ( mX - x ) * spring;
            ay += ( mY - y ) * spring;
            ax *= friction;
            ay *= friction;
            a += p5.sqrt( ax*ax + ay*ay ) - a;
            a *= 0.6;
            r = size - a;
            for(let  i = 0; i < distance; ++i ) {
              if(j>=1 && j<=3.5){
                precanvas.fill(255);
                precanvas.noStroke();
                precanvas.rect(0,0, p5.width, p5.height); 

              }
              if (j>=0.3 && j<=2){
                  enter=true;
                  precanvas.fill(192,44,56);
                  precanvas.noStroke();
                  precanvas.rect(0,0,p5.width, p5.height);       
              }
              let oldX = x;
              let oldY = y;
              x += ax / distance;
              y += ay / distance;
              oldR += (( r - oldR ) / distance);
              if(oldR < 1) oldR = 1;
              precanvas.stroke(192,44,56);
              precanvas.strokeWeight( oldR+diff );
              precanvas.line( x, y, oldX, oldY );
              precanvas.strokeWeight( oldR );
              precanvas.line( x+diff*2, y+diff*2, oldX+diff*2, oldY+diff*2 );
              precanvas.line( x-diff, y-diff, oldX-diff, oldY-diff );
              precanvas.fill(0,2); 
              precanvas.noStroke();
              precanvas.rect(0,0,p5.width, p5.height);

            }
          }
          else if(f) {
            ax = ay = f = 0;
          }
          else {
            precanvas.fill(0,7); 
            precanvas.noStroke();
            precanvas.rect(0,0,p5.width, p5.height);
          }
            p5.image(precanvas,0,0);
            
            if (j>=0 && j<=0.3){
              p5.fill(192,44,56);
              p5.noStroke();
              p5.rect(0,0, p5.width,p5.height); 
          }

            for (let flake of snowflakes) {
            flake.update(t);
            flake.display();
          }
        };
        function snowflake() {
          // initialize coordinates
          this.posX = 0;
          this.posY = p5.random(-50, 0);
          this.initialangle = p5.random(0, 2 * p5.PI);
          this.size = p5.random(2, 5);

          // radius of snowflake spiral
          // chosen so the snowflakes are uniformly spread out in area
          this.radius = p5.sqrt(p5.random(p5.pow(p5.width / 2, 2)));

          this.update = function(time) {
            // x position follows a circle
            let w = 0.09; // angular speed
            let angle = w * time + this.initialangle;
            this.posX = p5.width / 2 + this.radius * p5.sin(angle);

            // different size snowflakes fall at slightly different y speeds
            this.posY += p5.pow(this.size, 1.5);

            // delete snowflake if past end of screen
            if (this.posY > p5.height) {
              let index = snowflakes.indexOf(this);
              snowflakes.splice(index, 1);
            }
          };

          this.display = function() {
            p5.noStroke();
            p5.fill(225);
            p5.circle(this.posX, this.posY, this.size);
          };
        }
    }


    this.p5Canvas = new P5(sketch, 'p5Canvas');
  },
}

</script>

<style>
@import './font.css';
@import './menu.css';

body{
  margin:0;
  background-color:black;
}
#app {
  margin:0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  position:absolute;
}


#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}



</style>
