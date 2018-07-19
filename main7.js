class Movie {
 constructor(title, director) {
     this.title = title;
     this.director = director;
     this.star = [];
     this.writer = [];
 }
 getTitle() {
   return this.title;
 }
 getDirector() {
   return this.director;
 }
 addWriter(writer) {
   this.writer.push(writer);
 }
 getWriters() {
   return this.writer;
 }
 addStar(star) {
   this.star.push(star);
 }
 getStars() {
   return this.star;
 }
 
 renderMovie() {
   let title = document.createElement('h1');
   document.body.appendChild(title);
   title.innerHTML = this.title;

   let director = document.createElement('h2');
   document.body.appendChild(director);
   director.innerHTML = `Director: ${this.getDirector()}`;

   let writers = document.createElement('h2');
   document.body.appendChild(writers);
   writers.innerHTML = `Writers: ${this.getWriters()}`;

   let stars = document.createElement('h3');
   document.body.appendChild(stars);
   stars.innerHTML = `${this.getStars().map(actor => actor.renderStuff())}`;
 }
}

class StaffMember {
 constructor(name, role, dtBirth) {
   this.name = name;
   this.role = role;
   this.dtBirth = dtBirth;
 }
 getName() {
   return this.name;
 }
 getRole() {
   return this.role;
 }
 getAge() {
   let realyYear = 2017;
   return realYear - this.dtBirth;
 }
 renderStuff() {
   let staffName = document.createElement('h1');
   document.body.appendChild(staffName);
   staffName.innerHTML = `Actor: ${this.name}`;

   let staffRole = document.createElement('h2');
   document.body.appendChild(staffRole);
   staffRole.innerHTML = `Role: ${this.role}`;

   let staffYear = document.createElement('h3');
   document.body.appendChild(staffYear);
   staffYear.innerHTML = `${this.getAge()} years old`;
 }
}

const starWarsTheLastGedi = new Movie('Star Wars: Episode VIII - The Last Jedi', 'Rian Johnson');

const DaisyRidley = new StaffMember('Daisy Ridley', 'Rey', 1992);
const JohnBoyega = new StaffMember('John Boyega', 'Finn', 1992);
const MarkHamill = new StaffMember('Mark Hamill', 'Luke Skywalker / Dobbu Scay', 1951);

starWarsTheLastGedi.addWriter('Rian Johnson');
starWarsTheLastGedi.addWriter('George Lucas');

starWarsTheLastGedi.addStar(DaisyRidley);
starWarsTheLastGedi.addStar(JohnBoyega);
starWarsTheLastGedi.addStar(MarkHamill);

// MarkHamill.renderStuff();
starWarsTheLastGedi.renderMovie();