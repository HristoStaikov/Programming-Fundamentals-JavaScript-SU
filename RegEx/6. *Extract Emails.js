function solve(input) {
    let regEx = /((?<=\s)[a-zA-Z0-9]+([-.]\w*)*@[a-zA-Z]+?([.-][a-zA-Z]*)*(\.[a-z]{2,}))/g;
  
    let matched = input.match(regEx);
    let validEmails = [];
    
    if (matched) {
      for (const email of matched) {
        validEmails.push(email);
      }
    }
  for (const el of validEmails) {
    console.log(el);
  }
  }
solve("Please contact us at: 1support@github.com.dsa-d");
solve(
  "Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information."
);
solve(
  "Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class.-- steve.parker@softuni.dedd."
);
