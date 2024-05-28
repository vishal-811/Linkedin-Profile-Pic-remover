// URL of the image to replace all profile pictures with
const replacementImageUrl = 'https://img.freepik.com/free-photo/anime-stylecelebrating-valentines-day_23-2151258009.jpg';

// Function to replace profile pictures
function replaceProfilePictures() {
    // Select all image elements with the specific class names
    const profilePictures = document.querySelectorAll('.EntityPhoto-circle-0, .EntityPhoto-circle-1, .EntityPhoto-circle-2, .EntityPhoto-circle-3, .EntityPhoto-circle-3-ghost-person, .update-components-actor__avatar-image');
  
    profilePictures.forEach(img => {
      // Replace the src attribute of each img element
      img.src = replacementImageUrl;
    });
  }
  

replaceProfilePictures();

//Replace new profile pictures dynamically
const observer = new MutationObserver(replaceProfilePictures);
observer.observe(document.body, { childList: true, subtree: true });
