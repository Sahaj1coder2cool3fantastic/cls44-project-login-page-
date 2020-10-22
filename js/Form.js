class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
     //  this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("Virtual Zoo");
        this.title.position(displayWidth/2 - 250, displayHeight/2 - 450);
        this.title.style('font-size', '100px');
        this.title.style('color', 'yellow');
        this.input.position(displayWidth/2 - 200 , displayHeight/2 - 80);
        this.input.style('width', '280px');
        this.input.style('height', '60px');
        this.input.style('background', 'green');
        this.input.style('font-size', '50px');
        this.button.position(displayWidth/2 - 200, displayHeight/2 +70);
        this.button.style('width', '400px');
        this.button.style('height', '40px');
        this.button.style('background', 'orange');
       // this.reset.position();
       // this.reset.style('width', '100px');
        //this.reset.style('height', '30px');
        //this.reset.style('background', 'lightpink');

       /* this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        }); */

    }
}