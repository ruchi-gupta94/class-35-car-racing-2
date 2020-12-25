class Form 
{
  constructor() 
  {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
  }

  hide()
  {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display()
  {
    var title = createElement('h2');
    title.html("Car Racing Game");
    title.position(130, 0);

    this.input.position(130, 160);

    this.button.position(250, 200);

    //arrow function
    //when we write this keyword inside the function having this keyword in its name then 
    //then this inside that function will get attached to object in the name of the function
    this.button.mousePressed(()=>{
      //this will get attached to button element and detach from form object
      //we use arrow function to get it attached again to form object
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();

      playerCount += 1; //playerCount = playerCount + 1
      player.index = playerCount;

      player.update();
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });

  }
}
