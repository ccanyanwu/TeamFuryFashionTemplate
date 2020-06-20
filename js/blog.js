//select elements from the dom 
const textArea = document.querySelector('textarea'),
      btn = document.querySelector('.comment_button'),
      mine = document.querySelector('.mine'),
      seeMore = document.querySelector('a.d-flex');
      
      //listen for submit event
      btn.addEventListener('click', function(){
        let comment = textArea.value;
        if (comment === '') {
          alert('Please add a comment');
        }else{
       let newComment = document.createElement("img");
       newComment.setAttribute("src", "images/profile.png");
       newComment.setAttribute("alt", "user head-shot");
       newComment.className = 'profile';
       let newPara = document.createElement('p');
       newPara.classList = `profile_comment pr-3 text-wrap`;
       newPara.textContent = `${textArea.value}`;
       mine.append(newComment, newPara);
       
      }
        comment = "";
      } );
      